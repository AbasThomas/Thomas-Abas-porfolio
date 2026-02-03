import { useRef } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import NigeriaTime from "../components/NigeriaTime";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="relative w-full py-24 overflow-hidden" id="about">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Background</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic"
          >
            About Me<span className="text-blue-500">.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:auto-rows-[20rem]">
          {/* Grid 1: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 md:row-span-2 relative p-8 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl shadow-2xl overflow-hidden group flex flex-col justify-end"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#02030d] via-transparent to-transparent z-10" />
            <img
              src="assets/coding-pov.png"
              className="absolute scale-[1.5] md:scale-[2] -right-10 -top-10 grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-[2.1] transition-all duration-700 opacity-30 md:opacity-50"
              alt="Coding POV"
            />

            <div className="relative z-20 space-y-4">
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">Hi, I'm Thomas Abas<span className="text-blue-500">.</span></h3>
              <p className="text-base font-medium text-gray-400 leading-relaxed max-w-sm">
                I'm a Software Engineer with a passion for building reliable, durable, secure, and user-friendly applications that solve real-world problems.
              </p>
            </div>
          </motion.div>

          {/* Grid 2: Code is Craft */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 md:row-span-1 relative p-8 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl shadow-2xl overflow-hidden group"
          >
            <div
              ref={grid2Container}
              className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-700"
            >
              <p className="text-5xl md:text-6xl font-black text-white/[0.03] uppercase tracking-tighter italic select-none">
                CODE IS CRAFT
              </p>
              <Card style={{ rotate: "15deg", top: "15%", left: "10%" }} text="SQL" containerRef={grid2Container} />
              <Card style={{ rotate: "-10deg", top: "50%", left: "40%" }} text="MongoDB" containerRef={grid2Container} />
              <Card style={{ rotate: "12deg", bottom: "15%", right: "10%" }} text="Patterns" containerRef={grid2Container} />
              <Card style={{ rotate: "-5deg", top: "10%", right: "20%" }} text="Spring" containerRef={grid2Container} />
              <Card style={{ rotate: "-12deg", bottom: "10%", left: "20%" }} text="Firebase" containerRef={grid2Container} />
            </div>
          </motion.div>

          {/* Grid 3: Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 lg:col-span-2 md:row-span-1 relative p-8 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl shadow-2xl overflow-hidden group flex flex-col justify-center items-center text-center"
          >
            <div className="relative z-10 w-full">
              <div className="mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Location</span>
                <h4 className="text-xl font-black text-white uppercase tracking-tight mt-1">Lagos, Nigeria</h4>
              </div>
              <NigeriaTime />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-6">
                Open to remote work worldwide
              </p>
            </div>
          </motion.div>

          {/* Grid 5: Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 lg:col-span-4 md:row-span-1 relative p-8 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl shadow-2xl overflow-hidden group flex flex-col md:flex-row items-center gap-8"
          >
            <div className="relative z-10 md:w-1/2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Expertise</span>
              <h4 className="text-2xl font-black text-white uppercase tracking-tight mt-1 mb-4">Tech Stack</h4>
              <p className="text-sm font-medium text-gray-400 leading-relaxed">
                I specialize in building robust, performant, and scalable applications using a diverse range of modern tools.
              </p>
            </div>
            <div className="md:w-1/2 h-full flex items-center justify-center md:scale-120">
              <Frameworks />
            </div>
          </motion.div>

          {/* Grid 4: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 md:row-span-1 relative p-8 rounded-[2.5rem] border border-white/10 bg-blue-600 shadow-2xl shadow-blue-600/20 overflow-hidden group flex flex-col items-start justify-between"
          >
            {/* Interactive Shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <h4 className="text-2xl font-black text-white uppercase tracking-tighter italic leading-none">
              Start a <br /> Project Together<span className="text-blue-200">?</span>
            </h4>
            <div className="w-full">
              <CopyEmailButton />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
