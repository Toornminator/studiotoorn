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
    slug: "2026-06-06-early-summer",
    title: {
      en: "Early summer on the coast",
      es: "Inicio de verano en la costa",
      nl: "Vroege zomer aan de kust",
    },
    description: {
      en: "The first proper heat of the year, on a plate. Cold almond soup, fish off the grill, a cake that tastes of the orange trees down the road.",
      es: "El primer calor de verdad del año, en un plato. Sopa fría de almendra, pescado a la brasa, y un bizcocho que sabe a los naranjos de la esquina.",
      nl: "De eerste echte hitte van het jaar, op een bord. Koude amandelsoep, vis van de grill, en een cake die smaakt naar de sinaasappelbomen verderop.",
    },
    courses: {
      en: [
        "Ajo blanco, Málaga grapes, toasted almond",
        "Grilled dorada, charred lemon, summer tomato salad",
        "Olive oil and orange cake, almond cream",
      ],
      es: [
        "Ajo blanco, uvas de Málaga, almendra tostada",
        "Dorada a la brasa, limón quemado, ensalada de tomate de verano",
        "Bizcocho de aceite y naranja, crema de almendra",
      ],
      nl: [
        "Ajo blanco, Málaga-druiven, geroosterde amandel",
        "Gegrilde dorada, gebrande citroen, zomerse tomatensalade",
        "Cake van olijfolie en sinaasappel, amandelroom",
      ],
    },
    deliveryDate: "2026-06-06",
    orderCutoff: "2026-06-04T23:59:00+02:00",
    spotsAvailable: 20,
    allergens: {
      en: "Contains fish and nuts. Tell me about any allergy when you order and I work around it.",
      es: "Contiene pescado y frutos secos. Dime cualquier alergia al pedir y lo adapto.",
      nl: "Bevat vis en noten. Geef bij je bestelling allergieën door, dan pas ik het aan.",
    },
  },
];
