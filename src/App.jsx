import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import SrollGridBackground from "./components/AnimatedGridBackground";
import CustomCursor from "./components/CustomCursor";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";

const App = () => {
// const rafRef = useRef(null);
//   const lenisRef = useRef(null);

//   useEffect(() => {
//     lenisRef.current = new Lenis({
//       smoothWheel: true,
//       lerp: 0.08,
//     });

//     const animate = (time) => {
//       lenisRef.current.raf(time);
//       rafRef.current = requestAnimationFrame(animate);
//     };

//     rafRef.current = requestAnimationFrame(animate);
//     lenisRef.current.on("scroll", () => {
//       document.querySelector(".cursor").style.opacity = 0.3;
//       clearTimeout(timeout);
//       timeout = setTimeout(() => {
//         document.querySelector(".cursor").style.opacity = 1;
//       }, 100);
//     });
//     return () => {
//       cancelAnimationFrame(rafRef.current);
//       lenisRef.current = null;
//     };
//   }, []);

  return (

    <div className="container mx-auto max-w-7xl">
            {/* <CustomCursor /> */}
      <SrollGridBackground/> 
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      {/* <Testimonial /> */}
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
