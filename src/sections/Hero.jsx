import { motion } from "framer-motion";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { resumeFilePath } from "../constants";

const highlights = [
  "Founder of PassMark",
  "5+ years building software",
  "Web, mobile, backend, and cloud",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex h-[100svh] overflow-hidden border-b border-white/10 px-4 pt-24 md:pt-28"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid flex-1 items-center gap-12 py-6 md:py-10 lg:grid-cols-[1.18fr_0.82fr] xl:gap-16"
        >
          <div className="max-w-3xl">
              {/* <div className="mb-8 flex items-center gap-4">
                <img
                  src="/assets/my_image.jpeg"
                  alt="Thomas Abas"
                  className="h-14 w-14 rounded-full border border-white/10 object-cover grayscale"
                />
                <div>
                  <p className="text-sm font-medium text-white">Thomas Abas</p>
                  <p className="mt-1 text-sm text-white/45">Software developer and product builder</p>
                </div>
              </div> */}

            <div>
              <h1 className="display-serif max-w-4xl text-5xl leading-[0.94] text-white sm:text-7xl md:text-8xl lg:text-[6.4rem]">
                Hey there, <span className="instrument-serif-regular-italic">I&apos;m Thomas Abas</span>.
              </h1>
            </div>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              I&apos;m a software developer building scalable, simple digital products across education,
              healthcare, developer tools, cloud systems, blockchain systems, LLMs, and more.
            </p>

            <p className="display-serif mt-2 text-2xl italic leading-8 text-white/60">
              I ship really cool stuff.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
              >
                View Projects
                <FiArrowDown className="size-4" />
              </a>
              <a
                href={resumeFilePath}
                download="Thomas Abas Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/12 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
              >
                <FiDownload className="size-4" />
                Download Resume
              </a>
            </div>

          </div>

          <div className="hidden justify-end lg:flex">
            <div className="relative w-full max-w-[360px]">
              <div className="absolute inset-x-7 top-4 h-[420px] rounded-lg border border-black" />
              <div className="relative overflow-hidden rounded-lg border shadow-2xl border-black shadow-black/30">
                <img
                  src="/assets/my_image.jpeg"
                  alt="Portrait of Thomas Abas"
                  className=" rounded-full w-full object-cover grayscale transition duration-500 hover:grayscale-0"
                />
              </div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
