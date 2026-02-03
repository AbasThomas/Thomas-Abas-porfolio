import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "projects", "experience", "contact"];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(`#${sectionId}`);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
      <nav className="mx-auto max-w-7xl px-6 md:px-12">
        <div className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${scrolled ? 'bg-[#02030d]/80 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-transparent'}`}>

          {/* Logo - Left column */}
          <div className="flex-1 flex justify-start">
            <a href="#home" className="flex items-center gap-2 group">
              <span className="text-xl font-black text-white uppercase tracking-tighter">
                Thomas<span className="text-blue-500 group-hover:animate-pulse transition-all">.</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Center column */}
          <div className="hidden md:flex flex-none items-center gap-1 p-1 bg-white/[0.03] rounded-xl border border-white/5 mx-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${activeLink === link.href ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
                onClick={(e) => {
                  setActiveLink(link.href);
                }}
              >
                <span className="relative z-10">{link.name}</span>
                {activeLink === link.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-600/10 rounded-lg border border-blue-500/20 z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle - Right column */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="hidden md:block">
              <a
                href="#contact"
                className="px-6 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all hover:scale-105 active:scale-95 hover:bg-blue-600 hover:text-white"
              >
                Hire Me
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 relative z-[110]"
            >
              <motion.div
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white rounded-full"
              />
              <motion.div
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-white rounded-full"
              />
              <motion.div
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white rounded-full"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[105] md:hidden"
          >
            <div className="absolute inset-0 bg-[#02030d]/95 backdrop-blur-2xl" onClick={() => setIsOpen(false)} />

            <div className="relative h-full flex flex-col items-center justify-center p-8">
              <div className="flex flex-col gap-6 items-center">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-black text-white hover:text-blue-500 transition-all uppercase tracking-tighter italic"
                  >
                    {link.name}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: 0.5 }}
                  className="mt-10"
                >
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="px-12 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-2xl shadow-blue-600/20"
                  >
                    Start a Project
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
