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

/** The locales that carry a URL prefix. English lives at the root (no prefix). */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/**
 * Turn an app-internal href into its localized form. English (the default)
 * is served at the root with no prefix, so its links are returned unchanged —
 * which is exactly why an English visitor's experience can never be affected
 * by this. Spanish/Dutch get a `/es` or `/nl` prefix:
 *
 *   localizedHref("/", "es")              -> "/es"
 *   localizedHref("/the-table", "nl")     -> "/nl/the-table"
 *   localizedHref("/#contact", "es")      -> "/es#contact"
 *   localizedHref("/?event=x#c", "es")    -> "/es?event=x#c"
 *   localizedHref("/recipes/foo", "es")   -> "/es/recipes/foo"
 */
export function localizedHref(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return path;
  const prefix = `/${locale}`;
  if (path === "/") return prefix;
  // For home-anchor and query links ("/#x", "/?x"), drop the leading slash so
  // the prefix becomes the new root: "/#contact" -> "/es#contact".
  if (path.startsWith("/#") || path.startsWith("/?")) {
    return `${prefix}${path.slice(1)}`;
  }
  return `${prefix}${path}`;
}

/**
 * Build the metadata `alternates` block for a route: the locale-correct
 * canonical plus the full hreflang set (en/es/nl + x-default). `basePath` is
 * the English path ("/", "/the-table", "/recipes/x"). Without a per-locale
 * canonical, the /es and /nl pages would canonicalize to the English URL and
 * never get indexed — so this is load-bearing for the whole migration.
 */
export function buildAlternates(basePath: string, locale: Locale) {
  const en = basePath;
  const es = basePath === "/" ? "/es" : `/es${basePath}`;
  const nl = basePath === "/" ? "/nl" : `/nl${basePath}`;
  const canonical = locale === "es" ? es : locale === "nl" ? nl : en;
  return {
    canonical,
    languages: { en, es, nl, "x-default": en },
  };
}

/** Strip a leading locale prefix from a pathname, returning the base path. */
export function stripLocalePrefix(pathname: string): string {
  const seg = pathname.split("/")[1];
  if ((PREFIXED_LOCALES as readonly string[]).includes(seg)) {
    return pathname.slice(seg.length + 1) || "/";
  }
  return pathname;
}
