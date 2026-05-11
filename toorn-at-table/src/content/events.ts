import type { EventItem } from "@/lib/types";

/**
 * Concept events — placeholder upcoming dinners written in Nick's voice.
 * Replace with real bookings (or wire to Supabase) once the calendar is
 * confirmed. Dates are kept in the near future so the grid always feels
 * "upcoming"; bump them when you replace the copy.
 */
export const events: EventItem[] = [
  {
    slug: "marbella-velvet-heron",
    title: "Velvet Heron — villa takeover",
    date: "2026-06-21",
    startTime: "19:30",
    location: "Privé villa, Sierra Blanca",
    city: "Marbella",
    menuTeaser: "Zes-gangen menu rond gerookte vis, jonge groenten en kruidengarnituur uit de eigen tuin.",
    description:
      "Een avond in een privévilla in Sierra Blanca. Open keuken in het zicht, 14 plekken aan één lange tafel. Welkomstdrankje vanaf 19:30, eerste gang om 20:00.",
    capacity: 14,
    spotsAvailable: 4,
    priceEur: 145,
    bookable: true,
  },
  {
    slug: "olive-grove-mijas",
    title: "Olijfboomgaard-diner",
    date: "2026-09-12",
    startTime: "18:45",
    location: "Familieboomgaard La Fuente",
    city: "Mijas",
    menuTeaser: "Vijf gangen, koud-warm, alles met olie uit de boomgaard zelf. Lange tafel onder de bomen.",
    description:
      "Aan het einde van de olijfoogst, buiten onder de eeuwenoude boomgaard. Acht tot tien plekken, voor wie van smaken houdt die kort op de bron zitten.",
    capacity: 10,
    spotsAvailable: 7,
    priceEur: 165,
    bookable: true,
  },
  {
    slug: "andalucia-harvest",
    title: "Andalucía harvest table",
    date: "2026-10-25",
    startTime: "19:00",
    location: "Cortijo, achterland Coín",
    city: "Coín",
    menuTeaser: "Producten van vier lokale boeren samen op tafel: pompoen, granaatappel, lam, jonge wijn.",
    description:
      "Eén avond met vier producenten uit de regio en wat zij die week zelf van het land halen. Het menu beslist 's ochtends, gasten eten 's avonds.",
    capacity: 16,
    spotsAvailable: 16,
    priceEur: 125,
    bookable: true,
  },
  {
    slug: "fire-end-of-year",
    title: "Vuurplaats-diner — jaarafsluiting",
    date: "2026-12-19",
    startTime: "19:30",
    location: "Beach finca, Estepona",
    city: "Estepona",
    menuTeaser: "Alles dat avond op een open vuur. Houtskool, dichte vlam, één lange tafel met uitzicht op zee.",
    description:
      "Het laatste diner van het jaar, buiten op het strand bij een vuurplaats. Gerookt, geblakerd, langzaam gegaard — een avond met dikke wijnen erbij.",
    capacity: 12,
    spotsAvailable: 9,
    priceEur: 195,
    bookable: true,
  },
];
