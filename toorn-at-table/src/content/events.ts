import type { LocalisedEventItem } from "@/lib/types";

/**
 * Real events Nick has cooked, and any open-booking dinners still to come.
 * A past event (date before today) renders as a completed night with its
 * photo and a guest count, not a bookable seat; an upcoming event with
 * `bookable: true` and `spotsAvailable` shows the booking flow. Edit this
 * file to add the next one. City stays one string (proper nouns rarely
 * need localising); everything else is an EN/ES/NL trio.
 */
export const events: LocalisedEventItem[] = [
  {
    slug: "manilva-paella",
    title: {
      en: "Paella in Manilva. A table for twelve",
      es: "Paella en Manilva. Mesa para doce",
      nl: "Paella in Manilva. Een tafel voor twaalf",
    },
    date: "2026-10-08",
    location: {
      en: "Private event",
      es: "Evento privado",
      nl: "Privé-event",
    },
    city: "Manilva",
    menuTeaser: {
      en: "One giant paella, chicken and chorizo, cooked outside over the fire for twelve. Saffron rice, red peppers, sugar snaps and lima beans, finished with lemon and edible flowers.",
      es: "Una paella enorme, pollo y chorizo, cocinada al aire libre al fuego para doce. Arroz con azafrán, pimiento rojo, tirabeques y judías de lima, terminada con limón y flores comestibles.",
      nl: "Eén reuzenpaella, kip en chorizo, buiten op het vuur gekookt voor twaalf. Saffraanrijst, rode paprika, sugarsnaps en limabonen, afgemaakt met citroen en eetbare bloemen.",
    },
    description: {
      en: "A private night in Manilva. Twelve guests, one enormous paella built in front of them: chicken browned hard, chorizo rendered into the rice, a sofritto made the day before, local organic white wine in the pan. Carried out and served straight from the pan at a long outdoor table.",
      es: "Una noche privada en Manilva. Doce comensales, una paella enorme montada delante de ellos: pollo bien dorado, chorizo soltando su grasa en el arroz, un sofrito hecho el día antes, vino blanco ecológico de la zona en la paella. Llevada entera y servida directamente de la paellera en una mesa larga al aire libre.",
      nl: "Een privéavond in Manilva. Twaalf gasten, één enorme paella voor hun ogen gebouwd: kip hard aangebraden, chorizo uitgebakken in de rijst, een sofritto die een dag van tevoren is gemaakt, lokale ecologische witte wijn in de pan. In z'n geheel naar buiten gedragen en rechtstreeks uit de pan geserveerd aan een lange buitentafel.",
    },
    capacity: 12,
    heroImage: "/images/recipes/paella-chicken-chorizo.jpg",
    bookable: false,
  },
];
