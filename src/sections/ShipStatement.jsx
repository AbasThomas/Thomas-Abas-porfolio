import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const statement = "I SHIP COOL STUFF!";

const ShipStatement = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const revealProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  const clipWidth = useTransform(revealProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[280vh] border-t border-white/10"
      aria-label={statement}
    >
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
        {/* Ghost layer — dimmed/invisible baseline */}
        <p
          className="ship-statement-text ship-statement-ghost select-none px-4"
          aria-hidden="true"
        >
          {statement}
        </p>

        {/* Revealed layer — clips in from the left */}
        <motion.div
          className="ship-statement-clip absolute inset-0 flex items-center overflow-hidden"
          style={{ width: clipWidth }}
        >
          <p className="ship-statement-text select-none px-4" aria-hidden="true">
            {statement}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ShipStatement;
