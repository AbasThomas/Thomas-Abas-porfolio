import { SiTypescript } from "react-icons/si";

const languageBannerItems = [
  { name: "React", logo: "/assets/logos/react.svg" },
  { name: "Next.js", logo: "/assets/logos/nextjs.svg" },
  { name: "JavaScript", logo: "/assets/logos/javascript.svg" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "Tailwind CSS", logo: "/assets/logos/tailwindcss.svg" },
  { name: "Node.js", logo: "/assets/logos/nodejs.svg" },
  { name: "NestJS", logo: "/assets/logos/nestjs.svg" },
  { name: "Spring Boot", logo: "/assets/logos/spring.svg" },
  { name: "Java", logo: "/assets/logos/java.svg" },
  { name: "Firebase", logo: "/assets/logos/firebase.svg" },
  { name: "Supabase", logo: "/assets/logos/supabase.svg" },
  { name: "MongoDB", logo: "/assets/logos/mongodb.svg" },
  { name: "Postman", logo: "/assets/logos/postman.svg" },
  { name: "Vite", logo: "/assets/logos/vitejs.svg" },
  { name: "Git", logo: "/assets/logos/git.svg" },
  { name: "Vercel", logo: "/assets/logos/vercel.svg" },
  { name: "Three.js", logo: "/assets/logos/threejs.svg" },
  { name: "Framer Motion", logo: "/assets/logos/framer.svg" },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Node.js", "NestJS", "REST APIs", "Authentication"],
  },
  {
    title: "Product Systems",
    skills: ["Dashboards", "E-commerce", "AI features", "Developer tools", "Healthcare systems", "Event platforms"],
  },
  {
    title: "Workflow",
    skills: ["Git", "Vercel", "Firebase", "Supabase", "Postman", "System design"],
  },
];

const LanguageIcon = ({ item }) => {
  if (item.Icon) {
    const Icon = item.Icon;
    return <Icon className="h-7 w-7" style={{ color: item.color }} aria-hidden="true" />;
  }

  return <img src={item.logo} alt="" className="h-7 w-7 object-contain" loading="lazy" />;
};

const LanguageBanner = () => {
  const repeatedItems = [...languageBannerItems, ...languageBannerItems];

  return (
    <div className="group relative my-12 overflow-hidden rounded-lg border border-white/10 bg-white/[0.025] py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-black via-black/80 to-transparent" />

      <div className="language-marquee flex w-max gap-3 px-3 group-hover:[animation-play-state:paused]">
        {repeatedItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="language-marquee-card group/card relative flex min-w-40 items-center gap-3 overflow-hidden rounded-md border border-white/10 bg-zinc-950/80 px-4 py-3 text-white/75 transition duration-300 hover:-translate-y-1 hover:border-white/35 hover:bg-white/[0.07] hover:text-white"
          >
            <span className="language-marquee-shine" />
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] transition duration-300 group-hover/card:border-white/20">
              <LanguageIcon item={item} />
            </span>
            <span className="relative z-[1] whitespace-nowrap text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="border-b border-white/10 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-medium text-white/45">Skills</p>
          <h2 className="display-serif mt-4 text-5xl leading-none text-white md:text-6xl">
              My Technical Skills.
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/55">
            I work across the full product surface: interfaces, APIs, integrations, deployment, and user workflows.
          </p>
        </div>

        <LanguageBanner />

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-lg border border-white/10 bg-zinc-950 p-6">
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-md border border-white/10 px-3 py-1.5 text-sm text-white/60">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
