import type { LocalisedRecipe } from "@/lib/types";

/**
 * Concept recipes. Written in Nick's voice as placeholders until the real
 * cookbook copy lands. Every translatable field is a `{ en, es, nl }` trio;
 * `src/lib/content/recipes.ts` flattens it to the active locale.
 *
 * Voice notes: raw-edge, direct, no fluff. No em-dashes (brand rule), italics
 * where Nick's voice asks for them. Spanish skews Andalusian (warm, diminutives
 * where natural), English is intimate-but-clean for the Marbella expat ear.
 */
export const recipes: LocalisedRecipe[] = [
  {
    slug: "brioche-mortadella-pistache",
    title: {
      en: "Brioche with mortadella, pistachio cream and pistachio crumble",
      es: "Brioche con mortadela, crema de pistacho y crumble de pistacho",
      nl: "Brioche met mortadella, pistachecrème en pistache-crumble",
    },
    intro: {
      en: "An open bun, salt-creamy, velvet with a crunch. Two bites of work.",
      es: "Un bollo abierto, salado y cremoso, terciopelo con crujido. Dos bocados de trabajo.",
      nl: "Open broodje, zout-romig, fluweelzacht met een crunch. Twee happen werk.",
    },
    category: "voor",
    seasons: ["altijd"],
    difficulty: 2,
    prepMinutes: 30,
    cookMinutes: 10,
    servings: 2,
    heroImage: "/images/recipes/brioche-mortadella-pistache.jpg",
    pairing: {
      en: "Chilled Verdejo or a glass of dry cava.",
      es: "Verdejo bien frío o una copa de cava brut.",
      nl: "IJskoude Verdejo of een glas droge cava.",
    },
    body: {
      en: [
        "The first time I had real mortadella was at a tiny deli on Calle Ancha in Marbella, a Tuesday morning, no other customers in the shop. The owner, an Italian called Beppe who hadn't lost his Emilia accent in twenty years on the coast, sliced a piece paper-thin and pushed it across the counter without saying a word. The fat dissolved before I could chew it. The pistachio came later. Almost an afterthought from a friend who'd been to Bronte and wouldn't shut up about it.",
        "Everything you've ever eaten called mortadella in a Dutch supermarket is plastic. Pink rubber with white squares pretending to be fat. The real thing, sliced thin enough that the light comes through, tastes like nothing and everything at once. Pork, salt, pistachio, time. The cream you make on top is just the pistachio finding the volume to match it.",
        "I serve this as the first thing to land on the table when villa guests arrive and they haven't sat down yet. Two bites, no fork, just hands. By the time they figure out what they ate the bottle is open and the evening is already underway.",
      ],
      es: [
        "La primera vez que probé mortadela de verdad fue en una pequeña charcutería de la Calle Ancha en Marbella, un martes por la mañana, ningún otro cliente en la tienda. El dueño, un italiano llamado Beppe que no había perdido su acento emiliano en veinte años de costa, cortó una loncha finísima y la deslizó sobre el mostrador sin decir palabra. La grasa se deshacía antes de masticar. El pistacho llegó después. Un capricho de un amigo que había estado en Bronte y no paraba de hablar de ello.",
        "Todo lo que has comido y se llamaba mortadela en un súper holandés es plástico. Goma rosa con cuadritos blancos haciéndose pasar por grasa. La de verdad, cortada tan fina que pasa la luz, sabe a nada y a todo a la vez. Cerdo, sal, pistacho, tiempo. La crema encima sólo es el pistacho encontrando el volumen para acompañarla.",
        "Lo sirvo como lo primero que llega a la mesa cuando los invitados aún ni se han sentado. Dos bocados, sin tenedor, sólo manos. Para cuando entienden qué han comido la botella ya está abierta y la noche ha empezado.",
      ],
      nl: [
        "De eerste keer dat ik écht mortadella proefde was bij een piepkleine delicatessenwinkel aan de Calle Ancha in Marbella, een dinsdagochtend, geen andere klant in de zaak. De eigenaar, een Italiaan met de naam Beppe die zijn Emiliaanse accent in twintig jaar aan de kust niet was kwijtgeraakt, sneed een flinterdunne plak en schoof 'm zonder iets te zeggen over de toonbank. Het vet loste op voordat ik kon kauwen. De pistache kwam later. Een idee van een vriend die in Bronte was geweest en er niet over kon ophouden.",
        "Alles wat je ooit hebt gegeten dat mortadella heette in een Nederlandse supermarkt is plastic. Roze rubber met witte vierkantjes die voor vet doorgaan. Het echte werk, dun genoeg gesneden zodat het licht erdoor valt, smaakt naar niets en alles tegelijk. Varken, zout, pistache, tijd. De crème die je erop maakt is gewoon de pistache die het volume vindt om mee te kunnen.",
        "Ik serveer dit als eerste op tafel als villagasten net binnen zijn en nog niet zitten. Twee happen, geen vork, alleen handen. Tegen de tijd dat ze doorhebben wat ze hebben gegeten is de fles open en is de avond al begonnen.",
      ],
    },
    nowPlaying: {
      track: "Tintarella di luna",
      artist: "Mina",
    },
    marginalia: [
      {
        id: "brio-1",
        kind: "warning",
        anchor: "ingredients",
        body: {
          en: "Mortadella at room temperature. Cold is rubber, warm is velvet.",
          es: "La mortadela a temperatura ambiente. Fría es goma, templada es terciopelo.",
          nl: "Mortadella op kamertemperatuur. Koud is rubber, op temperatuur is fluweel.",
        },
      },
      {
        id: "brio-2",
        kind: "tip",
        anchor: "step-2",
        body: {
          en: "Bronte pistachios if you can find them. They taste like nothing else.",
          es: "Pistachos de Bronte si los encuentras. No saben como ningún otro.",
          nl: "Bronte-pistache als je het kunt vinden. Smaakt naar niets anders.",
        },
      },
      {
        id: "brio-3",
        kind: "scrawl",
        anchor: "step-5",
        body: {
          en: "Don't press the mortadella flat. Air between the folds is the point.",
          es: "No aplastes la mortadela. El aire entre los pliegues es lo que importa.",
          nl: "Druk de mortadella niet plat. De lucht tussen de plooien is het hele punt.",
        },
      },
    ],
    ingredients: [
      {
        group: { en: "Pistachio cream", es: "Crema de pistacho", nl: "Pistachecrème" },
        quantity: { en: "100 g", es: "100 g", nl: "100 g" },
        ingredient: {
          en: "Bronte pistachios, unsalted, peeled",
          es: "pistachos de Bronte, sin sal, pelados",
          nl: "Bronte-pistache, ongezouten, gepeld",
        },
      },
      {
        group: { en: "Pistachio cream", es: "Crema de pistacho", nl: "Pistachecrème" },
        quantity: { en: "30 ml", es: "30 ml", nl: "30 ml" },
        ingredient: {
          en: "extra-virgin olive oil",
          es: "aceite de oliva virgen extra",
          nl: "extra vergine olijfolie",
        },
      },
      {
        group: { en: "Pistachio cream", es: "Crema de pistacho", nl: "Pistachecrème" },
        quantity: { en: "1 tbsp", es: "1 cda", nl: "1 el" },
        ingredient: { en: "water", es: "agua", nl: "water" },
      },
      {
        group: { en: "Pistachio cream", es: "Crema de pistacho", nl: "Pistachecrème" },
        quantity: { en: "pinch", es: "pizca", nl: "snuf" },
        ingredient: { en: "fine salt", es: "sal fina", nl: "zout" },
      },
      {
        group: { en: "Crumble", es: "Crumble", nl: "Crumble" },
        quantity: { en: "30 g", es: "30 g", nl: "30 g" },
        ingredient: {
          en: "pistachios, roughly chopped",
          es: "pistachos, picados grueso",
          nl: "pistache, grof gehakt",
        },
      },
      {
        group: { en: "Crumble", es: "Crumble", nl: "Crumble" },
        quantity: { en: "10 g", es: "10 g", nl: "10 g" },
        ingredient: { en: "panko", es: "panko", nl: "panko" },
      },
      {
        group: { en: "Crumble", es: "Crumble", nl: "Crumble" },
        quantity: { en: "5 g", es: "5 g", nl: "5 g" },
        ingredient: { en: "butter", es: "mantequilla", nl: "boter" },
      },
      {
        group: { en: "To finish", es: "Para terminar", nl: "Afwerking" },
        quantity: { en: "2", es: "2", nl: "2" },
        ingredient: {
          en: "small brioche buns",
          es: "panecillos de brioche",
          nl: "brioche bolletjes",
        },
      },
      {
        group: { en: "To finish", es: "Para terminar", nl: "Afwerking" },
        quantity: { en: "60 g", es: "60 g", nl: "60 g" },
        ingredient: {
          en: "mortadella di Bologna, sliced paper-thin",
          es: "mortadela di Bologna, en lonchas finísimas",
          nl: "mortadella di Bologna, flinterdun gesneden",
        },
      },
      {
        group: { en: "To finish", es: "Para terminar", nl: "Afwerking" },
        quantity: { en: "drizzle", es: "chorrito", nl: "scheutje" },
        ingredient: {
          en: "olive oil + cracked black pepper",
          es: "aceite de oliva + pimienta negra recién molida",
          nl: "olijfolie + zwarte peper",
        },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Oven to 160 °C. Toast the pistachios 8 minutes until they smell warm and nutty. Let them cool.",
          es: "Horno a 160 °C. Tuesta los pistachos 8 minutos hasta que huelan cálidos y a nuez. Deja enfriar.",
          nl: "Oven op 160 °C. Rooster de pistache 8 minuten tot ze geuren, laat afkoelen.",
        },
      },
      {
        position: 2,
        body: {
          en: "Blitz 80 g of the toasted pistachios with the oil, water and salt to a smooth, glossy paste. Scrape the bowl, blitz again briefly.",
          es: "Tritura 80 g de los pistachos tostados con el aceite, el agua y la sal hasta una pasta lisa y brillante. Limpia el bol, da otra pasada corta.",
          nl: "Maal 80 g geroosterde pistache met de olie, water en zout tot een gladde, glanzende pasta. Schraap de wand, kort doormalen.",
        },
      },
      {
        position: 3,
        body: {
          en: "Melt the butter in a pan, add the panko and the chopped pistachios. Toast medium-high until deep gold. Season with sea salt.",
          es: "Funde la mantequilla en una sartén, añade el panko y los pistachos picados. Tuesta a fuego medio-alto hasta dorado oscuro. Sazona con sal marina.",
          nl: "Smelt de boter in een pan, voeg panko en gehakte pistache toe. Rooster goudbruin op middelhoog vuur. Afmaken met zeezout.",
        },
      },
      {
        position: 4,
        body: {
          en: "Split the brioche horizontally. Toast the cut faces briefly in a dry pan. Gold, not brown.",
          es: "Corta el brioche por la mitad horizontalmente. Marca brevemente las caras en una sartén seca. Doradas, no quemadas.",
          nl: "Snijd de brioche horizontaal half door. Rooster de snijvlakken kort in een droge pan. Goud, niet bruin.",
        },
      },
      {
        position: 5,
        body: {
          en: "Spread a thick line of pistachio cream on the base. Fold the mortadella on top loose. Keep the air in. Scatter the crumble. Few drops of olive oil, crack of pepper. Close loose, serve now.",
          es: "Pinta una buena raya de crema de pistacho en la base. Coloca la mortadela encima sin aplastar. Aire dentro. Esparce el crumble. Unas gotas de aceite, vuelta de pimienta. Cierra suelto y sirve ya.",
          nl: "Smeer een rijke streep pistachecrème op de onderkant. Vouw de mortadella er los op (lucht erin). Strooi de crumble erover, een paar druppels olijfolie, krak peper. Sluit losjes, serveer direct.",
        },
      },
    ],
  },
  {
    slug: "gougere-comte-parmezaan",
    title: {
      en: "Gougère with Comté, Parmesan and goat-cheese mousse",
      es: "Gougère con Comté, parmesano y mousse de queso de cabra",
      nl: "Gougère met Comté en Parmezaan, mousse van geitenkaas",
    },
    intro: {
      en: "A crisp choux puff with cheese in the dough, cold mousse in the heart. Warm-cold game.",
      es: "Bocaditos de choux con queso en la masa y mousse fría en el corazón. Juego cálido-frío.",
      nl: "Knapperige soezenbol met kaas in het deeg, koude mousse in het hart. Warm-koud spel.",
    },
    category: "borrel",
    seasons: ["altijd"],
    difficulty: 3,
    prepMinutes: 25,
    cookMinutes: 25,
    servings: 4,
    heroImage: "/images/recipes/gougere-comte-parmezaan.jpg",
    pairing: {
      en: "Dry champagne or a cold manzanilla.",
      es: "Champán brut o una manzanilla fría.",
      nl: "Droge champagne of een koude manzanilla.",
    },
    body: {
      en: [
        "I learned gougère from Marc, the pastry chef at Bord'eau in Amsterdam, on a Friday night when the kitchen was already wrecked. He didn't teach me, exactly. He stood next to me, made one tray of his, watched me make a tray of mine, and pointed at the difference. His were sky-high. Mine were sunk in the middle like sad little berets. He shrugged: 'eggs', he said, 'too fast', and walked away.",
        "Choux dough lives or dies on the eggs. Add them too quickly and the dough is too wet to climb. Open the oven before they've set and they collapse on the spot. It's a recipe for patience, which is exactly why it's perfect for the start of an evening. You can't rush it, so you stop running.",
        "The goat-cheese mousse in the middle is a cold trick on a warm puff. The first bite is the crust splitting, the second is the cool centre catching up with you. I serve them straight from the oven, on the wood, no plates.",
      ],
      es: [
        "Aprendí la gougère de Marc, el pastelero de Bord'eau en Ámsterdam, un viernes por la noche con la cocina ya hecha trizas. No me enseñó exactamente. Se puso a mi lado, hizo una bandeja suya, me vio hacer la mía y me señaló la diferencia. Las suyas subían al cielo. Las mías se hundían en el medio como boinas tristes. Encogió los hombros: 'los huevos', dijo, 'demasiado rápido', y se fue.",
        "La masa choux vive o muere por los huevos. Si los añades demasiado rápido la masa queda muy húmeda y no sube. Si abres el horno antes de que cuajen se desploman ahí mismo. Es una receta de paciencia, y por eso es perfecta para abrir una noche. No se puede acelerar, así que paras de correr.",
        "La mousse de queso de cabra en el centro es un truco frío sobre un bollo caliente. El primer bocado es la corteza partiéndose, el segundo es el corazón fresco alcanzándote. Los sirvo recién salidos del horno, sobre madera, sin platos.",
      ],
      nl: [
        "Ik leerde gougère van Marc, de pâtissier bij Bord'eau in Amsterdam, op een vrijdagnacht toen de keuken al een ruïne was. Hij leerde het me niet echt. Hij stond naast me, maakte een plaat van zijn, keek hoe ik er een maakte van mijn, en wees op het verschil. Die van hem stonden hemelhoog. Die van mij waren in het midden ingezakt als trieste kleine barets. Hij haalde z'n schouders op: 'eieren', zei hij, 'te snel', en liep weg.",
        "Soezendeeg leeft of sterft op de eieren. Te snel toegevoegd en het deeg is te nat om te klimmen. Oven open voor ze hebben gepakt en ze zakken ter plekke in. Het is een recept van geduld, en juist daarom past het zo goed bij het begin van een avond. Je kunt het niet versnellen, dus stop je met haasten.",
        "De geitenkaasmousse in het hart is een koude truc op een warme bol. Eerste hap is de korst die kraakt, tweede hap is het koele midden dat je inhaalt. Ik serveer ze direct uit de oven, op het hout, geen borden.",
      ],
    },
    nowPlaying: {
      track: "La Javanaise",
      artist: "Serge Gainsbourg",
    },
    marginalia: [
      {
        id: "goug-1",
        kind: "warning",
        anchor: "step-3",
        body: {
          en: "Eggs one at a time. Always. Don't get clever about it.",
          es: "Los huevos uno a uno. Siempre. No te las des de listo.",
          nl: "Eieren één voor één. Altijd. Doe niet slim.",
        },
      },
      {
        id: "goug-2",
        kind: "warning",
        anchor: "step-5",
        body: {
          en: "Do not open the oven for the first 20 minutes. Look through the window if you must.",
          es: "No abras el horno los primeros 20 minutos. Si tienes que mirar, hazlo por el cristal.",
          nl: "Open de oven niet in de eerste 20 minuten. Kijken doe je door het raampje.",
        },
      },
      {
        id: "goug-3",
        kind: "wrong",
        anchor: "intro",
        body: {
          en: "First time I made these alone, the eggs came straight from the fridge. Cold eggs into hot dough = dough seizes. Wait five minutes after the panneau.",
          es: "La primera vez en solitario, los huevos los saqué directamente de la nevera. Huevos fríos en masa caliente = la masa se agarra. Espera cinco minutos tras el panneau.",
          nl: "Eerste keer alleen kwamen de eieren direct uit de koelkast. Koude eieren in warm deeg = deeg klontert. Wacht vijf minuten na de panneau.",
        },
      },
    ],
    ingredients: [
      {
        group: { en: "Gougères (8 pieces)", es: "Gougères (8 unidades)", nl: "Gougères (8 stuks)" },
        quantity: { en: "125 ml", es: "125 ml", nl: "125 ml" },
        ingredient: { en: "water", es: "agua", nl: "water" },
      },
      {
        group: { en: "Gougères (8 pieces)", es: "Gougères (8 unidades)", nl: "Gougères (8 stuks)" },
        quantity: { en: "55 g", es: "55 g", nl: "55 g" },
        ingredient: { en: "butter", es: "mantequilla", nl: "boter" },
      },
      {
        group: { en: "Gougères (8 pieces)", es: "Gougères (8 unidades)", nl: "Gougères (8 stuks)" },
        quantity: { en: "75 g", es: "75 g", nl: "75 g" },
        ingredient: { en: "flour", es: "harina", nl: "bloem" },
      },
      {
        group: { en: "Gougères (8 pieces)", es: "Gougères (8 unidades)", nl: "Gougères (8 stuks)" },
        quantity: { en: "2", es: "2", nl: "2" },
        ingredient: { en: "medium eggs", es: "huevos M", nl: "eieren M" },
      },
      {
        group: { en: "Gougères (8 pieces)", es: "Gougères (8 unidades)", nl: "Gougères (8 stuks)" },
        quantity: { en: "40 g", es: "40 g", nl: "40 g" },
        ingredient: {
          en: "Comté, finely grated",
          es: "Comté rallado fino",
          nl: "Comté, fijn geraspt",
        },
      },
      {
        group: { en: "Gougères (8 pieces)", es: "Gougères (8 unidades)", nl: "Gougères (8 stuks)" },
        quantity: { en: "20 g", es: "20 g", nl: "20 g" },
        ingredient: {
          en: "Parmesan, finely grated",
          es: "parmesano rallado fino",
          nl: "Parmezaan, fijn geraspt",
        },
      },
      {
        group: { en: "Gougères (8 pieces)", es: "Gougères (8 unidades)", nl: "Gougères (8 stuks)" },
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: {
          en: "egg, beaten. For the wash",
          es: "huevo batido para pintar",
          nl: "ei, losgeklopt voor afstrijken",
        },
      },
      {
        group: { en: "Goat-cheese mousse", es: "Mousse de queso de cabra", nl: "Geitenkaasmousse" },
        quantity: { en: "100 g", es: "100 g", nl: "100 g" },
        ingredient: {
          en: "fresh goat cheese (chèvre frais)",
          es: "queso de cabra fresco (chèvre frais)",
          nl: "verse geitenkaas (chèvre frais)",
        },
      },
      {
        group: { en: "Goat-cheese mousse", es: "Mousse de queso de cabra", nl: "Geitenkaasmousse" },
        quantity: { en: "50 ml", es: "50 ml", nl: "50 ml" },
        ingredient: { en: "double cream", es: "nata para montar", nl: "slagroom" },
      },
      {
        group: { en: "Goat-cheese mousse", es: "Mousse de queso de cabra", nl: "Geitenkaasmousse" },
        quantity: { en: "zest of ½", es: "ralladura de ½", nl: "rasp van ½" },
        ingredient: { en: "lemon", es: "limón", nl: "citroen" },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Oven to 200 °C, rack in the middle. Line a tray with baking paper.",
          es: "Horno a 200 °C, rejilla en el centro. Forra una bandeja con papel de horno.",
          nl: "Verwarm de oven op 200 °C, rooster in het midden. Bekleed bakplaat met bakpapier.",
        },
      },
      {
        position: 2,
        body: {
          en: "Bring water, butter and a pinch of salt to the boil. Lower the heat, dump in all the flour, beat hard with a spatula until the dough pulls cleanly from the pan (panneau).",
          es: "Lleva a ebullición el agua, la mantequilla y una pizca de sal. Baja el fuego, echa toda la harina de golpe, bate con fuerza con espátula hasta que la masa se despegue limpia de la cazuela (panneau).",
          nl: "Breng water, boter en een snuf zout aan de kook. Vuur laag, bloem in één keer erbij, met kracht roeren met een spatel tot het deeg loslaat van de pan (panneau).",
        },
      },
      {
        position: 3,
        body: {
          en: "Cool 2 minutes off the heat. Add the eggs one at a time, beating each fully in before the next. Stir in both cheeses.",
          es: "Deja templar 2 minutos fuera del fuego. Añade los huevos uno a uno, integrando bien cada uno antes del siguiente. Mezcla los dos quesos.",
          nl: "Laat 2 minuten afkoelen. Voeg de eieren één voor één toe, telkens volledig laten opnemen. Roer Comté en Parmezaan erdoor.",
        },
      },
      {
        position: 4,
        body: {
          en: "Pipe or spoon 8 mounds onto the tray, fairly close in size. Brush gently with the beaten egg.",
          es: "Coloca 8 montoncitos con manga o cuchara sobre la bandeja, parecidos en tamaño. Pinta con el huevo batido.",
          nl: "Spuit of lepel 8 hoopjes op de plaat, ongeveer gelijk in maat. Strijk in met losgeklopt ei.",
        },
      },
      {
        position: 5,
        body: {
          en: "Bake 22-25 minutes, deep gold and firm to the touch. Do not open the oven during the first 20 minutes.",
          es: "Hornea 22-25 minutos, dorado oscuro y firme al tacto. No abras el horno los primeros 20 minutos.",
          nl: "Bak 22-25 minuten tot diepgoud en stevig. Niet eerder openen, anders zakken ze.",
        },
      },
      {
        position: 6,
        body: {
          en: "Whip the goat cheese with cream, lemon zest and a pinch of salt to a light mousse. Load into a piping bag with a small tip.",
          es: "Bate el queso de cabra con la nata, la ralladura de limón y una pizca de sal hasta una mousse ligera. Pasa a manga con boquilla fina.",
          nl: "Klop de geitenkaas met room, citroenrasp en zout luchtig. In een spuitzak met klein tuitje.",
        },
      },
      {
        position: 7,
        body: {
          en: "Slice the cooled gougères across the top, pipe in the mousse, serve straight away.",
          es: "Corta la parte superior de cada gougère, rellena con la mousse, sirve al momento.",
          nl: "Snijd de afgekoelde gougère bovenaan in. Vul met mousse. Direct serveren.",
        },
      },
    ],
  },
  {
    slug: "rillette-zalm",
    title: {
      en: "Salmon rillette with lemon and chive",
      es: "Rillette de salmón con limón y cebollino",
      nl: "Rillette van zalm met citroen en bieslook",
    },
    intro: {
      en: "Rustic, not smooth. Toasted bread, cold rillette, a warm room.",
      es: "Rústica, no lisa. Pan tostado, rillette fría, sala templada.",
      nl: "Rustiek, niet glad. Geroosterd brood, koude rillette, warme kamer.",
    },
    category: "voor",
    seasons: ["altijd"],
    difficulty: 2,
    prepMinutes: 20,
    cookMinutes: 10,
    servings: 2,
    heroImage: "/images/recipes/rillette-zalm.jpg",
    pairing: {
      en: "Sancerre or a bone-dry Riesling.",
      es: "Sancerre o un Riesling muy seco.",
      nl: "Sancerre of een knochdroge Riesling.",
    },
    body: {
      en: [
        "I learned this in Stockholm, between portrait shoots, the year I was pretending I was a photographer first and a cook second. Hötorget market, early August, a fishmonger named Erik who'd lost two fingers to a herring boat in the seventies. He sold me a slab of salmon, then watched me from across the counter while he wrote down. In English with the spelling of someone who'd learned it on ships. How to make rillette. 'No machine,' he wrote, twice, underlined.",
        "Salmon rillette is one of those preparations where the whole craft is in not overworking it. Steam the fish gently, pull it into flakes, fold the rest in with a wooden spoon. Touch it as little as possible. The texture is the whole point. If you can spread it like pâté, you've gone too far.",
        "Make it the morning before. Six hours in the fridge and the flavours line up. A day too far and it goes flat. Lemon, chive, butter, a bit of crème fraîche to round it. Toasted sourdough. That's the whole evening.",
      ],
      es: [
        "Aprendí esto en Estocolmo, entre sesiones de retrato, el año en que fingía ser primero fotógrafo y luego cocinero. El mercado de Hötorget, primeros de agosto, un pescadero llamado Erik que había perdido dos dedos en un pesquero de arenques en los setenta. Me vendió un lomo de salmón y me observó desde el otro lado del mostrador mientras me escribía. En un inglés con la ortografía de alguien que lo aprendió en barcos. Cómo hacer rillette. 'No máquina,' escribió, dos veces, subrayado.",
        "La rillette de salmón es una de esas preparaciones donde todo el oficio está en no manosearla. Vapora el pescado con cuidado, desmígalo, integra el resto con una cuchara de madera. Toca lo mínimo. La textura es todo. Si la puedes untar como un paté, te has pasado.",
        "Hazla la mañana antes. Seis horas en la nevera y los sabores se alinean. Un día de más y se queda plana. Limón, cebollino, mantequilla, un poco de crème fraîche para redondear. Pan de masa madre tostado. Esa es toda la noche.",
      ],
      nl: [
        "Ik leerde dit in Stockholm, tussen portretshoots door, het jaar dat ik deed alsof ik eerst fotograaf was en pas daarna kok. De Hötorget-markt, begin augustus, een visboer met de naam Erik die in de jaren zeventig twee vingers had verloren aan een haringboot. Hij verkocht me een stuk zalm en keek me vanaf de andere kant van de toonbank aan terwijl hij. In een Engels met de spelling van iemand die het op zee had geleerd. Opschreef hoe je rillette maakte. 'No machine,' schreef hij, twee keer, onderstreept.",
        "Rillette van zalm is een van die bereidingen waar het hele vak in zit in niet té veel ermee doen. Stoom de vis voorzichtig, pluk hem in flakes, vouw de rest erdoor met een houten lepel. Raak het zo min mogelijk aan. Textuur is alles. Als je het kunt smeren als paté, ben je te ver gegaan.",
        "Maak hem de ochtend ervoor. Zes uur in de koelkast en de smaken vallen op hun plek. Een dag te ver en hij wordt vlak. Citroen, bieslook, boter, een lepel crème fraîche om het rond te maken. Geroosterd zuurdesem. Dat is de hele avond.",
      ],
    },
    nowPlaying: {
      track: "Little Star",
      artist: "Stina Nordenstam",
    },
    marginalia: [
      {
        id: "rill-1",
        kind: "warning",
        anchor: "step-2",
        body: {
          en: "Pluck with a fork. Never blend. Texture or nothing.",
          es: "Desmiga con tenedor. Nunca trituradora. Textura o nada.",
          nl: "Plukken met een vork. Nooit blenden. Textuur of niets.",
        },
      },
      {
        id: "rill-2",
        kind: "tip",
        anchor: "step-4",
        body: {
          en: "Made yesterday is better than made today. A day too far is worse than yesterday too soon.",
          es: "Hecha ayer es mejor que hecha hoy. Un día de más es peor que ayer.",
          nl: "Gemaakt gisteren is beter dan vandaag. Een dag te ver is erger dan gisteren te vroeg.",
        },
      },
      {
        id: "rill-3",
        kind: "scrawl",
        anchor: "ingredients",
        body: {
          en: "Smoked salmon adds the salt note. Don't skip it. It does what salt alone can't.",
          es: "El salmón ahumado añade la nota salada. No lo saltes. Hace lo que la sal sola no puede.",
          nl: "De gerookte zalm voegt de zout-noot toe. Niet weglaten. Doet wat zout alleen niet kan.",
        },
      },
    ],
    ingredients: [
      {
        group: { en: "Rillette", es: "Rillette", nl: "Rillette" },
        quantity: { en: "200 g", es: "200 g", nl: "200 g" },
        ingredient: {
          en: "fresh salmon fillet, skin off",
          es: "lomo de salmón fresco, sin piel",
          nl: "verse zalmfilet, zonder vel",
        },
      },
      {
        group: { en: "Rillette", es: "Rillette", nl: "Rillette" },
        quantity: { en: "60 g", es: "60 g", nl: "60 g" },
        ingredient: {
          en: "smoked salmon, finely chopped",
          es: "salmón ahumado, picado fino",
          nl: "gerookte zalm, fijn gesneden",
        },
      },
      {
        group: { en: "Rillette", es: "Rillette", nl: "Rillette" },
        quantity: { en: "60 g", es: "60 g", nl: "60 g" },
        ingredient: { en: "crème fraîche", es: "crème fraîche", nl: "crème fraîche" },
      },
      {
        group: { en: "Rillette", es: "Rillette", nl: "Rillette" },
        quantity: { en: "30 g", es: "30 g", nl: "30 g" },
        ingredient: {
          en: "soft butter",
          es: "mantequilla pomada",
          nl: "zachte boter",
        },
      },
      {
        group: { en: "Rillette", es: "Rillette", nl: "Rillette" },
        quantity: { en: "½ bunch", es: "½ manojo", nl: "½ bosje" },
        ingredient: {
          en: "chive, finely sliced",
          es: "cebollino, picado fino",
          nl: "bieslook, fijn gesneden",
        },
      },
      {
        group: { en: "Rillette", es: "Rillette", nl: "Rillette" },
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: {
          en: "lemon (zest of one, juice of half)",
          es: "limón (ralladura de uno, zumo de medio)",
          nl: "citroen (rasp van één, sap van een halve)",
        },
      },
      {
        group: { en: "To serve", es: "Para servir", nl: "Erbij" },
        quantity: { en: "4 slices", es: "4 rebanadas", nl: "4 dikke plakken" },
        ingredient: { en: "sourdough", es: "pan de masa madre", nl: "sourdough" },
      },
      {
        group: { en: "To serve", es: "Para servir", nl: "Erbij" },
        quantity: { en: "drizzle", es: "chorrito", nl: "scheutje" },
        ingredient: {
          en: "olive oil + fleur de sel",
          es: "aceite + flor de sal",
          nl: "olijfolie + fleur de sel",
        },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Season the fresh salmon lightly. Steam on parchment at 80 °C for 8 minutes. Core temp 50 °C. Let it cool fully.",
          es: "Sazona ligero el salmón fresco. Cuécelo al vapor sobre papel a 80 °C durante 8 minutos. Núcleo a 50 °C. Deja enfriar del todo.",
          nl: "Verse zalm op bakpapier, licht kruiden. Stoom 8 minuten op 80 °C tot net gaar (kern 50 °C). Laat afkoelen.",
        },
      },
      {
        position: 2,
        body: {
          en: "Pluck the cooled salmon into rough flakes with a fork. Don't go for tidy. Texture is everything.",
          es: "Desmiga el salmón frío en escamas groseras con un tenedor. Nada de fino. La textura es todo.",
          nl: "Pluk de zalm in grove flakes met een vork. Niet pureren. Textuur is alles.",
        },
      },
      {
        position: 3,
        body: {
          en: "Fold in the smoked salmon, crème fraîche, soft butter, chive, lemon zest and juice. Carefully. No mashing.",
          es: "Integra con cuidado el salmón ahumado, la crème fraîche, la mantequilla, el cebollino, la ralladura y el zumo de limón. Sin aplastar.",
          nl: "Vouw gerookte zalm, crème fraîche, zachte boter, bieslook, citroenrasp en -sap erdoor. Voorzichtig, niet pletten.",
        },
      },
      {
        position: 4,
        body: {
          en: "Taste. Salt, white pepper, more lemon if it needs lift. One hour in the fridge. Minimum. Ideally six.",
          es: "Prueba. Sal, pimienta blanca, más limón si pide. Una hora en la nevera mínimo. Ideal seis.",
          nl: "Proeven. Zout, witte peper, eventueel meer citroensap. Minimaal 1 uur in de koelkast. Liefst zes.",
        },
      },
      {
        position: 5,
        body: {
          en: "Toast the sourdough hard with a film of olive oil. Spoon the rillette on rough. Fleur de sel. Lemon wedge alongside.",
          es: "Tuesta el pan a fuego fuerte con un hilo de aceite. Cucharadas generosas y desordenadas de rillette encima. Flor de sal. Limón al lado.",
          nl: "Brood roosteren met olijfolie, in een hete pan of grill. Goudbruin, korstig. Lepel rillette ruw op het brood. Fleur de sel, schijfje citroen ernaast.",
        },
      },
    ],
  },
  {
    slug: "drie-sauzen",
    title: {
      en: "Three sauces, three accents",
      es: "Tres salsas, tres acentos",
      nl: "Drie sauzen met eigen twist",
    },
    intro: {
      en: "Black-garlic aioli, hazelnut romesco, green-chilli chimichurri verde. Not the textbook versions.",
      es: "Alioli de ajo negro, romesco con avellana, chimichurri verde con chile verde. No las de manual.",
      nl: "Aïoli van zwarte knoflook, romesco met hazelnoot, chimichurri verde met groene chili. Niet de boekjesversies.",
    },
    category: "basis",
    seasons: ["altijd"],
    difficulty: 2,
    prepMinutes: 30,
    cookMinutes: 0,
    servings: 6,
    heroImage: "/images/recipes/drie-sauzen.jpg",
    pairing: {
      en: "Bread, charred vegetables, grilled meat or fish. Pick a partner.",
      es: "Pan, verduras a la brasa, carne o pescado a la plancha. Elige pareja.",
      nl: "Brood, gegrilde groente, vlees of vis van het vuur. Kies een partner.",
    },
    body: {
      en: [
        "Three sauces a cook should be able to make without thinking about it. Mine are not the canonical versions. Black-garlic aioli instead of raw, romesco built around hazelnuts not almonds, chimichurri with a green-chilli punch instead of dried oregano carrying the whole flavour.",
        "The aioli is the one I learned in a Barcelona bar where the owner refused to tell me how. I had to figure it out by ordering it five nights in a row and going home to taste-match. The romesco came from a stop in Tarragona, a chef called Lluís who only added hazelnut because his almond order didn't show that day. He never went back. The chimichurri is half from a Buenos Aires guy in Estepona, half from the one I make at home. The green chilli is mine.",
        "These three keep one week in the fridge if you keep them under a film of olive oil. They turn a sad slice of bread into dinner. They are the difference between cooking and feeding someone.",
      ],
      es: [
        "Tres salsas que un cocinero debería poder hacer sin pensar. Las mías no son las canónicas. Alioli de ajo negro en lugar de crudo, romesco montado sobre avellana y no almendra, chimichurri con un golpe de chile verde en vez de cargar todo en el orégano seco.",
        "El alioli lo aprendí en un bar de Barcelona donde el dueño no me lo quiso contar. Tuve que adivinarlo pidiéndolo cinco noches seguidas y catando en casa. El romesco vino de una parada en Tarragona, un cocinero llamado Lluís que sólo metía avellana porque ese día no le había llegado la almendra. Nunca volvió atrás. El chimichurri es mitad de un porteño en Estepona, mitad mío. El chile verde es mío.",
        "Las tres aguantan una semana en la nevera si las tapas con un velo de aceite. Convierten un trozo de pan triste en cena. Son la diferencia entre cocinar y dar de comer.",
      ],
      nl: [
        "Drie sauzen die een kok zonder na te denken moet kunnen maken. Mijn versies zijn niet de canonieke. Aïoli van zwarte knoflook in plaats van rauw, romesco gebouwd rondom hazelnoot en niet amandel, chimichurri met een groene-chili-stoot in plaats van gedroogde oregano die alle smaak draagt.",
        "De aïoli leerde ik in een bar in Barcelona waar de eigenaar weigerde te vertellen hoe. Ik moest het uitvogelen door 'm vijf avonden achter elkaar te bestellen en thuis te proeven. De romesco kwam uit een stop in Tarragona, een kok met de naam Lluís die alleen hazelnoot deed omdat zijn amandel-bestelling die dag niet aankwam. Hij ging nooit meer terug. De chimichurri is half van een Argentijn in Estepona, half van mezelf. Groene chili is van mij.",
        "Alle drie houden een week in de koelkast, mits afgedekt met een filmpje olijfolie. Ze maken van een treurige snee brood een diner. Ze zijn het verschil tussen koken en iemand te eten geven.",
      ],
    },
    nowPlaying: {
      track: "Dos Gardenias",
      artist: "Buena Vista Social Club",
    },
    marginalia: [
      {
        id: "saus-1",
        kind: "warning",
        anchor: "step-3",
        body: {
          en: "Chimichurri never goes smooth. Hand-chopped is best, blender only briefly. Pesto is a different sauce.",
          es: "El chimichurri nunca queda liso. Picado a cuchillo es lo ideal, batidora sólo un toque. El pesto es otra salsa.",
          nl: "Chimichurri nooit pureren glad. Met het mes is het beste, blender heel kort. Pesto is een andere saus.",
        },
      },
      {
        id: "saus-2",
        kind: "tip",
        anchor: "step-1",
        body: {
          en: "Egg yolk at room temperature, oil cool. Cold yolk + cold oil = a split mayonnaise twenty seconds in.",
          es: "Yema a temperatura ambiente, aceite fresco. Yema fría + aceite frío = mayonesa cortada a los veinte segundos.",
          nl: "Dooier op kamertemperatuur, olie koel. Koude dooier + koude olie = geschifte mayo na twintig seconden.",
        },
      },
      {
        id: "saus-3",
        kind: "scrawl",
        anchor: "step-2",
        body: {
          en: "Romesco loves a 24-hour rest. Make it Saturday, eat it Sunday. Different sauce.",
          es: "El romesco mejora a 24 horas. Hazlo el sábado, cómelo el domingo. Es otra salsa.",
          nl: "Romesco wordt beter na 24 uur rust. Zaterdag maken, zondag eten. Andere saus.",
        },
      },
    ],
    ingredients: [
      {
        group: { en: "Black-garlic aioli", es: "Alioli de ajo negro", nl: "Zwarte-knoflook aïoli" },
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: {
          en: "egg yolk at room temperature",
          es: "yema de huevo a temperatura ambiente",
          nl: "eierdooier op kamertemperatuur",
        },
      },
      {
        group: { en: "Black-garlic aioli", es: "Alioli de ajo negro", nl: "Zwarte-knoflook aïoli" },
        quantity: { en: "4 cloves", es: "4 dientes", nl: "4 teentjes" },
        ingredient: {
          en: "black garlic",
          es: "ajo negro",
          nl: "zwarte knoflook",
        },
      },
      {
        group: { en: "Black-garlic aioli", es: "Alioli de ajo negro", nl: "Zwarte-knoflook aïoli" },
        quantity: { en: "1 tsp", es: "1 cdta", nl: "1 tl" },
        ingredient: { en: "Dijon mustard", es: "mostaza de Dijon", nl: "Dijonmosterd" },
      },
      {
        group: { en: "Black-garlic aioli", es: "Alioli de ajo negro", nl: "Zwarte-knoflook aïoli" },
        quantity: { en: "200 + 50 ml", es: "200 + 50 ml", nl: "200 + 50 ml" },
        ingredient: {
          en: "sunflower oil + extra-virgin olive oil",
          es: "aceite de girasol + aceite de oliva virgen extra",
          nl: "zonnebloemolie + extra vergine olijfolie",
        },
      },
      {
        group: { en: "Hazelnut romesco", es: "Romesco con avellana", nl: "Hazelnoot-romesco" },
        quantity: { en: "60 g", es: "60 g", nl: "60 g" },
        ingredient: {
          en: "roasted peeled hazelnuts",
          es: "avellanas tostadas y peladas",
          nl: "geroosterde gepelde hazelnoten",
        },
      },
      {
        group: { en: "Hazelnut romesco", es: "Romesco con avellana", nl: "Hazelnoot-romesco" },
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: {
          en: "roasted red pepper + ½ roasted tomato + 1 garlic clove",
          es: "pimiento rojo asado + ½ tomate asado + 1 diente de ajo",
          nl: "geroosterde rode paprika + ½ geroosterde tomaat + 1 teen knoflook",
        },
      },
      {
        group: { en: "Hazelnut romesco", es: "Romesco con avellana", nl: "Hazelnoot-romesco" },
        quantity: { en: "30 ml", es: "30 ml", nl: "30 ml" },
        ingredient: {
          en: "sherry vinegar + 100 ml olive oil",
          es: "vinagre de Jerez + 100 ml de aceite",
          nl: "sherryazijn + 100 ml olijfolie",
        },
      },
      {
        group: { en: "Hazelnut romesco", es: "Romesco con avellana", nl: "Hazelnoot-romesco" },
        quantity: { en: "1 tbsp", es: "1 cda", nl: "1 el" },
        ingredient: {
          en: "sweet paprika + pinch smoked paprika + salt",
          es: "pimentón dulce + pizca de pimentón ahumado + sal",
          nl: "zoet paprikapoeder + snuf gerookt + zout",
        },
      },
      {
        group: { en: "Chimichurri verde", es: "Chimichurri verde", nl: "Chimichurri verde" },
        quantity: { en: "1 bunch", es: "1 manojo", nl: "1 bos" },
        ingredient: {
          en: "flat parsley + ½ bunch coriander",
          es: "perejil de hoja plana + ½ manojo de cilantro",
          nl: "platte peterselie + ½ bos koriander",
        },
      },
      {
        group: { en: "Chimichurri verde", es: "Chimichurri verde", nl: "Chimichurri verde" },
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: {
          en: "green chilli, deseeded + 2 garlic cloves",
          es: "chile verde sin pepitas + 2 dientes de ajo",
          nl: "groene chili zonder zaadlijsten + 2 teentjes knoflook",
        },
      },
      {
        group: { en: "Chimichurri verde", es: "Chimichurri verde", nl: "Chimichurri verde" },
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: {
          en: "lime (zest and juice)",
          es: "lima (ralladura y zumo)",
          nl: "limoen (rasp en sap)",
        },
      },
      {
        group: { en: "Chimichurri verde", es: "Chimichurri verde", nl: "Chimichurri verde" },
        quantity: { en: "100 ml + 1 tbsp", es: "100 ml + 1 cda", nl: "100 ml + 1 el" },
        ingredient: {
          en: "olive oil + red-wine vinegar + 1 tsp dried oregano",
          es: "aceite de oliva + vinagre tinto + 1 cdta de orégano seco",
          nl: "olijfolie + rode wijnazijn + 1 tl gedroogde oregano",
        },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Aioli: blitz yolk, black garlic, mustard, vinegar and salt for 20 seconds. With the blender running on low, pour in the sunflower oil in a thin steady stream until thick, then finish with the olive oil. One hour in the fridge.",
          es: "Alioli: tritura 20 segundos yema, ajo negro, mostaza, vinagre y sal. Con la máquina a velocidad baja, echa el girasol en hilo fino hasta que espese, termina con el aceite de oliva. Una hora en la nevera.",
          nl: "Aïoli: blend dooier, zwarte knoflook, mosterd, azijn en zout 20 seconden. Met de blender op lage stand, zonnebloemolie in dunne straal toevoegen tot dik, sluit af met olijfolie. Een uur in de koelkast.",
        },
      },
      {
        position: 2,
        body: {
          en: "Romesco: blitz the hazelnuts, pepper, tomato, garlic, vinegar and paprika briefly. With the machine running, add the olive oil until you have a thick, spoonable sauce. Taste hard. Salt and vinegar.",
          es: "Romesco: tritura brevemente las avellanas, el pimiento, el tomate, el ajo, el vinagre y el pimentón. Con la máquina en marcha, añade el aceite hasta una salsa espesa de cuchara. Prueba bien. Sal y vinagre.",
          nl: "Romesco: blend hazelnoten, paprika, tomaat, knoflook, azijn en paprikapoeder kort. Met de machine lopend, olijfolie inschenken tot een dikke saus. Streng proeven. Zout en azijn.",
        },
      },
      {
        position: 3,
        body: {
          en: "Chimichurri: pulse herbs, garlic and chilli briefly. Coarse, never paste. Transfer to a bowl, stir in lime zest and juice, oregano, oil, vinegar and salt. Rest 30 minutes minimum.",
          es: "Chimichurri: pulsa hierbas, ajo y chile brevemente. Grueso, jamás pasta. Pasa a un bol, mezcla con ralladura y zumo de lima, orégano, aceite, vinagre y sal. Mínimo 30 minutos de reposo.",
          nl: "Chimichurri: kruiden, knoflook en chili kort pulsen. Grof, geen pesto. Verplaats naar kom, meng met limoenrasp en -sap, oregano, olie, azijn en zout. Minimaal 30 minuten laten staan.",
        },
      },
      {
        position: 4,
        body: {
          en: "Spoon each into its own bowl. Cover with a thin layer of oil if not serving straight away. Keeps a week.",
          es: "Pasa cada una a su cuenco. Si no se sirve al momento, cubre con una capa fina de aceite. Aguanta una semana.",
          nl: "Schep elke saus in een eigen schaaltje. Niet meteen serveren? Dek af met een dun laagje olie. Houdt een week.",
        },
      },
    ],
  },
  {
    slug: "peer-kardemom-mascarpone",
    title: {
      en: "Roasted pear with cardamom and honey mascarpone",
      es: "Pera asada con cardamomo y mascarpone con miel",
      nl: "Geroosterde peer met kardemom en honingmascarpone",
    },
    intro: {
      en: "Warm-cold, sweet-salt, cardamom and honey. Simple, hits deep.",
      es: "Caliente-fría, dulce-salada, cardamomo y miel. Sencillo, hondo.",
      nl: "Warm-koud, zoet-zout, kardemom en honing. Eenvoudig, raakt diep.",
    },
    category: "dessert",
    seasons: ["herfst", "winter"],
    difficulty: 1,
    prepMinutes: 10,
    cookMinutes: 20,
    servings: 2,
    heroImage: "/images/recipes/peer-kardemom-mascarpone.jpg",
    pairing: {
      en: "Pedro Ximénez sweet sherry, in a small glass.",
      es: "Pedro Ximénez, en copita.",
      nl: "Pedro Ximénez zoete sherry, in een klein glas.",
    },
    body: {
      en: [
        "There's an old woman who lives three houses down from me in Coín. Carmen, ninety-one when I met her, ninety-three now. She has a pear tree in her garden that ought to be in a museum. Every September she leaves a paper bag of them on my front step without saying anything, like a small village courtesy from a century I missed.",
        "The first year, I made them too fancy. Tuile baskets, gold leaf, the whole nonsense. The second year, I asked her what she did with them. She made a face that I will remember when I'm her age. 'Mantequilla, miel, cardamomo,' she said, and walked off.",
        "This is her recipe with the mascarpone added on, because I wanted a cold note against the warm pear. I serve it on the small black bowls a potter in Mijas made for me. Carmen has never seen this version. She'd probably tell me to take the mascarpone off.",
      ],
      es: [
        "Hay una vieja que vive tres casas más abajo en Coín. Carmen, noventa y uno cuando la conocí, noventa y tres ahora. Tiene un peral en el jardín que debería estar en un museo. Cada septiembre deja una bolsa de papel con peras en mi puerta sin decir nada, una pequeña cortesía de pueblo de un siglo que me perdí.",
        "El primer año las hice demasiado finas. Cestitas de teja, pan de oro, todo el ruido. El segundo año le pregunté qué hacía ella con ellas. Puso una cara que voy a recordar cuando tenga su edad. 'Mantequilla, miel, cardamomo,' dijo, y se fue.",
        "Esta es su receta con el mascarpone añadido por mí, porque quería una nota fría contra la pera tibia. Lo sirvo en los cuencos negros pequeños de un alfarero de Mijas. Carmen no ha visto nunca esta versión. Seguramente me diría que le quite el mascarpone.",
      ],
      nl: [
        "Er woont een oude vrouw drie huizen verder van mij in Coín. Carmen, eenennegentig toen ik haar leerde kennen, drieënnegentig nu. Ze heeft een perenboom in haar tuin die in een museum hoort. Elke september zet ze een papieren zak peren op m'n stoep zonder iets te zeggen, een klein dorpsgebaar uit een eeuw die ik gemist heb.",
        "Het eerste jaar maakte ik ze te chic. Tuile-mandjes, bladgoud, het hele gedoe. Het tweede jaar vroeg ik haar wat zij ermee deed. Ze trok een gezicht dat ik me zal herinneren als ik haar leeftijd ben. 'Mantequilla, miel, cardamomo,' zei ze, en liep weg.",
        "Dit is haar recept met de mascarpone door mij toegevoegd, omdat ik een koele noot wilde tegen de warme peer. Ik serveer 'm op de kleine zwarte schaaltjes die een pottenbakker in Mijas voor me maakte. Carmen heeft deze versie nooit gezien. Ze zou me waarschijnlijk zeggen de mascarpone eraf te halen.",
      ],
    },
    nowPlaying: {
      track: "Pink Moon",
      artist: "Nick Drake",
    },
    marginalia: [
      {
        id: "peer-1",
        kind: "tip",
        anchor: "step-1",
        body: {
          en: "Cardamom pods stay on the plate. Visual + smell + you don't eat them.",
          es: "Las vainas de cardamomo se quedan en el plato. Vista, olor, no se comen.",
          nl: "Kardemompeulen blijven liggen. Beeld, geur, niet opeten.",
        },
      },
      {
        id: "peer-2",
        kind: "warning",
        anchor: "step-4",
        body: {
          en: "Don't overwhip the mascarpone. Twenty seconds too long and it splits.",
          es: "No batas demasiado el mascarpone. Veinte segundos de más y se corta.",
          nl: "Mascarpone niet te lang opkloppen. Twintig seconden te lang en het schift.",
        },
      },
      {
        id: "peer-3",
        kind: "scrawl",
        anchor: "intro",
        body: {
          en: "Conference or Doyenné. Firm pears only. Soft pears collapse to mush.",
          es: "Conference o Doyenné. Peras firmes. Las blandas se hacen puré.",
          nl: "Conference of Doyenné. Alleen stevige peren. Zachte peren worden moes.",
        },
      },
    ],
    ingredients: [
      {
        group: { en: "Pear", es: "Pera", nl: "Peer" },
        quantity: { en: "2", es: "2", nl: "2" },
        ingredient: {
          en: "firm pears, halved, cored",
          es: "peras firmes, partidas y descorazonadas",
          nl: "stevige peren, gehalveerd, klokhuis eruit",
        },
      },
      {
        group: { en: "Pear", es: "Pera", nl: "Peer" },
        quantity: { en: "30 g", es: "30 g", nl: "30 g" },
        ingredient: { en: "butter", es: "mantequilla", nl: "boter" },
      },
      {
        group: { en: "Pear", es: "Pera", nl: "Peer" },
        quantity: { en: "2 tbsp", es: "2 cdas", nl: "2 el" },
        ingredient: { en: "honey", es: "miel", nl: "honing" },
      },
      {
        group: { en: "Pear", es: "Pera", nl: "Peer" },
        quantity: { en: "8 pods", es: "8 vainas", nl: "8 peulen" },
        ingredient: {
          en: "cardamom, lightly crushed",
          es: "cardamomo, machacado ligero",
          nl: "kardemom, licht gekneusd",
        },
      },
      {
        group: { en: "Pear", es: "Pera", nl: "Peer" },
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: {
          en: "vanilla pod, split + pinch sea salt",
          es: "vaina de vainilla abierta + pizca de sal",
          nl: "vanillestokje, gespleten + snuf zeezout",
        },
      },
      {
        group: { en: "Mascarpone", es: "Mascarpone", nl: "Mascarpone" },
        quantity: { en: "150 g", es: "150 g", nl: "150 g" },
        ingredient: { en: "cold mascarpone", es: "mascarpone frío", nl: "koude mascarpone" },
      },
      {
        group: { en: "Mascarpone", es: "Mascarpone", nl: "Mascarpone" },
        quantity: { en: "50 ml", es: "50 ml", nl: "50 ml" },
        ingredient: { en: "double cream", es: "nata para montar", nl: "slagroom" },
      },
      {
        group: { en: "Mascarpone", es: "Mascarpone", nl: "Mascarpone" },
        quantity: { en: "1 tbsp", es: "1 cda", nl: "1 el" },
        ingredient: {
          en: "honey + seeds of ½ vanilla pod",
          es: "miel + semillas de ½ vaina de vainilla",
          nl: "honing + merg van ½ vanillestokje",
        },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Oven to 180 °C. Melt butter and honey in an oven-proof pan. Drop in cardamom and vanilla. Let them perfume the fat for a minute.",
          es: "Horno a 180 °C. Funde mantequilla y miel en una sartén apta para horno. Echa cardamomo y vainilla, deja que perfumen un minuto.",
          nl: "Oven op 180 °C. Smelt boter en honing in een ovenvaste pan. Voeg kardemom en vanille toe, laat 1 minuut trekken.",
        },
      },
      {
        position: 2,
        body: {
          en: "Lay the pear halves cut-side down. Caramelise 3 minutes on the hob without moving.",
          es: "Coloca las peras boca abajo. Caramela 3 minutos sin moverlas.",
          nl: "Leg de peren met snijvlak naar beneden in de pan. 3 minuten karamelliseren op het vuur zonder bewegen.",
        },
      },
      {
        position: 3,
        body: {
          en: "Flip them, spoon the pan sauce over. Into the oven 15-18 minutes. Tender but holding their shape.",
          es: "Vuélvelas, baña con la salsa de la sartén. Al horno 15-18 minutos. Tiernas pero con forma.",
          nl: "Draai om, lepel de pansaus eroverheen. 15-18 minuten in de oven tot zacht maar nog vorm.",
        },
      },
      {
        position: 4,
        body: {
          en: "Whip the mascarpone with cream, honey and vanilla seeds to a thick quenelle texture. Stop early. Overdone splits.",
          es: "Bate el mascarpone con la nata, la miel y las semillas hasta textura espesa para quenelle. Para pronto. Pasado se corta.",
          nl: "Klop mascarpone, room, honing en vanille tot een dikke quenelle-textuur. Stop vroeg. Overdoen schift.",
        },
      },
      {
        position: 5,
        body: {
          en: "Pear cut-side up. Quenelle of mascarpone next to it. Pour the warm caramel over. Pinch of sea salt to finish. Cardamom pods stay.",
          es: "Pera con el corte hacia arriba. Quenelle de mascarpone al lado. Vierte el caramelo caliente por encima. Pizca de sal. El cardamomo se queda.",
          nl: "Peer met snijvlak omhoog. Quenelle mascarpone ernaast. Karamel uit de pan eroverheen, snuf zeezout. Kardemompeulen laten liggen.",
        },
      },
    ],
  },
  {
    slug: "no-knead-baguette",
    title: {
      en: "No-knead baguette",
      es: "Baguette sin amasado",
      nl: "No-knead baguette",
    },
    intro: {
      en: "Twenty hours of fermentation, two minutes of work. Blistered crust, wild crumb.",
      es: "Veinte horas de fermentación, dos minutos de trabajo. Corteza ampollada, miga salvaje.",
      nl: "Twintig uur fermentatie, twee minuten werk. Geblisterde korst, wilde kruim.",
    },
    category: "basis",
    seasons: ["altijd"],
    difficulty: 2,
    prepMinutes: 10,
    cookMinutes: 25,
    servings: 2,
    heroImage: "/images/recipes/no-knead-baguette.jpg",
    pairing: {
      en: "Soft butter, good olive oil, soup. Anything.",
      es: "Mantequilla blanda, buen aceite, sopa. Lo que sea.",
      nl: "Zachte boter, goede olijfolie, soep. Alles.",
    },
    body: {
      en: [
        "After Holyburgers closed in Groningen I had a year of doing nothing in particular. I'd just moved to Spain with no plan and no clients yet, so I baked bread instead of waking up at 11 like a lost man. Every loaf the first month was a brick. The second month they were still bricks but I'd accepted it.",
        "Then I met Jean-Marc, an old French baker who'd retired to Marbella twenty years ago and was bored enough to talk to me. He didn't bother explaining hydration ratios or autolyse. He told me one thing: twenty hours, and a tray of water in the oven. Everything else is noise.",
        "This is what came out the other side. It's the only bread recipe I trust on its own without thinking. Mix in the evening, sleep on it, bake in the morning. Whatever you do for the next twenty hours, the bread does its own work.",
      ],
      es: [
        "Después de cerrar Holyburgers en Groninga tuve un año sin hacer nada en concreto. Acababa de mudarme a España sin plan ni clientes, así que horneaba pan en lugar de despertarme a las once como un hombre perdido. El primer mes cada hogaza era un ladrillo. El segundo mes seguían siendo ladrillos pero ya lo había aceptado.",
        "Entonces conocí a Jean-Marc, un viejo panadero francés retirado en Marbella desde hace veinte años y suficientemente aburrido como para hablar conmigo. No se molestó en explicarme hidrataciones ni autólisis. Me dijo una cosa: veinte horas, y una bandeja de agua en el horno. Lo demás es ruido.",
        "Esto es lo que salió al otro lado. Es la única receta de pan que me sale sin pensar. Mezcla por la noche, duerme encima, hornea por la mañana. Lo que sea que hagas en las próximas veinte horas, el pan hace su trabajo solo.",
      ],
      nl: [
        "Nadat Holyburgers in Groningen dichtging had ik een jaar van niets concreets doen. Net naar Spanje verhuisd, geen plan, geen klanten nog, dus bakte ik brood in plaats van om elf uur wakker te worden als een verloren man. Elke maand-1-broodje was een baksteen. Maand twee waren ze nog steeds bakstenen maar had ik het geaccepteerd.",
        "Toen ontmoette ik Jean-Marc, een oude Franse bakker die twintig jaar geleden in Marbella met pensioen was gegaan en zich genoeg verveelde om met me te praten. Hij nam niet de moeite om hydratatie-ratio's of autolyse uit te leggen. Hij vertelde me één ding: twintig uur, en een bakje water onderin de oven. Al het andere is ruis.",
        "Dit is wat eruit kwam. Het is het enige broodrecept dat ik blindelings vertrouw. 's Avonds mengen, 's nachts slapen, 's ochtends bakken. Wat je in die twintig uur ook doet, het brood doet zijn eigen werk.",
      ],
    },
    nowPlaying: {
      track: "Comptine d'un autre été",
      artist: "Yann Tiersen",
    },
    marginalia: [
      {
        id: "bag-1",
        kind: "tip",
        anchor: "step-5",
        body: {
          en: "Steam in the first 10 minutes is what makes the blister. A small tray of water = old-school trick, still works.",
          es: "El vapor en los primeros 10 minutos es lo que hace la ampolla. Una bandejita con agua = truco clásico, sigue funcionando.",
          nl: "Stoom in de eerste 10 minuten maakt de blister. Schaaltje water = oerklassieker, werkt nog altijd.",
        },
      },
      {
        id: "bag-2",
        kind: "warning",
        anchor: "step-7",
        body: {
          en: "Rest 20 minutes minimum before cutting. Earlier and the inside turns gummy.",
          es: "Reposo mínimo 20 minutos antes de cortar. Antes y la miga se hace gomosa.",
          nl: "Laat minstens 20 minuten rusten op een rooster voor het snijden. Anders gomt het binnenste.",
        },
      },
      {
        id: "bag-3",
        kind: "scrawl",
        anchor: "intro",
        body: {
          en: "No-knead is the right name. Try to knead it and you push the wild crumb out.",
          es: "El nombre es literal. Si la amasas, expulsas la miga salvaje.",
          nl: "No-knead heet het niet voor niets. Kneden = de wilde kruim eruit drukken.",
        },
      },
    ],
    ingredients: [
      {
        quantity: { en: "400 g", es: "400 g", nl: "400 g" },
        ingredient: {
          en: "wheat flour (T65 or strong bread flour)",
          es: "harina de trigo (T65 o de fuerza)",
          nl: "tarwebloem (T65 of broodbloem)",
        },
      },
      {
        quantity: { en: "100 g", es: "100 g", nl: "100 g" },
        ingredient: {
          en: "wholemeal wheat flour",
          es: "harina integral de trigo",
          nl: "volkoren tarwemeel",
        },
      },
      {
        quantity: { en: "10 g", es: "10 g", nl: "10 g" },
        ingredient: { en: "salt", es: "sal", nl: "zout" },
      },
      {
        quantity: { en: "2 g", es: "2 g", nl: "2 g" },
        ingredient: {
          en: "instant yeast",
          es: "levadura instantánea",
          nl: "gist (instant)",
        },
      },
      {
        quantity: { en: "380 ml", es: "380 ml", nl: "380 ml" },
        ingredient: {
          en: "water, lukewarm",
          es: "agua tibia",
          nl: "water, lauw",
        },
      },
      {
        group: { en: "For baking", es: "Para hornear", nl: "Voor het bakken" },
        quantity: { en: "as needed", es: "lo necesario", nl: "naar behoefte" },
        ingredient: {
          en: "rice flour or semolina to dust the cloth",
          es: "harina de arroz o sémola para el paño",
          nl: "rijstmeel of griesmeel om in te leggen",
        },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Evening: mix the flours, salt and yeast in a large bowl. Pour in the water, mix with a wet hand until no dry flour remains. No kneading.",
          es: "Por la noche: mezcla las harinas, la sal y la levadura en un bol grande. Añade el agua, mezcla con la mano mojada hasta que no quede harina seca. Sin amasar.",
          nl: "Avond: meng bloem, meel, zout en gist in een grote kom. Water erbij, met natte hand mengen tot er geen droge bloem meer is. Geen kneden.",
        },
      },
      {
        position: 2,
        body: {
          en: "Cover, leave 12-18 hours at room temperature. The dough should double and the surface should be lumpy and full of air.",
          es: "Tapa y deja 12-18 horas a temperatura ambiente. La masa debe doblar y la superficie ponerse irregular y llena de aire.",
          nl: "Dek af, laat 12-18 uur staan op kamertemperatuur tot het deeg verdubbeld is en de oppervlakte bobbelig en luchtig.",
        },
      },
      {
        position: 3,
        body: {
          en: "Tip onto a heavily floured surface. Divide in two. Fold each piece three times (envelope), flip, shape into a loose baguette.",
          es: "Vuelca en una superficie bien enharinada. Divide en dos. Pliega cada pieza tres veces (sobre), gírala y dale forma de baguette suelta.",
          nl: "Stort op een goed bebloemd werkblad. Verdeel in twee. Vouw elk stuk drie keer in (envelop), draai om, vorm losjes tot baguette.",
        },
      },
      {
        position: 4,
        body: {
          en: "Set on a cloth dusted with rice flour, with pleats between the baguettes. Cover, prove 1 hour.",
          es: "Coloca sobre un paño con harina de arroz, con pliegues entre las baguettes. Tapa, deja levar 1 hora.",
          nl: "Leg op een doek met rijstmeel, plooien tussen de baguettes. Afdekken, 1 uur laten narijzen.",
        },
      },
      {
        position: 5,
        body: {
          en: "Heat oven to 250 °C with a cast-iron tray inside. Put a small dish of water on the bottom rack for steam.",
          es: "Calienta el horno a 250 °C con una bandeja de hierro dentro. Coloca un cuenco pequeño con agua abajo para el vapor.",
          nl: "Verwarm de oven op 250 °C met een gietijzeren pan/bakplaat erin. Plaats een schaaltje water onderin voor stoom.",
        },
      },
      {
        position: 6,
        body: {
          en: "Slash four deep diagonals with a razor or sharp knife. Slide onto the hot tray, shut the oven.",
          es: "Haz cuatro cortes diagonales profundos con cuchilla o cuchillo afilado. Pasa a la bandeja caliente, cierra el horno.",
          nl: "Snijd diepe schuine inkepingen (4 per baguette) met een scheermesje. Op de hete plaat schuiven, oven dicht.",
        },
      },
      {
        position: 7,
        body: {
          en: "Bake 22-25 minutes. Deeply coloured, blistered, hollow when tapped underneath. Rest 20 minutes on a rack before cutting.",
          es: "Hornea 22-25 minutos. Bien doradas, ampolladas, suenan huecas al golpear el fondo. Reposa 20 minutos sobre rejilla antes de cortar.",
          nl: "Bak 22-25 minuten tot diep gekleurd, geblisterd, en hol klinkend bij tikken op de onderkant. Laat minstens 20 minuten rusten op een rooster voor het snijden.",
        },
      },
    ],
  },
  {
    slug: "runderwang-rode-wijn",
    title: {
      en: "Beef cheek braised in red wine with roasted garlic",
      es: "Carrillera de ternera al vino tinto con cabeza de ajo asada",
      nl: "Runderwang in rode wijn met gepofte knoflook",
    },
    intro: {
      en: "Eight hours of braise, fifteen minutes of work. Meat that falls under a spoon.",
      es: "Ocho horas de estofado, quince minutos de trabajo. Carne que cae bajo la cuchara.",
      nl: "Acht uur stoof, vijftien minuten werk. Vlees dat onder een lepel valt.",
    },
    category: "hoofd",
    seasons: ["herfst", "winter"],
    difficulty: 3,
    prepMinutes: 25,
    cookMinutes: 480,
    servings: 2,
    heroImage: "/images/recipes/runderwang-rode-wijn.jpg",
    pairing: {
      en: "Mencía from Bierzo, or a big Ribera del Duero.",
      es: "Mencía del Bierzo o un Ribera del Duero con cuerpo.",
      nl: "Mencía uit El Bierzo, of een zware Ribera del Duero.",
    },
    body: {
      en: [
        "Chef René, who ran the meat station at Bord'eau in my Amsterdam years, never rushed a braise. He used to stand by the oven with a stopwatch he didn't actually need and tell anyone who'd listen that the cooks who try to shave off an hour are the ones who can't taste the difference.",
        "He was right. Beef cheek at 130 °C wants six to eight hours. At 160 °C it wants three. The lower one is the better one. The connective tissue has time to turn to silk, the wine has time to lose its alcoholic sharpness and become a sauce. There is no shortcut. Whoever tells you otherwise has never made it well.",
        "Whole garlic bulb in the pan, cut-side up, is the trick I picked up from a stoof guy in Bruges. Twelve hours later you squeeze the cloves out onto the plate next to the meat and the kitchen has done all the work for you. This is the dish I make the day my best friend visits, because by the time he arrives it's been ready for six hours and the only thing left to do is drink.",
      ],
      es: [
        "El chef René, que llevaba la partida de carne en Bord'eau en mis años de Ámsterdam, nunca aceleraba un guiso. Se quedaba al lado del horno con un cronómetro que en realidad no necesitaba y decía a quien quisiera oírlo que los cocineros que tratan de quitarle una hora son los que no notan la diferencia.",
        "Tenía razón. La carrillera a 130 °C pide seis u ocho horas. A 160 °C pide tres. La baja es la buena. El tejido conectivo tiene tiempo de hacerse seda, el vino tiene tiempo de perder el filo alcohólico y convertirse en salsa. No hay atajo. Quien diga lo contrario no la ha hecho bien.",
        "La cabeza entera de ajo en la cazuela, con el corte hacia arriba, es un truco que pillé de un guisandero en Brujas. Doce horas después aprietas los dientes sobre el plato al lado de la carne y la cocina ha hecho todo el trabajo. Este es el plato que hago el día que viene a verme mi mejor amigo, porque cuando llega lleva seis horas listo y lo único que queda es beber.",
      ],
      nl: [
        "Chef René, die de vleesstand draaide bij Bord'eau in mijn Amsterdamse jaren, haastte nooit een stoof. Hij stond bij de oven met een stopwatch die hij eigenlijk niet nodig had en vertelde iedereen die het wilde horen dat de koks die er een uur vanaf willen halen, juist degenen zijn die het verschil niet proeven.",
        "Hij had gelijk. Runderwang op 130 °C wil zes tot acht uur. Op 160 °C wil 'ie drie. De lage is de juiste. Het bindweefsel krijgt tijd om zijde te worden, de wijn krijgt tijd om z'n scherpe alcohol te verliezen en in saus te veranderen. Er is geen shortcut. Wie iets anders beweert heeft 'm nooit goed gemaakt.",
        "Hele knoflookbol in de pan, snijvlak omhoog, is een truc die ik oppikte van een stooftype in Brugge. Twaalf uur later knijp je de tenen op het bord uit naast het vlees en de keuken heeft alles voor je gedaan. Dit is het gerecht dat ik maak op de dag dat m'n beste vriend komt logeren, want tegen de tijd dat hij arriveert is 'ie al zes uur klaar en hoeven we alleen nog te drinken.",
      ],
    },
    nowPlaying: {
      track: "Try a Little Tenderness",
      artist: "Otis Redding",
    },
    marginalia: [
      {
        id: "wang-1",
        kind: "warning",
        anchor: "step-5",
        body: {
          en: "Oven NOT above 140 °C. Higher and the meat goes stringy in twenty minutes.",
          es: "Horno NO por encima de 140 °C. Más alto y la carne se hebra en veinte minutos.",
          nl: "Oven NIET boven 140 °C. Hoger en het vlees wordt draderig in twintig minuten.",
        },
      },
      {
        id: "wang-2",
        kind: "tip",
        anchor: "intro",
        body: {
          en: "Make it the day before. A night in its own sauce makes it deeper. Reheat low.",
          es: "Hazlo la víspera. Una noche en su salsa lo hace más hondo. Recalienta a fuego bajo.",
          nl: "De dag van tevoren maken is beter. Een nacht in de saus, opnieuw opwarmen, dieper.",
        },
      },
      {
        id: "wang-3",
        kind: "scrawl",
        anchor: "step-2",
        body: {
          en: "Sear hard, then sear harder. The crust IS the sauce.",
          es: "Marca fuerte, luego más fuerte. La corteza ES la salsa.",
          nl: "Hard schroeien, dan harder. De korst IS de saus.",
        },
      },
    ],
    ingredients: [
      {
        quantity: { en: "500 g", es: "500 g", nl: "500 g" },
        ingredient: {
          en: "beef cheek, cleaned, in 4 pieces",
          es: "carrillera de ternera, limpia, en 4 trozos",
          nl: "runderwang, schoon, in 4 stukken",
        },
      },
      {
        quantity: { en: "1 + 1 + 1", es: "1 + 1 + 1", nl: "1 + 1 + 1" },
        ingredient: {
          en: "onion + carrot + celery stalk, rough chopped",
          es: "cebolla + zanahoria + rama de apio, en trozos grandes",
          nl: "ui + wortel + bleekselderij, in grove stukken",
        },
      },
      {
        quantity: { en: "1 bulb", es: "1 cabeza", nl: "1 bol" },
        ingredient: {
          en: "garlic, top sliced off",
          es: "ajo, con el cogote cortado",
          nl: "knoflook, kop afgesneden",
        },
      },
      {
        quantity: { en: "2 + 3", es: "2 + 3", nl: "2 + 3" },
        ingredient: {
          en: "bay leaves + thyme sprigs",
          es: "hojas de laurel + ramitas de tomillo",
          nl: "laurierblaadjes + takjes tijm",
        },
      },
      {
        quantity: { en: "1 tbsp", es: "1 cda", nl: "1 el" },
        ingredient: {
          en: "concentrated tomato paste",
          es: "concentrado de tomate",
          nl: "geconcentreerde tomatenpuree",
        },
      },
      {
        quantity: { en: "500 ml", es: "500 ml", nl: "500 ml" },
        ingredient: {
          en: "robust southern red wine",
          es: "tinto del sur con cuerpo",
          nl: "stevige zuidelijke rode wijn",
        },
      },
      {
        quantity: { en: "300 ml", es: "300 ml", nl: "300 ml" },
        ingredient: { en: "beef stock", es: "caldo de carne", nl: "runderfond" },
      },
      {
        quantity: { en: "to taste", es: "al gusto", nl: "naar smaak" },
        ingredient: {
          en: "olive oil, salt, black pepper",
          es: "aceite de oliva, sal, pimienta",
          nl: "olijfolie, zout, peper",
        },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Pat the cheeks dry, season hard with salt and pepper.",
          es: "Seca bien las carrilleras, salpimenta con generosidad.",
          nl: "Wang droogdeppen, stevig kruiden met zout en peper.",
        },
      },
      {
        position: 2,
        body: {
          en: "Heat olive oil in a cast-iron pan high. Sear the meat deep brown on every side. No hurry. Lift out.",
          es: "Calienta aceite en una cazuela de hierro a fuego fuerte. Marca la carne bien dorada por todos los lados. Sin prisa. Reserva.",
          nl: "In een gietijzeren pan met olijfolie diepbruin aanbraden op hoog vuur. Alle zijden, niet haasten. Eruit, opzij.",
        },
      },
      {
        position: 3,
        body: {
          en: "Soften the mirepoix in the same pan, 8 minutes. Stir in the tomato paste, cook two more minutes until it colours.",
          es: "Pocha la mirepoix en la misma cazuela, 8 minutos. Añade el concentrado de tomate y cocina dos minutos más hasta que coja color.",
          nl: "Mirepoix (ui, wortel, selderij) in dezelfde pan, 8 minuten zachtjes karamelliseren. Tomatenpuree erbij, 2 minuten meeroeren tot het kleurt.",
        },
      },
      {
        position: 4,
        body: {
          en: "Deglaze with the red wine. Scrape the bottom clean. Reduce 5 minutes.",
          es: "Desglasa con el vino tinto. Limpia el fondo con cuchara. Reduce 5 minutos.",
          nl: "Blus af met de rode wijn. Schraap de bodem schoon. Reduceer 5 minuten.",
        },
      },
      {
        position: 5,
        body: {
          en: "Meat back in, stock, bay, thyme, whole garlic bulb cut-side up. Liquid just to the meat. Bring to a low boil, lid on, into the oven at 130 °C for 6-8 hours.",
          es: "Devuelve la carne, añade caldo, laurel, tomillo y la cabeza de ajo con el corte hacia arriba. El líquido apenas debe llegar a la carne. Lleva al primer hervor, tapa y al horno a 130 °C, 6-8 horas.",
          nl: "Vlees terug, fond erbij, laurier, tijm, hele knoflookbol met snijvlak naar boven. Vloeistof moet net tot het vlees komen. Aan de kook brengen, deksel erop, oven op 130 °C. 6-8 uur stoven.",
        },
      },
      {
        position: 6,
        body: {
          en: "Lift the cheeks out, garlic alongside. Strain the braising liquid, defat it, reduce on the hob to a syrupy sauce. About a third.",
          es: "Saca las carrilleras, el ajo al lado. Cuela el jugo, retira la grasa, reduce al fuego hasta una salsa de jarabe. Un tercio aproximadamente.",
          nl: "Vlees voorzichtig uitnemen, knoflookbol ernaast. Zeef het stoofvocht, ontvet, reduceer op het vuur tot een sirupy saus (ongeveer 1/3).",
        },
      },
      {
        position: 7,
        body: {
          en: "Meat back in the sauce to warm and glaze. Garlic on the plate. Guests squeeze the cloves out themselves.",
          es: "Vuelve la carne a la salsa para calentar y glasear. El ajo al plato. Cada uno aprieta los dientes en su sitio.",
          nl: "Vlees terug in de saus om op te warmen en te glaceren. Knoflook erbij. Uit te knijpen op het bord.",
        },
      },
    ],
  },
  {
    slug: "dorada-plancha",
    title: {
      en: "Dorada à la plancha with charred lemon and olive oil",
      es: "Dorada a la plancha con limón quemado y aceite de oliva",
      nl: "Dorada à la plancha met geroosterde citroen en olijfolie",
    },
    intro: {
      en: "Whole fish, crisp skin, nothing else. Costa del Sol on a plate.",
      es: "Pescado entero, piel crujiente, nada más. Costa del Sol en un plato.",
      nl: "Hele vis, knapperig vel, niets meer. Costa del Sol op een bord.",
    },
    category: "hoofd",
    seasons: ["lente", "zomer"],
    difficulty: 2,
    prepMinutes: 10,
    cookMinutes: 10,
    servings: 2,
    heroImage: "/images/recipes/dorada-plancha.jpg",
    pairing: {
      en: "Albariño from Rías Baixas. Cold. Big glass.",
      es: "Albariño de las Rías Baixas. Frío. Copa grande.",
      nl: "Albariño uit Rías Baixas. Koud. Groot glas.",
    },
    body: {
      en: [
        "There's a chiringuito in Estepona. A wooden shack on the sand that's been there since before I was born. Where an old guy called Pepe runs the plancha. He doesn't speak much English, doesn't need to. He grills two things really, with a third sometimes: dorada, lubina, and on Fridays sardines so fresh they still look surprised.",
        "First time I tried to help him I reached for a fish on the plancha after maybe two minutes and got my hand slapped. 'No la toques,' he said. Don't touch it. The fish releases itself when it's ready. Touch it before and you tear the skin and lose what you came for in the first place. That was the whole lesson.",
        "I make this at home now exactly the way Pepe makes it on the beach. Hot iron, oil, salt, fish, wait. Charred lemon next to it because the acid wakes the fat up. A finger-pour of green olive oil to finish, because Andalusia made me believe in olive oil the way Italians believe in olive oil. Nothing else.",
      ],
      es: [
        "Hay un chiringuito en Estepona. Un cobertizo de madera sobre la arena que está allí desde antes de nacer yo. Donde un viejo llamado Pepe maneja la plancha. No habla mucho inglés, no le hace falta. Cocina dos cosas en serio, una tercera a veces: dorada, lubina y los viernes sardinas tan frescas que aún parecen sorprendidas.",
        "La primera vez que traté de ayudarle alargué la mano al pescado en la plancha a los dos minutos y me dio un manotazo. 'No la toques,' dijo. El pescado se suelta solo cuando está. Si lo tocas antes rompes la piel y pierdes lo único por lo que venías. Esa fue toda la lección.",
        "Lo hago en casa exactamente como Pepe lo hace en la playa. Hierro caliente, aceite, sal, pescado, esperar. Limón quemado al lado porque el ácido despierta la grasa. Un hilo de aceite verde por encima al final, porque Andalucía me hizo creer en el aceite como los italianos creen en el suyo. Nada más.",
      ],
      nl: [
        "Er staat een chiringuito in Estepona. Een houten keet op het zand die er al stond voordat ik geboren ben. Waar een oude vent met de naam Pepe de plancha bedient. Hij spreekt weinig Engels, hoeft niet. Hij grilt feitelijk twee dingen, soms een derde: dorada, zeebaars en op vrijdag sardientjes zo vers dat ze nog verbaasd kijken.",
        "Eerste keer dat ik probeerde te helpen, greep ik na een minuut of twee naar een vis op de plancha en kreeg een tik op m'n hand. 'No la toques,' zei hij. Niet aanraken. De vis laat zichzelf los als 'ie klaar is. Raak hem eerder aan en je trekt het vel kapot en verliest precies waar je voor kwam. Dat was de hele les.",
        "Ik maak 'm thuis nu precies zoals Pepe 'm op het strand maakt. Heet ijzer, olie, zout, vis, wachten. Geroosterde citroen ernaast omdat het zuur het vet wakker maakt. Een straaltje groene olijfolie eroverheen tot slot, omdat Andalusië me net zo in olijfolie heeft laten geloven als Italianen in de hunne. Verder niets.",
      ],
    },
    nowPlaying: {
      track: "Soy gitano",
      artist: "Camarón de la Isla",
    },
    marginalia: [
      {
        id: "dor-1",
        kind: "warning",
        anchor: "step-3",
        body: {
          en: "Don't touch the fish for 4-5 minutes. It releases when it's ready, not before.",
          es: "No toques el pescado durante 4-5 minutos. Se suelta cuando está, no antes.",
          nl: "Niet aanraken voor 4-5 minuten. Het vel moet vastgrillen en zelf loslaten.",
        },
      },
      {
        id: "dor-2",
        kind: "tip",
        anchor: "step-5",
        body: {
          en: "Done = the dorsal fin pulls out cleanly. Then wait one more minute on the plate before serving.",
          es: "Listo = la aleta dorsal sale limpia. Después espera un minuto más en el plato antes de servir.",
          nl: "Vis is gaar als de rugvin er met een lichte ruk uit komt. Daarna 1 minuut wachten op het bord.",
        },
      },
      {
        id: "dor-3",
        kind: "scrawl",
        anchor: "ingredients",
        body: {
          en: "Olive oil at the end, not at the start. Hot oil burns; finishing oil sings.",
          es: "El aceite al final, no al principio. Aceite caliente quema; aceite final canta.",
          nl: "Olijfolie aan het eind, niet aan het begin. Hete olie verbrandt; afmaak-olie zingt.",
        },
      },
    ],
    ingredients: [
      {
        quantity: { en: "1 whole", es: "1 entera", nl: "1 hele" },
        ingredient: {
          en: "dorada (sea bream) of about 600-700 g, scaled and gutted",
          es: "dorada de unos 600-700 g, escamada y limpia",
          nl: "dorada van circa 600-700 g, geschubd en gestript",
        },
      },
      {
        quantity: { en: "as needed", es: "lo necesario", nl: "naar behoefte" },
        ingredient: {
          en: "olive oil + coarse sea salt + black pepper",
          es: "aceite de oliva + sal marina gruesa + pimienta",
          nl: "olijfolie + grof zeezout + zwarte peper",
        },
      },
      {
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: {
          en: "lemon, halved",
          es: "limón, partido",
          nl: "citroen, gehalveerd",
        },
      },
      {
        quantity: { en: "2 sprigs", es: "2 ramitas", nl: "2 takjes" },
        ingredient: { en: "thyme", es: "tomillo", nl: "tijm" },
      },
      {
        group: { en: "To finish", es: "Para terminar", nl: "Afwerking" },
        quantity: { en: "drizzle", es: "chorrito", nl: "scheutje" },
        ingredient: {
          en: "fruity extra-virgin olive oil + fleur de sel + flat parsley",
          es: "AOVE afrutado + flor de sal + perejil de hoja plana",
          nl: "fruitige extra vergine olijfolie + fleur de sel + platte peterselie",
        },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Heat a plancha or cast-iron plate to blue-smoke hot. No plancha? A hot cast-iron pan works.",
          es: "Calienta una plancha o sartén de hierro hasta humo azul. ¿Sin plancha? Una sartén de hierro bien caliente vale.",
          nl: "Verwarm een plancha of gietijzeren plaat op hoog vuur tot blauwe rook. Geen plancha? Een hete gietijzeren pan werkt ook.",
        },
      },
      {
        position: 2,
        body: {
          en: "Pat the fish dry. Salt the cavity, slip in the thyme. Rub the outside with olive oil and salt it hard.",
          es: "Seca el pescado. Sala la cavidad, mete el tomillo. Engrasa la piel con aceite y sálala con generosidad.",
          nl: "Vis droogdeppen, binnenkant zouten, tijm in de buikholte. Buitenkant insmeren met olijfolie en stevig zouten.",
        },
      },
      {
        position: 3,
        body: {
          en: "Fish on the iron. Don't touch it for 4-5 minutes. The skin must grip and release itself.",
          es: "Pescado en la plancha. No lo toques 4-5 minutos. La piel debe agarrarse y soltarse sola.",
          nl: "Vis op de hete plaat. Niet aanraken voor 4-5 minuten. Het vel moet vastgrillen en zelf loslaten.",
        },
      },
      {
        position: 4,
        body: {
          en: "Place lemon halves cut-side down on the iron. Let them caramelise.",
          es: "Coloca el limón cortado boca abajo sobre la plancha. Deja que caramele.",
          nl: "Citroen-halves met snijvlak op de plaat. Karamelliseren.",
        },
      },
      {
        position: 5,
        body: {
          en: "Flip the fish with two spatulas. Another 3-4 minutes. Core temperature 55 °C.",
          es: "Voltea el pescado con dos espátulas. 3-4 minutos más. Núcleo a 55 °C.",
          nl: "Vis voorzichtig omdraaien met twee spatels. Nog 3-4 minuten. Kerntemperatuur 55 °C.",
        },
      },
      {
        position: 6,
        body: {
          en: "Onto a long platter. Pour green olive oil over, fleur de sel, the grilled lemon alongside, parsley.",
          es: "A una fuente alargada. Aceite verde por encima, flor de sal, el limón a la brasa al lado, perejil.",
          nl: "Op een lange schaal. Fruitige olijfolie eroverheen, fleur de sel, gegrilde citroen ernaast, peterselie.",
        },
      },
    ],
  },
  {
    slug: "tagliatelle-nero-nduja",
    title: {
      en: "Squid-ink tagliatelle with calamari, 'nduja and lemon",
      es: "Tagliatelle nera con calamares, 'nduja y limón",
      nl: "Tagliatelle nero met inktvis, nduja en citroen",
    },
    intro: {
      en: "Jet-black, fire-red, fierce yellow. Spicy, fat, fresh, crunchy on one fork.",
      es: "Negro azabache, rojo fuego, amarillo intenso. Picante, graso, fresco, crujiente en un tenedor.",
      nl: "Pikzwart, vuurrood, fel geel. Pittig, vet, fris, knapperig in één vork.",
    },
    category: "hoofd",
    seasons: ["altijd"],
    difficulty: 4,
    prepMinutes: 50,
    cookMinutes: 15,
    servings: 2,
    heroImage: "/images/recipes/tagliatelle-nero-nduja.jpg",
    pairing: {
      en: "Vermentino di Sardegna or a Greco di Tufo.",
      es: "Vermentino de Cerdeña o un Greco di Tufo.",
      nl: "Vermentino di Sardegna of een Greco di Tufo.",
    },
    body: {
      en: [
        "I had this dish first in Bologna in 2015, during a week I was supposed to be photographing a wedding and ended up eating my way through the city instead. A guy named Tonino ran a food cart in the Mercato delle Erbe with a pasta machine on a table behind him and a stack of 'nduja jars at his feet. He'd never written down a recipe in his life.",
        "He explained the squid trick to me as a favour, since I'd been there three lunches in a row. Squid is 90 seconds or 90 minutes. Anything in between is rubber. You can either flash-cook it screaming hot, or you can stew it patient and slow until it goes soft again. The middle is a trap. Every time someone gets it wrong, it's because they cooked it for four minutes and got nervous.",
        "The pasta is black because of the ink. The 'nduja is red because of the Calabrian chillies. The lemon zest is yellow because lemons are yellow. Three colours that scream at each other on the plate, and somehow taste like they were always meant to share the bowl. The bread crumbs on top are not optional. They are the whole crunch the dish is built around.",
      ],
      es: [
        "Probé este plato por primera vez en Bolonia en 2015, durante una semana en la que tenía que fotografiar una boda y acabé comiéndome la ciudad. Un tipo llamado Tonino llevaba un puesto en el Mercato delle Erbe con una máquina de pasta sobre una mesa y un montón de tarros de 'nduja a sus pies. Nunca había escrito una receta en su vida.",
        "Me explicó el truco del calamar como favor, porque ya iba tres días seguidos. El calamar son 90 segundos o 90 minutos. Todo lo que hay en medio es goma. O lo haces a fuego brutal y rápido, o lo estofas paciente y lento hasta que vuelva a ablandarse. El medio es una trampa. Cuando alguien lo arruina es porque lo coció cuatro minutos y se puso nervioso.",
        "La pasta es negra por la tinta. La 'nduja es roja por las guindillas calabresas. La ralladura es amarilla porque los limones son amarillos. Tres colores gritándose en el plato y, sin embargo, sabiendo a que siempre debieron compartir el bol. Las migas tostadas no son opcionales. Son el crujido sobre el que se levanta el plato.",
      ],
      nl: [
        "Ik proefde dit voor het eerst in Bologna in 2015, tijdens een week dat ik geacht werd een bruiloft te fotograferen en in plaats daarvan de stad door at. Een vent met de naam Tonino runde een foodtruck op de Mercato delle Erbe met een pastamachine op een tafeltje en een stapel 'nduja-potjes aan z'n voeten. Hij had in z'n leven nog nooit een recept opgeschreven.",
        "Hij legde me de inktvis-truc uit als een gunst, omdat ik er drie lunches achter elkaar zat. Inktvis is 90 seconden of 90 minuten. Alles ertussenin is rubber. Je doet hem flitsend op vuurrood, of je stooft 'm geduldig en langzaam tot 'ie weer zacht wordt. Het midden is een val. Elke keer dat iemand het verprutst, is het omdat ze 'm vier minuten hebben gebakken en zenuwachtig werden.",
        "De pasta is zwart door de inkt. De nduja is rood door de Calabrische chilies. De citroenrasp is geel omdat citroenen geel zijn. Drie kleuren die elkaar van het bord af schreeuwen, en toch smaken alsof ze altijd al samen in die kom hoorden. De broodkruim erbovenop is geen luxe. Het is de hele crunch waarop het gerecht rust.",
      ],
    },
    nowPlaying: {
      track: "Acqua azzurra, acqua chiara",
      artist: "Lucio Battisti",
    },
    marginalia: [
      {
        id: "tag-1",
        kind: "warning",
        anchor: "step-4",
        body: {
          en: "Squid: 90 seconds or 90 minutes. Anything in between is rubber.",
          es: "Calamar: 90 segundos o 90 minutos. Cualquier cosa entre medias es goma.",
          nl: "Inktvis: 90 seconden of 90 minuten. Alles ertussenin is rubber.",
        },
      },
      {
        id: "tag-2",
        kind: "tip",
        anchor: "step-1",
        body: {
          en: "Rest the pasta dough 30 minutes before rolling. Without rest it tears.",
          es: "Deja reposar la masa 30 minutos antes de estirarla. Sin reposo se rompe.",
          nl: "Pasta-deeg 30 minuten laten rusten voor je 'm uitrolt. Zonder rust scheurt 'ie.",
        },
      },
      {
        id: "tag-3",
        kind: "scrawl",
        anchor: "step-6",
        body: {
          en: "A spoon of pasta water before plating. That's the binder, that's the gloss.",
          es: "Una cucharada de agua de la pasta antes de emplatar. Esa es la liga, ese es el brillo.",
          nl: "Een lepel pastawater voor het opdienen. Dát is de binding, dát is de glans.",
        },
      },
    ],
    ingredients: [
      {
        group: { en: "Pasta", es: "Pasta", nl: "Pasta" },
        quantity: { en: "200 g", es: "200 g", nl: "200 g" },
        ingredient: { en: "00 flour", es: "harina 00", nl: "00-bloem" },
      },
      {
        group: { en: "Pasta", es: "Pasta", nl: "Pasta" },
        quantity: { en: "2", es: "2", nl: "2" },
        ingredient: { en: "medium eggs", es: "huevos M", nl: "eieren M" },
      },
      {
        group: { en: "Pasta", es: "Pasta", nl: "Pasta" },
        quantity: { en: "8 g", es: "8 g", nl: "8 g" },
        ingredient: {
          en: "squid ink (sachet)",
          es: "tinta de calamar (sobre)",
          nl: "inktvisinkt (zakje)",
        },
      },
      {
        group: { en: "Sauce", es: "Salsa", nl: "Saus" },
        quantity: { en: "200 g", es: "200 g", nl: "200 g" },
        ingredient: {
          en: "cleaned calamari, in rings",
          es: "calamares limpios, en aros",
          nl: "schoongemaakte inktvis, in ringen",
        },
      },
      {
        group: { en: "Sauce", es: "Salsa", nl: "Saus" },
        quantity: { en: "60 g", es: "60 g", nl: "60 g" },
        ingredient: { en: "'nduja", es: "'nduja", nl: "nduja" },
      },
      {
        group: { en: "Sauce", es: "Salsa", nl: "Saus" },
        quantity: { en: "30 g", es: "30 g", nl: "30 g" },
        ingredient: { en: "butter", es: "mantequilla", nl: "boter" },
      },
      {
        group: { en: "Sauce", es: "Salsa", nl: "Saus" },
        quantity: { en: "2 cloves", es: "2 dientes", nl: "2 teentjes" },
        ingredient: {
          en: "garlic, thinly sliced",
          es: "ajo en láminas finas",
          nl: "knoflook, dun gesneden",
        },
      },
      {
        group: { en: "Sauce", es: "Salsa", nl: "Saus" },
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: {
          en: "lemon (zest of one, juice of half)",
          es: "limón (ralladura de uno, zumo de medio)",
          nl: "citroen (rasp van één, sap van een halve)",
        },
      },
      {
        group: { en: "Topping", es: "Topping", nl: "Topping" },
        quantity: { en: "40 g", es: "40 g", nl: "40 g" },
        ingredient: {
          en: "coarse breadcrumbs + 1 tsp olive oil + parsley",
          es: "pan rallado grueso + 1 cdta de aceite + perejil",
          nl: "grove broodkruim + 1 tl olijfolie + peterselie",
        },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Pasta: flour, eggs, ink and a pinch of salt in a stand mixer or processor. 1 minute on the dough setting. Wrap, rest 30 minutes. Roll out to setting 6, cut tagliatelle, dust with flour.",
          es: "Pasta: harina, huevos, tinta y una pizca de sal en amasadora o procesadora. 1 minuto en modo amasado. Envuelve, reposa 30 minutos. Estira al grosor 6, corta en tagliatelle, espolvorea con harina.",
          nl: "Pasta: bloem, eieren, inkt en zout in een kneedmachine. 1 minuut op kneedstand. Wikkel in folie, 30 min rusten. Uitrollen tot stand 6, in tagliatelle snijden, met bloem bestrooien.",
        },
      },
      {
        position: 2,
        body: {
          en: "Toast the breadcrumbs in a dry pan with olive oil until deep gold. Set aside.",
          es: "Tuesta el pan rallado en una sartén seca con aceite hasta dorar oscuro. Reserva.",
          nl: "Broodkruim in een droge koekenpan met olijfolie goudbruin roosteren. Apart houden.",
        },
      },
      {
        position: 3,
        body: {
          en: "Pasta into boiling salted water. 2-3 minutes, al dente.",
          es: "Pasta al agua hirviendo con sal. 2-3 minutos, al dente.",
          nl: "Pasta in kokend gezouten water. 2-3 minuten, beetgaar.",
        },
      },
      {
        position: 4,
        body: {
          en: "Big pan: olive oil, garlic soft. 'Nduja in, melt until the oil runs red. Calamari in. 90 seconds on high heat, no longer.",
          es: "Sartén grande: aceite, ajo a sudar. 'Nduja, deshacer hasta que el aceite se ponga rojo. Calamares. 90 segundos a fuego fuerte, no más.",
          nl: "In een grote pan: olijfolie, knoflook zacht laten worden. Nduja erbij, smelten tot olie rood kleurt. Inktvis erbij. 90 seconden op hoog vuur, niet langer.",
        },
      },
      {
        position: 5,
        body: {
          en: "Butter in, lemon zest and juice. A spoon of pasta water to bind.",
          es: "Mantequilla, ralladura y zumo de limón. Una cucharada de agua de pasta para ligar.",
          nl: "Boter erin, citroenrasp en -sap. Een schep pastawater erbij voor binding.",
        },
      },
      {
        position: 6,
        body: {
          en: "Pasta in with tongs, lift through the sauce. If it's tight, more pasta water. Twist into deep bowls.",
          es: "Pasa la pasta a la sartén con pinzas, integra con la salsa. Si queda apretado, más agua de pasta. Enrolla en platos hondos.",
          nl: "Pasta erbij met een tang, even doortillen. Indien te droog: nog pastawater. In diepe borden draaien.",
        },
      },
      {
        position: 7,
        body: {
          en: "Breadcrumbs over, parsley, extra lemon zest. Eat immediately.",
          es: "Pan rallado, perejil, ralladura extra. Cómelo al momento.",
          nl: "Broodkruim eroverheen, peterselie, extra citroenrasp. Direct opeten.",
        },
      },
    ],
  },
  {
    slug: "vitello-tonnato",
    title: {
      en: "Vitello tonnato",
      es: "Vitello tonnato",
      nl: "Vitello tonnato",
    },
    intro: {
      en: "Italian classic. Nothing to update. Cold veal, creamy tuna sauce.",
      es: "Clásico italiano. No hay nada que actualizar. Ternera fría, salsa de atún cremosa.",
      nl: "Italiaanse klassieker. Niets aan veranderen. Koude kalfsmuis, romige tonijnsaus.",
    },
    category: "voor",
    seasons: ["zomer"],
    difficulty: 3,
    prepMinutes: 30,
    cookMinutes: 60,
    servings: 2,
    heroImage: "/images/recipes/vitello-tonnato.jpg",
    pairing: {
      en: "Soave Classico or a lightly chilled Barolo.",
      es: "Soave Classico o un Barolo ligeramente frío.",
      nl: "Soave Classico of een licht gekoelde Barolo.",
    },
    body: {
      en: [
        "Chef Sergio at Bord'eau was Italian, properly Italian, and he had no patience for vitello tonnato done badly. The Dutch versions he'd tasted in his early Amsterdam years had haunted him. He served his with the meat sliced so thin you could read a menu through it, and a tonnato so smooth it sat like a sauce should sit. Without ever sliding off the plate.",
        "He gave me a single rule when I asked him about it: 'non lo modernizzare.' Don't modernize it. Don't add truffle oil, don't swap the tonnato for something clever, don't deconstruct it onto a slate, don't pretend the original is something to be improved upon. Make it the way someone in Piemonte made it in 1950 and you will not be embarrassed by it.",
        "What he didn't tell me is how good fried capers are on top. That I worked out on my own, watching a girl from Liguria do it at a beach bar in Sori one August. She fried them until they bloomed open like little flowers. I have never made vitello tonnato without them since.",
      ],
      es: [
        "El chef Sergio en Bord'eau era italiano, italiano de verdad, y no tenía paciencia con el vitello tonnato hecho mal. Las versiones holandesas que había probado en sus primeros años en Ámsterdam le perseguían. Servía la suya con la carne cortada tan fina que se podía leer un menú a través, y un tonnato tan liso que se quedaba como debe quedar una salsa. Sin escurrirse del plato.",
        "Me dio una sola regla cuando le pregunté: 'non lo modernizzare.' No lo modernices. No le pongas aceite de trufa, no cambies el tonnato por algo listillo, no lo descompongas sobre una pizarra, no finjas que el original es algo que hay que mejorar. Hazlo como alguien en Piamonte lo hacía en 1950 y no pasarás vergüenza.",
        "Lo que no me contó es lo buenas que están las alcaparras fritas por encima. Eso lo descubrí solo, viendo a una chica de Liguria hacerlo en un chiringuito de Sori un agosto. Las fríe hasta que se abren como flores pequeñas. No he hecho un vitello sin ellas desde entonces.",
      ],
      nl: [
        "Chef Sergio bij Bord'eau was Italiaans, echt Italiaans, en hij had geen geduld voor slecht gemaakte vitello tonnato. De Nederlandse versies die hij in z'n eerste Amsterdamse jaren had geproefd achtervolgden hem. Hij serveerde de zijne met het vlees zo dun gesneden dat je er een menu doorheen kon lezen, en een tonnato zo glad dat 'ie stil bleef zitten op het bord. Niet wegliep.",
        "Hij gaf me één regel toen ik ernaar vroeg: 'non lo modernizzare.' Niet moderniseren. Geen truffelolie eroverheen, geen slimme alternatieven voor de tonnato, niet deconstrueren op een lei, niet doen alsof het origineel iets is dat verbeterd moet worden. Maak 'm zoals iemand in Piemonte 'm in 1950 maakte en je hoeft je nergens voor te schamen.",
        "Wat hij me niet vertelde is hoe goed gefrituurde kappertjes zijn als topping. Dat ontdekte ik zelf, kijkend hoe een meisje uit Ligurië het deed in een strandtent in Sori, een augustus. Ze frituurde ze tot ze opensloegen als kleine bloemen. Sindsdien maak ik geen vitello tonnato meer zonder.",
      ],
    },
    nowPlaying: {
      track: "Via con me",
      artist: "Paolo Conte",
    },
    marginalia: [
      {
        id: "vit-1",
        kind: "warning",
        anchor: "step-5",
        body: {
          en: "Cold plate, cold meat. Tonnato splits in warmth.",
          es: "Plato frío, carne fría. El tonnato se corta con el calor.",
          nl: "Koud bord, koud vlees. Tonnato schift in warmte.",
        },
      },
      {
        id: "vit-2",
        kind: "tip",
        anchor: "step-3",
        body: {
          en: "Anchovies and capers carry the salt. Often no extra salt needed at all.",
          es: "Las anchoas y las alcaparras llevan la sal. Muchas veces no hace falta más.",
          nl: "Ansjovis en kappertjes dragen het zout. Vaak helemaal geen zout extra nodig.",
        },
      },
      {
        id: "vit-3",
        kind: "scrawl",
        anchor: "intro",
        body: {
          en: "Cut the meat the next day, never the same day. Cold = clean slices.",
          es: "Corta la carne al día siguiente, no el mismo día. Fría = lonchas limpias.",
          nl: "Snijd het vlees de volgende dag, niet dezelfde dag. Koud = strakke plakken.",
        },
      },
    ],
    ingredients: [
      {
        group: { en: "Veal", es: "Ternera", nl: "Kalfsmuis" },
        quantity: { en: "250 g", es: "250 g", nl: "250 g" },
        ingredient: {
          en: "veal eye-of-round (roasted) or lean fricandeau",
          es: "redondo de ternera (asado) o fricandó magro",
          nl: "kalfsmuis (gebraden) of magere kalfsfricandeau",
        },
      },
      {
        group: { en: "Veal", es: "Ternera", nl: "Kalfsmuis" },
        quantity: { en: "drizzle", es: "chorrito", nl: "scheutje" },
        ingredient: {
          en: "olive oil + salt + black pepper + 1 sprig rosemary",
          es: "aceite + sal + pimienta + 1 ramita de romero",
          nl: "olijfolie + zout + peper + 1 takje rozemarijn",
        },
      },
      {
        group: { en: "Tonnato sauce", es: "Salsa tonnata", nl: "Tonnato-saus" },
        quantity: { en: "1 + 1", es: "1 + 1", nl: "1 + 1" },
        ingredient: {
          en: "egg yolk + 1 whole egg",
          es: "yema + 1 huevo entero",
          nl: "dooier + 1 heel ei",
        },
      },
      {
        group: { en: "Tonnato sauce", es: "Salsa tonnata", nl: "Tonnato-saus" },
        quantity: { en: "1 tsp", es: "1 cdta", nl: "1 tl" },
        ingredient: { en: "Dijon mustard", es: "mostaza de Dijon", nl: "Dijonmosterd" },
      },
      {
        group: { en: "Tonnato sauce", es: "Salsa tonnata", nl: "Tonnato-saus" },
        quantity: { en: "100 g", es: "100 g", nl: "100 g" },
        ingredient: {
          en: "tuna in olive oil, drained",
          es: "atún en aceite, escurrido",
          nl: "tonijn in olijfolie, uitgelekt",
        },
      },
      {
        group: { en: "Tonnato sauce", es: "Salsa tonnata", nl: "Tonnato-saus" },
        quantity: { en: "4", es: "4", nl: "4" },
        ingredient: {
          en: "anchovy fillets + 2 tbsp capers + 1 tbsp lemon juice",
          es: "filetes de anchoa + 2 cdas de alcaparras + 1 cda de zumo de limón",
          nl: "ansjovisfilets + 2 el kappertjes + 1 el citroensap",
        },
      },
      {
        group: { en: "Tonnato sauce", es: "Salsa tonnata", nl: "Tonnato-saus" },
        quantity: { en: "150 + 50 ml", es: "150 + 50 ml", nl: "150 + 50 ml" },
        ingredient: {
          en: "sunflower oil + olive oil",
          es: "aceite de girasol + aceite de oliva",
          nl: "zonnebloemolie + olijfolie",
        },
      },
      {
        group: { en: "To finish", es: "Para terminar", nl: "Afwerking" },
        quantity: { en: "2 tbsp", es: "2 cdas", nl: "2 el" },
        ingredient: {
          en: "capers + frying oil + black pepper + lemon wedges",
          es: "alcaparras + aceite para freír + pimienta + gajos de limón",
          nl: "kappertjes + frituurolie + peper + citroenpartjes",
        },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Veal: rub with oil, season, oven at 130 °C. Slow-cook 45-60 minutes until core 56 °C. Cool, then chill at least 4 hours.",
          es: "Ternera: úntala con aceite, salpimenta, horno a 130 °C. Cocina lenta 45-60 minutos hasta núcleo 56 °C. Enfría y luego mete en la nevera mínimo 4 horas.",
          nl: "Kalfsmuis: bestrijk met olijfolie, kruid, oven op 130 °C. Sous-vide stijl gaarstoven 45-60 minuten tot kerntemperatuur 56 °C. Afkoelen, dan minimaal 4 uur in de koelkast.",
        },
      },
      {
        position: 2,
        body: {
          en: "Tonnato: blitz yolk, whole egg, mustard, tuna, anchovies, capers and lemon juice for 20 seconds.",
          es: "Tonnato: tritura 20 segundos yema, huevo entero, mostaza, atún, anchoas, alcaparras y zumo de limón.",
          nl: "Tonnato: dooier, ei, mosterd, tonijn, ansjovis, kappertjes, citroensap blenden. 20 sec.",
        },
      },
      {
        position: 3,
        body: {
          en: "With the blender running low, add the oils in a thin stream until thick and glossy. Taste. Usually no extra salt.",
          es: "Con la máquina a velocidad baja, añade los aceites en hilo fino hasta espesar y brillar. Prueba. Normalmente no necesita más sal.",
          nl: "Op lage stand, oliën in dunne straal toevoegen tot saus dik en glanzend. Proeven. Meestal geen extra zout nodig.",
        },
      },
      {
        position: 4,
        body: {
          en: "Fry the remaining capers in hot oil until they bloom open. Drain on kitchen paper.",
          es: "Fríe las alcaparras restantes en aceite caliente hasta que se abran como flores. Escurre sobre papel.",
          nl: "Kappertjes frituren in hete olie tot ze openbloeien. Op keukenpapier.",
        },
      },
      {
        position: 5,
        body: {
          en: "Slice the veal razor-thin (mandoline or sharp knife). Lay flat on a cold plate, in one layer.",
          es: "Corta la carne fina como papel (mandolina o cuchillo afilado). Extiende plana en un plato frío, una sola capa.",
          nl: "Vlees vlijmscherp dun snijden (mandoline of scherp mes). Plat uitleggen op koud bord, een laag.",
        },
      },
      {
        position: 6,
        body: {
          en: "Pour the tonnato over generously. Scatter the fried capers, crack of pepper, lemon wedge alongside.",
          es: "Vierte el tonnato con generosidad. Esparce las alcaparras fritas, una vuelta de pimienta, un gajo de limón al lado.",
          nl: "Royaal tonnato-saus eroverheen, gefrituurde kappertjes, krak zwarte peper, citroenpartje ernaast.",
        },
      },
    ],
  },
  {
    slug: "brownie-fleur-de-sel",
    title: {
      en: "Brownie with fleur de sel and smoked chocolate",
      es: "Brownie con flor de sal y chocolate ahumado",
      nl: "Brownie met fleur de sel en gerookte chocolade",
    },
    intro: {
      en: "Fudgy middle, crackled edge. Smoked salt, no smoke flavour.",
      es: "Centro fudgy, borde crujiente. Sal ahumada, sin aroma a humo.",
      nl: "Fudgy midden, krokante rand. Gerookt zout, geen rook-aroma.",
    },
    category: "dessert",
    seasons: ["altijd"],
    difficulty: 2,
    prepMinutes: 20,
    cookMinutes: 25,
    servings: 9,
    heroImage: "/images/recipes/brownie-fleur-de-sel.jpg",
    pairing: {
      en: "Espresso, or a twenty-year tawny port in a small glass.",
      es: "Espresso o un tawny de veinte años en copita.",
      nl: "Espresso, of een twintigjarige tawny port in een klein glas.",
    },
    body: {
      en: [
        "First brownie I ever made was for a girlfriend's birthday when I was nineteen. It came out like a hockey puck. She ate a slice anyway, told me it was 'crunchy', smiled, and never asked me to make one again. I think about that brownie more than I should.",
        "Marc at Bord'eau. The same Marc from the gougère. Fixed me later with one rule: underbake. Always. Chocolate continues to set after the tin comes out. A brownie that looked right out of the oven is a brick by the time it cools. A brownie that wobbles in the middle when you pull the tin out is what you actually want.",
        "The smoked salt I use comes from a tiny operation in Cádiz where they smoke flake salt over old whisky barrels. Don't use commercial smoke flavour. It tastes like wood preservative. Plain fleur de sel is also fine. The point is salt in punctual little crystals on top, not stirred through.",
      ],
      es: [
        "El primer brownie que hice en mi vida fue para el cumpleaños de una novia, tenía diecinueve años. Salió como un pisapapeles. Se comió una porción de todas formas, me dijo que estaba 'crujiente', sonrió y no me volvió a pedir otro nunca. Pienso en ese brownie más de lo que debería.",
        "Marc en Bord'eau. El mismo Marc de la gougère. Me arregló más tarde con una sola regla: subhornea. Siempre. El chocolate sigue cuajando después de salir del molde. Un brownie que parece listo al sacarlo es un ladrillo cuando enfría. El brownie que tiembla en el medio cuando sacas el molde es lo que de verdad quieres.",
        "La sal ahumada que uso viene de una pequeña producción en Cádiz donde ahúman sal en escamas sobre barriles viejos de whisky. No uses aroma de humo comercial. Sabe a barniz. La flor de sal sin más también vale. Lo importante es la sal en cristales puntuales arriba, no integrada en la masa.",
      ],
      nl: [
        "De eerste brownie die ik ooit maakte was voor de verjaardag van een vriendinnetje toen ik negentien was. Hij kwam eruit als een ijshockey-puck. Ze at toch een stuk, zei dat 'ie 'knapperig' was, glimlachte, en heeft me er nooit meer eentje gevraagd. Ik denk vaker aan die brownie dan ik zou moeten.",
        "Marc bij Bord'eau. Dezelfde Marc als bij de gougère. Leerde me later één regel: onderbakken. Altijd. Chocolade gaart na als de vorm uit de oven komt. Een brownie die er bij het uittillen al goed uitziet, is een baksteen tegen de tijd dat 'ie is afgekoeld. Een brownie die wiebelt in het midden bij het uithalen is wat je wilt.",
        "Het gerookte zout dat ik gebruik komt van een piepkleine zoutwinning in Cádiz waar ze vlokzout boven oude whisky-vaten roken. Gebruik geen commerciële rookaroma. Dat smaakt naar houtbeits. Gewone fleur de sel kan ook prima. Het punt is zout in puntige kristallen erbovenop, niet erdoor.",
      ],
    },
    nowPlaying: {
      track: "Ain't No Sunshine",
      artist: "Bill Withers",
    },
    marginalia: [
      {
        id: "brwn-1",
        kind: "warning",
        anchor: "step-5",
        body: {
          en: "Underbake on purpose. Wobble in the middle = perfect when cool.",
          es: "Subhornea a propósito. Tiembla en el medio = perfecto al enfriar.",
          nl: "Bewust onderbakken. Wiebel in het midden = perfect na afkoelen.",
        },
      },
      {
        id: "brwn-2",
        kind: "tip",
        anchor: "step-6",
        body: {
          en: "Warm the knife under hot water between cuts. Clean slices, no drag.",
          es: "Calienta el cuchillo bajo el grifo entre cortes. Lonchas limpias, sin arrastrar.",
          nl: "Mes warm afspoelen tussen sneden. Schone plakken, geen sleur.",
        },
      },
      {
        id: "brwn-3",
        kind: "wrong",
        anchor: "intro",
        body: {
          en: "First time I made these I baked 35 minutes 'just to be safe'. Hockey puck. Trust the wobble.",
          es: "La primera vez horneé 35 minutos 'por si acaso'. Pisapapeles. Confía en el temblor.",
          nl: "Eerste keer bakte ik 35 minuten 'voor de zekerheid'. IJshockey-puck. Vertrouw op de wiebel.",
        },
      },
    ],
    ingredients: [
      {
        quantity: { en: "200 g", es: "200 g", nl: "200 g" },
        ingredient: {
          en: "70% dark chocolate",
          es: "chocolate negro 70%",
          nl: "pure chocolade 70%",
        },
      },
      {
        quantity: { en: "150 g", es: "150 g", nl: "150 g" },
        ingredient: { en: "butter", es: "mantequilla", nl: "boter" },
      },
      {
        quantity: { en: "200 g", es: "200 g", nl: "200 g" },
        ingredient: {
          en: "light brown soft sugar",
          es: "azúcar moreno claro",
          nl: "lichtbruine basterdsuiker",
        },
      },
      {
        quantity: { en: "50 g", es: "50 g", nl: "50 g" },
        ingredient: { en: "white sugar", es: "azúcar blanco", nl: "witte suiker" },
      },
      {
        quantity: { en: "3", es: "3", nl: "3" },
        ingredient: {
          en: "medium eggs + 1 tsp vanilla extract",
          es: "huevos M + 1 cdta de extracto de vainilla",
          nl: "eieren M + 1 tl vanille-extract",
        },
      },
      {
        quantity: { en: "100 g", es: "100 g", nl: "100 g" },
        ingredient: { en: "flour", es: "harina", nl: "bloem" },
      },
      {
        quantity: { en: "20 g", es: "20 g", nl: "20 g" },
        ingredient: {
          en: "cocoa powder + pinch salt",
          es: "cacao en polvo + pizca de sal",
          nl: "cacaopoeder + snuf zout",
        },
      },
      {
        group: { en: "To finish", es: "Para terminar", nl: "Afwerking" },
        quantity: { en: "to taste", es: "al gusto", nl: "naar smaak" },
        ingredient: {
          en: "fleur de sel, or smoked sea salt",
          es: "flor de sal o sal ahumada",
          nl: "fleur de sel, of zelf-gerookt zeezout",
        },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Oven to 170 °C. Line a 20-cm square tin with baking paper, with overhang for lifting.",
          es: "Horno a 170 °C. Forra un molde cuadrado de 20 cm con papel, con solapas para sacarlo.",
          nl: "Oven op 170 °C. Vorm 20 cm bekleden met bakpapier (overhang voor uit te tillen).",
        },
      },
      {
        position: 2,
        body: {
          en: "Melt chocolate and butter together over a bain-marie. Cool 5 minutes off the heat.",
          es: "Funde el chocolate y la mantequilla al baño maría. Deja templar 5 minutos fuera del fuego.",
          nl: "Chocolade en boter au bain-marie smelten. Laat 5 minuten afkoelen.",
        },
      },
      {
        position: 3,
        body: {
          en: "Beat in both sugars and the eggs with the vanilla. Hard, until glossy and ribbon-thick (2 minutes by hand).",
          es: "Bate los dos azúcares y los huevos con la vainilla. Fuerte, hasta brillante y con punto de cinta (2 minutos a mano).",
          nl: "Beide suikers en eieren erbij, vanille. Krachtig kloppen tot glanzend en pakt (handgarde 2 minuten).",
        },
      },
      {
        position: 4,
        body: {
          en: "Sift flour, cocoa and salt over the top. Fold gently with a spatula. Stop just before it's fully combined.",
          es: "Tamiza la harina, el cacao y la sal por encima. Integra con espátula con cuidado. Para justo antes de mezclar del todo.",
          nl: "Bloem, cacao en zout zeven boven het mengsel. Voorzichtig erdoor spatelen. Niet roeren, juist net niet helemaal mengen.",
        },
      },
      {
        position: 5,
        body: {
          en: "Into the tin, smooth the top. Bake 22-25 minutes. The middle should still wobble.",
          es: "Vierte en el molde, alisa la superficie. Hornea 22-25 minutos. El centro debe seguir temblando.",
          nl: "In de vorm. Oppervlak glad strijken. 22-25 minuten in de oven. Het midden moet nog meegeven bij wiebelen.",
        },
      },
      {
        position: 6,
        body: {
          en: "Cool fully in the tin. Lift out, cut with a hot wet knife. Scatter fleur de sel on top.",
          es: "Enfría del todo en el molde. Saca y corta con cuchillo caliente y húmedo. Espolvorea flor de sal por encima.",
          nl: "Afkoelen in de vorm. Uittillen, vlijmscherp snijden (mes warm afspoelen tussen sneden). Bestrooien met fleur de sel.",
        },
      },
    ],
  },
  {
    slug: "kreeft-thermidor",
    title: {
      en: "Lobster thermidor with Gruyère",
      es: "Bogavante thermidor con Gruyère",
      nl: "Kreeft thermidor met Gruyère",
    },
    intro: {
      en: "Decadent, classic, old-school French. No needless modernising.",
      es: "Decadente, clásico, francés a la antigua. Sin modernismos.",
      nl: "Decadent, klassiek, ouderwets Frans. Geen onnodige modernisering.",
    },
    category: "hoofd",
    seasons: ["winter"],
    difficulty: 4,
    prepMinutes: 30,
    cookMinutes: 30,
    servings: 2,
    heroImage: "/images/recipes/kreeft-thermidor.jpg",
    pairing: {
      en: "Premier-cru Chablis, very cold. Or a vintage brut champagne.",
      es: "Chablis Premier Cru muy frío. O un champán brut vintage.",
      nl: "Premier-cru Chablis, ijskoud. Of een vintage brut champagne.",
    },
    body: {
      en: [
        "Last service at Bord'eau before New Year's Eve 2017, chef Sergio called me over to the pass and pointed at a thermidor going out. 'Decadent or nothing', he said. Either you commit to the whole thing. The cognac, the cream, the Gruyère gratinéed dark on top. Or you serve sea bass and shut up. There is no halfway lobster.",
        "What I learned that night, and what I'm still grateful for, is that some classics don't need updating. Lobster thermidor is one of them. The sauce is cognac, butter, mustard, cream, cheese. The fish is lobster. The technique is the technique people have used since the 1880s. Try to improve it and you'll only make it worse.",
        "I make this once a year. New Year's Eve, in our little house in Coín, candles on the table, the dog asleep under it. It takes the time it takes. Anyone who's in a hurry on New Year's Eve has not understood the assignment.",
      ],
      es: [
        "Último servicio en Bord'eau antes de Nochevieja 2017, el chef Sergio me llamó al pase y señaló un thermidor que iba a salir. 'Decadente o nada', dijo. O te comprometes con la cosa entera. El coñac, la nata, el Gruyère gratinado oscuro por arriba. O sirves lubina y te callas. No hay bogavante a medias.",
        "Lo que aprendí esa noche, y lo que sigo agradeciendo, es que algunos clásicos no necesitan actualización. El bogavante thermidor es uno. La salsa es coñac, mantequilla, mostaza, nata, queso. El pescado es bogavante. La técnica es la técnica que se usa desde 1880. Intenta mejorarlo y sólo lo empeorarás.",
        "Lo hago una vez al año. Nochevieja, en nuestra casita de Coín, velas en la mesa, el perro dormido debajo. Tarda lo que tarda. Quien tenga prisa en Nochevieja no ha entendido la tarea.",
      ],
      nl: [
        "Laatste service bij Bord'eau voor oudejaarsavond 2017, chef Sergio riep me bij de pas en wees naar een thermidor die de deur uitging. 'Decadent of niets,' zei hij. Of je gaat voor het hele ding. De cognac, de room, de donker gegratineerde Gruyère erbovenop. Of je serveert zeebaars en houdt je mond. Een halve kreeft bestaat niet.",
        "Wat ik die avond leerde, en waar ik nog dankbaar voor ben, is dat sommige klassiekers geen update nodig hebben. Kreeft thermidor is er een. De saus is cognac, boter, mosterd, room, kaas. De vis is kreeft. De techniek is de techniek die ze sinds 1880 gebruiken. Probeer 'm te verbeteren en je verpest 'm.",
        "Ik maak 'm één keer per jaar. Oudejaarsavond, in ons huisje in Coín, kaarsen op tafel, de hond eronder. Het kost wat het kost. Wie haast heeft op oudejaarsavond heeft de opdracht niet begrepen.",
      ],
    },
    nowPlaying: {
      track: "La Vie en rose",
      artist: "Édith Piaf",
    },
    marginalia: [
      {
        id: "ther-1",
        kind: "warning",
        anchor: "step-3",
        body: {
          en: "Live lobster into rapidly boiling water. Hesitation is cruelty.",
          es: "Bogavante vivo al agua hirviendo a borbotones. Dudar es crueldad.",
          nl: "Levende kreeft in fel kokend water. Twijfelen is wreed.",
        },
      },
      {
        id: "ther-2",
        kind: "tip",
        anchor: "step-5",
        body: {
          en: "Sauce should be glossy and coat the spoon. Watery = reduce more. Thick = a splash of cream.",
          es: "La salsa debe brillar y napar la cuchara. Aguada = reduce más. Espesa = un chorro de nata.",
          nl: "Saus moet glanzen en de lepel bekleden. Te dun = verder reduceren. Te dik = scheutje room erbij.",
        },
      },
      {
        id: "ther-3",
        kind: "scrawl",
        anchor: "step-6",
        body: {
          en: "Bread on the side. Not optional. The sauce in the bottom of the shell is the whole point.",
          es: "Pan al lado. No es opcional. La salsa del fondo de la cáscara es el motivo.",
          nl: "Brood erbij. Niet optioneel. De saus onderin de schaal is het hele punt.",
        },
      },
    ],
    ingredients: [
      {
        group: { en: "Lobster", es: "Bogavante", nl: "Kreeft" },
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: {
          en: "live or freshly-cooked blue lobster, around 600 g",
          es: "bogavante azul vivo o recién cocido, unos 600 g",
          nl: "levende of vers gekookte heelblauwe kreeft, circa 600 g",
        },
      },
      {
        group: { en: "Lobster", es: "Bogavante", nl: "Kreeft" },
        quantity: { en: "1 L + 30 g", es: "1 L + 30 g", nl: "1 L + 30 g" },
        ingredient: {
          en: "water + salt, for cooking",
          es: "agua + sal, para cocer",
          nl: "water + zout, om te koken",
        },
      },
      {
        group: { en: "Thermidor sauce", es: "Salsa thermidor", nl: "Thermidor-saus" },
        quantity: { en: "30 g + 1", es: "30 g + 1", nl: "30 g + 1" },
        ingredient: {
          en: "butter + shallot, finely chopped",
          es: "mantequilla + chalota picada fina",
          nl: "boter + sjalot, fijn gesnipperd",
        },
      },
      {
        group: { en: "Thermidor sauce", es: "Salsa thermidor", nl: "Thermidor-saus" },
        quantity: { en: "30 + 150 ml", es: "30 + 150 ml", nl: "30 + 150 ml" },
        ingredient: {
          en: "cognac + dry white wine",
          es: "coñac + vino blanco seco",
          nl: "cognac + droge witte wijn",
        },
      },
      {
        group: { en: "Thermidor sauce", es: "Salsa thermidor", nl: "Thermidor-saus" },
        quantity: { en: "150 + 150 ml", es: "150 + 150 ml", nl: "150 + 150 ml" },
        ingredient: {
          en: "lobster fumet (or fish stock) + double cream",
          es: "fumet de bogavante (o caldo de pescado) + nata",
          nl: "kreeftenfumet (of visbouillon) + slagroom",
        },
      },
      {
        group: { en: "Thermidor sauce", es: "Salsa thermidor", nl: "Thermidor-saus" },
        quantity: { en: "1 tsp + 1 tbsp", es: "1 cdta + 1 cda", nl: "1 tl + 1 el" },
        ingredient: {
          en: "Dijon mustard + tarragon, finely chopped",
          es: "mostaza de Dijon + estragón picado fino",
          nl: "Dijonmosterd + dragon, fijn gesneden",
        },
      },
      {
        group: { en: "Thermidor sauce", es: "Salsa thermidor", nl: "Thermidor-saus" },
        quantity: { en: "60 + 20 g", es: "60 + 20 g", nl: "60 + 20 g" },
        ingredient: {
          en: "Gruyère + Parmesan, finely grated",
          es: "Gruyère + parmesano, rallados finos",
          nl: "Gruyère + Parmezaan, fijn geraspt",
        },
      },
      {
        group: { en: "Thermidor sauce", es: "Salsa thermidor", nl: "Thermidor-saus" },
        quantity: { en: "to taste", es: "al gusto", nl: "naar smaak" },
        ingredient: {
          en: "pinch of cayenne + salt + white pepper",
          es: "pizca de cayena + sal + pimienta blanca",
          nl: "snuf cayenne + zout + witte peper",
        },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Boil heavily salted water. Drop the lobster head-first into the rolling water. 7 minutes for 600 g. Straight into ice water. Cool fully.",
          es: "Lleva el agua bien salada a hervir fuerte. Mete el bogavante de cabeza al agua hirviendo. 7 minutos para 600 g. Directo al agua con hielo. Enfría del todo.",
          nl: "Breng flink gezouten water aan de kook. Levende kreeft kop eerst in kokend water. 7 minuten voor 600 g. Direct in ijswater. Helemaal afkoelen.",
        },
      },
      {
        position: 2,
        body: {
          en: "Halve the lobster lengthways. Remove the intestinal tract. Carefully take the claw meat out. Slice the tail meat into pieces, keep the shells.",
          es: "Parte el bogavante a lo largo. Retira el intestino. Saca la carne de las pinzas con cuidado. Corta la cola en trozos, guarda las cáscaras.",
          nl: "Snijd de kreeft in de lengte doormidden. Verwijder het maagdarmkanaal. Haal het vlees uit de scharen voorzichtig. Snijd het staartvlees in stukken, bewaar de schalen.",
        },
      },
      {
        position: 3,
        body: {
          en: "Melt butter, sweat the shallot 5 minutes. Deglaze with cognac. Flambé if you like. Add white wine and fumet, reduce by two-thirds.",
          es: "Funde la mantequilla, sofríe la chalota 5 minutos. Desglasa con coñac. Flambea si quieres. Añade vino blanco y fumet, reduce dos tercios.",
          nl: "Boter smelten, sjalot zacht (5 min). Blus met cognac, flambeer indien gewenst. Voeg witte wijn en fumet toe, reduceer tot 1/3.",
        },
      },
      {
        position: 4,
        body: {
          en: "Cream in, reduce to thick nappant. Mustard, tarragon, 40 g of the Gruyère, all the Parmesan, cayenne. Taste.",
          es: "Añade la nata, reduce hasta nappant espeso. Mostaza, estragón, 40 g del Gruyère, todo el parmesano, cayena. Prueba.",
          nl: "Slagroom erbij, reduceer tot dik nappant. Mosterd, dragon, 40 g Gruyère, alle Parmezaan, cayenne. Proeven.",
        },
      },
      {
        position: 5,
        body: {
          en: "Fold the meat gently through the sauce. Divide back into the shells. Top with the remaining Gruyère.",
          es: "Integra la carne con cuidado en la salsa. Reparte en las cáscaras. Cubre con el Gruyère restante.",
          nl: "Vlees voorzichtig door de saus mengen, terug in de schalen verdelen. Bestrooien met resterende Gruyère.",
        },
      },
      {
        position: 6,
        body: {
          en: "Under a hot grill (200 °C top heat) 3-4 minutes until deep brown. Serve straight away with lemon and bread.",
          es: "Bajo el grill caliente (200 °C calor arriba) 3-4 minutos hasta dorado oscuro. Sirve al momento con limón y pan.",
          nl: "Onder de gril (200 °C bovenste verwarmingselement) 3-4 minuten tot diepbruin gegratineerd. Direct serveren met citroen en vers brood.",
        },
      },
    ],
  },
  {
    slug: "diamanthaas-chimichurri",
    title: {
      en: "Hanger steak with chimichurri",
      es: "Entraña con chimichurri",
      nl: "Diamanthaas met chimichurri",
    },
    intro: {
      en: "High heat, short heat, long rest. Beef the way it should be.",
      es: "Fuego fuerte, poco rato, reposo largo. La carne como debe ser.",
      nl: "Hoog vuur, kort vuur, lang rusten. Vlees zoals het hoort.",
    },
    category: "hoofd",
    seasons: ["altijd"],
    difficulty: 2,
    prepMinutes: 40,
    cookMinutes: 6,
    servings: 2,
    heroImage: "/images/recipes/diamanthaas-chimichurri.jpg",
    pairing: {
      en: "Argentine Malbec from Mendoza, or a young Mencía.",
      es: "Malbec argentino de Mendoza o un Mencía joven.",
      nl: "Argentijnse Malbec uit Mendoza, of een jonge Mencía.",
    },
    body: {
      en: [
        "I learned this from a friend's birthday in Madrid, four or five years ago. He was Argentine, lived in Spain twenty years, missed home loud and often. For his birthday he insisted on cooking, refused all help, walked us to a carnicería near Plaza Mayor and pointed at a single piece of meat: una entraña, 400 g, against the grain, please.",
        "Back at his flat he gave me one set of rules, in Spanish too fast to argue with. Meat at room temperature an hour before. Pan on the highest heat possible. Three minutes one side, three the other, no moving. Eight to ten minutes rest on a board. Not on a plate, not under foil. Then chimichurri, made an hour earlier, and a sharp knife, and bread, and red wine, and the rest is conversation.",
        "Every word of it was true. This is the simplest piece of red meat you can make at home and the easiest one to ruin. Rest is as important as searing. Without rest you get blood on the board and dry meat on the tongue. The chimichurri is the second half of the dish, not a garnish.",
      ],
      es: [
        "Esto lo aprendí en el cumpleaños de un amigo en Madrid, hace cuatro o cinco años. Era argentino, llevaba veinte años en España, echaba de menos su casa en voz alta y a menudo. Para su cumple insistió en cocinar él, no aceptó ayuda, nos llevó a una carnicería cerca de Plaza Mayor y señaló un único trozo de carne: una entraña, 400 g, contra el grano, por favor.",
        "Ya en su piso me dio una sola tanda de reglas, en español demasiado rápido para discutir. Carne a temperatura ambiente una hora antes. Sartén al máximo. Tres minutos una cara, tres la otra, sin moverla. Ocho o diez minutos de reposo en tabla. No en plato, no bajo papel. Después chimichurri hecho una hora antes, un cuchillo afilado, pan, vino tinto, y el resto es conversación.",
        "Cada palabra era verdad. Es la carne roja más simple que puedes hacer en casa y la más fácil de cagarla. El reposo importa tanto como el marcado. Sin reposo tienes sangre en la tabla y carne seca en la lengua. El chimichurri es la mitad del plato, no una guarnición.",
      ],
      nl: [
        "Ik leerde dit op de verjaardag van een vriend in Madrid, vier of vijf jaar geleden. Hij was Argentijn, woonde twintig jaar in Spanje, miste thuis luid en vaak. Voor z'n verjaardag stond hij erop dat hij kookte, hulp werd geweigerd, hij liep met ons mee naar een carniceria bij Plaza Mayor en wees op één stuk vlees: una entraña, 400 g, tegen de draad in, por favor.",
        "Terug in z'n flat gaf hij me één set regels, in een Spaans te snel om over te discussiëren. Vlees een uur voor de bereiding op kamertemperatuur. Pan op het hoogste vuur dat je hebt. Drie minuten één kant, drie minuten de andere, niet aanraken. Acht tot tien minuten rusten op een snijplank. Niet op een bord, niet onder folie. Dan chimichurri, een uur eerder gemaakt, een scherp mes, brood, rode wijn, en de rest is gesprek.",
        "Elk woord klopte. Dit is het simpelste stuk rood vlees dat je thuis kunt maken en het makkelijkste om te verprutsen. Rusten is even belangrijk als bakken. Zonder rust krijg je bloed op de plank en droog vlees op de tong. De chimichurri is de tweede helft van het gerecht, geen garnituur.",
      ],
    },
    nowPlaying: {
      track: "Libertango",
      artist: "Astor Piazzolla",
    },
    marginalia: [
      {
        id: "diam-1",
        kind: "warning",
        anchor: "step-3",
        body: {
          en: "Three minutes one side, three the other. Don't move it. Don't peek.",
          es: "Tres minutos una cara, tres la otra. No la muevas. No mires.",
          nl: "Drie minuten één kant, drie de andere. Niet bewegen. Niet stiekem kijken.",
        },
      },
      {
        id: "diam-2",
        kind: "warning",
        anchor: "step-4",
        body: {
          en: "Rest on a board, NOT covered. Foil traps steam and the crust softens to nothing.",
          es: "Reposa en tabla, SIN tapar. El papel atrapa vapor y la corteza desaparece.",
          nl: "Rusten op een snijplank, NIET afgedekt. Folie houdt stoom vast en de korst verdwijnt.",
        },
      },
      {
        id: "diam-3",
        kind: "scrawl",
        anchor: "intro",
        body: {
          en: "Against the grain, always. Cut with the grain and you're chewing string.",
          es: "Contra el grano, siempre. A favor del grano = mastiquas cuerda.",
          nl: "Tegen de draad in, altijd. Met de draad mee = touw kauwen.",
        },
      },
    ],
    ingredients: [
      {
        group: { en: "Meat", es: "Carne", nl: "Vlees" },
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: {
          en: "hanger steak (around 400 g), trimmed",
          es: "entraña (unos 400 g), limpia",
          nl: "diamanthaas (longhaas) van circa 400 g, schoon",
        },
      },
      {
        group: { en: "Meat", es: "Carne", nl: "Vlees" },
        quantity: { en: "as needed", es: "lo necesario", nl: "naar behoefte" },
        ingredient: {
          en: "olive oil + coarse sea salt + black pepper",
          es: "aceite + sal marina gruesa + pimienta",
          nl: "olijfolie + grof zeezout + zwarte peper",
        },
      },
      {
        group: { en: "Chimichurri", es: "Chimichurri", nl: "Chimichurri" },
        quantity: { en: "1 bunch", es: "1 manojo", nl: "1 bos" },
        ingredient: {
          en: "flat parsley, finely chopped",
          es: "perejil de hoja plana, picado fino",
          nl: "platte peterselie, fijn gehakt",
        },
      },
      {
        group: { en: "Chimichurri", es: "Chimichurri", nl: "Chimichurri" },
        quantity: { en: "3 cloves", es: "3 dientes", nl: "3 teentjes" },
        ingredient: {
          en: "garlic, crushed",
          es: "ajo, machacado",
          nl: "knoflook, geperst",
        },
      },
      {
        group: { en: "Chimichurri", es: "Chimichurri", nl: "Chimichurri" },
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: {
          en: "red chilli, finely chopped + 1 tsp dried oregano",
          es: "chile rojo picado fino + 1 cdta de orégano seco",
          nl: "rode chili, fijn gehakt + 1 tl gedroogde oregano",
        },
      },
      {
        group: { en: "Chimichurri", es: "Chimichurri", nl: "Chimichurri" },
        quantity: { en: "2 tbsp", es: "2 cdas", nl: "2 el" },
        ingredient: {
          en: "red-wine vinegar + 100 ml olive oil + salt",
          es: "vinagre tinto + 100 ml de aceite + sal",
          nl: "rode wijnazijn + 100 ml olijfolie + zout",
        },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Chimichurri: mix everything in a bowl. Rest at room temperature 30 minutes minimum. Do not blend. Coarse is the point.",
          es: "Chimichurri: mezcla todo en un bol. Reposa a temperatura ambiente 30 minutos mínimo. No tritures. Grueso es el punto.",
          nl: "Chimichurri: alles mengen in een kom, minimaal 30 minuten op kamertemperatuur. Niet pureren. Grof hoort.",
        },
      },
      {
        position: 2,
        body: {
          en: "Meat to room temperature (1 hour out of the fridge). Pat dry, rub with oil, season hard with salt and pepper.",
          es: "Carne a temperatura ambiente (1 hora fuera de la nevera). Seca bien, unta con aceite, salpimenta con generosidad.",
          nl: "Vlees op kamertemperatuur (1 uur uit de koelkast). Droogdeppen, ruim insmeren met olie, stevig zouten en peperen.",
        },
      },
      {
        position: 3,
        body: {
          en: "Pan or grill on flame-red. Meat down. 3 minutes one side, no moving. 3 minutes the other side. Medium-rare = core 52 °C.",
          es: "Sartén o parrilla a fuego brutal. Carne dentro. 3 minutos una cara, sin moverla. 3 minutos la otra. Poco hecho = núcleo 52 °C.",
          nl: "Pan of grill op vuurrood. Vlees erin. 3 minuten één kant zonder bewegen voor mooie korst. 3 minuten andere kant. Voor medium-rare: kerntemperatuur 52 °C.",
        },
      },
      {
        position: 4,
        body: {
          en: "Rest on a board 8-10 minutes. Do not cover. The crust must stay dry.",
          es: "Reposa en una tabla 8-10 minutos. No tapar. La corteza debe quedarse seca.",
          nl: "Op een snijplank, 8-10 minuten laten rusten. Niet afdekken. Anders zweet de korst weg.",
        },
      },
      {
        position: 5,
        body: {
          en: "Slice thinly against the grain. Onto a wooden board. Generous chimichurri over the top.",
          es: "Corta fina contra el grano. A una tabla de madera. Chimichurri por encima sin tacañería.",
          nl: "Tegen de draad in dun snijden. Op een houten plank. Royaal chimichurri eroverheen.",
        },
      },
    ],
  },
  {
    slug: "slanke-focaccia",
    title: {
      en: "Skinny focaccia with rosemary and sea salt",
      es: "Focaccia ligera con romero y sal gruesa",
      nl: "Slanke focaccia met rozemarijn en zeezout",
    },
    intro: {
      en: "Airy inside, crackling outside, all its flavour kneaded in. The lean one nobody believes is lean.",
      es: "Aireada por dentro, crujiente por fuera, con todo el sabor amasado dentro. La ligera que nadie cree que es ligera.",
      nl: "Luchtig van binnen, krokant van buiten, alle smaak erin gekneed. De slanke waar niemand gelooft dat ie slank is.",
    },
    category: "bij",
    seasons: ["altijd"],
    difficulty: 2,
    prepMinutes: 40,
    cookMinutes: 25,
    servings: 8,
    heroImage: "/images/recipes/slanke-focaccia.jpg",
    pairing: {
      en: "A bowl of good olive oil for dipping and a glass of cheap, honest red. Nothing fancy. The bread is the star.",
      es: "Un cuenco de buen aceite de oliva para mojar y una copa de tinto honesto y barato. Nada de lujos. El pan es la estrella.",
      nl: "Een kommetje goede olijfolie om in te dopen en een glas eerlijke, goedkope rode wijn. Niets chics. Het brood is de ster.",
    },
    body: {
      en: [
        "I learned to love bread in a kitchen in Veendam, up in Groningen, at a friend's house. His mother, Angela, was a cook who taught kids how to cook, and she more or less adopted me into it. She made focaccia constantly, herbs pulled straight from her own garden, still smelling of dirt and sun. Fantastic. The kind of taste that ruins you for the supermarket version forever. I have been baking my own bread ever since.",
        "But real focaccia, the old way, is basically a delivery system for olive oil. They drown it. Pools sitting in the dimples, running down your wrist. Glorious, but you cannot feed people like that every night on the coast. Not villa guests who want bread on the table and still want to fit into what they bought for dinner. So I stripped it back. The oil that used to sit on top in a puddle goes into the dough now. Ten grams. The herbs do the rest, the way Angela's garden did. Oregano, basil, thyme, rosemary, garlic, all kneaded straight in, a heavy hand of black pepper.",
        "The flour does what is left. Harina de fuerza, the strong stuff in the black bag from the Spanish supermarket, the one that costs almost nothing and behaves like it costs ten times more. It drinks the water and gives you the open crumb, the holes, the chew. Let the flour and water get to know each other before the yeast turns up. Do not rush the rise. Wet fingers for the dimples. And when it comes out golden and crackling and smelling of a garden, nobody at the table believes it is the lean one. Angela would have approved.",
      ],
      es: [
        "Aprendí a querer el pan en una cocina de Veendam, allá en Groninga, en casa de un amigo. Su madre, Angela, era cocinera y enseñaba a cocinar a los niños, y a mí me acabó adoptando en eso. Hacía focaccia sin parar, con hierbas arrancadas de su propio huerto, que aún olían a tierra y a sol. Fantástica. Ese sabor que te arruina para siempre la versión del súper. Desde entonces hago mi propio pan.",
        "Pero la focaccia de verdad, a la antigua, es básicamente un sistema para repartir aceite de oliva. La ahogan. Charcos en los hoyitos, chorreando por la muñeca. Una gloria, pero no puedes dar de comer así cada noche en la costa. No a invitados de villa que quieren pan en la mesa y aún caber en lo que se compraron para cenar. Así que la pelé hasta el hueso. El aceite que antes se quedaba arriba en un charco ahora va dentro de la masa. Diez gramos. Las hierbas hacen el resto, como hacía el huerto de Angela. Orégano, albahaca, tomillo, romero, ajo, todo amasado dentro, una mano generosa de pimienta negra.",
        "La harina hace lo que queda. Harina de fuerza, la del saco negro del súper español, la que no cuesta casi nada y se comporta como si costara diez veces más. Bebe el agua y te da la miga abierta, los agujeros, el bocado. Deja que la harina y el agua se conozcan antes de que llegue la levadura. No metas prisa al levado. Dedos mojados para los hoyitos. Y cuando sale dorada y crujiente y oliendo a huerto, nadie en la mesa cree que es la ligera. A Angela le habría gustado.",
      ],
      nl: [
        "Ik leerde van brood houden in een keuken in Veendam, boven in Groningen, bij een vriend thuis. Zijn moeder, Angela, was kok en gaf kookles aan kinderen, en mij nam ze er zo'n beetje bij. Ze maakte aan de lopende band focaccia, met kruiden zo uit haar eigen tuin, die nog naar aarde en zon roken. Fantastisch. Zo'n smaak die je voor altijd verpest voor de supermarktversie. Sindsdien bak ik mijn eigen brood.",
        "Maar echte focaccia, op de oude manier, is eigenlijk een bezorgsysteem voor olijfolie. Ze verzuipen 'm. Plassen in de kuiltjes, langs je pols naar beneden. Goddelijk, maar zo kun je niet elke avond mensen voeren aan de kust. Geen villagasten die brood op tafel willen en ook nog passen in wat ze voor het diner hadden gekocht. Dus ik kleedde 'm uit. De olie die vroeger bovenop in een plas lag gaat nu in het deeg. Tien gram. De kruiden doen de rest, zoals de tuin van Angela dat deed. Oregano, basilicum, tijm, rozemarijn, knoflook, alles er meteen ingekneed, een zware hand zwarte peper.",
        "De bloem doet wat overblijft. Harina de fuerza, het sterke spul uit de zwarte zak van de Spaanse supermarkt, dat bijna niets kost en zich gedraagt alsof het tien keer zoveel kost. Het drinkt het water en geeft je de open kruim, de gaten, de beet. Laat de bloem en het water elkaar leren kennen voordat de gist langskomt. Jaag de rijs niet op. Natte vingers voor de kuiltjes. En als ie eruit komt, goudbruin en knapperig en geurend naar een tuin, gelooft niemand aan tafel dat het de slanke is. Angela zou het goedgekeurd hebben.",
      ],
    },
    nowPlaying: {
      track: "Azzurro",
      artist: "Adriano Celentano",
    },
    marginalia: [
      {
        id: "foc-1",
        kind: "tip",
        anchor: "ingredients",
        body: {
          en: "Harina de fuerza, not plain flour. The extra protein is what gives you the big holes.",
          es: "Harina de fuerza, no harina normal. La proteína de más es la que te da los agujeros grandes.",
          nl: "Harina de fuerza, geen gewone bloem. Het extra eiwit geeft je de grote gaten.",
        },
      },
      {
        id: "foc-2",
        kind: "warning",
        anchor: "step-2",
        body: {
          en: "Lukewarm water, never hot. Above 40 °C you cook the yeast dead before it starts.",
          es: "Agua templada, nunca caliente. Por encima de 40 °C matas la levadura antes de que arranque.",
          nl: "Lauw water, nooit heet. Boven 40 °C kook je de gist dood voordat hij begint.",
        },
      },
      {
        id: "foc-3",
        kind: "wrong",
        anchor: "step-7",
        body: {
          en: "First time I pressed it flat like a pizza. Pushed all the air out. Flat, sad bread. Press soft, leave the bubbles.",
          es: "La primera vez la aplasté como una pizza. Saqué todo el aire. Pan plano y triste. Aprieta suave, deja las burbujas.",
          nl: "Eerste keer drukte ik 'm plat als een pizza. Alle lucht eruit. Plat, treurig brood. Druk zacht, laat de bellen zitten.",
        },
      },
      {
        id: "foc-4",
        kind: "scrawl",
        anchor: "step-9",
        body: {
          en: "Wet fingers for the dimples or the dough climbs up your hand and the craters close again.",
          es: "Dedos mojados para los hoyitos o la masa se te sube a la mano y los cráteres se cierran.",
          nl: "Natte vingers voor de kuiltjes, anders kruipt het deeg langs je hand omhoog en sluiten de kraters weer.",
        },
      },
    ],
    ingredients: [
      {
        group: { en: "Dough", es: "Masa", nl: "Deeg" },
        quantity: { en: "500 g", es: "500 g", nl: "500 g" },
        ingredient: {
          en: "harina de fuerza (strong bread flour)",
          es: "harina de fuerza",
          nl: "harina de fuerza (sterke broodbloem)",
        },
        note: {
          en: "the black bag from the Spanish supermarket",
          es: "el saco negro del súper",
          nl: "de zwarte zak uit de Spaanse supermarkt",
        },
      },
      {
        group: { en: "Dough", es: "Masa", nl: "Deeg" },
        quantity: { en: "375 g", es: "375 g", nl: "375 g" },
        ingredient: { en: "lukewarm water", es: "agua templada", nl: "lauwwarm water" },
      },
      {
        group: { en: "Dough", es: "Masa", nl: "Deeg" },
        quantity: { en: "7 g", es: "7 g", nl: "7 g" },
        ingredient: { en: "dry yeast", es: "levadura seca", nl: "droge gist" },
      },
      {
        group: { en: "Dough", es: "Masa", nl: "Deeg" },
        quantity: { en: "1 tsp", es: "1 cdta", nl: "1 tl" },
        ingredient: { en: "honey", es: "miel", nl: "honing" },
      },
      {
        group: { en: "Dough", es: "Masa", nl: "Deeg" },
        quantity: { en: "50 ml", es: "50 ml", nl: "50 ml" },
        ingredient: {
          en: "lukewarm water, for the yeast",
          es: "agua templada, para la levadura",
          nl: "lauwwarm water, voor de gist",
        },
      },
      {
        group: { en: "Dough", es: "Masa", nl: "Deeg" },
        quantity: { en: "10 g", es: "10 g", nl: "10 g" },
        ingredient: { en: "salt", es: "sal", nl: "zout" },
      },
      {
        group: { en: "Dough", es: "Masa", nl: "Deeg" },
        quantity: { en: "10 g", es: "10 g", nl: "10 g" },
        ingredient: { en: "olive oil", es: "aceite de oliva", nl: "olijfolie" },
      },
      {
        group: { en: "Herbs in the dough", es: "Hierbas en la masa", nl: "Kruiden in het deeg" },
        quantity: { en: "2 tsp", es: "2 cdtas", nl: "2 tl" },
        ingredient: { en: "dried oregano", es: "orégano seco", nl: "gedroogde oregano" },
      },
      {
        group: { en: "Herbs in the dough", es: "Hierbas en la masa", nl: "Kruiden in het deeg" },
        quantity: { en: "1 tsp", es: "1 cdta", nl: "1 tl" },
        ingredient: { en: "dried basil", es: "albahaca seca", nl: "gedroogde basilicum" },
      },
      {
        group: { en: "Herbs in the dough", es: "Hierbas en la masa", nl: "Kruiden in het deeg" },
        quantity: { en: "1 tsp", es: "1 cdta", nl: "1 tl" },
        ingredient: { en: "dried thyme", es: "tomillo seco", nl: "gedroogde tijm" },
      },
      {
        group: { en: "Herbs in the dough", es: "Hierbas en la masa", nl: "Kruiden in het deeg" },
        quantity: { en: "1 tsp", es: "1 cdta", nl: "1 tl" },
        ingredient: { en: "dried rosemary", es: "romero seco", nl: "gedroogde rozemarijn" },
      },
      {
        group: { en: "Herbs in the dough", es: "Hierbas en la masa", nl: "Kruiden in het deeg" },
        quantity: { en: "1 tsp", es: "1 cdta", nl: "1 tl" },
        ingredient: { en: "garlic powder", es: "ajo en polvo", nl: "knoflookpoeder" },
      },
      {
        group: { en: "Herbs in the dough", es: "Hierbas en la masa", nl: "Kruiden in het deeg" },
        quantity: { en: "to taste", es: "al gusto", nl: "naar smaak" },
        ingredient: { en: "black pepper", es: "pimienta negra", nl: "zwarte peper" },
      },
      {
        group: { en: "To finish", es: "Para terminar", nl: "Voor bovenop" },
        quantity: { en: "5 g", es: "5 g", nl: "5 g" },
        ingredient: { en: "olive oil", es: "aceite de oliva", nl: "olijfolie" },
      },
      {
        group: { en: "To finish", es: "Para terminar", nl: "Voor bovenop" },
        quantity: { en: "a few sprigs", es: "unas ramitas", nl: "een paar takjes" },
        ingredient: { en: "fresh rosemary", es: "romero fresco", nl: "verse rozemarijn" },
      },
      {
        group: { en: "To finish", es: "Para terminar", nl: "Voor bovenop" },
        quantity: { en: "a pinch", es: "una pizca", nl: "een snuf" },
        ingredient: { en: "oregano", es: "orégano", nl: "oregano" },
      },
      {
        group: { en: "To finish", es: "Para terminar", nl: "Voor bovenop" },
        quantity: { en: "to taste", es: "al gusto", nl: "naar smaak" },
        ingredient: { en: "coarse sea salt", es: "sal gruesa", nl: "grof zeezout" },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Mix the 500 g flour with 375 g lukewarm water. Stir to a rough, shaggy dough. Cover and rest 30 to 60 minutes. This is the flour drinking. Do not skip it.",
          es: "Mezcla los 500 g de harina con 375 g de agua templada. Remueve hasta una masa basta y desigual. Tapa y reposa de 30 a 60 minutos. Aquí la harina bebe. No te lo saltes.",
          nl: "Meng de 500 g bloem met 375 g lauwwarm water. Roer tot een ruw, rafelig deeg. Dek af en laat 30 tot 60 minuten staan. Dit is de bloem die drinkt. Sla het niet over.",
        },
      },
      {
        position: 2,
        body: {
          en: "Stir 7 g dry yeast into 50 ml lukewarm water with 1 tsp honey. Leave 5 to 10 minutes until it foams and smells like beer. If nothing happens, the yeast is dead. Start again.",
          es: "Disuelve 7 g de levadura seca en 50 ml de agua templada con 1 cdta de miel. Deja de 5 a 10 minutos hasta que espume y huela a cerveza. Si no pasa nada, la levadura está muerta. Empieza de nuevo.",
          nl: "Los 7 g droge gist op in 50 ml lauwwarm water met 1 tl honing. Laat 5 tot 10 minuten staan tot het schuimt en naar bier ruikt. Gebeurt er niets, dan is de gist dood. Begin opnieuw.",
        },
      },
      {
        position: 3,
        body: {
          en: "Add the yeast to the dough and knead 3 to 4 minutes, until it is one thing and not two.",
          es: "Añade la levadura a la masa y amasa de 3 a 4 minutos, hasta que sea una sola cosa y no dos.",
          nl: "Voeg de gist toe aan het deeg en kneed 3 tot 4 minuten, tot het één geheel is en geen twee.",
        },
      },
      {
        position: 4,
        body: {
          en: "Add 10 g salt, the oregano, basil, thyme, rosemary, garlic powder and a heavy hand of black pepper. Knead 5 minutes more. This is where the bread gets its soul.",
          es: "Añade 10 g de sal, el orégano, la albahaca, el tomillo, el romero, el ajo en polvo y una mano generosa de pimienta negra. Amasa 5 minutos más. Aquí el pan coge su alma.",
          nl: "Voeg 10 g zout toe, de oregano, basilicum, tijm, rozemarijn, knoflookpoeder en een zware hand zwarte peper. Kneed nog 5 minuten. Hier krijgt het brood z'n ziel.",
        },
      },
      {
        position: 5,
        body: {
          en: "Work in 10 g olive oil and keep kneading until the dough turns smooth and elastic and stops fighting you.",
          es: "Incorpora 10 g de aceite de oliva y sigue amasando hasta que la masa quede lisa y elástica y deje de pelear contigo.",
          nl: "Kneed 10 g olijfolie erdoor en blijf kneden tot het deeg glad en elastisch wordt en niet meer tegenstribbelt.",
        },
      },
      {
        position: 6,
        body: {
          en: "Cover and let it rise 1.5 to 2 hours, until doubled in volume.",
          es: "Tapa y deja levar de 1,5 a 2 horas, hasta que doble su volumen.",
          nl: "Dek af en laat 1,5 tot 2 uur rijzen, tot het in volume is verdubbeld.",
        },
      },
      {
        position: 7,
        body: {
          en: "Tip the dough onto a tray lined with baking paper. Press and stretch it gently to fill the tray. Gently. You spent hours building those bubbles.",
          es: "Vuelca la masa en una bandeja con papel de horno. Presiona y estírala con cuidado para llenar la bandeja. Con cuidado. Llevas horas construyendo esas burbujas.",
          nl: "Stort het deeg op een met bakpapier beklede bakplaat. Druk en rek het voorzichtig uit tot de plaat vol is. Voorzichtig. Je hebt uren aan die bellen gebouwd.",
        },
      },
      {
        position: 8,
        body: {
          en: "Leave it another 30 minutes to relax and puff back up.",
          es: "Déjala otros 30 minutos para que se relaje y vuelva a hincharse.",
          nl: "Laat het nog 30 minuten narijzen zodat het ontspant en weer opbolt.",
        },
      },
      {
        position: 9,
        body: {
          en: "Wet your fingers and drive them into the dough, all the way down. Those craters are the signature.",
          es: "Mójate los dedos y húndelos en la masa, hasta el fondo. Esos cráteres son la firma.",
          nl: "Maak je vingers nat en duw ze in het deeg, helemaal tot onderaan. Die kraters zijn het handtekeningetje.",
        },
      },
      {
        position: 10,
        body: {
          en: "Brush with 5 g olive oil and scatter fresh rosemary, a little oregano and coarse sea salt.",
          es: "Pincela con 5 g de aceite de oliva y esparce romero fresco, un poco de orégano y sal gruesa.",
          nl: "Bestrijk met 5 g olijfolie en bestrooi met verse rozemarijn, wat oregano en grof zeezout.",
        },
      },
      {
        position: 11,
        body: {
          en: "Bake 20 to 25 minutes at 220 °C until golden and cooked through. Eat it warm, the day you make it.",
          es: "Hornea de 20 a 25 minutos a 220 °C hasta que esté dorada y hecha. Cómela templada, el mismo día.",
          nl: "Bak 20 tot 25 minuten op 220 °C tot goudbruin en gaar. Eet 'm warm, de dag dat je 'm maakt.",
        },
      },
    ],
    publishedAt: "2026-05-31",
  },
  {
    slug: "finca-fire-pickles",
    title: {
      en: "Finca fire pickles",
      es: "Finca fire pickles",
      nl: "Finca fire pickles",
    },
    intro: {
      en: "Crisp cucumber, sour, sweet, and a slow burn. Surprisingly hard to stop eating.",
      es: "Pepino crujiente, ácido, dulce y un picor lento. Sorprendentemente difícil de parar.",
      nl: "Knapperige komkommer, zuur, zoet en een trage hitte. Verrassend moeilijk om mee te stoppen.",
    },
    category: "bij",
    seasons: ["zomer"],
    difficulty: 1,
    prepMinutes: 20,
    cookMinutes: 5,
    heroImage: "/images/recipes/finca-fire-pickles.jpg",
    pairing: {
      en: "A cold beer and anything off the grill. They cut through fat like nothing else.",
      es: "Una cerveza fría y cualquier cosa de la parrilla. Cortan la grasa como nada.",
      nl: "Een koud biertje en alles van de grill. Ze snijden door vet als niets anders.",
    },
    body: {
      en: [
        "There is a moment at the finca, somewhere around the third skewer off the grill, when the food turns heavy. Too much fat, too much smoke, too much of a good thing. A jar of these is the answer. You eat one and the plate resets. Sour, cold, sharp, a slow chili heat behind it, and suddenly you can go another hour.",
        "The trick is the salt and the half hour of waiting. Most pickles go soft because people drown raw cucumber in hot brine and hope. Salt the cucumber first, let it weep in a colander, and it stays loud and crisp no matter how long it sits. Apple cider vinegar over plain white, because it has a backbone. Then ginger, garlic, a red chili in rings, and lime. The lime is the secret. It goes soft and almost candied in the jar and is the best thing in there.",
        "Give them a night. Twenty-four hours and they are fresh and bright. Forty-eight and they hit the balance you actually want, sour and sweet and warm all at once. I put them out with smashburgers, tacos, grilled chicken, a charcuterie board, anything that needs cutting. A few flakes of pyramid salt right before they go down, for the crunch. Then watch the jar empty faster than you believe.",
      ],
      es: [
        "Hay un momento en la finca, sobre la tercera brocheta de la parrilla, en que la comida se vuelve pesada. Demasiada grasa, demasiado humo, demasiado de algo bueno. Un bote de estos es la respuesta. Te comes uno y el plato se reinicia. Ácido, frío, cortante, con un picor lento de chili detrás, y de repente puedes seguir una hora más.",
        "El truco está en la sal y en la media hora de espera. La mayoría de los encurtidos quedan blandos porque la gente ahoga el pepino crudo en salmuera caliente y reza. Sala el pepino primero, deja que sude en un colador, y se queda crujiente por mucho que repose. Vinagre de manzana antes que el blanco normal, porque tiene carácter. Luego jengibre, ajo, un chili rojo en aros, y lima. La lima es el secreto. Se ablanda y casi se confita en el bote y es lo mejor que hay dentro.",
        "Dales una noche. Veinticuatro horas y están frescos y vivos. Cuarenta y ocho y llegan al equilibrio que de verdad quieres, ácido, dulce y cálido a la vez. Los saco con smashburgers, tacos, pollo a la brasa, una tabla de embutidos, cualquier cosa que pida un corte. Unas escamas de sal en pirámide justo antes de servir, para el crujido. Y mira cómo se vacía el bote más rápido de lo que crees.",
      ],
      nl: [
        "Er is een moment op de finca, ergens rond de derde spies van de grill, dat het eten zwaar wordt. Te veel vet, te veel rook, te veel van iets goeds. Een pot van deze is het antwoord. Je eet er één en het bord reset. Zuur, koud, scherp, met een trage chilihitte erachter, en opeens kun je nog een uur door.",
        "De truc zit in het zout en het halfuur wachten. De meeste pickles worden zacht omdat mensen rauwe komkommer verzuipen in hete pekel en hopen. Zout de komkommer eerst, laat 'm uitlekken in een vergiet, en hij blijft luid en knapperig hoe lang hij ook staat. Appelazijn boven gewone witte, want die heeft een ruggengraat. Daarna gember, knoflook, een rode chili in ringen, en limoen. De limoen is het geheim. Die wordt zacht en bijna gekonfijt in de pot en is het lekkerste wat erin zit.",
        "Geef ze een nacht. Vierentwintig uur en ze zijn fris en helder. Achtenveertig en ze raken de balans die je echt wil, zuur en zoet en warm tegelijk. Ik zet ze erbij met smashburgers, taco's, gegrilde kip, een charcuterieplank, alles wat een tegenwicht nodig heeft. Een paar vlokken piramidezout vlak voordat ze de deur uitgaan, voor de crunch. En kijk dan hoe de pot sneller leeg raakt dan je gelooft.",
      ],
    },
    nowPlaying: {
      track: "Bamboleo",
      artist: "Gipsy Kings",
    },
    marginalia: [
      {
        id: "fire-1",
        kind: "tip",
        anchor: "step-2",
        body: {
          en: "The 30-minute salt drain is the whole game. Skip it and the pickles go soggy. Do it and they stay loud for a week.",
          es: "La media hora de sal escurriendo lo es todo. Sáltatelo y los encurtidos quedan blandos. Hazlo y aguantan crujientes una semana.",
          nl: "Dat halfuur uitlekken met zout is het hele spel. Sla het over en de pickles worden slap. Doe het en ze blijven een week knapperig.",
        },
      },
      {
        id: "fire-2",
        kind: "warning",
        anchor: "step-6",
        body: {
          en: "Warm brine, not boiling, when it goes over the cucumber. Boiling water cooks the snap right out of it.",
          es: "Salmuera templada, no hirviendo, al verterla sobre el pepino. El agua hirviendo le quita el crujido.",
          nl: "Warme pekel, niet kokend, als 't over de komkommer gaat. Kokend water kookt de knapperigheid eruit.",
        },
      },
      {
        id: "fire-3",
        kind: "wrong",
        anchor: "step-8",
        body: {
          en: "First batch I cracked open after six hours. Salty, flat, no depth. They need a night. Forty-eight hours is the sweet spot.",
          es: "El primer bote lo abrí a las seis horas. Salado, plano, sin fondo. Necesitan una noche. Cuarenta y ocho horas es el punto.",
          nl: "Eerste pot maakte ik na zes uur open. Zout, plat, geen diepte. Ze hebben een nacht nodig. Achtenveertig uur is het punt.",
        },
      },
      {
        id: "fire-4",
        kind: "scrawl",
        anchor: "ingredients",
        body: {
          en: "Don't leave the lime out. It softens and candies in the jar and disappears first.",
          es: "No te dejes la lima. Se ablanda y se confita en el bote y desaparece la primera.",
          nl: "Laat de limoen er niet uit. Die wordt zacht en gekonfijt in de pot en is als eerste op.",
        },
      },
    ],
    ingredients: [
      {
        group: { en: "Cucumber", es: "Pepino", nl: "Komkommer" },
        quantity: { en: "1.5", es: "1,5", nl: "1,5" },
        ingredient: { en: "cucumber", es: "pepino", nl: "komkommer" },
      },
      {
        group: { en: "Cucumber", es: "Pepino", nl: "Komkommer" },
        quantity: { en: "1 level tsp", es: "1 cdta rasa", nl: "1 afgestreken tl" },
        ingredient: {
          en: "Kalahari salt (or any flaky salt)",
          es: "sal de Kalahari (o cualquier sal en escamas)",
          nl: "Kalahari-zout (of ander vlokzout)",
        },
        note: {
          en: "for drawing the water out",
          es: "para sacar el agua",
          nl: "om het vocht eruit te trekken",
        },
      },
      {
        group: { en: "Brine", es: "Salmuera", nl: "Pekel" },
        quantity: { en: "300 ml", es: "300 ml", nl: "300 ml" },
        ingredient: {
          en: "apple cider vinegar",
          es: "vinagre de manzana",
          nl: "appelazijn",
        },
      },
      {
        group: { en: "Brine", es: "Salmuera", nl: "Pekel" },
        quantity: { en: "300 ml", es: "300 ml", nl: "300 ml" },
        ingredient: { en: "water", es: "agua", nl: "water" },
      },
      {
        group: { en: "Brine", es: "Salmuera", nl: "Pekel" },
        quantity: { en: "1 tbsp", es: "1 cda", nl: "1 el" },
        ingredient: { en: "sugar", es: "azúcar", nl: "suiker" },
      },
      {
        group: { en: "Aromatics", es: "Aromáticos", nl: "Aroma's" },
        quantity: { en: "20 g", es: "20 g", nl: "20 g" },
        ingredient: {
          en: "fresh ginger, finely sliced",
          es: "jengibre fresco, en láminas finas",
          nl: "verse gember, fijn gesneden",
        },
      },
      {
        group: { en: "Aromatics", es: "Aromáticos", nl: "Aroma's" },
        quantity: { en: "1 clove", es: "1 diente", nl: "1 teen" },
        ingredient: {
          en: "garlic, thinly sliced",
          es: "ajo, en láminas finas",
          nl: "knoflook, in dunne plakjes",
        },
      },
      {
        group: { en: "Aromatics", es: "Aromáticos", nl: "Aroma's" },
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: {
          en: "red chili, in rings",
          es: "chili rojo, en aros",
          nl: "rode chilipeper, in ringetjes",
        },
      },
      {
        group: { en: "Aromatics", es: "Aromáticos", nl: "Aroma's" },
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: { en: "lime, in wedges", es: "lima, en gajos", nl: "limoen, in partjes" },
      },
      {
        group: { en: "Aromatics", es: "Aromáticos", nl: "Aroma's" },
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: { en: "bay leaf", es: "hoja de laurel", nl: "laurierblad" },
      },
      {
        group: { en: "Aromatics", es: "Aromáticos", nl: "Aroma's" },
        quantity: { en: "1 tsp", es: "1 cdta", nl: "1 tl" },
        ingredient: {
          en: "black peppercorns",
          es: "pimienta negra en grano",
          nl: "zwarte peperkorrels",
        },
      },
      {
        group: { en: "To finish", es: "Para terminar", nl: "Voor het serveren" },
        quantity: { en: "a few flakes", es: "unas escamas", nl: "een paar vlokken" },
        ingredient: { en: "pyramid salt", es: "sal en pirámide", nl: "piramidezout" },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Cut the cucumber into rough diagonal slices, or thick ribbons with a peeler.",
          es: "Corta el pepino en lonchas gruesas al bies, o en cintas anchas con un pelador.",
          nl: "Snijd de komkommer in grove schuine plakken, of in dikke linten met een dunschiller.",
        },
      },
      {
        position: 2,
        body: {
          en: "Toss the cucumber with the salt and leave it to drain in a colander for 30 minutes. This is what keeps it crisp.",
          es: "Mezcla el pepino con la sal y déjalo escurrir en un colador 30 minutos. Esto es lo que lo mantiene crujiente.",
          nl: "Meng de komkommer met het zout en laat 'm 30 minuten uitlekken in een vergiet. Dit houdt 'm knapperig.",
        },
      },
      {
        position: 3,
        body: {
          en: "Meanwhile, bring the apple cider vinegar, water and sugar to a boil. The moment the sugar dissolves, kill the heat.",
          es: "Mientras, lleva a ebullición el vinagre de manzana, el agua y el azúcar. En cuanto se disuelva el azúcar, apaga el fuego.",
          nl: "Breng ondertussen de appelazijn, het water en de suiker aan de kook. Zodra de suiker is opgelost, vuur uit.",
        },
      },
      {
        position: 4,
        body: {
          en: "Split the ginger, garlic, chili, peppercorns, bay and lime between the jars.",
          es: "Reparte el jengibre, el ajo, el chili, la pimienta, el laurel y la lima entre los botes.",
          nl: "Verdeel de gember, knoflook, chili, peperkorrels, laurier en limoen over de potten.",
        },
      },
      {
        position: 5,
        body: {
          en: "Pack the cucumber in tight. Two jars, roughly 750 ml and 500 ml.",
          es: "Rellena bien con el pepino. Dos botes, de unos 750 ml y 500 ml.",
          nl: "Vul de potten stevig met de komkommer. Twee potten, ongeveer 750 ml en 500 ml.",
        },
      },
      {
        position: 6,
        body: {
          en: "Pour the warm brine over until everything is fully submerged.",
          es: "Vierte la salmuera templada hasta que todo quede cubierto.",
          nl: "Giet de warme pekel erover tot alles onderstaat.",
        },
      },
      {
        position: 7,
        body: {
          en: "Seal the jars and let them cool to room temperature.",
          es: "Cierra los botes y deja que se enfríen a temperatura ambiente.",
          nl: "Sluit de potten en laat ze afkoelen tot kamertemperatuur.",
        },
      },
      {
        position: 8,
        body: {
          en: "Then into the fridge for at least 24 hours. 48 is better, three to five days is best. Finish with pyramid salt just before serving.",
          es: "Luego a la nevera al menos 24 horas. 48 es mejor, de tres a cinco días es lo ideal. Termina con sal en pirámide justo antes de servir.",
          nl: "Dan minimaal 24 uur in de koelkast. 48 is beter, drie tot vijf dagen is het best. Werk vlak voor het serveren af met piramidezout.",
        },
      },
    ],
    publishedAt: "2026-06-01",
  },
  {
    slug: "berenjenas-miel-de-cana",
    title: {
      en: "Berenjenas con miel de caña",
      es: "Berenjenas con miel de caña",
      nl: "Berenjenas con miel de caña",
    },
    intro: {
      en: "Fried aubergine drowned in cane syrup. Crisp, soft, sweet, salty. The first thing you order in a Málaga bar.",
      es: "Berenjenas fritas ahogadas en miel de caña. Crujientes, blandas, dulces, saladas. Lo primero que pides en un bar de Málaga.",
      nl: "Gefrituurde aubergine verdronken in rietsuikersiroop. Krokant, zacht, zoet, zout. Het eerste dat je bestelt in een Málaga-bar.",
    },
    category: "voor",
    seasons: ["altijd"],
    difficulty: 2,
    prepMinutes: 25,
    cookMinutes: 15,
    servings: 4,
    heroImage: "/images/recipes/berenjenas-con-miel.jpg",
    pairing: {
      en: "An ice-cold beer, or if you are doing it properly, a small glass of sweet Málaga wine.",
      es: "Una cerveza bien fría o, si lo haces como toca, una copita de vino dulce de Málaga.",
      nl: "Een ijskoud biertje of, als je het netjes doet, een glaasje zoete Málaga-wijn.",
    },
    body: {
      en: [
        "Every bar in Málaga worth sitting in puts these out. Aubergine, fried hard, then drowned in dark cane syrup that looks like motor oil and tastes like the inside of a sugar cane. The first time it confused me. Sweet, on a fried vegetable, in a bar, with a cold beer. By the second plate I understood, and I have been ordering it ever since.",
        "Two things make or break it. The salt soak, which pulls the bitterness and the water out so the aubergine fries crisp instead of greasy. And the syrup, which you cook to the thickness of runny honey and then leave alone. Do not stir it past the boil or it grabs and crystallises. Drop a bit on a cold plate. Runs like water, keep going. Stringy like honey, you are there. Going to caramel, off the heat right now.",
        "The trick nobody tells you is the temperature of the syrup. Hot syrup on hot aubergine vanishes into the crust and you lose the gloss. Let it cool to blood-warm, then spoon it over so it sits on top and shines, the way it does in the bars on Calle Granada. Fleur de sel on top. A little lime zest if you want it sharp. Eat them while the aubergine is still hot and the syrup still cool.",
      ],
      es: [
        "Todo bar de Málaga que merezca la pena las saca. Berenjena, frita fuerte, y luego ahogada en miel de caña oscura que parece aceite de motor y sabe al interior de una caña de azúcar. La primera vez me lió. Dulce, sobre una verdura frita, en un bar, con una cerveza fría. Al segundo plato lo entendí, y desde entonces no he parado de pedirlas.",
        "Dos cosas la hacen o la rompen. El remojo en sal, que saca el amargor y el agua para que la berenjena fría crujiente y no grasienta. Y la miel, que cueces hasta el grosor de una miel líquida y luego dejas en paz. No la remuevas pasado el hervor o agarra y cristaliza. Echa un poco en un plato frío. Corre como agua, sigue. Hila como miel, ya está. Va a caramelo, fuera del fuego ya.",
        "El truco que nadie cuenta es la temperatura de la miel. Caliente sobre berenjena caliente desaparece en la corteza y pierdes el brillo. Déjala templar, y entonces napa por encima para que quede arriba y brille, como en los bares de la Calle Granada. Flor de sal por encima. Un poco de ralladura de lima si la quieres viva. Cómelas con la berenjena aún caliente y la miel aún fresca.",
      ],
      nl: [
        "Elke bar in Málaga die het waard is zet ze op tafel. Aubergine, hard gefrituurd, en dan verdronken in donkere rietsuikersiroop die eruitziet als motorolie en smaakt naar de binnenkant van een suikerriet. De eerste keer verwarde het me. Zoet, op een gefrituurde groente, in een bar, met een koud biertje. Bij het tweede bordje snapte ik het, en sindsdien blijf ik ze bestellen.",
        "Twee dingen maken of breken het. Het zoutbad, dat de bitterheid en het vocht eruit trekt zodat de aubergine knapperig frituurt in plaats van vettig. En de siroop, die je inkookt tot de dikte van vloeibare honing en dan met rust laat. Roer niet meer na het koken of hij grijpt en kristalliseert. Druppel wat op een koud bord. Loopt als water, doorgaan. Draadt als honing, je bent er. Gaat richting karamel, meteen van het vuur.",
        "De truc die niemand je vertelt is de temperatuur van de siroop. Heet op hete aubergine verdwijnt in de korst en je verliest de glans. Laat 'm lauw worden, en lepel 'm dan eroverheen zodat hij bovenop blijft liggen en glanst, zoals in de bars aan de Calle Granada. Fleur de sel erover. Een beetje limoenrasp als je 't scherp wil. Eet ze terwijl de aubergine nog warm is en de siroop nog koel.",
      ],
    },
    nowPlaying: {
      track: "Entre dos aguas",
      artist: "Paco de Lucía",
    },
    marginalia: [
      {
        id: "ber-1",
        kind: "warning",
        anchor: "step-2",
        body: {
          en: "Dry the aubergine like you mean it. Wet slices in hot oil spit, steam, and fry soggy instead of crisp.",
          es: "Seca la berenjena en serio. Las láminas mojadas en aceite caliente saltan, echan vapor y salen blandas, no crujientes.",
          nl: "Dep de aubergine echt droog. Natte plakken in hete olie spatten, stomen en worden slap in plaats van krokant.",
        },
      },
      {
        id: "ber-2",
        kind: "tip",
        anchor: "step-4",
        body: {
          en: "Stop stirring the moment it boils. Stir a sugar syrup too long and it seizes into crystals on you.",
          es: "Deja de remover en cuanto hierva. Remueve un almíbar de más y se te cuaja en cristales.",
          nl: "Stop met roeren zodra het kookt. Roer een suikersiroop te lang en hij schiet aan in kristallen.",
        },
      },
      {
        id: "ber-3",
        kind: "wrong",
        anchor: "step-7",
        body: {
          en: "First time I poured the syrup straight off the heat. It soaked in and went dull. Let it cool to blood-warm so it sits on top and shines.",
          es: "La primera vez eché la miel recién salida del fuego. Se empapó y quedó mate. Déjala templar para que quede arriba y brille.",
          nl: "Eerste keer goot ik de siroop direct van het vuur. Hij trok in en werd dof. Laat 'm lauw worden zodat hij bovenop blijft liggen en glanst.",
        },
      },
      {
        id: "ber-4",
        kind: "scrawl",
        anchor: "step-6",
        body: {
          en: "Small batches. Crowd the pan and the oil temperature drops and they drink it. Give them room.",
          es: "Tandas pequeñas. Llena la sartén y baja la temperatura del aceite y se lo beben. Dales sitio.",
          nl: "Kleine porties. Prop de pan vol en de olietemperatuur zakt en ze zuigen 'm op. Geef ze ruimte.",
        },
      },
    ],
    ingredients: [
      {
        group: { en: "Aubergine", es: "Berenjena", nl: "Aubergine" },
        quantity: { en: "2 large", es: "2 grandes", nl: "2 grote" },
        ingredient: {
          en: "aubergines (about 700 g)",
          es: "berenjenas (unos 700 g)",
          nl: "aubergines (ongeveer 700 g)",
        },
      },
      {
        group: { en: "Aubergine", es: "Berenjena", nl: "Aubergine" },
        quantity: { en: "1 litre", es: "1 litro", nl: "1 liter" },
        ingredient: { en: "cold water", es: "agua fría", nl: "koud water" },
      },
      {
        group: { en: "Aubergine", es: "Berenjena", nl: "Aubergine" },
        quantity: { en: "25 g", es: "25 g", nl: "25 g" },
        ingredient: { en: "salt", es: "sal", nl: "zout" },
        note: {
          en: "for the soak",
          es: "para el remojo",
          nl: "voor het zoutbad",
        },
      },
      {
        group: { en: "Aubergine", es: "Berenjena", nl: "Aubergine" },
        quantity: { en: "150 g", es: "150 g", nl: "150 g" },
        ingredient: { en: "flour", es: "harina", nl: "bloem" },
      },
      {
        group: { en: "Aubergine", es: "Berenjena", nl: "Aubergine" },
        quantity: { en: "to fry", es: "para freír", nl: "om te frituren" },
        ingredient: { en: "sunflower oil", es: "aceite de girasol", nl: "zonnebloemolie" },
      },
      {
        group: { en: "Cane syrup", es: "Miel de caña", nl: "Rietsuikersiroop" },
        quantity: { en: "200 g", es: "200 g", nl: "200 g" },
        ingredient: {
          en: "brown cane sugar (azúcar de caña moreno)",
          es: "azúcar de caña moreno",
          nl: "bruine rietsuiker (azúcar de caña moreno)",
        },
      },
      {
        group: { en: "Cane syrup", es: "Miel de caña", nl: "Rietsuikersiroop" },
        quantity: { en: "100 ml", es: "100 ml", nl: "100 ml" },
        ingredient: { en: "water", es: "agua", nl: "water" },
      },
      {
        group: { en: "Cane syrup", es: "Miel de caña", nl: "Rietsuikersiroop" },
        quantity: { en: "1 tsp", es: "1 cdta", nl: "1 tl" },
        ingredient: {
          en: "apple cider vinegar",
          es: "vinagre de manzana",
          nl: "appelazijn",
        },
      },
      {
        group: { en: "Cane syrup", es: "Miel de caña", nl: "Rietsuikersiroop" },
        quantity: { en: "1 pinch", es: "1 pizca", nl: "1 snuf" },
        ingredient: {
          en: "Kalahari or sea salt",
          es: "sal de Kalahari o sal marina",
          nl: "Kalahari- of zeezout",
        },
      },
      {
        group: { en: "To finish", es: "Para terminar", nl: "Afwerking" },
        quantity: { en: "to taste", es: "al gusto", nl: "naar smaak" },
        ingredient: {
          en: "fleur de sel or Kalahari salt",
          es: "flor de sal o sal de Kalahari",
          nl: "fleur de sel of Kalahari-zout",
        },
      },
      {
        group: { en: "To finish", es: "Para terminar", nl: "Afwerking" },
        quantity: { en: "optional", es: "opcional", nl: "optioneel" },
        ingredient: {
          en: "grated lime or orange zest",
          es: "ralladura de lima o naranja",
          nl: "geraspte limoen- of sinaasappelrasp",
        },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Slice the aubergines about 5 mm thick. Dissolve the 25 g salt in the litre of cold water and soak the slices for 30 minutes.",
          es: "Corta las berenjenas en láminas de unos 5 mm. Disuelve los 25 g de sal en el litro de agua fría y deja las láminas en remojo 30 minutos.",
          nl: "Snijd de aubergines in plakken van ongeveer 5 mm. Los de 25 g zout op in de liter koud water en leg de plakken 30 minuten in het zoute water.",
        },
      },
      {
        position: 2,
        body: {
          en: "Drain and pat them very dry with paper towel. Wet aubergine will never crisp.",
          es: "Escurre y sécalas muy bien con papel de cocina. La berenjena mojada no queda crujiente nunca.",
          nl: "Giet af en dep ze zeer goed droog met keukenpapier. Natte aubergine wordt nooit knapperig.",
        },
      },
      {
        position: 3,
        body: {
          en: "For the syrup, put the cane sugar, water, vinegar and a pinch of salt in a small pan. Bring it gently to a boil, then drop the heat right down.",
          es: "Para la miel, pon el azúcar de caña, el agua, el vinagre y una pizca de sal en un cazo. Lleva a ebullición suave y baja el fuego al mínimo.",
          nl: "Voor de siroop: doe de rietsuiker, het water, de azijn en een snuf zout in een steelpan. Breng rustig aan de kook en zet het vuur dan laag.",
        },
      },
      {
        position: 4,
        body: {
          en: "Let it reduce softly for 10 to 15 minutes, without stirring, until it has the thickness of runny honey. Test a drop on a cold plate. Then take it off and let it cool.",
          es: "Deja reducir despacio de 10 a 15 minutos, sin remover, hasta que tenga el grosor de una miel líquida. Prueba una gota en un plato frío. Retira y deja enfriar.",
          nl: "Laat 10 tot 15 minuten zacht inkoken, zonder roeren, tot het de dikte heeft van vloeibare honing. Test een druppel op een koud bord. Haal van het vuur en laat afkoelen.",
        },
      },
      {
        position: 5,
        body: {
          en: "Heat the sunflower oil to 180 °C. Just before frying, dredge the dry aubergine through the flour and knock off the excess.",
          es: "Calienta el aceite de girasol a 180 °C. Justo antes de freír, pasa la berenjena seca por la harina y sacude el exceso.",
          nl: "Verhit de zonnebloemolie tot 180 °C. Haal de droge aubergine vlak voor het bakken door de bloem en klop de overtollige bloem eraf.",
        },
      },
      {
        position: 6,
        body: {
          en: "Fry in small batches, 2.5 to 3 minutes, until golden and crisp outside, soft and creamy inside. Drain on paper.",
          es: "Fríe en tandas pequeñas, de 2,5 a 3 minutos, hasta que esté dorada y crujiente por fuera, blanda y cremosa por dentro. Escurre en papel.",
          nl: "Frituur in kleine porties, 2,5 tot 3 minuten, tot goudbruin en krokant van buiten, zacht en romig van binnen. Laat uitlekken op keukenpapier.",
        },
      },
      {
        position: 7,
        body: {
          en: "Lay the warm aubergine on a plate. Let the syrup cool to blood-warm, then spoon it over so it sits on top and shines.",
          es: "Coloca la berenjena templada en un plato. Deja templar la miel y nápala por encima para que quede arriba y brille.",
          nl: "Leg de warme aubergine op een schaal. Laat de siroop lauw worden en lepel hem er dan overheen zodat hij bovenop blijft liggen en glanst.",
        },
      },
      {
        position: 8,
        body: {
          en: "Finish with a few flakes of fleur de sel and, if you want it sharp, a little grated lime or orange zest.",
          es: "Termina con unas escamas de flor de sal y, si la quieres viva, un poco de ralladura de lima o naranja.",
          nl: "Werk af met een paar vlokken fleur de sel en, als je 't scherp wil, een beetje geraspte limoen- of sinaasappelrasp.",
        },
      },
    ],
    publishedAt: "2026-06-02",
  },
];
