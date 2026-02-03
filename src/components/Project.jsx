import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  index
}) => {
  const cardRef = useRef(null);

  // Parallax / 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (event) => {
    const rect = cardRef.current.getBoundingClientRect();
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

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center group`}
    >
      {/* 3D Image Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full lg:w-3/5 aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-2xl"
      >
        <motion.div
          style={{ transform: "translateZ(50px)" }}
          className="absolute inset-4 rounded-[2rem] overflow-hidden border border-white/10"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02030d] via-transparent to-transparent opacity-60" />
        </motion.div>

        {/* Floating Tag Overlay */}
        <div
          style={{ transform: "translateZ(80px)" }}
          className="absolute bottom-10 right-10 flex gap-2"
        >
          {tags.slice(0, 2).map((tag, i) => (
            <div key={i} className="px-4 py-2 bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl flex items-center gap-2">
              <img src={tag.path} alt={tag.name} className="w-4 h-4" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">{tag.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Info Column */}
      <div className={`w-full lg:w-2/5 flex flex-col ${isEven ? 'items-start' : 'items-start lg:items-end lg:text-right'}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="flex flex-col gap-2">
            <span className="text-blue-500 font-black text-xs uppercase tracking-[0.3em]">Project {index + 1}</span>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
              {title}<span className="text-blue-600">.</span>
            </h3>
          </div>

          <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-md">
            {description}
          </p>

          <div className={`flex flex-wrap gap-3 ${isEven ? '' : 'lg:justify-end'}`}>
            {tags.map((tag, i) => (
              <span key={i} className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] border border-white/5 px-3 py-1 rounded-lg">
                {tag.name}
              </span>
            ))}
          </div>

          <div className={`flex items-center gap-6 pt-4 ${isEven ? '' : 'lg:justify-end'}`}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/10"
            >
              Live Preview <FiArrowUpRight className="text-lg" />
            </a>
            <a
              href="#"
              className="w-14 h-14 flex items-center justify-center border border-white/10 rounded-2xl text-white/40 hover:text-white hover:border-white/30 transition-all duration-500"
            >
              <FiGithub className="text-xl" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
