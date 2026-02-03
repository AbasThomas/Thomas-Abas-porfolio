import React from "react";
import { motion } from "motion/react";

const skills = [
    { name: "React", level: "Advanced", color: "#61DAFB" },
    { name: "JavaScript", level: "Advanced", color: "#F7DF1E" },
    { name: "Tailwind CSS", level: "Advanced", color: "#38B2AC" },
    { name: "Node.js", level: "Intermediate", color: "#339933" },
    { name: "Three.js", level: "Intermediate", color: "#000000" },
    { name: "Framer Motion", level: "Advanced", color: "#0055FF" },
    { name: "Next.js", level: "Intermediate", color: "#000000" },
    { name: "TypeScript", level: "Intermediate", color: "#3178C6" },
    { name: "Git", level: "Advanced", color: "#F05032" },
    { name: "Figma", level: "Intermediate", color: "#F24E1E" },
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
                            className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl font-bold bg-white/10 group-hover:bg-white/20 transition-colors"
                            style={{ color: skill.color }}
                        >
                            {skill.name[0]}
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
