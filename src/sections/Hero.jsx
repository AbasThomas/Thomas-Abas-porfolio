import HeroText from "../components/HeroText";
import { useMediaQuery } from "react-responsive";
import { Suspense, useState, useCallback } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  // Memoized hover handlers
  const handleHoverStart = useCallback(() => setIsImageHovered(true), []);
  const handleHoverEnd = useCallback(() => setIsImageHovered(false), []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, duration: 0.8 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 200 }
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex items-center justify-center min-h-screen overflow-hidden py-20"
    >
      {/* Dynamic Interactive Spotlight */}
      {!isMobile && (
        <motion.div
          animate={{
            x: mousePos.x - 400,
            y: mousePos.y - 400,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 100, mass: 0.5 }}
          className="absolute w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0 opacity-50"
        />
      )}

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Column */}
          <div className="flex flex-col space-y-8 lg:space-y-10">
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="flex">
              <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">Available for Hire</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <HeroText />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-white text-black font-black uppercase tracking-wider text-xs rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Selected Works</span>
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 group-hover:text-white transition-colors ml-2 inline-block">→</span>
              </a>

              <button
                onClick={() => {
                  navigator.clipboard.writeText("your.email@example.com");
                  alert("Email copied!");
                }}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-wider text-xs rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all hover:border-white/20 active:scale-95"
              >
                Copy Email
              </button>
            </motion.div>

            {/* Micro Stats */}
            <motion.div variants={itemVariants} className="flex items-center gap-8 pt-6 border-t border-white/5">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">15+</span>
                <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">Projects Built</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">5+</span>
                <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">Tech Stack</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">2+</span>
                <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">Years Exp</span>
              </div>
            </motion.div>
          </div>

          {/* Profile Column */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <div className="relative transform-gpu">
              {/* Profile Image with 3D Effect */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
                className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-[3rem] p-4 border border-white/20 bg-white/[0.03] backdrop-blur-xl group overflow-hidden shadow-2xl"
              >
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                  <img
                    src="/assets/my_image.jpeg"
                    alt="Thomas Abas"
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Shine Streak */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>

              {/* Floating Glass Tags */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [5, 10, 5],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 z-20 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl hover:bg-white/20 transition-colors pointer-events-none hidden md:block"
              >
                <span className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" /> React Expert
                </span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [-5, -10, -5],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-10 -left-10 z-20 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl hover:bg-white/20 transition-colors pointer-events-none hidden md:block"
              >
                <span className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" /> Spring Boot
                </span>
              </motion.div>

              <motion.div
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-14 z-20 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl hover:bg-white/20 transition-colors pointer-events-none hidden md:block"
              >
                <span className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" /> AI / ML
                </span>
              </motion.div>

              {/* Decorative Rings */}
              <div className="absolute inset-0 -m-8 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 -m-14 border border-white/[0.02] rounded-full animate-[spin_30s_linear_infinite_reverse]" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-600 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;