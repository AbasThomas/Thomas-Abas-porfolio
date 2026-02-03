import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Card from "../components/Card";
import NigeriaTime from "../components/NigeriaTime";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid4Ref = useRef(null);
  const grid2Container = useRef();

  // Parallax Effect for CTA Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (event) => {
    const rect = grid4Ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative w-full py-24 overflow-hidden" id="about">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-600/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Personal Background</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic"
          >
            About Me<span className="text-blue-500">.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:auto-rows-[22rem]">
          {/* Grid 1: Bio (The Architect) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-2 relative p-10 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl shadow-2xl overflow-hidden group flex flex-col justify-end"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#02030d] via-[#02030d]/40 to-transparent z-10" />
            <img
              src="assets/coding-pov.png"
              className="absolute scale-[1.3] md:scale-[1.8] right-0 top-0 grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-[1.85] transition-all duration-1000 opacity-40 md:opacity-60"
              alt="Coding POV"
            />

            <div className="relative z-20 space-y-6 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[8px] font-black text-blue-400 uppercase tracking-widest">Available for Remote</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-none">
                Software Architect <br /> & Engineer<span className="text-blue-500">.</span>
              </h3>
              <p className="text-lg font-medium text-gray-400 leading-relaxed">
                I'm Thomas Abas, a developer driven by the pursuit of engineering excellence. I specialize in crafting secure, high-performance systems that bridge the gap between complex business logic and intuitive user experiences.
              </p>
            </div>
          </motion.div>

          {/* Grid 2: Philosophy (Core Values) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 md:row-span-1 relative p-8 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl shadow-2xl overflow-hidden group flex flex-col items-center justify-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-4 group-hover:text-blue-400 transition-colors">Philosophy</span>
            <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter">Code is Art, <br /> Engineering is <br /> discipline<span className="text-blue-500">.</span></h4>
          </motion.div>

          {/* Grid 3: Location (Real-time) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 md:row-span-1 relative p-8 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl shadow-2xl overflow-hidden group flex flex-col justify-center items-center text-center"
          >
            <NigeriaTime />
          </motion.div>

          {/* Grid 5: Tech Stack (Expertise) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 md:row-span-1 relative p-10 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl shadow-2xl overflow-hidden group flex flex-col md:flex-row items-center gap-12"
          >
            <div className="relative z-10 md:w-1/2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Core Stack</span>
              <h4 className="text-3xl font-black text-white uppercase tracking-tight mt-2 mb-4">Ecosystem Specialist</h4>
              <p className="text-sm font-medium text-gray-500 leading-relaxed">
                Expertise in modern full-stack development, with a deep focus on Java/Spring ecosystems and reactive frontend architectures.
              </p>
            </div>
            <div className="md:w-1/2 h-full flex items-center justify-center md:scale-130 transition-transform duration-700 group-hover:scale-135">
              <Frameworks />
            </div>
          </motion.div>

          {/* Grid 4: CTA (The Magnetic Card) */}
          <motion.div
            ref={grid4Ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 md:row-span-1 relative p-10 rounded-[3rem] border border-blue-500/30 bg-blue-600/5 backdrop-blur-3xl shadow-2xl shadow-blue-900/20 overflow-hidden group flex flex-col items-center justify-between text-center"
          >
            {/* 3D Content Container */}
            <div style={{ transform: "translateZ(50px)" }} className="w-full space-y-6">
              <h4 className="text-4xl font-black text-white uppercase tracking-tighter italic leading-none drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                Let's Build <br /> Together<span className="text-blue-500">?</span>
              </h4>
              <p className="text-[10px] font-bold text-blue-400/60 uppercase tracking-widest">Available for new opportunities</p>
            </div>

            <div style={{ transform: "translateZ(30px)" }} className="w-full">
              <CopyEmailButton />
            </div>

            {/* Background Texture & Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent)] opacity-100 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500/20 via-transparent to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
