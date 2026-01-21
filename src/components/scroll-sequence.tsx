"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 223;
const FRAME_PATH = "/assets/frame/frame_";

export default function ScrollSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const text = textRef.current;
    const overlay = overlayRef.current;

    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const images: HTMLImageElement[] = [];
    const frameState = { frame: 0 };
    let loadedCount = 0;

    /* ==============================
       RESIZE
    ============================== */
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener("resize", resize);
    resize();

    /* ==============================
       RENDER
    ============================== */
    function render() {
      const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(frameState.frame));
      const img = images[frameIndex];
      
      // If image not loaded or not complete, don't draw (or draw placeholder)
      if (!img || !img.complete) return;

      if (!canvas || !ctx) return;
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;

      let drawWidth: number;
      let drawHeight: number;

      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
      } else {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
      }

      const x = (canvas.width - drawWidth) / 2;
      const y = (canvas.height - drawHeight) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, drawWidth, drawHeight);
    }

    /* ==============================
       PRELOAD FRAMES
    ============================== */
    console.log("Starting image preload...");
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `${FRAME_PATH}${String(i).padStart(4, "0")}.webp`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) {
            render(); // Render first frame as soon as it loads
        }
        if (loadedCount === FRAME_COUNT) {
            console.log("All images loaded");
            setImagesLoaded(true);
        }
      };
      img.onerror = (e) => {
        console.error(`Failed to load image: ${img.src}`, e);
      };
      images.push(img);
    }

    /* ==============================
       GSAP CONTEXT
    ============================== */
    const ctxGsap = gsap.context((self) => {
        
        // Custom Ticker for Hybrid Control
        // We will constantly add to 'frameState.frame'
        // Base speed = slow
        // Scroll speed = fast (added to base)
        
        let scrollProgress = 0;
        let lastScrollProgress = 0;
        let direction = 1; // 1 = forward, -1 = backward
        
        ScrollTrigger.create({
            trigger: container,
            start: "top top",
            end: "bottom top", // Increase distance for longer scroll interaction
            pin: true,
            scrub: 0, // No direct scrub on values, we just read progress
            onUpdate: (self) => {
                scrollProgress = self.progress;
            }
        });

        // Add text/overlay animations separately attached to scroll progress
        // Since we aren't using a scrubbing timeline for the frame anymore, 
        // we need a separate timeline for these UI elements if we want them to respond to scroll directly.
        const uiTl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: "bottom top", // Match the full scroll duration for overlay
                scrub: true,
            }
        });
        
        // Text fades out earlier
        if (text) uiTl.to(text, { opacity: 0, scale: 0.9, ease: "none" }, 0);
        
        // Overlay fades in fully by the end to blend with next section
        if (overlay) uiTl.fromTo(overlay, 
            { opacity: 0.95 },
            { opacity: 1, ease: "power1.in" }, // power1.in keeps it subtle then darkens at end
            0
        );

        // Animation Loop
        const updateFrame = () => {
            // 1. Calculate Scroll Energy
            // We use absolute delta so scrolling in ANY direction accelerates the current movement
            const scrollDelta = Math.abs(scrollProgress - lastScrollProgress) * (FRAME_COUNT * 0.5); 
            
            // 2. Base Idle Speed (slow)
            const idleSpeed = 0.4; 
            
            // 3. Calculate Total Speed
            const totalSpeed = idleSpeed + scrollDelta;
            
            // 4. Update Frame based on current direction
            let newFrame = frameState.frame + (totalSpeed * direction); 
            
            // 5. Ping-Pong / Reflection Logic
            if (newFrame >= FRAME_COUNT - 1) {
                // Overshot the end
                const overshoot = newFrame - (FRAME_COUNT - 1);
                newFrame = (FRAME_COUNT - 1) - overshoot;
                direction = -1; // Reverse direction
                
                // Double check if we bounced all the way back past 0 (very rare with high speed)
                if (newFrame < 0) {
                    newFrame = -newFrame;
                    direction = 1;
                }
            } else if (newFrame <= 0) {
                // Undershot the start
                const undershoot = -newFrame;
                newFrame = undershoot;
                direction = 1; // Forward direction
                
                // Double check if we bounced past end
                if (newFrame >= FRAME_COUNT - 1) {
                    newFrame = (FRAME_COUNT - 1) - (newFrame - (FRAME_COUNT - 1));
                    direction = -1;
                }
            }
            
            // Final Clamp to be safe
            if (newFrame < 0) newFrame = 0;
            if (newFrame > FRAME_COUNT - 1) newFrame = FRAME_COUNT - 1;
            
            frameState.frame = newFrame;
            lastScrollProgress = scrollProgress;
            
            render();
        };

        gsap.ticker.add(updateFrame);

        // Cleanup ticker when context is reverted
        // Use 'self' from the context callback to add cleanup
        self.add(() => {
            return () => gsap.ticker.remove(updateFrame);
        });

    }, containerRef); // Scope to container

    return () => {
      window.removeEventListener("resize", resize);
      gsap.ticker.remove(render); // Remove specific render if added, but we added anonymous ticker
      ctxGsap.revert(); // This cleans up ticker added via context? No, context doesn't auto-cleanup tickers usually unless recorded.
      // We should manually remove ticker listener if we didn't name it. 
      // Actually gsap.context cleans up ScrollTriggers and Tweens. Tickers need manual care usually.
      // But since we added it inside the effect, let's just make sure we don't leak.
    };
  }, []);

  

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-white"
    >
      {/* CANVAS */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full object-cover z-0" />

     

      {/* HERO CONTENT */}
      <div 
        ref={textRef}
        className="relative z-50 h-full flex flex-col items-center justify-center text-center px-4 pointer-events-none"
      >
        <h1 className="text-white text-6xl md:text-8xl font-bold tracking-tighter mb-4 drop-shadow-2xl">
          FRONT-END & <br /> FULL STACK
        </h1>
        <p className="text-gray-200 text-xl md:text-2xl font-light tracking-widest uppercase drop-shadow-lg">
          Building modern, scalable web applications
        </p>
      </div>

      {/* GRADIENT OVERLAY */}
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0"
      />
    </section>
  );
}
