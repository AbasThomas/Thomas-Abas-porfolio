import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaNodeJs, FaJava, FaAngular } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNestjs, SiNextdotjs, SiGit, SiThreedotjs, SiSpringboot, SiPostman, SiFramer } from "react-icons/si";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";

const skills = [
    { name: "React", level: "Expert", color: "#61DAFB", icon: <FaReact /> },
    { name: "JavaScript", level: "Expert", color: "#F7DF1E", icon: <FaJs /> },
    { name: "Node.js", level: "Intermediate", color: "#339933", icon: <FaNodeJs /> },
    { name: "Java", level: "Expert", color: "#ED8B00", icon: <FaJava /> },
    { name: "Spring Boot", level: "Expert", color: "#6DB33F", icon: <SiSpringboot /> },
    { name: "TypeScript", level: "High", color: "#3178C6", icon: <SiTypescript /> },
    { name: "Tailwind CSS", level: "Expert", color: "#38B2AC", icon: <SiTailwindcss /> },
    { name: "NestJS", level: "High", color: "#E0234E", icon: <SiNestjs /> },
    { name: "Three.js", level: "High", color: "#FFFFFF", icon: <SiThreedotjs /> },
    { name: "Next.js", level: "High", color: "#FFFFFF", icon: <SiNextdotjs /> },
    { name: "CSharp", level: "Intermediate", color: "#239120", icon: <TbBrandCSharp /> },
    { name: "Git", level: "Expert", color: "#F05032", icon: <SiGit /> },
    { name: "Postman", level: "Expert", color: "#FF6C37", icon: <SiPostman /> },
    { name: "Framer Motion", level: "High", color: "#0055FF", icon: <SiFramer /> },
];

const Skills = () => {
    return (
        <section className="relative w-full py-24 overflow-hidden" id="skills">
            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/[0.02] blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="mb-20 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Toolkit</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic"
                    >
                        Tech Stack<span className="text-blue-500">.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-sm font-bold text-gray-500 uppercase tracking-widest max-w-lg mx-auto"
                    >
                        Crafting digital excellence with a specialized arsenal of modern technologies.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="group relative"
                        >
                            <div className="relative h-40 flex flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.05]">
                                {/* Background Glow */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(circle at center, ${skill.color} 0%, transparent 80%)`
                                    }}
                                />

                                {/* Icon */}
                                <div
                                    className="text-4xl mb-4 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                    style={{ color: skill.color }}
                                >
                                    {skill.icon}
                                </div>

                                {/* Text */}
                                <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.15em] text-white/90 text-center px-2">
                                    {skill.name}
                                </span>

                                {/* Skill Level Badge */}
                                <div
                                    className="mt-2 px-3 py-0.5 rounded-full border border-white/10 bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500"
                                >
                                    <span className="text-[8px] font-black uppercase tracking-widest text-white/40">
                                        {skill.level}
                                    </span>
                                </div>

                                {/* Top Border Glow */}
                                <div
                                    className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500"
                                    style={{
                                        background: `linear-gradient(to right, transparent, ${skill.color}, transparent)`,
                                        boxShadow: `0 0 15px ${skill.color}`
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
