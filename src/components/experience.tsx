"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experience = [
  {
    year: "March 2025 – Present",
    role: "Full Stack Web Developer",
    company: "80&Company",
    location: "Kyoto, Japan",
    description: "Led the development of scalable web applications, ensuring responsiveness and optimal performance across devices. Collaborated closely with UI/UX designers and backend engineers to implement user-centric features based on client requirements. Integrated RESTful APIs and third-party services to enhance application functionality and interoperability. Conducted thorough code reviews, implemented best practices, and maintained high standards of code quality and maintainability. Participated in agile sprints, contributing to planning, estimation, and continuous improvement processes to meet tight deadlines and deliver successful products.",
  },
  {
    year: "June 2025 – December 2025",
    role: "Front End Developer Internship",
    company: "Gamatecha Solusi Nusantara",
    location: "Malang, East Java",
    description: "Translated UI/UX designs into responsive and functional front-end code using Next.js and Mantine. Integrated RESTful APIs to ensure seamless communication between the front-end and back-end systems. Utilized TanStack Table and TanStack Query for efficient data management and state handling. Optimized code structure and visual components to improve performance, maintainability, and user experience.",
  },
  {
    year: "April 2025 – June 2025",
    role: "Full Stack Web Developer",
    company: "Davis Materialworks",
    location: "Singapore",
    description: "Resolved UI implementation issues to ensure accurate and responsive design slicing. Refactored codebase to improve performance, readability, and maintainability. Collaborated with cross-functional teams to develop and enhance both front-end and back-end features.",
  },
  {
    year: "January 2025 – June 2025",
    role: "Full Stack Web Developer Internship",
    company: "Sekawan Media",
    location: "Malang, East Java",
    description: "Diagnosed and resolved bugs across multiple client projects to ensure smooth functionality and optimal user experience. Developed and implemented new features based on project specifications, enhancing usability and overall system performance. Designed, structured, and optimized databases to improve data integrity, scalability, and query efficiency. Refactored and optimized code to enhance maintainability, reduce load times, and improve application performance. Collaborated with cross-functional teams to analyze project requirements, propose technical solutions, and deliver high-quality web applications.",
  },
];

const education = [
  {
    period: "2022 – 2026 (Expected)",
    degree: "Bachelor of Education in Information Technology Education",
    school: "Brawijaya University",
    details: "GPA: 3.89 / 4.0",
  }
];

const organization = [
  {
    role: "Vice Head of Information Technology Publication Department",
    org: "KBMDSI",
    location: "Malang, East Java",
    period: "January 2024 – December 2024",
    description: "Supervised and evaluated the performance of IT Publication Department staff over one term, ensuring task completion and skill improvement. Successfully developed, deployed, and maintained the department's website using cPanel, ensuring responsiveness and user-friendliness. Conducted regular website maintenance and resolved bugs efficiently, maintaining optimal performance throughout the term. Mentored front-end staff, providing guidance and fostering professional growth while leading collaborative efforts to achieve project goals.",
  },
  {
    role: "Staff of Ministry of Communication and Information",
    org: "Eksekutif Mahasiswa Universitas Brawijaya",
    location: "Malang, East Java",
    period: "January 2024 – December 2024",
    description: "Oversaw the development of the EM UB website while providing guidance and mentorship to staff members. Successfully managed and launched the website maintenance program, ensuring smooth and timely implementation. Collaborated with team members to achieve project milestones, resolve challenges, and maintain the website's functionality and relevance.",
  },
  {
    role: "Head of the Field Responsible Division",
    org: "Synergy of Symphony 2023",
    location: "Malang, East Java",
    period: "September 2023 – November 2023",
    description: "Led and managed the Campus Orientation Program (OSPEK) for the Information Systems Department, ensuring smooth and successful event execution. Assigned facilitator groups, established security, and supervised staff to maintain order and efficiency. Fostered a positive and memorable experience for new students through effective coordination and communication.",
  }
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".exp-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto w-full space-y-24">
        
        {/* Experience */}
        <div>
            <h2 className="text-sm uppercase tracking-[0.5em] text-gray-400 mb-16">Experience</h2>
            <div className="relative border-l border-gray-800 ml-3 md:ml-6">
            {experience.map((item, i) => (
                <div key={i} className="exp-item mb-16 pl-8 md:pl-12 relative group cursor-pointer">
                <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-white rounded-full transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
                <span className="text-sm font-mono text-gray-500 mb-2 block">{item.year}</span>
                <h3 className="text-2xl font-bold mb-1 group-hover:translate-x-2 transition-transform duration-300">{item.role}</h3>
                <h4 className="text-lg text-gray-400 mb-2">{item.company} | {item.location}</h4>
                <p className="text-gray-500 max-w-lg group-hover:text-gray-300 transition-colors duration-300">{item.description}</p>
                </div>
            ))}
            </div>
        </div>

        {/* Education */}
        <div>
            <h2 className="text-sm uppercase tracking-[0.5em] text-gray-400 mb-16">Education</h2>
            <div className="relative border-l border-gray-800 ml-3 md:ml-6">
            {education.map((item, i) => (
                <div key={i} className="exp-item mb-16 pl-8 md:pl-12 relative group cursor-pointer">
                <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-gray-600 rounded-full transition-all duration-300 group-hover:bg-white group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
                <span className="text-sm font-mono text-gray-500 mb-2 block">{item.period}</span>
                <h3 className="text-2xl font-bold mb-1 group-hover:translate-x-2 transition-transform duration-300">{item.degree}</h3>
                <h4 className="text-lg text-gray-400 mb-2">{item.school}</h4>
                <p className="text-gray-500 max-w-lg group-hover:text-gray-300 transition-colors duration-300">{item.details}</p>
                </div>
            ))}
            </div>
        </div>

        {/* Organization */}
        <div>
            <h2 className="text-sm uppercase tracking-[0.5em] text-gray-400 mb-16">Organization</h2>
            <div className="relative border-l border-gray-800 ml-3 md:ml-6">
            {organization.map((item, i) => (
                <div key={i} className="exp-item mb-16 pl-8 md:pl-12 relative group cursor-pointer">
                <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-gray-600 rounded-full transition-all duration-300 group-hover:bg-white group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
                <h3 className="text-2xl font-bold mb-1 group-hover:translate-x-2 transition-transform duration-300">{item.role}</h3>
                <h4 className="text-lg text-gray-400 mb-2">{item.org}</h4>
                <p className="text-gray-500 max-w-lg group-hover:text-gray-300 transition-colors duration-300">{item.description}</p>
                </div>
            ))}
            </div>
        </div>

      </div>
    </section>
  );
}
