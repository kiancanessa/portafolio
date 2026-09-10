import { motion } from "framer-motion";
import { useLang } from "../i18n/LangContext";

export default function Navbar() {
  const { t, lang, toggle } = useLang();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex items-center justify-between gap-3 px-4 pt-6 sm:px-6 md:px-10 md:pt-8"
    >
      <div className="flex gap-3 sm:gap-6 md:gap-10">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="whitespace-nowrap text-[11px] font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-sm md:text-lg lg:text-[1.4rem]"
          >
            {link.label}
          </a>
        ))}
      </div>

      <button
        onClick={toggle}
        aria-label="Switch language"
        className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-[#D7E2EA]/70 transition-colors hover:border-white/30 sm:px-3 sm:py-1.5 sm:text-xs"
      >
        <span className={lang === "es" ? "font-semibold text-[#D7E2EA]" : ""}>ES</span>
        <span className="opacity-40">/</span>
        <span className={lang === "en" ? "font-semibold text-[#D7E2EA]" : ""}>EN</span>
      </button>
    </motion.nav>
  );
}
