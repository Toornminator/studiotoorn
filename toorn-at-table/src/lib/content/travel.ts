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
  };
}

export async function getTravelLocations(
  locale: Locale,
): Promise<TravelLocation[]> {
  const supabase = getSupabaseServer();
  if (!supabase) return staticTravel.map((l) => resolveTravel(l, locale));

  const { data, error } = await supabase
    .from("travel_locations")
    .select("*")
    .order("position", { ascending: true })
    .returns<TravelRow[]>();

  if (error || !data || data.length === 0) {
    return staticTravel.map((l) => resolveTravel(l, locale));
  }

  // Supabase schema is currently single-language; locale is ignored on the
  // cloud path until the travel_locations table grows EN/ES/NL columns.
  return data.map((r) => ({
    slug: r.slug,
    name: r.name,
    country: r.country ?? undefined,
    year: r.year ?? undefined,
    heroImage: r.hero_image ?? undefined,
    mapX: Number(r.map_x),
    mapY: Number(r.map_y),
    intro: r.intro ?? undefined,
    body: r.body ?? undefined,
    pullQuote: r.pull_quote ?? undefined,
  }));
}
