import "server-only";
import { headers } from "next/headers";
import { en } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import { nl } from "./dictionaries/nl";
import { DEFAULT_LOCALE, isLocale, type Locale } from "./config";
import type { Dictionary } from "./types";

const DICTIONARIES: Record<Locale, Dictionary> = { en, es, nl };

/**
 * Read the current locale from the `x-locale` request header that the
 * middleware derives from the URL prefix (/es, /nl; root = English). Falls
 * back to the default (English) when the header is absent.
 */
export async function getCurrentLocale(): Promise<Locale> {
  const h = await headers();
  const value = h.get("x-locale");
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export async function getDictionary(): Promise<Dictionary> {
  const locale = await getCurrentLocale();
  return DICTIONARIES[locale];
}

export function getDictionaryFor(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
