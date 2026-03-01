import { motion } from "framer-motion";
import { resumeFilePath } from "../constants";

const Resume = () => {
  return (
    <section id="resume" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-10 md:p-14 rounded-[2.5rem] border border-white/15 bg-white/[0.03] backdrop-blur-2xl shadow-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-blue-300">
              Download Resume
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic">
              Professional Snapshot<span className="text-blue-500">.</span>
            </h2>
            <p className="text-sm md:text-base font-medium text-gray-400 leading-relaxed">
              Get my latest resume with project highlights, technical stack, and professional experience.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={resumeFilePath}
              download="Thomas Abas Resume.pdf"
              className="px-8 py-4 bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-2xl transition-all hover:scale-105 active:scale-95 hover:bg-blue-600 hover:text-white text-center"
            >
              Download PDF
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/15 bg-white/5 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl transition-all hover:border-blue-500/50 hover:bg-blue-600/10 text-center"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
