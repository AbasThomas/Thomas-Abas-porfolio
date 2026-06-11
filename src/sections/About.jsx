import { motion } from "framer-motion";
import { FiCloud, FiLayers, FiMonitor, FiServer } from "react-icons/fi";

const capabilities = [
  {
    title: "Web and mobile products",
    icon: FiMonitor,
  },
  {
    title: "Backend systems and APIs",
    icon: FiServer,
  },
  {
    title: "Cloud infrastructure",
    icon: FiCloud,
  },
  {
    title: "Education, health, blockchain and developer tools",
    icon: FiLayers,
  },
];

const About = () => {
  return (
    <section id="about" className="border-b border-white/10 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className=" ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
          >
            <p className="text-sm font-medium text-white/45">About</p>
            <h2 className="display-serif mt-4 text-5xl leading-none text-white md:text-6xl">
             I ship cool stuff.
            </h2>
          </motion.div>

          <div className="space-y-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              className="text-lg leading-9 text-white/65"
            >
              I am a self-taught software developer with over 5 years of experience across web,
              mobile, backend systems, cloud infrastructure, and emerging technologies. As the
              founder of PassMark, I am building an educational platform that helps students prepare
              more effectively for exams.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              className="text-base leading-8 text-white/55"
            >
              I like turning ambitious ideas into practical solutions, from education technology
              and healthcare systems to developer tools and digital platforms.
            </motion.p>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map(({ title, icon: Icon }) => (
                <div
                  key={title}
                  className="group relative min-h-48 overflow-hidden rounded-lg border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-white/25 hover:bg-white/[0.045]"
                >
                  <Icon
                    className="absolute -right-4 -top-5 size-36 text-white/[0.08] transition duration-300 group-hover:scale-105 group-hover:text-white/[0.12]"
                    aria-hidden="true"
                  />
                  <div className="relative z-10 flex h-full flex-col justify-end">
                    <Icon className="mb-8 size-14 text-white/70" aria-hidden="true" />
                    <p className="max-w-xs text-xl font-semibold leading-7 text-white">{title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
