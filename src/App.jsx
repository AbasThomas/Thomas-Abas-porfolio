import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Skills from "./sections/Skills";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import SrollGridBackground from "./components/AnimatedGridBackground";
import CustomCursor from "./components/CustomCursor";
// import Lenis from "@studio-freight/lenis"; // Commented or removed if not used
// import { useEffect, useRef } from "react";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      {/* <CustomCursor /> */}
      <SrollGridBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experiences />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
