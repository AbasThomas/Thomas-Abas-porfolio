import React, { useState, useRef, useEffect } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const carouselRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);

  // Scroll to specific index
  const scrollTo = (index) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.firstChild.offsetWidth + 40; // card + gap
    carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIdx(index);
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.firstChild.offsetWidth + 40;
    const newIdx = Math.round(scrollLeft / cardWidth);
    if (newIdx !== activeIdx) setActiveIdx(newIdx);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-transparent overflow-hidden" id="projects">
      {/* Simplified transparent background */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter transition-all duration-300">
              Selected <span className="text-blue-600">Works</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg lowercase font-medium tracking-wide">
              A collection of digital experiences built with precision and passion.
            </p>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo(activeIdx - 1)}
              disabled={activeIdx === 0}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all disabled:opacity-20 disabled:cursor-not-allowed"
            >
              ←
            </button>
            <button
              onClick={() => scrollTo(activeIdx + 1)}
              disabled={activeIdx === myProjects.length - 1}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all disabled:opacity-20 disabled:cursor-not-allowed"
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-10 overflow-x-auto overflow-y-visible px-10 md:px-24 py-10 no-scrollbar snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {myProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="snap-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Project {...project} />
              </motion.div>
            ))}
            {/* End spacer for perfect centering of the last project */}
            <div className="shrink-0 w-1 md:w-32" />
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center items-center gap-3 mt-16">
          {myProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-1.5 transition-all duration-500 rounded-full ${activeIdx === index ? 'w-12 bg-blue-600' : 'w-2 bg-white/20 hover:bg-white/40'}`}
            />
          ))}
          <div className="ml-6 text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
            {activeIdx + 1} / {myProjects.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
