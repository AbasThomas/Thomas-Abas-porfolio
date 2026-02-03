import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Process from "./sections/Process";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import ScrollGridBackground from "./components/AnimatedGridBackground";
import Chatbot from "./components/Chatbot";
import Terminal from "./components/Terminal";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl relative">
      <Terminal />
      <ScrollGridBackground />
      <Navbar />
      <section id="home" className="relative">
        <Hero />
      </section>
      <About />
      <Process />
      <section id="projects" className="relative">
        <Projects />
      </section>
      <section id="skills" className="relative">
        <Skills />
      </section>
      <section id="experience" className="relative">
        <Experiences />
      </section>
      <section id="contact" className="relative">
        <Contact />
      </section>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
