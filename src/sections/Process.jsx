import React from "react";
import { motion } from "motion/react";

const steps = [
    {
        title: "Discovery",
        description: "Understanding your vision, goals, and target audience.",
        icon: "🔍",
        id: "01",
    },
    {
        title: "Design",
        description: "Creating wireframes and high-fidelity mockups.",
        icon: "🎨",
        id: "02",
    },
    {
        title: "Development",
        description: "Building robust, scalable, and performant code.",
        icon: "💻",
        id: "03",
    },
    {
        title: "Launch",
        description: "Deploying perfectly optimizing for speed and SEO.",
        icon: "🚀",
        id: "04",
    },
];

const Process = () => {
    return (
        <section className="c-space my-20">
            <h3 className="text-heading mb-10 text-center">My Workflow</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative p-6 h-[250px] rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                    >
                        <div className="absolute top-0 right-0 p-4 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                            {step.id}
                        </div>
                        <div className="text-4xl mb-4 bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">
                            {step.icon}
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                {step.title}
                            </h4>
                            <p className="text-gray-400 group-hover:text-gray-300 text-sm">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Process;
