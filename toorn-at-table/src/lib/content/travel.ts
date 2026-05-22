import "server-only";
import { travelLocations as staticTravel } from "@/content/travel";
import { getSupabaseServer } from "@/lib/supabase/server";
import { pick, pickOptional } from "@/lib/content/i18n";
import type { Locale } from "@/i18n/config";
import type { LocalisedTravelLocation, TravelLocation } from "@/lib/types";

type TravelRow = {
  slug: string;
  name: string;
  country: string | null;
  year: number | null;
  hero_image: string | null;
  map_x: number;
  map_y: number;
  intro: string | null;
  body: string | null;
  pull_quote: string | null;
  position: number;
};

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
  // Static file is the source of truth — it carries the full EN/ES/NL
  // content Nick wrote via the Reisverhalen vragenlijst. The Supabase
  // `travel_locations` table is single-language and out of date; bypass
  // it until the schema grows proper i18n columns and gets re-seeded.
  return staticTravel.map((l) => resolveTravel(l, locale));
}
