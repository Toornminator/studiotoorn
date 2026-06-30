import "server-only";
import { travelLocations as staticTravel } from "@/content/travel";
import { pick, pickOptional } from "@/lib/content/i18n";
import type { Locale } from "@/i18n/config";
import type { LocalisedTravelLocation, TravelLocation } from "@/lib/types";

function resolveTravel(
  l: LocalisedTravelLocation,
  locale: Locale,
): TravelLocation {
  return {
    slug: l.slug,
    name: pick(l.name, locale),
    country: pickOptional(l.country, locale),
    year: l.year,
    heroImage: l.heroImage,
    mapX: l.mapX,
    mapY: l.mapY,
    intro: pickOptional(l.intro, locale),
    body: pickOptional(l.body, locale),
    pullQuote: pickOptional(l.pullQuote, locale),
    polaroids: l.polaroids?.map((p) => ({
      src: p.src,
      alt: pick(p.alt, locale),
      caption: pickOptional(p.caption, locale),
      rotation: p.rotation,
    })),
    clip: l.clip
      ? {
          src: l.clip.src,
          alt: pick(l.clip.alt, locale),
          caption: pickOptional(l.clip.caption, locale),
        }
      : undefined,
  };
}

export async function getTravelLocations(
  locale: Locale,
): Promise<TravelLocation[]> {
  // Authored in `src/content/travel.ts` (full EN/ES/NL) and shipped with
  // the build. Pure in-memory map, no database round-trip.
  return staticTravel.map((l) => resolveTravel(l, locale));
}
