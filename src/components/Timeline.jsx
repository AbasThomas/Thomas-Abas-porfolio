"use client";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="relative w-full py-20 overflow-hidden" ref={containerRef}>
      {/* Decorative Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400">Professional Journey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic"
          >
            Work Experience<span className="text-blue-500">.</span>
          </motion.h2>
        </div>

        <div ref={ref} className="relative max-w-5xl mx-auto">
          {data.map((item, index) => (
            <div key={index} className="relative pl-12 md:pl-32 pb-24 group">
              {/* Timeline Node */}
              <div className="absolute left-[-2px] md:left-[9px] top-2 z-20">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-4 h-4 rounded-full bg-[#02030d] border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] relative z-10"
                >
                  <div className="absolute inset-0 rounded-full animate-ping bg-blue-500/30 opacity-75" />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Date & Title Section */}
                <div className="lg:col-span-4 space-y-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-blue-400"
                  >
                    <span className="text-xs font-black uppercase tracking-[0.2em]">{item.date}</span>
                    <div className="h-[1px] w-8 bg-blue-500/30" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl font-black text-white uppercase tracking-tight"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-[10px] font-bold text-gray-500 uppercase tracking-widest"
                  >
                    {item.job}
                  </motion.p>

                  {/* Role Icon/Initial Container */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="pt-4 flex items-center gap-4"
                  >
                    <div className={`w-12 h-12 rounded-2xl border border-white/10 ${index === 0 ? 'bg-blue-600/20' : index === 1 ? 'bg-purple-600/20' : 'bg-cyan-600/20'} backdrop-blur-xl flex items-center justify-center shadow-xl group-hover:border-blue-500/30 transition-all duration-500`}>
                      <span className="text-xl font-black text-white uppercase tracking-tighter">
                        {item.title.charAt(0)}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Content Card Section */}
                <div className="lg:col-span-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="relative p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl group-hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
                  >
                    {/* Inner Shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />

                    <ul className="space-y-4 relative z-10">
                      {item.contents.map((content, idx) => (
                        <li key={idx} className="flex gap-4">
                          <span className="text-blue-500 mt-1.5 flex-shrink-0">•</span>
                          <p className="text-sm font-medium text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                            {content}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}

          {/* Dynamic Progress Line */}
          <div className="absolute left-[6px] md:left-[16px] top-0 overflow-hidden w-[2px] h-full bg-white/5 rounded-full">
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
