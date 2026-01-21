"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Image Animation
      gsap.from(".about-image", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Word by word reveal
      const words = document.querySelectorAll(".word-reveal");
      gsap.from(words, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
        opacity: 0.1,
        y: 10,
        stagger: 0.05,
        duration: 1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="word-reveal inline-block mr-1.5 opacity-100">
        {word}
      </span>
    ));
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-24"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row gap-12 md:gap-20 items-center md:items-start">
        
        {/* Image Section - More Compact & Unique */}
        <div className="about-image relative w-full max-w-[300px] aspect-[3/4] md:mt-12">
            <div className="absolute inset-0 bg-zinc-800 rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 ease-in-out">
                
                  <Image src="/assets/me.jpg" alt="Ananta Risky Susanto" fill className="object-cover" />
               
              
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-6 -left-6 w-full h-full border border-zinc-700 rounded-sm"></div>
        </div>

        {/* Text Section - Better Typography */}
        <div ref={textRef} className="flex-1 text-left pt-0 md:pt-0">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500 mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-zinc-500"></span>
                About Me
            </h2>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
                Crafting digital experiences with <span className="text-zinc-500">precision</span> & <span className="text-zinc-500">passion.</span>
            </h1>
            
            <div className="text-lg md:text-xl font-light leading-relaxed text-zinc-300 space-y-6 max-w-2xl">
                <p>
                    {splitText("I am Ananta Risky Susanto, a Full Stack Developer based in Malang. I don't just write code; I build solutions that bridge the gap between complex problems and intuitive user experiences.")}
                </p>
                <p>
                    {splitText("My work is grounded in technical expertise and driven by a desire to innovate. Whether it's a sleek frontend or a robust backend, I ensure every detail serves a purpose.")}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
