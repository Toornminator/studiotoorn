import { weeklyMenus as staticMenus } from "@/content/weekly-menu";
import { pick, pickOptional, pickParagraphs } from "@/lib/content/i18n";
import type { Locale } from "@/i18n/config";
import type { LocalisedWeeklyMenu, WeeklyMenu } from "@/lib/types";

/**
 * "Toorn aan de deur" data-access. Pure static, like travel and
 * testimonials: a hand-curated, trust-critical, low-volume list Nick
 * edits by hand. No `server-only` guard so the page metadata + teaser +
 * page body can all share it.
 */

/** House defaults. The agreed launch settings; individual menus override. */
export const TABLE_CONFIG = {
  /** EUR per portion when a menu does not set its own price. */
  housePrice: 22,
  /** Max portions per week when a menu does not set its own cap. */
  houseCap: 20,
  /** The fixed weekly delivery weekday (for copy). */
  deliveryWeekday: { en: "Saturday", es: "sábado", nl: "zaterdag" },
  /** The only area served. */
  area: "Arroyo de la Miel",
} as const;

function defaultCutoff(deliveryDate: string): string {
  // Two days before the delivery day, end of day, Spanish summer offset.
  const d = new Date(`${deliveryDate}T23:59:00+02:00`);
  d.setDate(d.getDate() - 2);
  return d.toISOString();
}

function resolveWeeklyMenu(
  m: LocalisedWeeklyMenu,
  locale: Locale,
  now: Date,
): WeeklyMenu {
  const capacity = m.capacity ?? TABLE_CONFIG.houseCap;
  const spotsAvailable = m.spotsAvailable ?? capacity;
  const spotsLeft = Math.max(0, spotsAvailable);
  const orderCutoff = m.orderCutoff ?? defaultCutoff(m.deliveryDate);
  const soldOut = m.soldOut ?? false;
  const orderingOpen =
    now.getTime() < new Date(orderCutoff).getTime() && spotsLeft > 0 && !soldOut;

  return {
    slug: m.slug,
    title: pick(m.title, locale),
    courses: pickParagraphs(m.courses, locale),
    description: pick(m.description, locale),
    pricePerPortion: m.pricePerPortion ?? TABLE_CONFIG.housePrice,
    deliveryDate: m.deliveryDate,
    orderCutoff,
    capacity,
    spotsAvailable,
    soldOut,
    allergens: pickOptional(m.allergens, locale),
    orderingOpen,
    spotsLeft,
  };
}

/**
 * The current menu to show: the next upcoming (or today's) delivery by
 * date, skipping drafts. Returns null when nothing is queued, so the page
 * and teaser can hide cleanly.
 */
export function getCurrentWeeklyMenu(locale: Locale): WeeklyMenu | null {
  const now = new Date();
  const today = now.toISOString().slice(0, 10);
  const upcoming = staticMenus
    .filter((m) => m.active !== false && m.deliveryDate >= today)
    .sort((a, b) => a.deliveryDate.localeCompare(b.deliveryDate));
  const next = upcoming[0];
  return next ? resolveWeeklyMenu(next, locale, now) : null;
}
