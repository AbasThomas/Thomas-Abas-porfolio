import HeroText from "../components/HeroText";
import { useMediaQuery } from "react-responsive";
import { Suspense, useState, useCallback } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [isImageHovered, setIsImageHovered] = useState(false);

  // Memoized hover handlers
  const handleHoverStart = useCallback(() => setIsImageHovered(true), []);
  const handleHoverEnd = useCallback(() => setIsImageHovered(false), []);

  // Optimized variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        duration: 0.8
      }
    }
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background gradient for blur effect to work against */}
      <div className="absolute inset-0 " />
      
      {/* Main Container */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 c-space"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] py-8">
          
          {/* Text Column - Better Alignment */}
          <motion.div 
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8"
            variants={itemVariants}
          >
            <div className="w-full">
              <HeroText />
            </div>

            {/* Availability Indicator */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start space-x-3 text-white/80 mt-4"
            >
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
              <p className="text-sm lg:text-base tracking-wide">
                Available for new opportunities
              </p>
            </motion.div>
          </motion.div>

          {/* Profile Image Column - Better Centering */}
          <motion.div 
            className="flex justify-center lg:justify-end items-center"
            variants={itemVariants}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                type: "spring", 
                stiffness: 100,
                damping: 20 
              }}
              whileHover={{ 
                scale: 1.03,
                transition: { 
                  duration: 0.3,
                  type: "spring",
                  stiffness: 400 
                } 
              }}
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
              className="relative transform-gpu"
            >
              {/* Subtle Glow - Performance Optimized */}
              <motion.div
                animate={{
                  scale: isImageHovered ? 1.15 : 1,
                  opacity: isImageHovered ? 0.4 : 0.2,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl transform-gpu"
                style={{ willChange: "transform, opacity" }}
              />

              {/* Main Profile Image Container */}
              <motion.div
                animate={{
                  rotateZ: isImageHovered ? 1 : 0,
                  y: isImageHovered ? -3 : 0,
                }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 400,
                }}
                className="relative transform-gpu"
                style={{ willChange: "transform" }}
              >
                <img
                  src="/assets/me.jpg"
                  alt="Abas Thomas"
                  className="w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-white/20 shadow-2xl object-cover relative z-10 transform-gpu"
                  loading="eager"
                  decoding="sync"
                />

                {/* Floating Orbs - Reduced motion for performance */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: isImageHovered ? 1.05 : 1,
                  }}
                  transition={{
                    rotate: { 
                      duration: 25, 
                      repeat: Infinity, 
                      ease: "linear" 
                    },
                    scale: { duration: 0.4 },
                  }}
                  className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full opacity-60 blur-sm transform-gpu"
                  style={{ willChange: "transform" }}
                />
                <motion.div
                  animate={{
                    rotate: -360,
                    scale: isImageHovered ? 1.05 : 1,
                  }}
                  transition={{
                    rotate: { 
                      duration: 20, 
                      repeat: Infinity, 
                      ease: "linear" 
                    },
                    scale: { duration: 0.4 },
                  }}
                  className="absolute -bottom-2 -left-2 w-5 h-5 sm:w-7 sm:h-7 bg-cyan-400 rounded-full opacity-60 blur-sm transform-gpu"
                  style={{ willChange: "transform" }}
                />
              </motion.div>

              {/* Rotating Ring - Slower for performance */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: isImageHovered ? 1.05 : 1,
                }}
                transition={{
                  rotate: { 
                    duration: 12, 
                    repeat: Infinity, 
                    ease: "linear" 
                  },
                  scale: { duration: 0.4 },
                }}
                className="absolute border-2 border-purple-400/30 rounded-full transform-gpu"
                style={{
                  top: "-10px",
                  bottom: "-10px",
                  left: "-10px",
                  right: "-10px",
                  willChange: "transform",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center transform-gpu"
          style={{ willChange: "transform" }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2 transform-gpu"
            style={{ willChange: "transform" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;