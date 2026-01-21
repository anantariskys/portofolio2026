"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const projects = [
  {
    title: "Dentine",
    category: "Full Stack Web Developer",
    description: "An official competition website for an international dentistry competition, providing participant registration, submission management, and event information.",
    stack: "Next.js, Laravel, Tailwind CSS, MySQL, TanStack Query",
    year: "2026",
    link: "https://dentine-fkgunair.com/",
    image: "/assets/frame/frame_0073.webp", 
  },
  {
    title: "ReelScout",
    category: "Frontend Web Developer",
    description: "ReelScout is a web application that showcases a variety of movies by fetching data from the TMDB API. This project is built using modern web technologies, offering an intuitive and user-friendly interface for browsing and exploring movies.",
    stack: "React Js, Tailwind CSS, Axios",
    year: "2024",
    link: "https://reelscout.vercel.app/",
    image: "/assets/frame/frame_0088.webp",
  },
  {
    title: "VehiTrack",
    category: "Full Stack Web Developer",
    description: "VehiTrack is an application designed to streamline the management and monitoring of vehicles used in the operations of nickel mining companies. It provides employees with a convenient way to request vehicles, which are then approved by their supervisors through a hierarchical approval process. Additionally, the application features a dashboard for tracking vehicle usage and generates booking reports in Excel format.",
    stack: "React Js, Tailwind CSS, Laravel, Inertia Js, Zustand",
    year: "2024",
    link: "",
    image: "/assets/frame/frame_0094.webp",
  },
  {
    title: "TriviaTales",
    category: "Frontend Web Developer",
    description: "Trivia Tales is an interactive trivia quiz application that offers a wide range of engaging questions from various categories. The questions are dynamically fetched from the Open Trivia Database (OpenTDB) API, ensuring users receive a fresh and unique experience every time they play. This application aims to provide a fun and educational way for users to test their knowledge across different topics.",
    stack: "React Js, Tailwind CSS, Axios, Zustand",
    year: "2024",
    link: "https://triviatales.vercel.app/",
    image: "/assets/frame/frame_0100.webp",
  },
  {
    title: "Gen-Free",
    category: "Full Stack Web Developer",
    description: "A digital platform that facilitates political discussions and aspirations across various groups, especially Gen-Z, aiming to enhance political participation among young people who are critical, practical, and strategic.",
    stack: "Remix Js, Tailwind CSS, Supabase",
    year: "2024",
    link: "https://gen-free.vercel.app/",
    image: "/assets/frame/frame_0106.webp",
  },
  {
    title: "KBMDSI 2024",
    category: "Full Stack Web Developer",
    description: "A responsive and interactive website representing the KBMDSI organization for the 2024 period. The website showcases detailed information about the organization itself, serving as a hub for academic resources and articles. Designed to be user-friendly and engaging, it attracts numerous students from the department and proudly holds the position as the second-highest trafficked website within the faculty.",
    stack: "Laravel, Inertia Js, React Js, Tailwind CSS, Framer Motion",
    year: "2024",
    link: "https://kbmdsi.ub.ac.id/",
    image: "/assets/frame/frame_0112.webp",
  },
  {
    title: "EM UB 2024",
    category: "Frontend Web Developer",
    description: "A responsive, elegant, and interactive website representing the EM UB organization for the 2024 period. Serving as a branding platform, the website provides comprehensive information about the organization and features an information portal, reflecting the professionalism and values of EM UB.",
    stack: "React Js, Tailwind CSS, Framer Motion, Axios",
    year: "2024",
    link: "https://em.ub.ac.id/",
    image: "/assets/frame/frame_0106.webp", 
  },
  {
    title: "Kampung Budaya 2024",
    category: "Full Stack Web Developer",
    description: "A dedicated website for Kampung Budaya, the annual event organized by EM UB. Kampung Budaya serves as the largest stage for regional forums (Forda) and cultural communities to showcase their talents and achieve recognition. This website functions as a platform for event registration and branding, providing comprehensive information about the event, including schedules, highlights, and participant details.",
    stack: "Laravel, Inertia Js, React Js, Tailwind CSS, Framer Motion",
    year: "2024",
    link: "https://kampungbudaya.ub.ac.id/",
    image: "/assets/frame/frame_0118.webp",
  },
  {
    title: "Raja Brawijaya 2024",
    category: "Full Stack Web Developer",
    description: "A responsive and interactive website for Raja Brawijaya, the annual event aimed at facilitating new students of Universitas Brawijaya to learn about campus life. Raja Brawijaya comprises two main series: PKKMB (Campus Life Introduction Program) and OH (Organization Expo). This website provides comprehensive information to introduce new students to the university while integrating Raja Apps, a feature designed for assignments and activities specifically for new students.",
    stack: "Laravel, Inertia Js, React Js, Tailwind CSS, Framer Motion",
    year: "2024",
    link: "https://rajabrawijaya.ub.ac.id/",
    image: "/assets/frame/frame_0118.webp",
  },
  {
    title: "TweetNest",
    category: "Full Stack Web Developer",
    description: "A social media platform inspired by X, offering a sleek and elegant user interface designed to enhance the user experience. The platform includes robust features such as secure user authentication, the ability to post tweets, like and interact with posts, and engage in discussions through a commenting system. Built to encourage meaningful interactions and foster an active user community.",
    stack: "Remix Js, Tailwind CSS, Prisma, Firebase",
    year: "2024",
    link: "https://github.com/anantariskys/twitterClone",
    image: "/assets/frame/frame_0106.webp",
  },
  {
    title: "Balance Box",
    category: "Full Stack Web Developer",
    description: "A platform that offers food ordering features complete with a shopping cart functionality. The platform provides detailed information for each food item, including its nutritional content, ensuring transparency and user convenience.",
    stack: "React Js, Tailwind CSS, Laravel, Inertia Js",
    year: "2023",
    link: "",
    image: "/assets/frame/frame_0088.webp", // Placeholder
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = document.querySelectorAll(".project-item");
      
      items.forEach((item) => {
        gsap.fromTo(item, 
            { opacity: 0.5, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    end: "top 50%",
                    scrub: true,
                }
            }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-[90%] mx-auto">
        <div className="flex justify-between items-end mb-24 border-b border-gray-800 pb-8">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">Featured Projects</h2>
            <span className="text-gray-500 font-mono hidden md:block">({String(projects.length).padStart(2, '0')})</span>
        </div>
        
        <div className="space-y-0">
          {projects.map((project, i) => (
            <div key={i} className="project-item group relative border-b border-gray-800 py-16 cursor-pointer overflow-hidden transition-colors hover:bg-white/5">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex flex-col md:flex-row md:items-start justify-between relative z-10 px-4 gap-8">
                     <div className="flex-1">
                         <h3 className="text-5xl md:text-7xl font-bold text-gray-400 group-hover:text-white transition-colors duration-500 mb-4">
                            {project.title}
                         </h3>
                         <p className="text-gray-500 max-w-xl text-lg mb-4">{project.description}</p>
                         <p className="text-sm font-mono text-gray-600">{project.stack}</p>
                     </div>
                     <div className="flex gap-8 text-sm font-mono text-gray-500 mt-4 md:mt-0 whitespace-nowrap">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                     </div>
                  </div>
              </a>
              
              {/* Hover Image Reveal Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover grayscale"
                  />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
