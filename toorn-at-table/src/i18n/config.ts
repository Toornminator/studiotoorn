/**
 * i18n configuration for TOORN at table.
 *
 * The brand bible positions English as the primary language (Marbella expat
 * audience speaks English mostly), Spanish for locals, Dutch for the home
 * crowd. Default locale is `en`; visitors can switch via the language
 * switcher in the nav. The choice persists in a `locale` cookie so the
 * next request server-renders the right language without flicker.
 */

export const LOCALES = ["en", "es", "nl"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  nl: "NL",
};

export const LOCALE_LONG_LABELS: Record<Locale, string> = {
  en: "English",
  es: "Español",
  nl: "Nederlands",
};

export const LOCALE_COOKIE = "locale";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}
