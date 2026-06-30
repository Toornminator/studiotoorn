import type { LocalisedEventItem } from "@/lib/types";

/**
 * Concept events. Placeholder upcoming dinners written in Nick's voice.
 * Edit this file to publish real events once the calendar is confirmed.
 * Dates are kept in the near future so the grid always feels
 * "upcoming"; bump them when you replace the copy. City stays one string
 * (proper nouns rarely need localising); everything else is a trio.
 */
export const events: LocalisedEventItem[] = [
  {
    slug: "marbella-velvet-heron",
    title: {
      en: "Velvet Heron. Villa takeover",
      es: "Velvet Heron. Toma de la villa",
      nl: "Velvet Heron. Villa takeover",
    },
    date: "2026-06-21",
    startTime: "19:30",
    location: {
      en: "Private villa, Sierra Blanca",
      es: "Villa privada, Sierra Blanca",
      nl: "Privé villa, Sierra Blanca",
    },
    city: "Marbella",
    menuTeaser: {
      en: "Six-course menu around smoked fish, young vegetables and herb garnishes from the villa garden.",
      es: "Menú de seis pases en torno a pescado ahumado, verduras tiernas y guarniciones de hierbas del jardín de la villa.",
      nl: "Zes-gangen menu rond gerookte vis, jonge groenten en kruidengarnituur uit de eigen tuin.",
    },
    description: {
      en: "An evening at a private villa in Sierra Blanca. Open kitchen in full view, 14 seats around one long table. Welcome drink from 19:30, first course at 20:00.",
      es: "Una noche en villa privada en Sierra Blanca. Cocina abierta a la vista, 14 plazas en una sola mesa larga. Bienvenida a las 19:30, primer pase a las 20:00.",
      nl: "Een avond in een privévilla in Sierra Blanca. Open keuken in het zicht, 14 plekken aan één lange tafel. Welkomstdrankje vanaf 19:30, eerste gang om 20:00.",
    },
    capacity: 14,
    spotsAvailable: 4,
    priceEur: 145,
    bookable: true,
  },
  {
    slug: "olive-grove-mijas",
    title: {
      en: "Olive grove dinner",
      es: "Cena en el olivar",
      nl: "Olijfboomgaard-diner",
    },
    date: "2026-09-12",
    startTime: "18:45",
    location: {
      en: "La Fuente family olive grove",
      es: "Olivar familiar La Fuente",
      nl: "Familieboomgaard La Fuente",
    },
    city: "Mijas",
    menuTeaser: {
      en: "Five courses, hot-and-cold, everything dressed with oil from the grove itself. One long table under the trees.",
      es: "Cinco pases, fríos y calientes, todo aliñado con aceite del propio olivar. Una mesa larga bajo los árboles.",
      nl: "Vijf gangen, koud-warm, alles met olie uit de boomgaard zelf. Lange tafel onder de bomen.",
    },
    description: {
      en: "At the tail end of the olive harvest, outside under the century-old grove. Eight to ten seats, for the kind of guest who likes flavours that sit close to their source.",
      es: "Al final de la cosecha de aceitunas, al aire libre bajo el olivar centenario. De ocho a diez plazas, para quien busca sabores muy cerca del origen.",
      nl: "Aan het einde van de olijfoogst, buiten onder de eeuwenoude boomgaard. Acht tot tien plekken, voor wie van smaken houdt die kort op de bron zitten.",
    },
    capacity: 10,
    spotsAvailable: 7,
    priceEur: 165,
    bookable: true,
  },
  {
    slug: "andalucia-harvest",
    title: {
      en: "Andalucía harvest table",
      es: "Mesa de cosecha andaluza",
      nl: "Andalucía harvest table",
    },
    date: "2026-10-25",
    startTime: "19:00",
    location: {
      en: "Cortijo, the hinterland of Coín",
      es: "Cortijo, sierra de Coín",
      nl: "Cortijo, achterland Coín",
    },
    city: "Coín",
    menuTeaser: {
      en: "Produce from four local farmers brought together on the table: pumpkin, pomegranate, lamb, young wine.",
      es: "Productos de cuatro productores locales en una sola mesa: calabaza, granada, cordero y vino joven.",
      nl: "Producten van vier lokale boeren samen op tafel: pompoen, granaatappel, lam, jonge wijn.",
    },
    description: {
      en: "One night with four regional producers and whatever they pulled out of the ground that week. The menu is decided in the morning, the guests eat in the evening.",
      es: "Una noche con cuatro productores de la zona y lo que cada uno haya recogido esa semana. El menú se decide por la mañana, los invitados cenan por la noche.",
      nl: "Eén avond met vier producenten uit de regio en wat zij die week zelf van het land halen. Het menu beslist 's ochtends, gasten eten 's avonds.",
    },
    capacity: 16,
    spotsAvailable: 16,
    priceEur: 125,
    bookable: true,
  },
  {
    slug: "fire-end-of-year",
    title: {
      en: "Open-fire dinner. Year's end",
      es: "Cena al fuego. Fin de año",
      nl: "Vuurplaats-diner. Jaarafsluiting",
    },
    date: "2026-12-19",
    startTime: "19:30",
    location: {
      en: "Beach finca, Estepona",
      es: "Finca de playa, Estepona",
      nl: "Beach finca, Estepona",
    },
    city: "Estepona",
    menuTeaser: {
      en: "Everything cooked that night over open fire. Charcoal, close flame, one long table looking out to the sea.",
      es: "Esa noche, todo se cocina al fuego abierto. Brasa, llama cerca, una mesa larga frente al mar.",
      nl: "Alles dat avond op een open vuur. Houtskool, dichte vlam, één lange tafel met uitzicht op zee.",
    },
    description: {
      en: "The last dinner of the year, outside on the beach by an open hearth. Smoked, charred, slow-cooked. An evening with serious wines on the table.",
      es: "La última cena del año, fuera en la playa junto al hogar. Ahumado, marcado a la llama, cocción lenta. Una noche con vinos de cuerpo.",
      nl: "Het laatste diner van het jaar, buiten op het strand bij een vuurplaats. Gerookt, geblakerd, langzaam gegaard. Een avond met dikke wijnen erbij.",
    },
    capacity: 12,
    spotsAvailable: 9,
    priceEur: 195,
    bookable: true,
  },
];
