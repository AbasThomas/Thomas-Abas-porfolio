import { experiences } from "../constants";

const Experiences = () => {
  return (
    <section id="experience" className="border-b border-white/10 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-medium text-white/45">Experience</p>
          <h2 className="display-serif mt-4 text-4xl leading-none text-white md:text-5xl">
              My Work Experience.
          </h2>
        </div>

        <div className="divide-y divide-white/10 rounded-lg border border-white/10">
          {experiences.map((experience) => (
            <article
              key={`${experience.id}-${experience.title}-${experience.date}`}
              className="grid gap-4 p-4 md:grid-cols-[0.75fr_1.25fr] md:p-5"
            >
              <div>
                <p className="text-xs font-medium text-white/40">{experience.date}</p>
                <h3 className="mt-1 text-base font-semibold text-white md:text-lg">{experience.job}</h3>
                <p className="mt-1 text-sm text-white/55">{experience.title}</p>
              </div>

              <ul className="space-y-2">
                {experience.contents.slice(0, 2).map((item) => (
                  <li key={item} className="text-sm leading-6 text-white/58">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
