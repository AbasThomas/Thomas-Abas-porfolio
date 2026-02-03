import React, { useState, useRef, useEffect } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Projects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const x = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 overflow-hidden"
      id="projects"
    >
      {/* Background Decorative Text */}
      <motion.div
        style={{ x }}
        className="absolute top-20 left-0 whitespace-nowrap pointer-events-none opacity-[0.02] select-none"
      >
        <span className="text-[20rem] font-black uppercase italic tracking-tighter text-white">
          Selected Works Selected Works Selected Works
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-start mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Portfolio</span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-8">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter italic"
              >
                Selected <br /> <span className="text-blue-600">Works<span className="text-white">.</span></span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm font-bold text-gray-500 uppercase tracking-widest max-w-xs leading-relaxed"
            >
              A curation of digital products built with high-performance engineering.
            </motion.p>
          </div>
        </div>

        {/* Vertical Interactive Stack */}
        <div className="flex flex-col gap-32">
          {myProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Project {...project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Section Link */}
      <div className="mt-32 flex justify-center">
        <motion.a
          href="https://github.com/ThomasAbas"
          target="_blank"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="group flex flex-col items-center gap-4"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 group-hover:text-blue-500 transition-colors">See more on GitHub</span>
          <div className="w-12 h-[1px] bg-white/10 group-hover:w-24 group-hover:bg-blue-600 transition-all duration-500" />
        </motion.a>
      </div>
    </section>
  );
};

export default Projects;
