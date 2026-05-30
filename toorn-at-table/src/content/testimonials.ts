import type { LocalisedTestimonial } from "@/lib/types";

/**
 * Guest testimonials. The single most important trust signal on a
 * private-chef site.
 *
 * EMPTY ON PURPOSE. The section and its review schema both auto-hide while
 * this array is empty, so the live site never shows placeholder text or
 * emits a fabricated rating to Google. The moment you drop real entries in
 * here, the "Guests" section (just above the contact form) and the
 * AggregateRating + Review JSON-LD light up automatically.
 *
 * NEVER fabricate these. Every entry must be a real quote from a real
 * guest, used with permission. Keep the guest's own wording in their
 * language and translate the other two locales faithfully (no embellishment).
 *
 * To go live:
 *   1. Collect 4–8 quotes (WhatsApp, email, Google reviews are all fine).
 *   2. Get a yes to showing first name + initial and the town.
 *   3. Fill the array using the shape shown in the example block below.
 *
 * ── EXAMPLE SHAPE (delete these comments once you add real ones) ─────────
 * {
 *   slug: "zagaleta-dinner",
 *   quote: {
 *     en: "We've hosted chefs at the villa before. None cooked at the table the way Nick did. The langoustine course is still being talked about.",
 *     es: "Habíamos tenido chefs en la villa antes. Ninguno cocinó en la mesa como Nick. Todavía se habla del plato de cigalas.",
 *     nl: "We hadden eerder chefs in de villa gehad. Geen van hen kookte aan tafel zoals Nick. Over de langoustinegang wordt nog steeds gepraat.",
 *   },
 *   author: "Charlotte M.",
 *   context: { en: "Private dinner · 12 guests", es: "Cena privada · 12 invitados", nl: "Privédiner · 12 gasten" },
 *   location: "La Zagaleta, Benahavís",
 *   rating: 5,
 *   date: "2025-08-14",
 *   source: "Direct",
 * }
 * ────────────────────────────────────────────────────────────────────────
 */
export const testimonials: LocalisedTestimonial[] = [];
