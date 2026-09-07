import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { translations, type Lang, type Translation } from "./translations";

interface LangContextValue {
  lang: Lang;
  t: Translation;
  toggle: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);

function detectLang(): Lang {
  if (typeof navigator === "undefined") return "es";
  return navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectLang);

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      t: translations[lang],
      toggle: () => setLang((prev) => (prev === "es" ? "en" : "es")),
    }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
