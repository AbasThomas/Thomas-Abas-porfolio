import {
  SiGithub,
  SiInstagram,
  SiStackoverflow,
  SiSubstack,
  SiTiktok,
  SiX,
} from "react-icons/si";
import { mySocials } from "../constants";

const socialIcons = {
  Instagram: SiInstagram,
  TikTok: SiTiktok,
  Substack: SiSubstack,
  "Stack Overflow": SiStackoverflow,
  GitHub: SiGithub,
  X: SiX,
};

const Socials = () => {
  return (
    <section id="socials" className="border-b border-white/10 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-white/45">Socials</p>
            <h2 className="display-serif mt-4 text-5xl leading-none text-white md:text-6xl">
              Find me across the web.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/55">
            Placeholder links are wired in for now. Replace them in the constants file when your final URLs are ready.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {mySocials.map((social) => {
            const Icon = socialIcons[social.name];

            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${social.name}`}
                className="group flex min-h-32 items-center justify-between rounded-lg border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-white/25 hover:bg-white/[0.055]"
              >
                <div className="min-w-0">
                  <p className="text-lg font-semibold text-white">{social.name}</p>
                  <p className="mt-2 truncate text-sm text-white/45">{social.handle}</p>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-white/10 bg-black/80 text-white transition-colors group-hover:border-white/25 group-hover:bg-white group-hover:text-black">
                  {Icon && <Icon className="size-5" aria-hidden="true" />}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Socials;
