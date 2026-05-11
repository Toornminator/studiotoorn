import "server-only";
import { events as staticEvents } from "@/content/events";
import { getSupabaseServer } from "@/lib/supabase/server";
import type { EventItem } from "@/lib/types";

type EventRow = {
  slug: string;
  title: string;
  date: string;
  start_time: string | null;
  location: string;
  city: string | null;
  menu_teaser: string | null;
  description: string | null;
  capacity: number | null;
  spots_available: number | null;
  price_eur_cents: number | null;
  hero_image: string | null;
  bookable: boolean;
};

export async function getEvents(): Promise<EventItem[]> {
  const supabase = getSupabaseServer();
  if (!supabase) return staticEvents;

  const today = new Date().toISOString().slice(0, 10);
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .gte("date", today)
    .order("date", { ascending: true })
    .returns<EventRow[]>();

  if (error || !data || data.length === 0) return staticEvents;

  return data.map((r) => ({
    slug: r.slug,
    title: r.title,
    date: r.date,
    startTime: r.start_time ?? undefined,
    location: r.location,
    city: r.city ?? undefined,
    menuTeaser: r.menu_teaser ?? undefined,
    description: r.description ?? undefined,
    capacity: r.capacity ?? undefined,
    spotsAvailable: r.spots_available ?? undefined,
    priceEur: r.price_eur_cents != null ? r.price_eur_cents / 100 : undefined,
    heroImage: r.hero_image ?? undefined,
    bookable: r.bookable,
  }));
}
