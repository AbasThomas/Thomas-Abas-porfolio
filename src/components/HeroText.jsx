import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];

  // Optimized variants with will-change and hardware acceleration
  const variants = {
    hidden: {
      opacity: 0,
      x: -50,
      willChange: "transform, opacity"
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200
      }
    },
  };

  return (
    <div className="text-center md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex space-y-2">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Hi I'm Thomas
        </motion.h1>

        <div className="flex flex-col items-start space-y-2">
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7, duration: 0.6 }}
            className="transform-gpu -mt-1"
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
              duration={2000}
            />
          </motion.div>

          <motion.p
            className="text-4xl font-medium text-neutral-300 -mt-1"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Web Solutions
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-4 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Hi, I'm Thomas
        </motion.p>

        <div className="space-y-2">
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Building
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7, duration: 0.6 }}
            className="transform-gpu -mt-1"
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
              duration={2000}
            />
          </motion.div>

          <motion.p
            className="text-4xl font-black text-neutral-300 -mt-1"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;