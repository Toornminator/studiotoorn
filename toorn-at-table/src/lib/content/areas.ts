import { areas, type AreaContent } from "@/content/areas";
import type { Locale } from "@/i18n/config";
import { pick, pickParagraphs } from "./i18n";

/**
 * Data access for the service-area landing pages. Flattens the
 * localised content shapes from src/content/areas.ts into the plain
 * shapes the page consumes, mirroring the recipes/events pattern.
 */

export type Area = {
  slug: string;
  name: string;
  geo: { lat: number; lng: number };
  title: string;
  metaTitle: string;
  metaDescription: string;
  definition: string;
  body: string[];
  faqs: { q: string; a: string }[];
};

function flatten(area: AreaContent, locale: Locale): Area {
  return {
    slug: area.slug,
    name: area.name,
    geo: area.geo,
    title: pick(area.title, locale),
    metaTitle: pick(area.metaTitle, locale),
    metaDescription: pick(area.metaDescription, locale),
    definition: pick(area.definition, locale),
    body: pickParagraphs(area.body, locale),
    faqs: area.faqs.map((f) => ({
      q: pick(f.q, locale),
      a: pick(f.a, locale),
    })),
  };
}

export function getAreaSlugs(): string[] {
  return areas.map((a) => a.slug);
}

export function getAreas(locale: Locale): Area[] {
  return areas.map((a) => flatten(a, locale));
}

export function getArea(slug: string, locale: Locale): Area | null {
  const found = areas.find((a) => a.slug === slug);
  return found ? flatten(found, locale) : null;
}
