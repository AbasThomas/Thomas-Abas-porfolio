import React, { useState } from "react";
import { motion } from "framer-motion";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-[2000px] w-[310px] md:w-[410px] h-[490px] cursor-pointer group shrink-0 transform-gpu"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side - TRANSPARENT SHINY GLASS */}
        <div
          className="absolute inset-0 w-full h-full rounded-[2rem] border border-white/20 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-2xl flex flex-col group-hover:border-blue-500/40 transition-colors duration-500"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Subtle Shine */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative w-full h-[50%] overflow-hidden p-4">
            <div className="w-full h-full rounded-[1.25rem] overflow-hidden grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="p-6 md:p-8 flex flex-col justify-between flex-1 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <span className="text-blue-400 font-black text-xs">{title.charAt(0)}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white/95 tracking-tight">{title}</h3>
              </div>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed line-clamp-2 mb-6 lowercase font-medium">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.slice(0, 3).map((tag) => (
                  <div key={tag.id} className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                    <img src={tag.path} alt={tag.name} className="w-3 h-3" />
                    <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">{tag.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-white/30 text-[9px] font-black uppercase tracking-[0.2em] mt-auto pt-6 border-t border-white/5 group-hover:text-blue-400 transition-colors">
              <span>View details</span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
                <span className="text-lg">→</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side - TRANSPARENT GLASS */}
        <div
          className="absolute inset-0 w-full h-full rounded-[2rem] border border-white/20 bg-white/[0.07] backdrop-blur-2xl p-8 md:p-10 flex flex-col justify-between shadow-2xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-black text-white">{title}</h3>
            <div className="w-12 h-1 bg-blue-600 rounded-full" />
            <div className="space-y-4">
              {subDescription.slice(0, 4).map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)]" />
                  <p className="text-xs text-white/70 leading-relaxed font-normal">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-full bg-white text-black font-black py-4 rounded-[1.25rem] text-center hover:bg-blue-600 hover:text-white transition-all duration-500 uppercase tracking-[0.2em] text-[9px]"
            >
              Launch Project
            </a>
            <button
              className="w-full py-4 border border-white/10 rounded-[1.25rem] hover:bg-white/5 transition-all text-[9px] font-black text-white/30 uppercase tracking-[0.2em]"
              onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
            >
              Flip Back
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
