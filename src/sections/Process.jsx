import React from "react";
import { motion } from "motion/react";
import { HiOutlineLightBulb, HiOutlinePaintBrush, HiOutlineCodeBracket, HiOutlineRocketLaunch } from "react-icons/hi2";

const steps = [
    {
        title: "Discovery",
        description: "Understanding your vision, goals, and target audience to build a solid foundation.",
        icon: <HiOutlineLightBulb />,
        id: "01",
    },
    {
        title: "Design",
        description: "Creating intuitive wireframes and stunning high-fidelity mockups tailored to your brand.",
        icon: <HiOutlinePaintBrush />,
        id: "02",
    },
    {
        title: "Development",
        description: "Building robust, scalable, and performant code using the latest industry standards.",
        icon: <HiOutlineCodeBracket />,
        id: "03",
    },
    {
        title: "Launch",
        description: "Deploying your project perfectly with optimizations for speed, SEO, and security.",
        icon: <HiOutlineRocketLaunch />,
        id: "04",
    },
];

const Process = () => {
    return (
        <section className="c-space my-20 relative" id="process">
            <h3 className="text-heading mb-16 text-center">My Workflow</h3>

            <div className="relative">
                {/* Animated Green Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -translate-y-1/2 z-0">
                    <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="h-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative p-8 h-[300px] rounded-3xl bg-[#0a0a1a]/60 border border-white/5 backdrop-blur-xl hover:border-green-500/50 transition-all duration-500 flex flex-col items-start justify-between cursor-default overflow-hidden"
                        >
                            {/* Glass background effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Step Number Background */}
                            <div className="absolute -top-4 -right-4 p-4 text-9xl font-black text-white/[0.02] group-hover:text-green-500/[0.05] transition-colors duration-500 select-none">
                                {step.id}
                            </div>

                            <div className="relative z-10">
                                <div className="text-4xl mb-6 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-green-500 group-hover:border-green-500/30 group-hover:bg-green-500/10 transition-all duration-500 shadow-xl">
                                    {step.icon}
                                </div>

                                <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">
                                    {step.title}
                                </h4>
                                <p className="text-gray-400 group-hover:text-gray-200 text-sm leading-relaxed transition-colors">
                                    {step.description}
                                </p>
                            </div>

                            {/* Active Indicator Line */}
                            <div className="relative z-10 w-12 h-1 bg-white/10 group-hover:w-full group-hover:bg-green-500 transition-all duration-500 rounded-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
