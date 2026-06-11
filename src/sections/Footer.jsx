import { mySocials } from "../constants";

const Footer = () => {
  const scrollToTop = () => {
    if (window.portfolioScrollTo) {
      window.portfolioScrollTo("#");
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Thomas Abas</p>
          <p className="mt-1 text-xs text-white/40">Software Engineer</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {mySocials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-white/45 transition-colors hover:text-white"
            >
              {social.name}
            </a>
          ))}
          <button
            type="button"
            onClick={scrollToTop}
            className="text-xs font-medium text-white/45 transition-colors hover:text-white"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
