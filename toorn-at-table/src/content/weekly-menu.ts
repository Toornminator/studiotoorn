import type { LocalisedWeeklyMenu } from "@/lib/types";

/**
 * "Toorn aan de deur": the local weekly menu(s).
 *
 * One new menu a week, delivered to the door in Arroyo de la Miel on a
 * Saturday, cash on delivery. The page and homepage teaser show the next
 * upcoming menu by `deliveryDate` (older ones drop off automatically),
 * the same way events work.
 *
 * Weekly workflow for Nick:
 *   1. Add a new entry at the top with next Saturday's `deliveryDate`.
 *   2. Write the courses + a one-line description in all three languages.
 *   3. Leave `spotsAvailable` at the cap; lower it by hand as orders land
 *      (or set `soldOut: true`).
 * Price and capacity fall back to the house defaults in
 * `src/lib/content/weekly-menu.ts` when omitted, so most weeks you only
 * need to touch the menu itself.
 *
 * Voice: Bourdain, direct, no em-dashes (brand rule).
 */
export const weeklyMenus: LocalisedWeeklyMenu[] = [
  {
    slug: "2026-06-06-june-night",
    title: {
      en: "A June night on the coast",
      es: "Una noche de junio en la costa",
      nl: "Een juni-avond aan de kust",
    },
    description: {
      en: "Four courses that taste like a June night down here. Cold almond soup with muscat grapes, prawns loud with garlic and sherry, Iberico over coals, and a torrija drunk on Pedro Ximénez to finish.",
      es: "Cuatro pases que saben a una noche de junio aquí abajo. Sopa fría de almendra con uva moscatel, gambas a gritos de ajo y jerez, ibérico a las brasas, y una torrija borracha de Pedro Ximénez para terminar.",
      nl: "Vier gangen die smaken naar een juni-avond hier beneden. Koude amandelsoep met muscaatdruiven, gambas luid van knoflook en sherry, ibérico op kolen, en een torrija dronken van Pedro Ximénez om af te sluiten.",
    },
    courses: {
      en: [
        "Ajo blanco, Málaga muscat grapes, Marcona almond",
        "Gambas al ajillo, dry fino, charred bread",
        "Iberico presa over coals, smoked aubergine, romesco",
        "Torrija soaked in Pedro Ximénez, vanilla cream",
      ],
      es: [
        "Ajo blanco, uva moscatel de Málaga, almendra Marcona",
        "Gambas al ajillo, fino seco, pan a la brasa",
        "Presa ibérica a las brasas, berenjena ahumada, romesco",
        "Torrija empapada en Pedro Ximénez, crema de vainilla",
      ],
      nl: [
        "Ajo blanco, Málaga-muscaatdruiven, Marcona-amandel",
        "Gambas al ajillo, droge fino, geroosterd brood",
        "Presa ibérico op kolen, gerookte aubergine, romesco",
        "Torrija gedrenkt in Pedro Ximénez, vanilleroom",
      ],
    },
    deliveryDate: "2026-06-06",
    orderCutoff: "2026-06-04T23:59:00+02:00",
    spotsAvailable: 20,
    allergens: {
      en: "Contains shellfish, nuts and gluten. Tell me about any allergy when you order and I work around it.",
      es: "Contiene marisco, frutos secos y gluten. Dime cualquier alergia al pedir y lo adapto.",
      nl: "Bevat schaaldieren, noten en gluten. Geef bij je bestelling allergieën door, dan pas ik het aan.",
    },
  },
];
