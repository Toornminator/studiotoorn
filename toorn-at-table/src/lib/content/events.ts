import "server-only";
import { events as staticEvents } from "@/content/events";
import { getSupabaseServer } from "@/lib/supabase/server";
import { pick, pickOptional } from "@/lib/content/i18n";
import type { Locale } from "@/i18n/config";
import type { EventItem, LocalisedEventItem } from "@/lib/types";

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

function resolveEvent(e: LocalisedEventItem, locale: Locale): EventItem {
  return {
    slug: e.slug,
    title: pick(e.title, locale),
    date: e.date,
    startTime: e.startTime,
    location: pick(e.location, locale),
    city: e.city,
    menuTeaser: pickOptional(e.menuTeaser, locale),
    description: pickOptional(e.description, locale),
    capacity: e.capacity,
    spotsAvailable: e.spotsAvailable,
    priceEur: e.priceEur,
    heroImage: e.heroImage,
    bookable: e.bookable,
  };
}

export async function getEvents(locale: Locale): Promise<EventItem[]> {
  const supabase = getSupabaseServer();
  if (!supabase) return staticEvents.map((e) => resolveEvent(e, locale));

  const today = new Date().toISOString().slice(0, 10);
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .gte("date", today)
    .order("date", { ascending: true })
    .returns<EventRow[]>();

  if (error || !data || data.length === 0) {
    return staticEvents.map((e) => resolveEvent(e, locale));
  }

  // Supabase schema is currently single-language; locale is ignored on the
  // cloud path until the events table grows EN/ES/NL columns.
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
