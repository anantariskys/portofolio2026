import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import ScrollSequence from "@/components/scroll-sequence";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <ScrollSequence />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
