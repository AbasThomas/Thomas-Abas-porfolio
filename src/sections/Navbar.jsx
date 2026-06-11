import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, resumeFilePath } from "../constants";

const Navbar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(`#${sectionId}`);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] px-3 py-4 md:px-4">
      <motion.nav
        animate={{
          maxWidth: scrolled ? 920 : 1152,
          borderRadius: scrolled ? 999 : 18,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 24 }}
        className={`mx-auto flex items-center justify-between border px-3 py-2.5 shadow-[0_18px_80px_rgba(0,0,0,0.38)] ring-1 ring-white/10 backdrop-blur-3xl backdrop-saturate-200 transition-colors duration-300 md:px-4 ${
          scrolled
            ? "border-white/20 bg-white/[0.12]"
            : "border-white/10 bg-white/[0.055]"
        }`}
      >
        <a href="#home" className="flex min-w-0 items-center text-sm font-semibold tracking-wide text-white">
          <motion.span
            animate={{
              width: scrolled ? 36 : 0,
              opacity: scrolled ? 1 : 0,
              scale: scrolled ? 1 : 0.78,
            }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className="block h-9 shrink-0 overflow-hidden rounded-full border border-white/25 bg-white/10"
          >
            <img src="/assets/my_image.jpeg" alt="Thomas Abas" className="h-full w-full object-cover" />
          </motion.span>
          <motion.span
            animate={{
              width: scrolled ? 0 : "auto",
              opacity: scrolled ? 0 : 1,
            }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className="truncate origin-left block"
          >
            Thomas Abas
          </motion.span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`rounded-full px-3 py-2 text-xs font-medium transition-colors ${
                activeLink === link.href
                  ? "bg-white/90 text-black"
                  : "text-white/62 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/18 bg-white/[0.035] text-white/78 transition-colors hover:border-white/35 hover:bg-white/10 hover:text-white"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0-18a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm10 8a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM4 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm15.07 7.07a1 1 0 0 1-1.42 0l-.7-.7a1 1 0 1 1 1.41-1.42l.71.7a1 1 0 0 1 0 1.42ZM7.05 7.05a1 1 0 0 1-1.41 0l-.71-.7A1 1 0 1 1 6.34 4.9l.71.71a1 1 0 0 1 0 1.42Zm12.02-2.12a1 1 0 0 1 0 1.41l-.7.71a1 1 0 0 1-1.42-1.41l.7-.71a1 1 0 0 1 1.42 0ZM7.05 16.95a1 1 0 0 1 0 1.41l-.71.71a1 1 0 0 1-1.41-1.42l.7-.7a1 1 0 0 1 1.42 0Z"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.38 15.46A8.5 8.5 0 0 1 8.54 3.62 9 9 0 1 0 20.38 15.46Z"
                />
              </svg>
            )}
          </button>
          <a
            href={resumeFilePath}
            download="Thomas Abas Resume.pdf"
            className="rounded-full border border-white/18 bg-white/[0.035] px-3 py-2 text-xs font-medium text-white/78 transition-colors hover:border-white/35 hover:bg-white/10 hover:text-white"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
          aria-label="Toggle menu"
        >
          <span className="flex flex-col gap-1.5">
            <span className={`h-px w-4 bg-current transition-transform ${isOpen ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-px w-4 bg-current transition-transform ${isOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </span>
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/15 bg-white/[0.1] p-3 shadow-[0_18px_70px_rgba(0,0,0,0.45)] backdrop-blur-3xl backdrop-saturate-200 md:hidden"
          >
            <div className="grid gap-1">
              <button
                type="button"
                onClick={onToggleTheme}
                className="rounded-md px-3 py-3 text-left text-sm font-medium text-white/70 hover:bg-white/8 hover:text-white"
              >
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </button>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-white/70 hover:bg-white/8 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
                <a
                  href={resumeFilePath}
                  download="Thomas Abas Resume.pdf"
                  onClick={() => setIsOpen(false)}
                  className="rounded-md border border-white/12 px-3 py-3 text-center text-xs font-medium text-white/75"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="rounded-md bg-white px-3 py-3 text-center text-xs font-semibold text-black"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
