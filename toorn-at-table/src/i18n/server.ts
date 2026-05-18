import "server-only";
import { cookies } from "next/headers";
import { en } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import { nl } from "./dictionaries/nl";
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale, type Locale } from "./config";
import type { Dictionary } from "./types";

const DICTIONARIES: Record<Locale, Dictionary> = { en, es, nl };

/**
 * Read the current locale from the `locale` cookie set by LanguageSwitcher.
 * Falls back to the brand bible's default (English) when nothing's set yet.
 */
export async function getCurrentLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export async function getDictionary(): Promise<Dictionary> {
  const locale = await getCurrentLocale();
  return DICTIONARIES[locale];
}

export function getDictionaryFor(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
