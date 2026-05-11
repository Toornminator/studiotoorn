import "server-only";
import { travelLocations as staticTravel } from "@/content/travel";
import { getSupabaseServer } from "@/lib/supabase/server";
import type { TravelLocation } from "@/lib/types";

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

export async function getTravelLocations(): Promise<TravelLocation[]> {
  const supabase = getSupabaseServer();
  if (!supabase) return staticTravel;

  const { data, error } = await supabase
    .from("travel_locations")
    .select("*")
    .order("position", { ascending: true })
    .returns<TravelRow[]>();

  if (error || !data || data.length === 0) return staticTravel;

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
