"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skills = [
  {
    category: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "PHP",
      "HTML",
      "CSS",
      "SQL",
      "Kotlin",
      "Dart",
    ],
  },
  {
    category: "Frontend Frameworks",
    items: [
      "Next.js",
      "React",
      "Remix",
      "Tailwind CSS",
      "Flutter",
      "Expo",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    category: "Backend & Database",
    items: [
      "Laravel",
      "CodeIgniter",
      "Supabase",
      "Firebase",
      "MySQL",
      "PostgreSQL",
      "REST API",
      "Prisma",
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      "Git",
      "Docker",
      "Figma",
      "Postman",
      "Jest",
      "TanStack Query",
      "Zustand",
      "Github Action",
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".skill-category", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen bg-black text-white px-6 py-24 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-16 text-center">
            Technical Proficiency
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {skills.map((group, i) => (
            <div
              key={i}
              className="skill-category group"
            >
              <h3 className="text-2xl font-light mb-8 text-white border-b border-zinc-800 pb-4 group-hover:border-zinc-500 transition-colors duration-500">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((skill, j) => (
                  <li
                    key={j}
                    className="text-zinc-500 text-lg flex items-center group/item cursor-default transition-all duration-300 hover:text-white"
                  >
                    <span className="w-0 overflow-hidden group-hover/item:w-4 transition-all duration-300 text-white font-mono opacity-0 group-hover/item:opacity-100">/</span>
                    <span className="group-hover/item:translate-x-1 transition-transform duration-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
