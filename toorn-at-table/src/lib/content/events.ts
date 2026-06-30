import "server-only";
import { events as staticEvents } from "@/content/events";
import { pick, pickOptional } from "@/lib/content/i18n";
import type { Locale } from "@/i18n/config";
import type { EventItem, LocalisedEventItem } from "@/lib/types";

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

/**
 * Upcoming events, resolved into the active locale. Authored in
 * `src/content/events.ts` and shipped with the build, so this is a pure
 * in-memory map with no database round-trip.
 */
export async function getEvents(locale: Locale): Promise<EventItem[]> {
  return staticEvents.map((e) => resolveEvent(e, locale));
}
