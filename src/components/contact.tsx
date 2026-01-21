/* eslint-disable */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {
  const sectionRef = useRef(null);
  const smokeRef1 = useRef(null);
  const smokeRef2 = useRef(null);
  const smokeRef3 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
        // Content Animation
        gsap.from(".contact-anim", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            },
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Smoke Parallax Animation
        gsap.to(smokeRef1.current, {
            y: -150,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
            }
        });

        gsap.to(smokeRef2.current, {
            y: -100,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 2,
            }
        });

        gsap.to(smokeRef3.current, {
            y: -200,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            }
        });

    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="min-h-[70vh] relative overflow-hidden bg-black text-white px-6 flex flex-col items-center justify-center text-center">
      
      {/* Smoke Effects */}
      <div ref={smokeRef1} className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div ref={smokeRef2} className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-zinc-700/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div ref={smokeRef3} className="absolute top-0 right-0 w-[400px] h-[400px] bg-gray-800/20 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl">
        <h2 className="contact-anim text-5xl md:text-8xl font-bold mb-8 tracking-tighter">
            Let's build <br/> something together.
        </h2>
        <p className="contact-anim text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
          If you’re interested in working together or discussing a project, feel free to reach out. I'm always open to new ideas.
        </p>
        
        <div className="contact-anim">
            <a 
                href="https://wa.me/6285608675771" // Replace with actual number if provided, else placeholder
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-lg font-bold hover:bg-gray-200 transition-all duration-300 hover:scale-105 group"
            >
                <span>Start a Project</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
            <p className="mt-4 text-sm text-gray-500">
                Or email me at <a href="mailto:anantariskysusanto250703@gmail.com" className="text-gray-300 hover:underline">anantariskysusanto250703@gmail.com</a>
            </p>
        </div>
      </div>
    </section>
  );
}
