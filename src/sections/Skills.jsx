import React from "react";
import { motion } from "motion/react";
import { FaReact, FaJs, FaNodeJs, FaJava, FaAngular } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNestjs, SiNextdotjs, SiGit, SiThreedotjs } from "react-icons/si";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";

const skills = [
    { name: "React", level: "Advanced", color: "#61DAFB", icon: <FaReact /> },
    { name: "JavaScript", level: "Advanced", color: "#F7DF1E", icon: <FaJs /> },
    { name: "Tailwind CSS", level: "Advanced", color: "#38B2AC", icon: <SiTailwindcss /> },
    { name: "Node.js", level: "Intermediate", color: "#339933", icon: <FaNodeJs /> },
    { name: "Java", level: "Intermediate", color: "#ED8B00", icon: <FaJava /> },
    { name: "Angular", level: "Intermediate", color: "#DD0031", icon: <FaAngular /> },
    { name: "NestJS", level: "Intermediate", color: "#E0234E", icon: <SiNestjs /> },
    { name: "C", level: "Intermediate", color: "#A8B9CC", icon: <TbBrandCpp /> },
    { name: "C#", level: "Intermediate", color: "#239120", icon: <TbBrandCSharp /> },
    { name: "Three.js", level: "Intermediate", color: "#FFFFFF", icon: <SiThreedotjs /> },
    { name: "Next.js", level: "Intermediate", color: "#FFFFFF", icon: <SiNextdotjs /> },
    { name: "TypeScript", level: "Intermediate", color: "#3178C6", icon: <SiTypescript /> },
    { name: "Git", level: "Advanced", color: "#F05032", icon: <SiGit /> },
];

const Skills = () => {
    return (
        <section className="c-space my-20" id="skills">
            <h3 className="text-heading mb-12 text-center text-white font-bold">My Dev Skills</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        whileHover={{
                            y: -5,
                            transition: { duration: 0.2 }
                        }}
                        className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md cursor-default pointer-events-auto overflow-hidden transition-all duration-300"
                    >
                        {/* Hover Glow Effect Layer */}
                        <div
                            className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                backgroundColor: skill.color,
                                boxShadow: `0 0 15px ${skill.color}`
                            }}
                        />

                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                            style={{
                                background: `radial-gradient(circle at top, ${skill.color} 0%, transparent 70%)`
                            }}
                        />

                        {/* Icon Container */}
                        <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 text-4xl bg-white/[0.03] border border-white/5 group-hover:border-white/20 group-hover:scale-110 transition-all duration-300"
                            style={{ color: skill.color }}
                        >
                            {skill.icon}
                        </div>

                        {/* Text Content */}
                        <h4 className="text-lg font-bold text-white/90 group-hover:text-white transition-colors">
                            {skill.name}
                        </h4>
                        <p className="text-xs text-white/40 mt-1 uppercase tracking-widest font-medium">
                            {skill.level}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
