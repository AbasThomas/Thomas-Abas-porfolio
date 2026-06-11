import { resumeFilePath } from "../constants";

const Resume = () => {
  return (
    <section id="resume" className="border-b border-white/10 px-4 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-lg border border-white/10 bg-zinc-950 p-6 md:flex-row md:items-center md:justify-between md:p-8">
        <div>
          <p className="text-sm font-medium text-white/45">Resume</p>
          <h2 className="display-serif mt-2 text-3xl leading-tight text-white">
            Need the full professional snapshot?
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-white/55">
            Download my resume for a concise view of my experience, technical stack, and product work.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={resumeFilePath}
            download="Thomas Abas Resume.pdf"
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Download PDF
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-white/12 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
