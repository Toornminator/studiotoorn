import type { TravelLocation } from "@/lib/types";

/**
 * Travel locations marked on the hand-drawn atlas. Coordinates are
 * percentages of the 1400×640 viewBox (top-left anchored).
 *
 * The 27 visited countries below seed the map with markers. Nick fills in
 * `intro`, `body` and `pullQuote` per location when he has a story for it;
 * locations without a body still render a marker + minimal overlay.
 */
export const travelLocations: TravelLocation[] = [
  // ── Nordics ─────────────────────────────────────────────────────────
  { slug: "noorwegen", name: "Noorwegen", country: "Noorwegen", mapX: 51.5, mapY: 17 },
  { slug: "zweden", name: "Zweden", country: "Zweden", mapX: 53.5, mapY: 18 },
  { slug: "finland", name: "Finland", country: "Finland", mapX: 56, mapY: 17 },
  { slug: "denemarken", name: "Denemarken", country: "Denemarken", mapX: 52, mapY: 23 },

  // ── British Isles ──────────────────────────────────────────────────
  { slug: "uk", name: "United Kingdom", country: "Verenigd Koninkrijk", mapX: 47.5, mapY: 25 },
  { slug: "ierland", name: "Ierland", country: "Ierland", mapX: 45, mapY: 26 },

  // ── Western Europe ─────────────────────────────────────────────────
  { slug: "nederland", name: "Nederland", country: "Nederland", mapX: 50, mapY: 28 },
  { slug: "belgie", name: "België", country: "België", mapX: 49.5, mapY: 30 },
  { slug: "luxemburg", name: "Luxemburg", country: "Luxemburg", mapX: 50.2, mapY: 31 },
  { slug: "duitsland", name: "Duitsland", country: "Duitsland", mapX: 52, mapY: 29 },
  { slug: "frankrijk", name: "Frankrijk", country: "Frankrijk", mapX: 49, mapY: 33 },
  { slug: "zwitserland", name: "Zwitserland", country: "Zwitserland", mapX: 51, mapY: 33 },
  { slug: "oostenrijk", name: "Oostenrijk", country: "Oostenrijk", mapX: 53, mapY: 33 },

  // ── Central / Eastern Europe ───────────────────────────────────────
  { slug: "tsjechie", name: "Tsjechië", country: "Tsjechië", mapX: 53.5, mapY: 30 },
  { slug: "hongarije", name: "Hongarije", country: "Hongarije", mapX: 54.5, mapY: 33 },
  { slug: "roemenie", name: "Roemenië", country: "Roemenië", mapX: 56.5, mapY: 33 },

  // ── Iberia ─────────────────────────────────────────────────────────
  { slug: "spanje", name: "Spanje", country: "Spanje", mapX: 47, mapY: 39 },
  { slug: "portugal", name: "Portugal", country: "Portugal", mapX: 45.5, mapY: 40 },

  // ── Mediterranean ──────────────────────────────────────────────────
  { slug: "italie", name: "Italië", country: "Italië", mapX: 52, mapY: 39 },
  { slug: "vaticaan", name: "Vaticaanstad", country: "Vaticaan", mapX: 52.5, mapY: 39.6 },
  { slug: "griekenland", name: "Griekenland", country: "Griekenland", mapX: 55.5, mapY: 41 },
  { slug: "turkije", name: "Turkije", country: "Turkije", mapX: 58, mapY: 42 },

  // ── North & West Africa ────────────────────────────────────────────
  { slug: "marokko", name: "Marokko", country: "Marokko", mapX: 47, mapY: 47 },
  { slug: "senegal", name: "Senegal", country: "Senegal", mapX: 45, mapY: 65 },
  { slug: "gambia", name: "The Gambia", country: "Gambia", mapX: 44.5, mapY: 67 },

  // ── Far afield ─────────────────────────────────────────────────────
  { slug: "verenigde-staten", name: "Verenigde Staten", country: "USA", mapX: 19, mapY: 36 },
  { slug: "japan", name: "Japan", country: "Japan", mapX: 86, mapY: 40 },
];
