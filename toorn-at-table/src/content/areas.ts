import type { LocalisedParagraphs, LocalisedString } from "@/lib/types";

/**
 * Service-area landing pages (/private-chef/[area]) — the pages that
 * answer "I need a private chef in Marbella" for Google and for AI
 * assistants (ChatGPT, Perplexity, AI Overviews).
 *
 * Editorial rules, learned from how AI search extracts content:
 *  - `definition` is the citable block: who + what + where + how, in
 *    2-3 self-contained sentences. Factual, no hedging, no poetry.
 *    It renders inside the first screen of the page and feeds the
 *    Service schema description.
 *  - `body` carries the brand voice and the area-specific texture
 *    (real neighbourhoods, real markets; nothing invented).
 *  - Every FAQ answer must stand alone when quoted out of context.
 *  - Prices stay honest: everything is bespoke, so the cost answer
 *    explains what the price depends on instead of naming a number.
 */

export type AreaFaq = { q: LocalisedString; a: LocalisedString };

export type AreaContent = {
  /** URL segment: /private-chef/[slug] */
  slug: string;
  /** Display name of the place (same in all three languages). */
  name: string;
  geo: { lat: number; lng: number };
  /** H1 — "Private chef in Marbella". */
  title: LocalisedString;
  metaTitle: LocalisedString;
  metaDescription: LocalisedString;
  /** The extractable answer block. */
  definition: LocalisedString;
  /** Voice paragraphs with area texture. */
  body: LocalisedParagraphs;
  faqs: AreaFaq[];
};

