import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Resume from "./sections/Resume";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Skills from "./sections/Skills";
import Socials from "./sections/Socials";
import Contact from "./sections/Contact";
import ShipStatement from "./sections/ShipStatement";
import Footer from './sections/Footer';
import ScrollGridBackground from "./components/AnimatedGridBackground";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";

    const storedTheme = window.localStorage.getItem("portfolio-theme");
    if (storedTheme === "light" || storedTheme === "dark") return storedTheme;

    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("theme-light", theme === "light");
    document.documentElement.classList.toggle("theme-dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.2,
      infinite: false,
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    const scrollToTarget = (target) => {
      if (!target || target === "#") {
        lenis.scrollTo(0);
        return;
      }

      const element = document.querySelector(target);
      if (element) {
        lenis.scrollTo(element, { offset: -24 });
      }
    };

    window.portfolioScrollTo = scrollToTarget;

    const handleAnchorClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;

      const target = anchor.getAttribute("href");
      if (!target) return;

      event.preventDefault();
      scrollToTarget(target);
      window.history.pushState(null, "", target === "#" ? window.location.pathname : target);
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      delete window.portfolioScrollTo;
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <CustomCursor />
      <ScrollGridBackground />
      <Navbar theme={theme} onToggleTheme={() => setTheme((value) => (value === "dark" ? "light" : "dark"))} />
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Skills />
        <Experiences />
        <Socials />
        <Contact />
        <ShipStatement />
      </main>
      <Footer />
    </div>
  );
};

export default App;
