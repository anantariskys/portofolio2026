/* eslint-disable */
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import Link from "next/link";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let lastScroll = 0;
    
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (!navRef.current) return;

      if (currentScroll > lastScroll && currentScroll > 100) {
        gsap.to(navRef.current, { y: -100, duration: 0.3, ease: "power2.out" });
      } else {
        gsap.to(navRef.current, { y: 0, duration: 0.3, ease: "power2.out" });
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav 
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 px-6 py-6 text-white transition-transform duration-300 bg-gradient-to-b from-black/70 to-transparent"
      >
        <div className="flex justify-between items-center max-w-[90%] mx-auto">
          <Link href="/" className="text-xl font-bold tracking-tighter uppercase group">
            <span className="inline-block transition-transform group-hover:-translate-y-1">A</span>
            <span className="inline-block transition-transform group-hover:translate-y-1">N</span>
            <span className="inline-block transition-transform group-hover:-translate-y-1">A</span>
            <span className="inline-block transition-transform group-hover:translate-y-1">N</span>
            <span className="inline-block transition-transform group-hover:-translate-y-1">T</span>
            <span className="inline-block transition-transform group-hover:translate-y-1">A</span>
            <span className="inline-block transition-transform group-hover:-translate-y-1">.</span>
          </Link>

          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <button 
                key={item}
                onClick={() => {
                  const el = document.getElementById(item.toLowerCase());
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative hover:text-gray-400 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-white after:transition-all hover:after:w-full"
              >
                {item}
              </button>
            ))}
          </div>

          <button 
            className="md:hidden text-sm uppercase tracking-widest"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Portal */}
      {mounted && isOpen && createPortal(
        <div className="fixed inset-0 z-[60] bg-black flex items-center justify-center">
            <button 
                className="absolute top-6 right-6 text-white text-sm uppercase tracking-widest z-[70]"
                onClick={() => setIsOpen(false)}
            >
                Close
            </button>
            <div className="flex flex-col gap-8 text-center">
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                <button 
                    key={item}
                    onClick={() => {
                        setIsOpen(false);
                        const el = document.getElementById(item.toLowerCase());
                        el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-4xl font-bold uppercase text-white hover:text-gray-500 transition-colors"
                >
                    {item}
                </button>
                ))}
            </div>
        </div>,
        document.body
      )}
    </>
  );
}
