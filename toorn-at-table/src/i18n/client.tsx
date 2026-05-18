"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { en } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import { nl } from "./dictionaries/nl";
import type { Locale } from "./config";
import type { Dictionary } from "./types";

/**
 * Client-side dictionary atlas. All three locales are bundled into the
 * client JS (~8 kB gzip total) so a locale switch can happen in one
 * React render instead of waiting on a server round-trip.
 */
const DICTIONARIES: Record<Locale, Dictionary> = { en, es, nl };

type LocaleContextValue = {
  locale: Locale;
  dict: Dictionary;
  /** Set the active locale on the client. The cookie sync is fire-and-
   * forget elsewhere; this just flips the in-memory state so every
   * `useT()` consumer re-renders this frame. */
  setLocale: (next: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState((prev) => (prev === next ? prev : next));
  }, []);

  // Keep <html lang> in sync so screen readers + a11y tools see the
  // right language immediately, not only after the next server render.
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const dict = DICTIONARIES[locale];

  return (
    <LocaleContext.Provider value={{ locale, dict, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

/**
 * `useT()` returns the dictionary for the current locale. Client components
 * read translations off this object, e.g. `t.hero.tagline`. The current
 * locale is also exposed for components that need to vary behaviour by
 * language (e.g. date formatting).
 */
export function useT() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useT() must be used inside <LocaleProvider>.");
  }
  return ctx.dict;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale() must be used inside <LocaleProvider>.");
  }
  return ctx.locale;
}

export function useSetLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useSetLocale() must be used inside <LocaleProvider>.");
  }
  return ctx.setLocale;
}
