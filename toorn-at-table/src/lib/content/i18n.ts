import type { Locale } from "@/i18n/config";
import type { LocalisedString, LocalisedParagraphs } from "@/lib/types";

/**
 * Resolve a localised trio to a single string for the active locale.
 *
 * Used by the data-access layer (`src/lib/content/*.ts`) to flatten the
 * `Localised*` content shapes into the plain shapes that components consume.
 * Pure function — safe to call on the server or the client.
 */
export function pick<T extends string | string[]>(
  value: { en: T; es: T; nl: T },
  locale: Locale,
): T {
  return value[locale];
}

/** `pick` for fields that may be undefined (intro, pullQuote, marginalia). */
export function pickOptional(
  value: LocalisedString | undefined,
  locale: Locale,
): string | undefined {
  return value ? value[locale] : undefined;
}

/** `pick` for paragraph arrays (Timeline body). */
export function pickParagraphs(
  value: LocalisedParagraphs,
  locale: Locale,
): string[] {
  return value[locale];
}
