import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Project from "../components/Project";
import { myProjects } from "../constants";

const Projects = () => {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useLayoutEffect(() => {
    const updateScrollDistance = () => {
      if (!viewportRef.current || !trackRef.current) return;

      const nextDistance = Math.max(
        0,
        trackRef.current.scrollWidth - viewportRef.current.clientWidth
      );
      setScrollDistance(nextDistance);
    };

    updateScrollDistance();

    const observer = new ResizeObserver(updateScrollDistance);
    if (viewportRef.current) observer.observe(viewportRef.current);
    if (trackRef.current) observer.observe(trackRef.current);

    window.addEventListener("resize", updateScrollDistance);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateScrollDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative border-b border-white/10"
      style={{ height: `calc(100svh + ${scrollDistance}px)` }}
    >
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden px-4 py-24 md:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium text-white/45">Selected work</p>
              <h2 className="display-serif mt-4 text-5xl leading-none text-white md:text-6xl">
                Products and <span className="instrument-serif-regular-italic">systems</span> I have built.
              </h2>
            </div>
         
          </div>

          <div ref={viewportRef} className="overflow-visible">
            <motion.div ref={trackRef} style={{ x }} className="flex gap-5 will-change-transform">
              {myProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  className="w-[82vw] max-w-[34rem] shrink-0 md:w-[32rem]"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.2) }}
                >
                  <Project {...project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
