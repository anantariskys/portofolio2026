"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  const footerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-white text-black py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        <div ref={textRef}>
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.8]">
            LET'S <br/> CONNECT
          </h2>
   
        </div>

        <div className="flex flex-col gap-4 text-sm font-mono uppercase tracking-widest text-right">
            <a href="https://www.linkedin.com/in/anantariskys/" className="hover:line-through">LinkedIn</a>
            <a href="https://github.com/anantariskys" className="hover:line-through">GitHub</a>
            <a href="https://www.instagram.com/riskykun_/" className="hover:line-through">Instagram</a>
            <p className="mt-8 text-gray-400">© 2026 Ananta Risky Susanto</p>
        </div>

      </div>
      
     
    </footer>
  );
}
