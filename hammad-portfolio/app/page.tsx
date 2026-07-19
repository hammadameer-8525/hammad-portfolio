import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import PreloaderClient from "@/components/PreloaderClient";
import Terminal from "@/components/Terminal";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Certificates from "@/components/sections/Certificates";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <PreloaderClient />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <Terminal />
    </>
  );
}
