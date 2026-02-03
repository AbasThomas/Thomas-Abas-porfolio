import React from "react";
import Navbar from "./sections/navbar";
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

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <ScrollGridBackground />
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <About />
      <Process />
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experiences />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
