import "server-only";
import { cache } from "react";
import { en } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import { nl } from "./dictionaries/nl";
import { DEFAULT_LOCALE, isLocale, type Locale } from "./config";
import type { Dictionary } from "./types";

const DICTIONARIES: Record<Locale, Dictionary> = { en, es, nl };

/**
 * Per-request locale holder.
 *
 * Routes live under `app/[locale]/`, so the locale comes from the route
 * param, not from a request header. The `[locale]` layout (and each page)
 * calls `setRequestLocale(params.locale)` before anything renders;
 * `getCurrentLocale()` / `getDictionary()` then read it. `React.cache()`
 * gives one store instance per request (and per static prerender), so this
 * is safe for static generation and never leaks between requests.
 *
 * This deliberately avoids reading `headers()`: that forced every route to
 * render dynamically AND, combined with the locale-stripping rewrite, made
 * the CDN collapse all three languages onto one cache key. Param-derived
 * locale keeps each locale a distinct, cacheable URL with no header magic.
 */
const store = cache((): { locale: Locale } => ({ locale: DEFAULT_LOCALE }));

export function setRequestLocale(locale: string): void {
  store().locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
}

export async function getCurrentLocale(): Promise<Locale> {
  return store().locale;
}

export async function getDictionary(): Promise<Dictionary> {
  return DICTIONARIES[store().locale];
}

export function getDictionaryFor(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
