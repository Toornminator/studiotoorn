"use client";

import { createContext, useContext } from "react";
import type { Locale } from "./config";
import type { Dictionary } from "./types";

type LocaleContextValue = {
  locale: Locale;
  dict: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale, dict }}>
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
