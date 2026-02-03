import React from "react";
import { motion } from "motion/react";
import { FaReact, FaJs, FaNodeJs, FaJava, FaAngular } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNestjs, SiNextdotjs, SiFramer, SiGit, SiFigma, SiThreedotjs } from "react-icons/si";
import { DiC, DiCsharp } from "react-icons/di";

const skills = [
    { name: "React", level: "Advanced", color: "#61DAFB", icon: <FaReact /> },
    { name: "JavaScript", level: "Advanced", color: "#F7DF1E", icon: <FaJs /> },
    { name: "Tailwind CSS", level: "Advanced", color: "#38B2AC", icon: <SiTailwindcss /> },
    { name: "Node.js", level: "Intermediate", color: "#339933", icon: <FaNodeJs /> },
    { name: "Java", level: "Intermediate", color: "#007396", icon: <FaJava /> },
    { name: "Angular", level: "Intermediate", color: "#DD0031", icon: <FaAngular /> },
    { name: "NestJS", level: "Intermediate", color: "#E0234E", icon: <SiNestjs /> },
    { name: "C", level: "Intermediate", color: "#A8B9CC", icon: <DiC /> },
    { name: "C#", level: "Intermediate", color: "#239120", icon: <DiCsharp /> },
    { name: "Three.js", level: "Intermediate", color: "#FFFFFF", icon: <SiThreedotjs /> },
    // { name: "Framer Motion", level: "Advanced", color: "#0055FF", icon: <SiFramer /> },
    { name: "Next.js", level: "Intermediate", color: "#FFFFFF", icon: <SiNextdotjs /> },
    { name: "TypeScript", level: "Intermediate", color: "#3178C6", icon: <SiTypescript /> },
    { name: "Git", level: "Advanced", color: "#F05032", icon: <SiGit /> },
    // { name: "Figma", level: "Intermediate", color: "#F24E1E", icon: <SiFigma /> },
];

const Skills = () => {
    return (
        <section className="c-space my-20" id="skills">
            <h3 className="text-heading mb-10 text-center">My Dev Skills</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm cursor-pointer group"
                    >
                        <div
                            className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-4xl bg-white/10 group-hover:bg-white/20 transition-colors"
                            style={{ color: skill.color }}
                        >
                            {skill.icon}
                        </div>
                        <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
                        <p className="text-sm text-gray-400">{skill.level}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
