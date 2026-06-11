import { FiArrowUpRight } from "react-icons/fi";

const Project = ({ title, description, href, image, tags }) => {
  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-zinc-950 transition-colors hover:border-white/20">
      <a href={href} target="_blank" rel="noreferrer" className="block">
        <div className="aspect-[16/10] overflow-hidden border-b border-white/10 bg-zinc-900">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover opacity-85 grayscale transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0"
          />
        </div>
      </a>

      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="display-serif text-2xl leading-tight text-white">{title}</h3>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 text-white/60 transition-colors hover:border-white/25 hover:text-white"
            aria-label={`Open ${title}`}
          >
            <FiArrowUpRight />
          </a>
        </div>

        <p className="mt-3 text-sm leading-7 text-white/55">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {(tags || []).slice(0, 4).map((tag) => (
            <span
              key={`${title}-${tag.name}`}
              className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-white/45"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Project;