export const areas: AreaContent[] = [
  {
    slug: "marbella",
    name: "Marbella",
    geo: { lat: 36.5101, lng: -4.8825 },
    title: {
      en: "Private chef in Marbella",
      es: "Chef privado en Marbella",
      nl: "Privéchef in Marbella",
    },
    metaTitle: {
      en: "Private chef in Marbella · Michelin-trained, at your villa",
      es: "Chef privado en Marbella · Formación Michelin, en tu villa",
      nl: "Privéchef in Marbella · Michelin-getraind, bij jou aan huis",
    },
    metaDescription: {
      en: "Nick Toorn cooks private dinners, villa weeks and workshops at homes across Marbella: Golden Mile, Puerto Banús, Nueva Andalucía, Sierra Blanca. Market-fresh, bespoke menus in English, Spanish or Dutch.",
      es: "Nick Toorn cocina cenas privadas, semanas de villa y talleres en casas de toda Marbella: Milla de Oro, Puerto Banús, Nueva Andalucía, Sierra Blanca. Menús a medida con producto del mercado, en español, inglés o neerlandés.",
      nl: "Nick Toorn kookt privédiners, villaweken en workshops aan huis in heel Marbella: Golden Mile, Puerto Banús, Nueva Andalucía, Sierra Blanca. Marktvers en op maat, in het Nederlands, Engels of Spaans.",
    },
    definition: {
      en: "Nick Toorn is a Michelin-trained private chef who cooks at homes and villas across Marbella and the wider Costa del Sol. He shops the market the same morning, cooks a bespoke menu in your kitchen in full view, and leaves the kitchen cleaner than he found it. Private dinners, villa weeks, hands-on workshops and small events, in English, Spanish or Dutch.",
      es: "Nick Toorn es un chef privado con formación Michelin que cocina en casas y villas de toda Marbella y la Costa del Sol. Compra en el mercado esa misma mañana, cocina un menú a medida en tu cocina y a la vista, y deja la cocina más limpia de lo que la encontró. Cenas privadas, semanas de villa, talleres y eventos pequeños, en español, inglés o neerlandés.",
      nl: "Nick Toorn is een Michelin-getrainde privéchef die kookt bij huizen en villa's in heel Marbella en aan de rest van de Costa del Sol. Hij doet 's ochtends de markt, kookt een menu op maat in jouw keuken in het volle zicht, en laat de keuken schoner achter dan hij hem aantrof. Privédiners, villaweken, workshops en kleine events, in het Nederlands, Engels of Spaans.",
    },
    body: {
      en: [
        "Most of my tables are in Marbella. The Golden Mile, Puerto Banús, Nueva Andalucía, Sierra Blanca, San Pedro, the hills behind La Quinta: I have cooked in kitchens of every size out here, from a two-burner apartment to villas where the kitchen has its own postcode. The address does not change the rule. One menu, built for the people in the room, cooked in front of them.",
        "A Marbella night usually starts at the market that morning. Whatever looks alive decides the menu's final shape. I drive in with knives, fire up your kitchen, and you do exactly nothing except hold a glass and welcome your guests. When you wake up the next day, the kitchen is clean and the story is yours.",
      ],
      es: [
        "La mayoría de mis mesas están en Marbella. La Milla de Oro, Puerto Banús, Nueva Andalucía, Sierra Blanca, San Pedro, las colinas detrás de La Quinta: he cocinado aquí en cocinas de todos los tamaños, desde un apartamento con dos fuegos hasta villas donde la cocina tiene su propio código postal. La dirección no cambia la regla. Un menú, construido para la gente de la sala, cocinado delante de ella.",
        "Una noche en Marbella suele empezar esa misma mañana en el mercado. Lo que está vivo decide la forma final del menú. Llego con mis cuchillos, enciendo tu cocina, y tú no haces absolutamente nada salvo sostener tu copa y recibir a tus invitados. Al despertar al día siguiente, la cocina está limpia y la historia es tuya.",
      ],
      nl: [
        "De meeste van mijn tafels staan in Marbella. De Golden Mile, Puerto Banús, Nueva Andalucía, Sierra Blanca, San Pedro, de heuvels achter La Quinta: ik heb hier in keukens van elk formaat gekookt, van een appartement met twee pitten tot villa's waar de keuken een eigen postcode heeft. Het adres verandert niks aan de regel. Eén menu, gebouwd voor de mensen in de kamer, gekookt waar ze bij zijn.",
        "Een avond in Marbella begint meestal die ochtend op de markt. Wat er goed bij ligt, bepaalt de uiteindelijke vorm van het menu. Ik rij voor met messen, stook jouw keuken op, en jij doet helemaal niets behalve je glas vasthouden en je gasten ontvangen. Als je de volgende dag wakker wordt, is de keuken schoon en is het verhaal van jou.",
      ],
    },
    faqs: [
      {
        q: {
          en: "What does a private chef in Marbella cost?",
          es: "¿Cuánto cuesta un chef privado en Marbella?",
          nl: "Wat kost een privéchef in Marbella?",
        },
        a: {
          en: "There is no fixed price list, because every menu is built from scratch for your table. The cost depends on the number of guests, the number of courses, and the ingredients we choose together. Send the date and party size through the contact form and you get a clear, personal quote within 24 hours.",
          es: "No hay tarifa fija, porque cada menú se construye desde cero para tu mesa. El precio depende del número de comensales, los pases y el producto que elijamos juntos. Envía la fecha y el número de personas por el formulario de contacto y recibes un presupuesto claro y personal en 24 horas.",
          nl: "Er is geen vaste prijslijst, omdat elk menu vanaf nul wordt gebouwd voor jouw tafel. De prijs hangt af van het aantal gasten, het aantal gangen en de ingrediënten die we samen kiezen. Stuur de datum en het aantal personen via het contactformulier en je krijgt binnen 24 uur een heldere, persoonlijke offerte.",
        },
      },
      {
        q: {
          en: "Which parts of Marbella do you cook in?",
          es: "¿En qué zonas de Marbella cocinas?",
          nl: "In welke delen van Marbella kook je?",
        },
        a: {
          en: "All of them. Golden Mile, Puerto Banús, Nueva Andalucía, San Pedro de Alcántara, Sierra Blanca, La Quinta, Elviria and East Marbella included. If you are slightly outside Marbella, that is rarely a problem: I cook along the whole Costa del Sol.",
          es: "En todas. Milla de Oro, Puerto Banús, Nueva Andalucía, San Pedro de Alcántara, Sierra Blanca, La Quinta, Elviria y Marbella Este incluidas. Si estás algo fuera de Marbella, rara vez es un problema: cocino por toda la Costa del Sol.",
          nl: "Overal. Golden Mile, Puerto Banús, Nueva Andalucía, San Pedro de Alcántara, Sierra Blanca, La Quinta, Elviria en Oost-Marbella inbegrepen. Zit je net buiten Marbella, dan is dat zelden een probleem: ik kook langs de hele Costa del Sol.",
        },
      },
      {
        q: {
          en: "What is included when I book a private dinner?",
          es: "¿Qué incluye una cena privada?",
          nl: "Wat is inbegrepen bij een privédiner?",
        },
        a: {
          en: "Everything around the food: the menu design, the morning shopping, cooking in your kitchen, serving course by course, and the full clean-up. You provide the kitchen and the guests. You wake up to a clean kitchen.",
          es: "Todo lo que rodea a la comida: el diseño del menú, la compra de la mañana, cocinar en tu cocina, servir pase a pase y la limpieza completa. Tú pones la cocina y los invitados. Despiertas con la cocina limpia.",
          nl: "Alles rond het eten: het menu-ontwerp, de boodschappen die ochtend, het koken in jouw keuken, het uitserveren gang voor gang en de volledige afwas. Jij zorgt voor de keuken en de gasten. Je wordt wakker met een schone keuken.",
        },
      },
      {
        q: {
          en: "How far in advance should I book a private chef in Marbella?",
          es: "¿Con cuánta antelación debo reservar un chef privado en Marbella?",
          nl: "Hoe ver van tevoren moet ik een privéchef in Marbella boeken?",
        },
        a: {
          en: "For villa weeks and high-season dates (July, August, holidays), book as early as you can; those fill first. A single dinner can often be arranged within the same week if the calendar allows. Sending the date early never hurts: you get an answer within 24 hours either way.",
          es: "Para semanas de villa y fechas de temporada alta (julio, agosto, festivos), reserva lo antes posible; eso se llena primero. Una cena suelta a menudo se puede organizar en la misma semana si el calendario lo permite. Enviar la fecha pronto nunca está de más: en cualquier caso respondo en 24 horas.",
          nl: "Voor villaweken en hoogseizoendata (juli, augustus, feestdagen) boek je zo vroeg mogelijk; die zitten het eerst vol. Een los diner kan vaak nog in dezelfde week als de agenda het toelaat. Vroeg je datum doorsturen kan nooit kwaad: je krijgt hoe dan ook binnen 24 uur antwoord.",
        },
      },
    ],
  },
  {
    slug: "estepona",
    name: "Estepona",
    geo: { lat: 36.4276, lng: -5.145 },
    title: {
      en: "Private chef in Estepona",
      es: "Chef privado en Estepona",
      nl: "Privéchef in Estepona",
    },
    metaTitle: {
      en: "Private chef in Estepona · Michelin-trained, at your villa",
      es: "Chef privado en Estepona · Formación Michelin, en tu villa",
      nl: "Privéchef in Estepona · Michelin-getraind, bij jou aan huis",
    },
    metaDescription: {
      en: "Private dinners, villa weeks and workshops at homes in Estepona and the New Golden Mile, by Michelin-trained chef Nick Toorn. Market-fresh menus, cooked in your kitchen, in English, Spanish or Dutch.",
      es: "Cenas privadas, semanas de villa y talleres en casas de Estepona y la Nueva Milla de Oro, por el chef con formación Michelin Nick Toorn. Menús de mercado, cocinados en tu cocina, en español, inglés o neerlandés.",
      nl: "Privédiners, villaweken en workshops aan huis in Estepona en de New Golden Mile, door Michelin-getrainde chef Nick Toorn. Marktverse menu's, gekookt in jouw keuken, in het Nederlands, Engels of Spaans.",
    },
    definition: {
      en: "Nick Toorn is a Michelin-trained private chef who cooks at homes and villas in Estepona and along the New Golden Mile. He buys at the market that morning, cooks a bespoke menu in your kitchen, serves it course by course and cleans up after. Private dinners, villa weeks, workshops and small events, in English, Spanish or Dutch.",
      es: "Nick Toorn es un chef privado con formación Michelin que cocina en casas y villas de Estepona y la Nueva Milla de Oro. Compra en el mercado esa mañana, cocina un menú a medida en tu cocina, lo sirve pase a pase y recoge después. Cenas privadas, semanas de villa, talleres y eventos pequeños, en español, inglés o neerlandés.",
      nl: "Nick Toorn is een Michelin-getrainde privéchef die kookt bij huizen en villa's in Estepona en langs de New Golden Mile. Hij koopt die ochtend in op de markt, kookt een menu op maat in jouw keuken, serveert gang voor gang en ruimt daarna op. Privédiners, villaweken, workshops en kleine events, in het Nederlands, Engels of Spaans.",
    },
    body: {
      en: [
        "Estepona is the quieter end of the coast, and I mean that as a compliment. The old town with its flower-hung streets still behaves like a Spanish town, and the villas along the New Golden Mile come with the kind of terraces that were built for long dinners. That is my natural habitat.",
        "The shape of the night is the same as everywhere I cook: market in the morning, your kitchen in the evening, one menu built for the people at the table. The difference Estepona makes is pace. Nobody is in a hurry here, and the menu gets to breathe.",
      ],
      es: [
        "Estepona es el extremo tranquilo de la costa, y lo digo como un cumplido. El casco antiguo, con sus calles llenas de flores, todavía se comporta como un pueblo español, y las villas de la Nueva Milla de Oro tienen esas terrazas hechas para cenas largas. Ese es mi hábitat natural.",
        "La forma de la noche es la misma que en cualquier sitio donde cocino: mercado por la mañana, tu cocina por la tarde, un menú construido para la gente de la mesa. La diferencia de Estepona es el ritmo. Aquí nadie tiene prisa, y el menú respira.",
      ],
      nl: [
        "Estepona is het rustige uiteinde van de kust, en dat bedoel ik als compliment. Het oude centrum met zijn bloemenstraten gedraagt zich nog als een Spaans dorp, en de villa's langs de New Golden Mile hebben van die terrassen die gebouwd zijn voor lange diners. Dat is mijn natuurlijke habitat.",
        "De vorm van de avond is hetzelfde als overal waar ik kook: 's ochtends de markt, 's avonds jouw keuken, één menu gebouwd voor de mensen aan tafel. Het verschil van Estepona is het tempo. Niemand heeft hier haast, en het menu krijgt de ruimte om te ademen.",
      ],
    },
    faqs: [
      {
        q: {
          en: "Do you cook on the New Golden Mile and around Estepona?",
          es: "¿Cocinas en la Nueva Milla de Oro y alrededores de Estepona?",
          nl: "Kook je op de New Golden Mile en rond Estepona?",
        },
        a: {
          en: "Yes. Estepona town, the New Golden Mile towards San Pedro, Cancelada, Selwo, Costalita and the hills behind all fall inside my normal range. I cook along the whole Costa del Sol, so an address slightly further out is rarely a problem.",
          es: "Sí. El centro de Estepona, la Nueva Milla de Oro hacia San Pedro, Cancelada, Selwo, Costalita y las colinas de detrás entran en mi radio habitual. Cocino por toda la Costa del Sol, así que una dirección algo más lejos rara vez es un problema.",
          nl: "Ja. Estepona-stad, de New Golden Mile richting San Pedro, Cancelada, Selwo, Costalita en de heuvels erachter vallen binnen mijn normale bereik. Ik kook langs de hele Costa del Sol, dus een adres net iets verder weg is zelden een probleem.",
        },
      },
      {
        q: {
          en: "What does a private chef in Estepona cost?",
          es: "¿Cuánto cuesta un chef privado en Estepona?",
          nl: "Wat kost een privéchef in Estepona?",
        },
        a: {
          en: "Every menu is bespoke, so there is no fixed rate. The price follows the number of guests, the courses and the ingredients. Share your date and group size through the contact form and a personal quote arrives within 24 hours.",
          es: "Cada menú es a medida, así que no hay tarifa fija. El precio depende del número de comensales, los pases y el producto. Comparte tu fecha y el tamaño del grupo por el formulario de contacto y recibirás un presupuesto personal en 24 horas.",
          nl: "Elk menu is maatwerk, dus er is geen vast tarief. De prijs volgt uit het aantal gasten, de gangen en de ingrediënten. Deel je datum en groepsgrootte via het contactformulier en je ontvangt binnen 24 uur een persoonlijke offerte.",
        },
      },
      {
        q: {
          en: "Can you cook for a full villa week in Estepona?",
          es: "¿Puedes cocinar una semana entera de villa en Estepona?",
          nl: "Kun je een hele villaweek koken in Estepona?",
        },
        a: {
          en: "Yes. A villa takeover means dinner every night, with lunches and breakfasts optional. The menus change daily with the market, so a week never repeats itself. Book villa weeks as early as possible; they fill before single dinners do.",
          es: "Sí. Una semana de villa significa cena cada noche, con almuerzos y desayunos opcionales. Los menús cambian a diario con el mercado, así que una semana nunca se repite. Reserva las semanas de villa lo antes posible; se llenan antes que las cenas sueltas.",
          nl: "Ja. Een villaweek betekent elke avond diner, met lunches en ontbijt als optie. De menu's veranderen dagelijks met de markt, dus een week herhaalt zichzelf nooit. Boek villaweken zo vroeg mogelijk; die zitten eerder vol dan losse diners.",
        },
      },
      {
        q: {
          en: "What kind of kitchen do you need?",
          es: "¿Qué tipo de cocina necesitas?",
          nl: "Wat voor keuken heb je nodig?",
        },
        a: {
          en: "A normal household kitchen is enough. I have cooked full tasting menus on two burners. Tell me what your kitchen looks like when you book, and the menu is designed around what the kitchen can actually do.",
          es: "Con una cocina doméstica normal es suficiente. He cocinado menús degustación completos con dos fuegos. Cuéntame cómo es tu cocina al reservar, y el menú se diseña según lo que la cocina realmente puede hacer.",
          nl: "Een normale huiskeuken is genoeg. Ik heb complete proeverijmenu's gekookt op twee pitten. Vertel bij het boeken hoe je keuken eruitziet, dan wordt het menu ontworpen rond wat de keuken echt kan.",
        },
      },
    ],
  },
  {
    slug: "sotogrande",
    name: "Sotogrande",
    geo: { lat: 36.2847, lng: -5.2728 },
    title: {
      en: "Private chef in Sotogrande",
      es: "Chef privado en Sotogrande",
      nl: "Privéchef in Sotogrande",
    },
    metaTitle: {
      en: "Private chef in Sotogrande · Michelin-trained, at your villa",
      es: "Chef privado en Sotogrande · Formación Michelin, en tu villa",
      nl: "Privéchef in Sotogrande · Michelin-getraind, bij jou aan huis",
    },
    metaDescription: {
      en: "Private dinners, villa weeks and small events at homes in Sotogrande, by Michelin-trained chef Nick Toorn. Bespoke market menus cooked in your kitchen, in English, Spanish or Dutch.",
      es: "Cenas privadas, semanas de villa y eventos pequeños en casas de Sotogrande, por el chef con formación Michelin Nick Toorn. Menús de mercado a medida, cocinados en tu cocina, en español, inglés o neerlandés.",
      nl: "Privédiners, villaweken en kleine events aan huis in Sotogrande, door Michelin-getrainde chef Nick Toorn. Menu's op maat van de markt, gekookt in jouw keuken, in het Nederlands, Engels of Spaans.",
    },
    definition: {
      en: "Nick Toorn is a Michelin-trained private chef who cooks at homes and villas in Sotogrande, from the marina to the gated zones and La Reserva. He shops fresh the same day, cooks a bespoke menu in your kitchen and handles everything from shopping to clean-up. Private dinners, villa weeks, workshops and small events, in English, Spanish or Dutch.",
      es: "Nick Toorn es un chef privado con formación Michelin que cocina en casas y villas de Sotogrande, del puerto a las zonas residenciales y La Reserva. Compra fresco ese mismo día, cocina un menú a medida en tu cocina y se encarga de todo, de la compra a la limpieza. Cenas privadas, semanas de villa, talleres y eventos pequeños, en español, inglés o neerlandés.",
      nl: "Nick Toorn is een Michelin-getrainde privéchef die kookt bij huizen en villa's in Sotogrande, van de jachthaven tot de afgesloten woonwijken en La Reserva. Hij koopt dezelfde dag vers in, kookt een menu op maat in jouw keuken en regelt alles van boodschappen tot afwas. Privédiners, villaweken, workshops en kleine events, in het Nederlands, Engels of Spaans.",
    },
    body: {
      en: [
        "Sotogrande knows what it likes: long lunches by the marina, polo summers, dinners that start late and end later. The houses are built around their tables, which makes my job a pleasure. I come to you, the kitchen wakes up, and the dining room does what it was designed for.",
        "It is a longer drive from my end of the coast and I make it gladly. Same rules as everywhere: the market decides the final menu, the menu is built for your table only, and the kitchen is spotless when you come down for coffee.",
      ],
      es: [
        "Sotogrande sabe lo que le gusta: almuerzos largos junto al puerto, veranos de polo, cenas que empiezan tarde y terminan más tarde. Las casas están construidas alrededor de sus mesas, lo que convierte mi trabajo en un placer. Voy a tu casa, la cocina se despierta, y el comedor hace aquello para lo que fue diseñado.",
        "Desde mi punta de la costa es un trayecto más largo y lo hago con gusto. Las mismas reglas de siempre: el mercado decide el menú final, el menú se construye solo para tu mesa, y la cocina queda impecable cuando bajas a por el café.",
      ],
      nl: [
        "Sotogrande weet wat het wil: lange lunches aan de jachthaven, polozomers, diners die laat beginnen en later eindigen. De huizen zijn om hun eettafels heen gebouwd, en dat maakt mijn werk een feest. Ik kom naar jou, de keuken komt tot leven, en de eetkamer doet waarvoor hij ontworpen is.",
        "Vanaf mijn kant van de kust is het een langere rit en ik maak hem graag. Dezelfde regels als overal: de markt bepaalt het uiteindelijke menu, het menu wordt alleen voor jouw tafel gebouwd, en de keuken is brandschoon als jij beneden komt voor koffie.",
      ],
    },
    faqs: [
      {
        q: {
          en: "Do you travel to Sotogrande for a single dinner?",
          es: "¿Te desplazas a Sotogrande para una sola cena?",
          nl: "Kom je naar Sotogrande voor één diner?",
        },
        a: {
          en: "Yes. Sotogrande is part of my regular range, single dinners included. For dates in high season it is smart to book early, because travel days around villa weeks fill up first.",
          es: "Sí. Sotogrande entra en mi radio habitual, cenas sueltas incluidas. Para fechas de temporada alta conviene reservar pronto, porque los días alrededor de las semanas de villa se llenan primero.",
          nl: "Ja. Sotogrande hoort bij mijn vaste bereik, losse diners inbegrepen. Voor data in het hoogseizoen is vroeg boeken slim, want de dagen rond villaweken zitten het eerst vol.",
        },
      },
      {
        q: {
          en: "What does a private chef in Sotogrande cost?",
          es: "¿Cuánto cuesta un chef privado en Sotogrande?",
          nl: "Wat kost een privéchef in Sotogrande?",
        },
        a: {
          en: "There is no fixed price list. Every quote is personal and depends on guests, courses and ingredients. Send your date and party size through the contact form; you get a clear quote within 24 hours.",
          es: "No hay tarifa fija. Cada presupuesto es personal y depende de los comensales, los pases y el producto. Envía tu fecha y número de personas por el formulario; recibes un presupuesto claro en 24 horas.",
          nl: "Er is geen vaste prijslijst. Elke offerte is persoonlijk en hangt af van gasten, gangen en ingrediënten. Stuur je datum en aantal personen via het formulier; je krijgt binnen 24 uur een heldere offerte.",
        },
      },
      {
        q: {
          en: "Can you cook for an event or a group at a Sotogrande villa?",
          es: "¿Puedes cocinar para un evento o un grupo en una villa de Sotogrande?",
          nl: "Kun je koken voor een event of groep in een villa in Sotogrande?",
        },
        a: {
          en: "Yes, small events and groups are part of the work: birthdays, golf weeks, family gatherings, company dinners. The practical limit is usually the kitchen and the table, not the guest count. Describe the occasion and the space, and you get an honest answer about what works.",
          es: "Sí, los eventos pequeños y los grupos son parte del trabajo: cumpleaños, semanas de golf, reuniones familiares, cenas de empresa. El límite práctico suele ser la cocina y la mesa, no el número de invitados. Describe la ocasión y el espacio, y recibirás una respuesta honesta sobre lo que funciona.",
          nl: "Ja, kleine events en groepen horen bij het werk: verjaardagen, golfweken, familieweekenden, bedrijfsdiners. De praktische grens is meestal de keuken en de tafel, niet het aantal gasten. Omschrijf de gelegenheid en de ruimte, en je krijgt een eerlijk antwoord over wat er kan.",
        },
      },
      {
        q: {
          en: "Do you handle dietary requirements and allergies?",
          es: "¿Trabajas con alergias y restricciones alimentarias?",
          nl: "Houd je rekening met allergieën en dieetwensen?",
        },
        a: {
          en: "Always. The menu is designed after we talk about the table: what people love, what they avoid, what they are allergic to. Vegetarian, pescatarian, gluten-free or halal tables are all normal requests, not exceptions.",
          es: "Siempre. El menú se diseña después de hablar de la mesa: lo que le encanta a la gente, lo que evita, a qué es alérgica. Mesas vegetarianas, pescetarianas, sin gluten o halal son peticiones normales, no excepciones.",
          nl: "Altijd. Het menu wordt ontworpen nadat we de tafel hebben besproken: waar mensen van houden, wat ze vermijden, waar ze allergisch voor zijn. Vegetarisch, pescotarisch, glutenvrij of halal zijn normale verzoeken, geen uitzonderingen.",
        },
      },
    ],
  },
  {
    slug: "benahavis",
    name: "Benahavís",
    geo: { lat: 36.5215, lng: -5.0457 },
    title: {
      en: "Private chef in Benahavís",
      es: "Chef privado en Benahavís",
      nl: "Privéchef in Benahavís",
    },
    metaTitle: {
      en: "Private chef in Benahavís · Michelin-trained, at your villa",
      es: "Chef privado en Benahavís · Formación Michelin, en tu villa",
      nl: "Privéchef in Benahavís · Michelin-getraind, bij jou aan huis",
    },
    metaDescription: {
      en: "Private dinners and villa weeks in the hills of Benahavís, La Zagaleta, El Madroñal and Los Arqueros, by Michelin-trained chef Nick Toorn. Bespoke menus cooked in your kitchen, in English, Spanish or Dutch.",
      es: "Cenas privadas y semanas de villa en las colinas de Benahavís, La Zagaleta, El Madroñal y Los Arqueros, por el chef con formación Michelin Nick Toorn. Menús a medida cocinados en tu cocina, en español, inglés o neerlandés.",
      nl: "Privédiners en villaweken in de heuvels van Benahavís, La Zagaleta, El Madroñal en Los Arqueros, door Michelin-getrainde chef Nick Toorn. Menu's op maat, gekookt in jouw keuken, in het Nederlands, Engels of Spaans.",
    },
    definition: {
      en: "Nick Toorn is a Michelin-trained private chef who cooks at villas in and around Benahavís, including La Zagaleta, El Madroñal, Los Arqueros and La Heredia. He shops the market that morning, cooks a bespoke menu in your own kitchen and leaves it clean. Private dinners, villa weeks, workshops and small events, in English, Spanish or Dutch.",
      es: "Nick Toorn es un chef privado con formación Michelin que cocina en villas de Benahavís y alrededores, incluidas La Zagaleta, El Madroñal, Los Arqueros y La Heredia. Compra en el mercado esa mañana, cocina un menú a medida en tu propia cocina y la deja limpia. Cenas privadas, semanas de villa, talleres y eventos pequeños, en español, inglés o neerlandés.",
      nl: "Nick Toorn is een Michelin-getrainde privéchef die kookt bij villa's in en rond Benahavís, waaronder La Zagaleta, El Madroñal, Los Arqueros en La Heredia. Hij doet die ochtend de markt, kookt een menu op maat in je eigen keuken en laat hem schoon achter. Privédiners, villaweken, workshops en kleine events, in het Nederlands, Engels of Spaans.",
    },
    body: {
      en: [
        "Benahavís calls itself the dining room of the Costa del Sol, a village in the hills famous for its restaurants. Fair enough. But the best dining room up here is the one in your own villa, with a view the restaurants cannot book and a menu nobody else at the table has eaten before.",
        "I cook a lot behind gates up here: La Zagaleta, El Madroñal, the golf urbanizations towards La Quinta. The drive up the hill is part of the ritual, and the produce in the boot decides how the night ends.",
      ],
      es: [
        "Benahavís se llama a sí mismo el comedor de la Costa del Sol, un pueblo en las colinas famoso por sus restaurantes. De acuerdo. Pero el mejor comedor aquí arriba es el de tu propia villa, con una vista que los restaurantes no pueden reservar y un menú que nadie en la mesa ha comido antes.",
        "Cocino mucho detrás de las puertas de aquí arriba: La Zagaleta, El Madroñal, las urbanizaciones de golf hacia La Quinta. La subida de la colina es parte del ritual, y el producto en el maletero decide cómo termina la noche.",
      ],
      nl: [
        "Benahavís noemt zichzelf de eetkamer van de Costa del Sol, een dorp in de heuvels dat beroemd is om zijn restaurants. Prima. Maar de beste eetkamer hierboven is die van je eigen villa, met een uitzicht dat de restaurants niet kunnen reserveren en een menu dat niemand aan tafel ooit eerder at.",
        "Ik kook hier veel achter hekken: La Zagaleta, El Madroñal, de golfurbanisaties richting La Quinta. De rit de heuvel op hoort bij het ritueel, en het product in de kofferbak bepaalt hoe de avond eindigt.",
      ],
    },
    faqs: [
      {
        q: {
          en: "Do you cook in La Zagaleta and El Madroñal?",
          es: "¿Cocinas en La Zagaleta y El Madroñal?",
          nl: "Kook je in La Zagaleta en El Madroñal?",
        },
        a: {
          en: "Yes. Gated communities around Benahavís, including La Zagaleta, El Madroñal, Los Arqueros, La Heredia and Monte Mayor, are part of my regular working area. Gate access just needs arranging in advance, which we sort when you book.",
          es: "Sí. Las urbanizaciones cerradas alrededor de Benahavís, incluidas La Zagaleta, El Madroñal, Los Arqueros, La Heredia y Monte Mayor, forman parte de mi zona habitual de trabajo. Solo hay que organizar el acceso con antelación, y eso lo resolvemos al reservar.",
          nl: "Ja. Afgesloten urbanisaties rond Benahavís, waaronder La Zagaleta, El Madroñal, Los Arqueros, La Heredia en Monte Mayor, horen bij mijn vaste werkgebied. De toegang bij de poort moet vooraf geregeld worden, en dat doen we bij het boeken.",
        },
      },
      {
        q: {
          en: "What does a private chef in Benahavís cost?",
          es: "¿Cuánto cuesta un chef privado en Benahavís?",
          nl: "Wat kost een privéchef in Benahavís?",
        },
        a: {
          en: "Bespoke only, so no fixed menu card and no fixed price. Guests, courses and ingredients set the quote. Use the contact form with your date and group size; the personal quote follows within 24 hours.",
          es: "Solo a medida, así que sin carta fija y sin precio fijo. Los comensales, los pases y el producto definen el presupuesto. Usa el formulario con tu fecha y tamaño de grupo; el presupuesto personal llega en 24 horas.",
          nl: "Alleen maatwerk, dus geen vaste kaart en geen vaste prijs. Gasten, gangen en ingrediënten bepalen de offerte. Gebruik het contactformulier met je datum en groepsgrootte; de persoonlijke offerte volgt binnen 24 uur.",
        },
      },
      {
        q: {
          en: "Why book a private chef instead of going down to the village restaurants?",
          es: "¿Por qué reservar un chef privado en vez de bajar a los restaurantes del pueblo?",
          nl: "Waarom een privéchef boeken in plaats van afdalen naar de dorpsrestaurants?",
        },
        a: {
          en: "Because nobody has to drive down the hill afterwards. The menu is built for your table alone, the kitchen is in full view, the wine is your own cellar, and the night ends on your terrace instead of in a car. The restaurants are good; your dining room is better.",
          es: "Porque después nadie tiene que bajar la colina en coche. El menú se construye solo para tu mesa, la cocina está a la vista, el vino es el de tu propia bodega, y la noche termina en tu terraza y no en un coche. Los restaurantes son buenos; tu comedor es mejor.",
          nl: "Omdat niemand daarna nog de heuvel af hoeft te rijden. Het menu wordt alleen voor jouw tafel gebouwd, de keuken is in het volle zicht, de wijn komt uit je eigen kelder, en de avond eindigt op je terras in plaats van in een auto. De restaurants zijn goed; jouw eetkamer is beter.",
        },
      },
      {
        q: {
          en: "Can you do a cooking workshop at our villa?",
          es: "¿Puedes dar un taller de cocina en nuestra villa?",
          nl: "Kun je een kookworkshop geven in onze villa?",
        },
        a: {
          en: "Yes. Hands-on workshops for small groups are one of the four things I do, next to private dinners, villa weeks and events. You cook, I steer, everyone eats the result. It works well as a daytime activity during a villa week.",
          es: "Sí. Los talleres prácticos para grupos pequeños son una de las cuatro cosas que hago, junto a cenas privadas, semanas de villa y eventos. Tú cocinas, yo dirijo, todos se comen el resultado. Funciona muy bien como actividad de día durante una semana de villa.",
          nl: "Ja. Praktische workshops voor kleine groepen zijn één van de vier dingen die ik doe, naast privédiners, villaweken en events. Jij kookt, ik stuur bij, iedereen eet het resultaat. Het werkt goed als dagactiviteit tijdens een villaweek.",
        },
      },
    ],
  },
  {
    slug: "malaga",
    name: "Málaga",
    geo: { lat: 36.7213, lng: -4.4214 },
    title: {
      en: "Private chef in Málaga",
      es: "Chef privado en Málaga",
      nl: "Privéchef in Málaga",
    },
    metaTitle: {
      en: "Private chef in Málaga · Michelin-trained, at your home",
      es: "Chef privado en Málaga · Formación Michelin, en tu casa",
      nl: "Privéchef in Málaga · Michelin-getraind, bij jou thuis",
    },
    metaDescription: {
      en: "Private dinners, workshops and small events at homes in Málaga city and along the coast, by Michelin-trained chef Nick Toorn. Atarazanas-fresh menus cooked in your kitchen, in English, Spanish or Dutch.",
      es: "Cenas privadas, talleres y eventos pequeños en casas de Málaga capital y la costa, por el chef con formación Michelin Nick Toorn. Menús frescos de Atarazanas cocinados en tu cocina, en español, inglés o neerlandés.",
      nl: "Privédiners, workshops en kleine events aan huis in Málaga-stad en langs de kust, door Michelin-getrainde chef Nick Toorn. Atarazanas-verse menu's gekookt in jouw keuken, in het Nederlands, Engels of Spaans.",
    },
    definition: {
      en: "Nick Toorn is a Michelin-trained private chef who cooks at homes and apartments in Málaga city and the surrounding coast, from the historic centre and Soho to El Limonar and Pedregalejo. He shops at the market the same day, cooks a bespoke menu in your kitchen and cleans up after service. Private dinners, workshops and small events, in English, Spanish or Dutch.",
      es: "Nick Toorn es un chef privado con formación Michelin que cocina en casas y pisos de Málaga capital y la costa cercana, del centro histórico y el Soho a El Limonar y Pedregalejo. Compra en el mercado ese mismo día, cocina un menú a medida en tu cocina y recoge después del servicio. Cenas privadas, talleres y eventos pequeños, en español, inglés o neerlandés.",
      nl: "Nick Toorn is een Michelin-getrainde privéchef die kookt bij huizen en appartementen in Málaga-stad en de kust eromheen, van het historisch centrum en Soho tot El Limonar en Pedregalejo. Hij koopt dezelfde dag in op de markt, kookt een menu op maat in jouw keuken en ruimt na de service op. Privédiners, workshops en kleine events, in het Nederlands, Engels of Spaans.",
    },
    body: {
      en: [
        "Málaga is where the coast stops performing and starts living. The Atarazanas market alone is worth the booking: when I cook in the city, the menu gets decided there, between the fish counters and the men arguing about tomatoes. City apartments, rooftop terraces, family houses in El Limonar, beach houses out in Pedregalejo: the table changes, the rule does not.",
        "A city dinner has its own rhythm. Smaller kitchens, closer tables, the night leaning more towards conversation than spectacle. I like it that way. You hear the pans. You smell the sherry hitting the steel. That is the show.",
      ],
      es: [
        "Málaga es donde la costa deja de actuar y empieza a vivir. Solo el mercado de Atarazanas ya justifica la reserva: cuando cocino en la ciudad, el menú se decide allí, entre los mostradores de pescado y los hombres discutiendo de tomates. Pisos en el centro, áticos con terraza, casas familiares en El Limonar, casas de playa en Pedregalejo: la mesa cambia, la regla no.",
        "Una cena en la ciudad tiene su propio ritmo. Cocinas más pequeñas, mesas más cercanas, la noche más inclinada a la conversación que al espectáculo. Me gusta así. Se oyen las sartenes. Se huele el jerez tocando el acero. Ese es el espectáculo.",
      ],
      nl: [
        "Málaga is waar de kust stopt met optreden en begint te leven. De Atarazanas-markt alleen al is de boeking waard: als ik in de stad kook, wordt het menu daar beslist, tussen de visbanken en de mannen die ruziën over tomaten. Stadsappartementen, dakterrassen, familiehuizen in El Limonar, strandhuizen in Pedregalejo: de tafel verandert, de regel niet.",
        "Een stadsdiner heeft zijn eigen ritme. Kleinere keukens, tafels dichterbij, de avond leunt meer naar gesprek dan naar spektakel. Zo heb ik het graag. Je hoort de pannen. Je ruikt de sherry op het staal. Dat is de show.",
      ],
    },
    faqs: [
      {
        q: {
          en: "Do you cook in apartments in Málaga's city centre?",
          es: "¿Cocinas en pisos del centro de Málaga?",
          nl: "Kook je in appartementen in het centrum van Málaga?",
        },
        a: {
          en: "Yes, often. A city kitchen is usually smaller than a villa kitchen and that is fine: the menu is designed around what your kitchen can do. Tell me about the space when you book and everything else follows.",
          es: "Sí, a menudo. Una cocina de ciudad suele ser más pequeña que la de una villa y no pasa nada: el menú se diseña según lo que tu cocina puede hacer. Cuéntame cómo es el espacio al reservar y todo lo demás viene solo.",
          nl: "Ja, vaak. Een stadskeuken is meestal kleiner dan een villakeuken en dat is prima: het menu wordt ontworpen rond wat jouw keuken kan. Vertel bij het boeken iets over de ruimte en de rest volgt vanzelf.",
        },
      },
      {
        q: {
          en: "What does a private chef in Málaga cost?",
          es: "¿Cuánto cuesta un chef privado en Málaga?",
          nl: "Wat kost een privéchef in Málaga?",
        },
        a: {
          en: "No fixed prices: every menu is built for your table, so every quote is personal. Number of guests, number of courses and the ingredients determine the price. Send your date through the contact form and you hear back within 24 hours.",
          es: "Sin precios fijos: cada menú se construye para tu mesa, así que cada presupuesto es personal. El número de comensales, los pases y el producto determinan el precio. Envía tu fecha por el formulario y tendrás respuesta en 24 horas.",
          nl: "Geen vaste prijzen: elk menu wordt voor jouw tafel gebouwd, dus elke offerte is persoonlijk. Het aantal gasten, het aantal gangen en de ingrediënten bepalen de prijs. Stuur je datum via het formulier en je hoort binnen 24 uur terug.",
        },
      },
      {
        q: {
          en: "Where do you buy your ingredients in Málaga?",
          es: "¿Dónde compras el producto en Málaga?",
          nl: "Waar koop je je ingrediënten in Málaga?",
        },
        a: {
          en: "At the market, the same day, with Atarazanas as the obvious first stop in the city. The morning's catch and whatever looks best at the stalls decide the final shape of the menu. That is not a slogan; it is how the menu literally gets finished.",
          es: "En el mercado, ese mismo día, con Atarazanas como primera parada obvia en la ciudad. La pesca de la mañana y lo mejor de los puestos deciden la forma final del menú. No es un eslogan; es literalmente cómo se termina el menú.",
          nl: "Op de markt, dezelfde dag, met Atarazanas als logische eerste stop in de stad. De vangst van die ochtend en wat er het mooist bij ligt, bepalen de uiteindelijke vorm van het menu. Dat is geen slogan; zo wordt het menu letterlijk afgemaakt.",
        },
      },
      {
        q: {
          en: "Do you also serve the towns between Málaga and Marbella?",
          es: "¿Cubres también los pueblos entre Málaga y Marbella?",
          nl: "Bedien je ook de plaatsen tussen Málaga en Marbella?",
        },
        a: {
          en: "Yes. Torremolinos, Benalmádena, Fuengirola, Mijas and everything in between fall inside my normal range; my own kitchen sits in the middle of that stretch. The whole Costa del Sol is the working area.",
          es: "Sí. Torremolinos, Benalmádena, Fuengirola, Mijas y todo lo que hay en medio entran en mi radio normal; mi propia cocina está en mitad de ese tramo. Toda la Costa del Sol es la zona de trabajo.",
          nl: "Ja. Torremolinos, Benalmádena, Fuengirola, Mijas en alles daartussen vallen binnen mijn normale bereik; mijn eigen keuken staat midden op dat stuk. De hele Costa del Sol is het werkgebied.",
        },
      },
    ],
  },
];
