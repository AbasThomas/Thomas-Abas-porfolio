import React from "react";
import { motion } from "framer-motion";
import { HiOutlineLightBulb, HiOutlinePaintBrush, HiOutlineCodeBracket, HiOutlineRocketLaunch } from "react-icons/hi2";

const steps = [
    {
        title: "Discovery",
        description: "Understanding your vision, goals, and target audience to build a solid foundation for success.",
        icon: <HiOutlineLightBulb />,
        id: "01",
        color: "#3b82f6" // Blue
    },
    {
        title: "Design",
        description: "Creating intuitive wireframes and stunning high-fidelity mockups tailored to your unique brand.",
        icon: <HiOutlinePaintBrush />,
        id: "02",
        color: "#8b5cf6" // Purple
    },
    {
        title: "Development",
        description: "Building robust, scalable, and performant code using the latest industry-leading standards.",
        icon: <HiOutlineCodeBracket />,
        id: "03",
        color: "#06b6d4" // Cyan
    },
    {
        title: "Launch",
        description: "Deploying your project perfectly with optimizations for speed, SEO, and enterprise security.",
        icon: <HiOutlineRocketLaunch />,
        id: "04",
        color: "#ec4899" // Pink
    },
];

const Process = () => {
    return (
        <section className="relative w-full py-24 overflow-hidden" id="process">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none translate-x-1/3" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="mb-24 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Execution Strategy</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic"
                    >
                        My Workflow<span className="text-blue-500">.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-sm font-bold text-gray-500 uppercase tracking-widest max-w-lg mx-auto"
                    >
                        A systematic approach to transforming complex ideas into digital reality.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Progress Indicator (Desktop) */}
                    <div className="hidden lg:block absolute top-[45%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0">
                        <motion.div
                            initial={{ width: "0%", left: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="h-full p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] flex flex-col items-start overflow-hidden min-h-[380px]">
                                    {/* Gradient Overlay on Hover */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                                        style={{ background: `radial-gradient(circle at top right, ${step.color} 0%, transparent 70%)` }}
                                    />

                                    {/* Step Number */}
                                    <div className="absolute top-8 right-8 text-5xl font-black text-white/[0.03] group-hover:text-white/[0.08] transition-all duration-500 italic">
                                        {step.id}
                                    </div>

                                    {/* Icon Container */}
                                    <div
                                        className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-3xl mb-10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] relative z-10"
                                        style={{ color: step.color }}
                                    >
                                        <div className="absolute inset-0 rounded-2xl bg-current opacity-10 blur-sm" />
                                        {step.icon}
                                    </div>

                                    <div className="relative z-10 mt-auto">
                                        <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-white transition-colors duration-300 italic">
                                            {step.title}
                                        </h4>
                                        <p className="text-sm font-medium text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Bottom Decorative Line */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 ease-out"
                                        style={{ background: `linear-gradient(to right, ${step.color}, transparent)` }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
