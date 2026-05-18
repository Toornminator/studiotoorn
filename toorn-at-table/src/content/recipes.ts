import type { LocalisedRecipe } from "@/lib/types";

/**
 * Concept recipes — written in Nick's voice as placeholders until the real
 * cookbook copy lands. Every translatable field is a `{ en, es, nl }` trio;
 * `src/lib/content/recipes.ts` flattens it to the active locale.
 *
 * Voice notes: raw-edge, direct, no fluff. Em-dashes welcome, italics where
 * Nick's voice asks for them. Spanish skews Andalusian (warm, diminutives
 * where natural), English is intimate-but-clean for the Marbella expat ear.
 */
export const recipes: LocalisedRecipe[] = [
  {
    slug: "gazpacho-andaluz",
    title: {
      en: "Gazpacho andaluz",
      es: "Gazpacho andaluz",
      nl: "Gazpacho andaluz",
    },
    intro: {
      en: "The coldest, clearest tomato soup of summer — Andalucía in a glass. A small splash of sherry on the side and you're there.",
      es: "El gazpacho más frío y limpio del verano — Andalucía en un vaso. Un chorrito de manzanilla al lado y listo.",
      nl: "De koudste, helderste tomatensoep van de zomer — Andalusië in een glas. Lekker met een scheutje sherry erbij.",
    },
    category: "voor",
    seasons: ["zomer"],
    difficulty: 1,
    prepMinutes: 15,
    cookMinutes: 0,
    servings: 4,
    pairing: {
      en: "Manzanilla in tall, narrow glasses.",
      es: "Manzanilla en copa alta.",
      nl: "Manzanilla in mooie hoge glazen.",
    },
    body: {
      en: [
        "The first time I ate real gazpacho was at a Friday market in Estepona, late June, from a paper cup a guy named Rafa handed me. It was nothing like the tomato soup I knew from Holland. It was cold, yes — but the cold wasn't the point. The point was that the tomato had been allowed to be a tomato, and everything else had stepped back.",
        "I asked him what was in it. He shrugged: ripe tomatoes, oil, garlic, day-old bread, vinegar, salt. That's it. The whole conversation took less than a minute. I thought about it for two weeks.",
        "What changed me was understanding that gazpacho isn't a cold soup. It's a vehicle for one good tomato. The bread isn't a thickener — it's there so the olive oil can emulsify and the soup stops feeling like juice. The vinegar isn't seasoning — it's what wakes the tomato up so you taste more of it, not less.",
        "I make it now, at home, almost every week between June and September. I drink it from the same kind of paper cup. Sometimes with manzanilla, often without. It's the first thing I serve at a villa dinner if the weather is right — it tells everyone, from the very first sip, what kind of evening this is going to be.",
      ],
      es: [
        "La primera vez que comí gazpacho de verdad fue un viernes en el mercado de Estepona, finales de junio, en un vaso de papel que me dio un tipo llamado Rafa. No tenía nada que ver con la sopa de tomate que conocía de Holanda. Estaba fría, sí — pero el frío no era el tema. El tema era que el tomate había podido ser tomate, y el resto se había apartado.",
        "Le pregunté qué llevaba. Encogió los hombros: tomates maduros, aceite, ajo, pan duro del día anterior, vinagre, sal. Ya está. La conversación entera duró menos de un minuto. Le di vueltas dos semanas.",
        "Lo que me cambió fue entender que el gazpacho no es una sopa fría. Es un vehículo para un buen tomate. El pan no es espesante — está ahí para que el aceite emulsione y la sopa deje de parecer un zumo. El vinagre no es condimento — es lo que despierta al tomate para que sepa más a sí mismo, no a otra cosa.",
        "Lo hago en casa casi todas las semanas entre junio y septiembre. Lo bebo del mismo tipo de vaso de papel. A veces con manzanilla, muchas veces sin. Es lo primero que sirvo en una cena en una villa si el tiempo lo permite — dice a todos, desde el primer sorbo, qué clase de noche va a ser.",
      ],
      nl: [
        "De eerste keer dat ik écht gazpacho proefde was op een vrijdagmarkt in Estepona, eind juni, uit een papieren bekertje dat een vent met de naam Rafa me aanreikte. Het had niets te maken met die koude tomatensoep die ik in Nederland kende. Hij was koud, ja — maar de kou was niet het punt. Het punt was dat de tomaat een tomaat had mogen blijven, en al het andere een stap terug had gezet.",
        "Ik vroeg wat erin zat. Hij haalde z'n schouders op: rijpe tomaten, olie, knoflook, oudbakken brood, azijn, zout. Klaar. Het hele gesprek duurde minder dan een minuut. Ik dacht er twee weken over na.",
        "Wat me veranderde was het besef dat gazpacho geen koude soep is. Het is een vehikel voor één goede tomaat. Het brood is geen bindmiddel — het is er zodat de olijfolie kan emulgeren en de soep niet meer voelt als sap. De azijn is geen kruiding — het is wat de tomaat wakker maakt zodat je hem méér proeft, niet minder.",
        "Ik maak hem nu thuis bijna elke week tussen juni en september. Ik drink hem uit hetzelfde soort papieren bekertje. Soms met manzanilla, vaak niet. Het is het eerste wat ik serveer bij een villa-diner als het weer het toelaat — het zegt iedereen, vanaf de eerste slok, wat voor een soort avond dit wordt.",
      ],
    },
    nowPlaying: {
      track: "Tres Días",
      artist: "Pata Negra",
    },
    marginalia: [
      {
        id: "gazp-1",
        kind: "scrawl",
        anchor: "intro",
        body: {
          en: "I only make this between June and September. Off-season tomatoes don't earn the soup.",
          es: "Sólo lo hago entre junio y septiembre. Los tomates fuera de temporada no se merecen esta sopa.",
          nl: "Ik maak 'm alleen tussen juni en september. Tomaten buiten dat seizoen verdienen deze soep niet.",
        },
      },
      {
        id: "gazp-2",
        kind: "tip",
        anchor: "step-2",
        body: {
          en: "Push the blender to its highest setting. Don't go easy on it.",
          es: "Pon la batidora al máximo. No te quedes a medias.",
          nl: "Blender op de hoogste stand. Geen half werk.",
        },
      },
      {
        id: "gazp-3",
        kind: "warning",
        anchor: "step-3",
        body: {
          en: "Taste before the last spoon of vinegar. Once it's in, you can't take it out.",
          es: "Prueba antes de la última cucharada de vinagre. Una vez dentro, no se quita.",
          nl: "Proeven voor je de laatste lepel azijn erin gooit. Eenmaal binnen, niet meer eruit.",
        },
      },
      {
        id: "gazp-4",
        kind: "wrong",
        anchor: "method",
        body: {
          en: "First time I made this I doubled the vinegar by accident. Threw the whole pot. Read the recipe like a recipe.",
          es: "La primera vez doblé el vinagre sin querer. Tiré toda la olla. Lee la receta como una receta.",
          nl: "Eerste keer dat ik 'm maakte deed ik per ongeluk dubbele azijn. Hele pan weggegooid. Lees het recept als een recept.",
        },
      },
    ],
    ingredients: [
      {
        quantity: { en: "1 kg", es: "1 kg", nl: "1 kg" },
        ingredient: {
          en: "ripe beef tomatoes, roughly chopped",
          es: "tomates de pera bien maduros, en trozos",
          nl: "rijpe vleestomaten, in grove stukken",
        },
      },
      {
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: {
          en: "small cucumber, peeled, chopped",
          es: "pepino pequeño, pelado y troceado",
          nl: "kleine komkommer, geschild, in stukken",
        },
      },
      {
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: {
          en: "red pepper, chopped",
          es: "pimiento rojo, troceado",
          nl: "rode paprika, in stukken",
        },
      },
      {
        quantity: { en: "1 clove", es: "1 diente", nl: "1 teen" },
        ingredient: {
          en: "garlic",
          es: "ajo",
          nl: "knoflook",
        },
      },
      {
        quantity: { en: "1 slice", es: "1 rebanada", nl: "1 sneetje" },
        ingredient: {
          en: "day-old white bread",
          es: "pan blanco del día anterior",
          nl: "oudbakken witbrood",
        },
      },
      {
        quantity: { en: "3 tbsp", es: "3 cdas", nl: "3 el" },
        ingredient: {
          en: "Spanish extra-virgin olive oil",
          es: "aceite de oliva virgen extra",
          nl: "Spaanse olijfolie extra vergine",
        },
      },
      {
        quantity: { en: "2 tbsp", es: "2 cdas", nl: "2 el" },
        ingredient: {
          en: "sherry vinegar",
          es: "vinagre de Jerez",
          nl: "sherryazijn",
        },
      },
      {
        quantity: { en: "a pinch", es: "una pizca", nl: "snufje" },
        ingredient: {
          en: "fine sea salt",
          es: "sal marina fina",
          nl: "fijn zeezout",
        },
      },
      {
        group: { en: "To finish", es: "Para terminar", nl: "Garnituur" },
        quantity: { en: "1 handful", es: "1 puñado", nl: "1 hand" },
        ingredient: {
          en: "toasted croutons",
          es: "picatostes tostados",
          nl: "geroosterde croutons",
        },
      },
      {
        group: { en: "To finish", es: "Para terminar", nl: "Garnituur" },
        quantity: { en: "1 tbsp", es: "1 cda", nl: "1 el" },
        ingredient: {
          en: "finely chopped chives or basil",
          es: "cebollino o albahaca picada fina",
          nl: "fijngesneden bieslook of basilicum",
        },
      },
      {
        group: { en: "To finish", es: "Para terminar", nl: "Garnituur" },
        quantity: { en: "a drizzle", es: "un chorrito", nl: "scheutje" },
        ingredient: {
          en: "extra olive oil for finishing",
          es: "aceite de oliva extra para terminar",
          nl: "extra olijfolie om af te maken",
        },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Put the tomatoes, cucumber, pepper, garlic and bread in a blender. Blitz until thick and smooth.",
          es: "Tomate, pepino, pimiento, ajo y pan a la batidora. Tritura hasta tener una sopa espesa y lisa.",
          nl: "Doe tomaten, komkommer, paprika, knoflook en het brood in een blender. Pureer fijn tot een dikke soep.",
        },
      },
      {
        position: 2,
        body: {
          en: "With the blender running, drizzle in the olive oil in a thin stream. That's how the soup emulsifies and turns silky.",
          es: "Con la batidora en marcha, añade el aceite en hilo fino. Así emulsiona y queda sedoso.",
          nl: "Giet er, terwijl de blender draait, de olijfolie in een dunne straal bij. Zo emulgeert de soep en wordt 'ie zijdezacht.",
        },
      },
      {
        position: 3,
        body: {
          en: "Season with sherry vinegar and salt. Taste. The salt-to-acid balance should sit right on the edge.",
          es: "Ajusta con vinagre y sal. Prueba. El equilibrio sal-acidez debe quedar al filo.",
          nl: "Breng op smaak met sherryazijn en zout. Proef. Zout-zuur balans moet op het scherpst van de snede staan.",
        },
      },
      {
        position: 4,
        body: {
          en: "Chill for at least 3 hours, ideally a full day. The flavours knit together and the colour deepens to that proper red.",
          es: "Mete en la nevera mínimo 3 horas, mejor un día entero. Los sabores se asientan y el color se pone más rojo.",
          nl: "Zet minimaal 3 uur in de koelkast, liefst een hele dag. De smaken trekken samen, de kleur wordt dieper rood.",
        },
      },
      {
        position: 5,
        body: {
          en: "Pour into cold glasses. Top with croutons, herbs and a last drop of oil. Serve around 8 °C — colder than that and you lose flavour.",
          es: "Sirve en copas bien frías. Termina con picatostes, hierbas y una última gota de aceite. Unos 8 °C — más frío y pierdes sabor.",
          nl: "Schenk in koud-geslagen glazen. Top met croutons, kruiden en een laatste druppel olie. Serveer ongeveer 8°C — niet kouder, anders verlies je smaak.",
        },
      },
    ],
  },
  {
    slug: "carrillera-iberica",
    title: {
      en: "Carrillera ibérica with sherry",
      es: "Carrillera ibérica al oloroso",
      nl: "Carrillera ibérica met sherry",
    },
    intro: {
      en: "Ibérico pork cheeks slow-braised in oloroso sherry until the fork slides through. Comfort food with an Andalusian accent.",
      es: "Carrilleras de ibérico estofadas a fuego lento en oloroso hasta que el tenedor entra solo. Cocina de consuelo con acento andaluz.",
      nl: "Iberico-wangetjes die langzaam gaar trekken in oloroso sherry tot de vork erin verdwijnt. Comfort food met een Andalusisch accent.",
    },
    category: "hoofd",
    seasons: ["herfst", "winter"],
    difficulty: 3,
    prepMinutes: 20,
    cookMinutes: 180,
    servings: 4,
    pairing: {
      en: "A glass of the same oloroso. Or a big Garnacha.",
      es: "Una copa del mismo oloroso. O una garnacha con cuerpo.",
      nl: "Een glas van dezelfde oloroso. Of een zware Garnacha.",
    },
    body: {
      en: [
        "Carrillera ibérica was the first slow-cooked dish I really got wrong in Spain. November 2023, a rainy afternoon in my first kitchen here, a butcher in Estepona who'd been recommended by a neighbour I barely knew. He sold me eight beautiful pieces of cheek and told me, in Spanish too fast for me to keep up, exactly what to do. I nodded. I didn't follow a word of it.",
        "I overreduced the sauce. I rushed the oloroso. The first hour at 160 °C instead of 140. By the time it came out of the oven the sauce was a tarry mess and the cheeks themselves were stringy where they should have been soft. I ate it anyway, standing at the kitchen counter, in a foul mood.",
        "A month later I tried again. This time I asked Rocío, the butcher's daughter, to write it down for me on the back of the receipt. Slower, lower, less reduction, more patience. The second attempt is the dish I now serve every winter at private dinners — same eight cheeks, same sherry, but the trick is doing absolutely less than you think you need to.",
        "The first version was the one I learned from. The one in this recipe is the one I'd ask Rocío to grade.",
      ],
      es: [
        "La carrillera ibérica fue el primer guiso lento que de verdad me salió mal en España. Noviembre de 2023, una tarde lluviosa en mi primera cocina aquí, un carnicero en Estepona que me había recomendado una vecina a la que apenas conocía. Me vendió ocho piezas preciosas de carrillera y me explicó, en un castellano demasiado rápido para mí, exactamente lo que tenía que hacer. Asentí. No pillé una palabra.",
        "Reduje demasiado la salsa. Apresuré el oloroso. La primera hora a 160 °C en lugar de 140. Cuando salió del horno la salsa era un alquitrán y las carrilleras estaban hebrosas donde deberían estar blandas. Me la comí igual, de pie en la encimera, con muy mal humor.",
        "Un mes después lo intenté otra vez. Esta vez le pedí a Rocío, la hija del carnicero, que me lo apuntara en el reverso del tique. Más despacio, más bajo, menos reducción, más paciencia. El segundo intento es el plato que ahora sirvo cada invierno en las cenas privadas — las mismas ocho carrilleras, el mismo jerez, pero el truco está en hacer mucho menos de lo que crees que tienes que hacer.",
        "La primera versión es de la que aprendí. La que está en esta receta es la que le pediría a Rocío que me puntuara.",
      ],
      nl: [
        "Carrillera ibérica was het eerste langzaam gestoofde gerecht dat ik in Spanje écht verprutste. November 2023, een natte middag in mijn eerste keuken hier, een slager in Estepona die door een buurvrouw was aanbevolen die ik nauwelijks kende. Hij verkocht me acht prachtige wangetjes en legde me uit, in een Spaans te snel om bij te houden, precies wat ik moest doen. Ik knikte. Ik volgde geen woord.",
        "Ik reduceerde de saus te veel. Ik haastte de oloroso. Het eerste uur op 160 °C in plaats van 140. Toen het uit de oven kwam was de saus een teerachtige zooi en de wangetjes draderig waar ze zacht hadden moeten zijn. Ik at het toch op, staand aan het aanrecht, met een rothumeur.",
        "Een maand later probeerde ik het opnieuw. Ditmaal vroeg ik Rocío, de dochter van de slager, om het op de achterkant van de bon te schrijven. Langzamer, lager, minder reduceren, meer geduld. De tweede poging is het gerecht dat ik nu elke winter serveer bij privé-diners — dezelfde acht wangetjes, dezelfde sherry, maar de truc zit in véél minder doen dan je denkt nodig te hebben.",
        "De eerste versie is degene waar ik van leerde. De versie in dit recept is de versie waarvan ik aan Rocío zou willen vragen of ze 'm goedkeurt.",
      ],
    },
    nowPlaying: {
      track: "Tom Traubert's Blues",
      artist: "Tom Waits",
    },
    marginalia: [
      {
        id: "carr-1",
        kind: "tip",
        anchor: "intro",
        body: {
          en: "Use a dry sherry — oloroso seco or palo cortado. Sweet sherry turns the sauce into syrup.",
          es: "Usa un jerez seco — oloroso seco o palo cortado. Un jerez dulce convierte la salsa en jarabe.",
          nl: "Gebruik droge sherry — oloroso seco of palo cortado. Zoete sherry maakt de saus stroop.",
        },
      },
      {
        id: "carr-2",
        kind: "tip",
        anchor: "ingredients",
        body: {
          en: "No cheeks at the supermarket? Ask the butcher on Wednesdays. They always have them.",
          es: "¿Sin carrillera en el súper? Pregunta al carnicero los miércoles. Siempre tienen.",
          nl: "Geen wangetjes in de supermarkt? Vraag het de slager op woensdag. Ze hebben ze altijd.",
        },
      },
      {
        id: "carr-3",
        kind: "warning",
        anchor: "step-5",
        body: {
          en: "Oven NOT above 140 °C. Anything higher and the cheeks go from tender to dry in twenty minutes.",
          es: "El horno NO por encima de 140 °C. Más alto y las carrilleras pasan de tiernas a secas en veinte minutos.",
          nl: "Oven NIET boven 140 °C. Hoger en de wangetjes gaan van mals naar droog in twintig minuten.",
        },
      },
      {
        id: "carr-4",
        kind: "wrong",
        anchor: "step-6",
        body: {
          en: "First attempt: reduced the sauce 70%. It split. Stop at the spoon-coating stage — not before, not after.",
          es: "Primer intento: reduje la salsa un 70%. Se cortó. Para cuando cubra la cuchara — ni antes, ni después.",
          nl: "Eerste poging: saus 70% gereduceerd. Schiftte. Stop wanneer 'ie de lepel bekleedt — niet eerder, niet later.",
        },
      },
    ],
    ingredients: [
      {
        quantity: { en: "8 pieces", es: "8 unidades", nl: "8 stuks" },
        ingredient: {
          en: "ibérico pork cheeks (about 1.2 kg)",
          es: "carrilleras de ibérico (aprox. 1,2 kg)",
          nl: "iberico-wangetjes (ca. 1,2 kg)",
        },
      },
      {
        quantity: { en: "2 tbsp", es: "2 cdas", nl: "2 el" },
        ingredient: {
          en: "flour, for dusting",
          es: "harina para enharinar",
          nl: "bloem voor het bestuiven",
        },
      },
      {
        quantity: { en: "3 tbsp", es: "3 cdas", nl: "3 el" },
        ingredient: {
          en: "olive oil",
          es: "aceite de oliva",
          nl: "olijfolie",
        },
      },
      {
        quantity: { en: "2", es: "2", nl: "2" },
        ingredient: {
          en: "onions, finely chopped",
          es: "cebollas picadas finas",
          nl: "uien, fijngesneden",
        },
      },
      {
        quantity: { en: "3 cloves", es: "3 dientes", nl: "3 teentjes" },
        ingredient: {
          en: "garlic, crushed",
          es: "ajo, aplastado",
          nl: "knoflook, geplet",
        },
      },
      {
        quantity: { en: "2", es: "2", nl: "2" },
        ingredient: {
          en: "carrots, diced",
          es: "zanahorias en cubos",
          nl: "wortels, in dobbelstenen",
        },
      },
      {
        quantity: { en: "1 sprig", es: "1 ramita", nl: "1 tak" },
        ingredient: {
          en: "rosemary",
          es: "romero",
          nl: "rozemarijn",
        },
      },
      {
        quantity: { en: "2 leaves", es: "2 hojas", nl: "2 blaadjes" },
        ingredient: {
          en: "bay",
          es: "laurel",
          nl: "laurier",
        },
      },
      {
        quantity: { en: "300 ml", es: "300 ml", nl: "300 ml" },
        ingredient: {
          en: "oloroso sherry",
          es: "oloroso",
          nl: "oloroso sherry",
        },
      },
      {
        quantity: { en: "400 ml", es: "400 ml", nl: "400 ml" },
        ingredient: {
          en: "beef stock",
          es: "caldo de carne",
          nl: "runderbouillon",
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
        quantity: { en: "to taste", es: "al gusto", nl: "naar smaak" },
        ingredient: {
          en: "salt and black pepper",
          es: "sal y pimienta negra",
          nl: "zout en zwarte peper",
        },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Pat the cheeks dry, season generously with salt and pepper, then dust lightly with flour.",
          es: "Seca las carrilleras, salpimenta con generosidad y enharina ligeramente.",
          nl: "Dep de wangetjes droog, bestrooi royaal met zout en peper, bestuif licht met bloem.",
        },
      },
      {
        position: 2,
        body: {
          en: "Heat olive oil in a cast-iron pan. Sear the cheeks dark-brown all over — two minutes per side, no piling up. Lift out.",
          es: "Calienta aceite en una cazuela de hierro. Marca las carrilleras bien doradas — dos minutos por lado, sin amontonar. Reserva.",
          nl: "Verhit olijfolie in een gietijzeren pan. Schroei de wangetjes rondom dichtbruin — twee minuten per kant, niet stapelen. Haal uit de pan.",
        },
      },
      {
        position: 3,
        body: {
          en: "Soften the onion, carrot and garlic in the same pan until golden, about 10 minutes. Stir in the tomato paste and cook another minute.",
          es: "En la misma cazuela, pocha cebolla, zanahoria y ajo hasta que doren, unos 10 minutos. Añade el concentrado de tomate y cocina un minuto más.",
          nl: "Bak ui, wortel en knoflook in dezelfde pan tot zacht en goudbruin, zo'n 10 minuten. Roer tomatenpuree erdoor en bak nog een minuut mee.",
        },
      },
      {
        position: 4,
        body: {
          en: "Deglaze with the oloroso. Let it reduce by half — that burns off the sharp alcohol. Return the cheeks, add stock, rosemary and bay.",
          es: "Desglasa con el oloroso. Reduce a la mitad para que se vaya el alcohol. Devuelve las carrilleras, añade caldo, romero y laurel.",
          nl: "Blus af met de oloroso. Laat reduceren met de helft, zodat het scherpe alcoholtje verdwijnt. Doe de wangetjes terug, voeg de bouillon, rozemarijn en laurier toe.",
        },
      },
      {
        position: 5,
        body: {
          en: "Bring just under the boil, cover, and slide into a 140 °C oven. Braise at least 2½ hours — the fork should glide through.",
          es: "Lleva al primer hervor, tapa y mete al horno a 140 °C. Estofa mínimo 2½ horas — el tenedor debe entrar sin esfuerzo.",
          nl: "Breng tegen de kook aan, dek af, schuif in een oven van 140°C. Stoof minimaal 2,5 uur — vork moet er moeiteloos in glijden.",
        },
      },
      {
        position: 6,
        body: {
          en: "Lift the cheeks out and set aside. Reduce the sauce hard until it hangs from the spoon like syrup. Check the salt.",
          es: "Saca las carrilleras y reserva. Reduce la salsa a fuego fuerte hasta que cuelgue de la cuchara como un jarabe. Rectifica de sal.",
          nl: "Haal de wangetjes uit de saus, zet kort apart. Reduceer de saus op een hoog vuur tot 'ie als stroop aan de lepel hangt. Proef op zout.",
        },
      },
      {
        position: 7,
        body: {
          en: "Slide the cheeks back into the sauce, turn them gently so everything gleams. Serve right away with mash or a slab of toasted bread.",
          es: "Devuelve las carrilleras a la salsa y gíralas con calma para que brillen. Sirve enseguida con puré o pan tostado.",
          nl: "Leg de wangetjes terug in de saus, draai 'm rustig door elkaar zodat alles glanst. Direct serveren met aardappelpuree of een sneetje geroosterd brood.",
        },
      },
    ],
  },
  {
    slug: "tarta-de-santiago",
    title: {
      en: "Tarta de Santiago",
      es: "Tarta de Santiago",
      nl: "Tarta de Santiago",
    },
    intro: {
      en: "The Galician almond cake. One thing above all: a good almond. No flour, no nonsense — just ground almond, egg, sugar, lemon.",
      es: "La tarta gallega de almendra. Una cosa por encima de todo: una buena almendra. Sin harina, sin adornos — almendra molida, huevo, azúcar, limón.",
      nl: "De Galicische amandeltaart. Eén ingrediënt boven alles: een goede amandel. Geen meel, geen poespas — alleen amandelmeel, ei, suiker, citroen.",
    },
    category: "dessert",
    seasons: ["altijd"],
    difficulty: 2,
    prepMinutes: 15,
    cookMinutes: 35,
    servings: 8,
    pairing: {
      en: "A small glass of Pedro Ximénez or a strong coffee.",
      es: "Una copita de Pedro Ximénez o un café fuerte.",
      nl: "Een glaasje pedro ximénez of een sterke koffie.",
    },
    body: {
      en: [
        "Gluten-free before that was a thing. Even better the day after baking — give it time to go properly moist.",
      ],
      es: [
        "Sin gluten desde antes de que se pusiera de moda. Está aún mejor al día siguiente — dale tiempo a que se ponga jugosa.",
      ],
      nl: [
        "Glutenvrij voordat dat een ding werd. Werkt nog beter een dag na het bakken — geef hem 'm de tijd om vochtig te worden.",
      ],
    },
    ingredients: [
      {
        quantity: { en: "250 g", es: "250 g", nl: "250 g" },
        ingredient: {
          en: "almond flour (finely ground, not defatted)",
          es: "harina de almendra (fina, sin desgrasar)",
          nl: "amandelmeel (fijn gemalen, niet ontvet)",
        },
      },
      {
        quantity: { en: "200 g", es: "200 g", nl: "200 g" },
        ingredient: {
          en: "caster sugar",
          es: "azúcar fino",
          nl: "fijne kristalsuiker",
        },
      },
      {
        quantity: { en: "4", es: "4", nl: "4" },
        ingredient: {
          en: "eggs, at room temperature",
          es: "huevos a temperatura ambiente",
          nl: "eieren, op kamertemperatuur",
        },
      },
      {
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: {
          en: "lemon, zest only",
          es: "limón, sólo la ralladura",
          nl: "citroen, geraspte schil",
        },
      },
      {
        quantity: { en: "a pinch", es: "una pizca", nl: "snufje" },
        ingredient: {
          en: "cinnamon",
          es: "canela",
          nl: "kaneel",
        },
      },
      {
        quantity: { en: "a knob", es: "una nuez", nl: "klontje" },
        ingredient: {
          en: "butter for the tin",
          es: "mantequilla para el molde",
          nl: "boter voor de bakvorm",
        },
      },
      {
        group: { en: "To finish", es: "Para terminar", nl: "Afwerking" },
        quantity: { en: "to taste", es: "al gusto", nl: "naar smaak" },
        ingredient: {
          en: "icing sugar for dusting",
          es: "azúcar glas para espolvorear",
          nl: "poedersuiker om te bestuiven",
        },
      },
      {
        group: { en: "To finish", es: "Para terminar", nl: "Afwerking" },
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: {
          en: "paper Santiago-cross stencil (optional)",
          es: "plantilla de la cruz de Santiago (opcional)",
          nl: "papieren Santiago-kruis-stencil (optioneel)",
        },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Heat the oven to 175 °C. Butter a 24 cm round springform or line it with baking paper.",
          es: "Precalienta el horno a 175 °C. Engrasa un molde desmontable de 24 cm o fórralo con papel de hornear.",
          nl: "Verwarm de oven voor op 175°C. Beboter een ronde springvorm van 24 cm of bekleed 'm met bakpapier.",
        },
      },
      {
        position: 2,
        body: {
          en: "Whisk the eggs with the sugar for at least 5 minutes — it should go pale and airy.",
          es: "Bate los huevos con el azúcar al menos 5 minutos — debe quedar pálido y esponjoso.",
          nl: "Klop eieren met suiker met een handmixer minstens 5 minuten — het moet bleek en luchtig zijn.",
        },
      },
      {
        position: 3,
        body: {
          en: "Stir in the lemon zest and cinnamon. Fold in the almond flour in two batches. Don't overmix — keep the air.",
          es: "Añade la ralladura de limón y la canela. Incorpora la almendra en dos veces, con cuidado. No remuevas demasiado — guarda el aire.",
          nl: "Roer citroenrasp en kaneel erdoor. Spatel daarna in twee delen het amandelmeel erdoor. Niet te lang doorroeren, je wil de lucht bewaren.",
        },
      },
      {
        position: 4,
        body: {
          en: "Pour into the tin and level the top. Bake 30–35 minutes — golden on top, skewer comes out clean.",
          es: "Vierte en el molde y alisa la superficie. Hornea 30–35 minutos — dorado por arriba, palillo limpio.",
          nl: "Schenk in de vorm, strijk glad. Bak 30-35 minuten — bovenkant goudbruin, prikker komt droog uit het midden.",
        },
      },
      {
        position: 5,
        body: {
          en: "Cool completely. Lay the cross stencil on top and dust generously with icing sugar. Lift the stencil away carefully.",
          es: "Deja enfriar del todo. Coloca la plantilla de la cruz y espolvorea con azúcar glas. Retira con cuidado.",
          nl: "Laat helemaal afkoelen. Leg dan het kruis-stencil op de taart en bestuif royaal met poedersuiker. Til 'm voorzichtig op.",
        },
      },
      {
        position: 6,
        body: {
          en: "Slice into wedges. Keeps two days under an upturned bowl on the counter.",
          es: "Corta en porciones. Se conserva dos días tapada en la encimera.",
          nl: "Snijd in punten. Bewaart twee dagen onder een omgekeerde kom op het aanrecht.",
        },
      },
    ],
  },
  {
    slug: "ceviche-witvis",
    title: {
      en: "White-fish ceviche with manzanilla",
      es: "Ceviche de pescado blanco con manzanilla",
      nl: "Witvis-ceviche met manzanilla",
    },
    intro: {
      en: "Sea bream, briefly cured in lime, with a sherry twist. Fifteen minutes from knife to plate — no fire, just acid.",
      es: "Dorada, curada brevemente en lima, con un toque de manzanilla. Quince minutos del cuchillo al plato — sin fuego, solo ácido.",
      nl: "Daurade, kort getrokken in limoen, met een sherry-twist. Vijftien minuten van mes tot bord — geen vuur, alleen het zuur.",
    },
    category: "voor",
    seasons: ["lente", "zomer"],
    difficulty: 2,
    prepMinutes: 15,
    cookMinutes: 0,
    servings: 4,
    pairing: {
      en: "Manzanilla and a pasilla chilli. Or a dry cava.",
      es: "Manzanilla y pasilla. O un cava brut.",
      nl: "Manzanilla en pasilla. Of een droge cava.",
    },
    body: {
      en: [
        "The trick is a fish that doesn't smell too aggressively of the sea — that one's already gone. Ask the fishmonger to fillet and skin it for you.",
      ],
      es: [
        "La clave: un pescado que no huela demasiado a mar — ése ya ha pasado. Pídele al pescadero que te lo filetee y le quite la piel.",
      ],
      nl: [
        "Sleutel is een vissige vis die NIET overdreven vers ruikt — die heeft 'm gezien. Vraag de visboer om 'em zelf te fileren en de huid eraf te halen.",
      ],
    },
    ingredients: [
      {
        quantity: { en: "400 g", es: "400 g", nl: "400 g" },
        ingredient: {
          en: "sea bream fillet, skinned (or sea bass)",
          es: "filete de dorada sin piel (o lubina)",
          nl: "daurade-filet zonder huid (of zeebaars)",
        },
      },
      {
        quantity: { en: "3", es: "3", nl: "3" },
        ingredient: {
          en: "limes, juiced",
          es: "limas, sólo el zumo",
          nl: "limoenen, sap",
        },
      },
      {
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: {
          en: "small red onion, sliced paper-thin",
          es: "cebolla roja pequeña, en juliana muy fina",
          nl: "kleine rode ui, zo dun mogelijk gesneden",
        },
      },
      {
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: {
          en: "red pasilla chilli, finely chopped (seeded for less heat)",
          es: "pasilla roja, picada fina (sin pepitas para menos picante)",
          nl: "rode pasilla peper, fijngehakt (zonder zaden voor minder pittig)",
        },
      },
      {
        quantity: { en: "1 handful", es: "1 puñado", nl: "1 hand" },
        ingredient: {
          en: "fresh coriander, leaves picked",
          es: "cilantro fresco, sólo las hojas",
          nl: "verse koriander, blaadjes geplukt",
        },
      },
      {
        quantity: { en: "2 tbsp", es: "2 cdas", nl: "2 el" },
        ingredient: {
          en: "manzanilla sherry",
          es: "manzanilla",
          nl: "manzanilla sherry",
        },
      },
      {
        quantity: { en: "1 tbsp", es: "1 cda", nl: "1 el" },
        ingredient: {
          en: "extra-virgin olive oil",
          es: "aceite de oliva virgen extra",
          nl: "olijfolie extra vergine",
        },
      },
      {
        quantity: { en: "to taste", es: "al gusto", nl: "naar smaak" },
        ingredient: {
          en: "flaked sea salt",
          es: "sal en escamas",
          nl: "vlokzout",
        },
      },
      {
        group: { en: "On the side", es: "Para acompañar", nl: "Erbij" },
        quantity: { en: "1", es: "1", nl: "1" },
        ingredient: {
          en: "ripe avocado, in chunks",
          es: "aguacate maduro, en trozos",
          nl: "rijpe avocado in stukken",
        },
      },
      {
        group: { en: "On the side", es: "Para acompañar", nl: "Erbij" },
        quantity: { en: "1 handful", es: "1 puñado", nl: "1 hand" },
        ingredient: {
          en: "popped corn or toasted corn kernels",
          es: "maíz tostado o palomitas saladas",
          nl: "gepofte mais of geroosterde maïskorrels",
        },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Pop the fillet in the freezer for 10 minutes — it slices cleaner. Cut into half-centimetre cubes.",
          es: "Mete el filete en el congelador 10 minutos — corta mucho mejor. Trocea en cubos de medio cm.",
          nl: "Leg de filet 10 minuten in de vriezer — dan snijdt 'ie strakker. Snijd in dobbelstenen van een halve cm.",
        },
      },
      {
        position: 2,
        body: {
          en: "Drop the fish cubes into a cold bowl with the onion rings. Pour the lime juice over. Leave 5–7 minutes — no longer, or the fish overcooks.",
          es: "Pon los cubos con la cebolla en un bol frío. Cubre con el zumo de lima. Deja 5–7 minutos — ni un segundo más, o el pescado se pasa.",
          nl: "Doe de visstukjes in een koude kom met de uiringen. Schenk het limoensap erover. Laat 5-7 minuten staan — niet langer, anders gaart de vis dwars door.",
        },
      },
      {
        position: 3,
        body: {
          en: "Stir through the manzanilla, olive oil, chilli and half the coriander. Check the salt.",
          es: "Incorpora la manzanilla, el aceite, el chile y la mitad del cilantro. Rectifica de sal.",
          nl: "Roer er manzanilla, olijfolie, pepertje en de helft van de koriander door. Proef op zout.",
        },
      },
      {
        position: 4,
        body: {
          en: "Spoon onto four cold plates. Finish with avocado, corn and the rest of the coriander. Flake salt on top.",
          es: "Reparte en cuatro platos fríos. Termina con aguacate, maíz y el resto del cilantro. Sal en escamas por encima.",
          nl: "Schep op vier koude borden. Werk af met avocado, maïs en de rest van de koriander. Vlokzout er bovenop.",
        },
      },
      {
        position: 5,
        body: {
          en: "Eat within 10 minutes. Leave it standing and the fish goes from silky to meat-like — gone is gone.",
          es: "Cómelo en menos de 10 minutos. Si lo dejas, la textura del pescado cambia y se vuelve carnosa — no tiene vuelta atrás.",
          nl: "Eet binnen 10 minuten op. De vis verandert van textuur als je 'm laat staan en wordt ineens net vlees in plaats van zacht.",
        },
      },
    ],
  },
  {
    slug: "aioli-klassiek",
    title: {
      en: "Classic aioli",
      es: "Alioli clásico",
      nl: "Aioli klassiek",
    },
    intro: {
      en: "The mother of all Spanish sauces. Garlic, oil, a pinch of salt — mortar and pestle, no blender. No egg needed.",
      es: "La madre de las salsas españolas. Ajo, aceite, una pizca de sal — mortero, nada de batidora. Sin huevo.",
      nl: "De moeder van alle Spaanse sauzen. Knoflook, olie, een snufje zout — in een vijzel, geen blender. Geen ei nodig.",
    },
    category: "basis",
    seasons: ["altijd"],
    difficulty: 3,
    prepMinutes: 20,
    cookMinutes: 0,
    servings: 6,
    body: {
      en: [
        "This is the Catalan version without egg — only oil and garlic binding through patience. It works or it splits. Don't rush the oil.",
      ],
      es: [
        "Ésta es la versión catalana sin huevo — sólo aceite y ajo que ligan por paciencia. Sale o se corta. No corras con el aceite.",
      ],
      nl: [
        "Dit is de Catalaanse versie zonder ei — alleen olie en knoflook die binden door geduld. Lukt of mislukt, geen tussenweg. Vooral niet haasten met de olie.",
      ],
    },
    ingredients: [
      {
        quantity: { en: "4 cloves", es: "4 dientes", nl: "4 teentjes" },
        ingredient: {
          en: "fresh garlic, peeled",
          es: "ajo fresco, pelado",
          nl: "verse knoflook, gepeld",
        },
      },
      {
        quantity: { en: "½ tsp", es: "½ cdita", nl: "1/2 tl" },
        ingredient: {
          en: "fine sea salt",
          es: "sal marina fina",
          nl: "fijn zeezout",
        },
      },
      {
        quantity: { en: "250 ml", es: "250 ml", nl: "250 ml" },
        ingredient: {
          en: "mild olive oil (not extra-virgin — it turns bitter)",
          es: "aceite de oliva suave (no virgen extra — amarga)",
          nl: "milde olijfolie (geen extra vergine — die maakt 'm bitter)",
        },
      },
      {
        quantity: { en: "a few drops", es: "unas gotas", nl: "paar druppels" },
        ingredient: {
          en: "lemon juice",
          es: "zumo de limón",
          nl: "citroensap",
        },
      },
    ],
    steps: [
      {
        position: 1,
        body: {
          en: "Pound the garlic with the salt in a mortar until smooth. No mortar? Work it on a board with the flat of your knife.",
          es: "Maja el ajo con la sal en el mortero hasta tener una pasta. ¿Sin mortero? Aplástalo en la tabla con el lateral del cuchillo.",
          nl: "Wrijf de knoflook met het zout in een vijzel tot een gladde pasta. Geen vijzel? Maak het op een snijplank met de zijkant van het mes.",
        },
      },
      {
        position: 2,
        body: {
          en: "Start adding the oil drop by drop while stirring without stop — literally drop by drop the first five minutes. This is where the work is.",
          es: "Empieza a añadir el aceite gota a gota sin dejar de remover — literalmente gota a gota los primeros cinco minutos. Aquí está el trabajo.",
          nl: "Begin de olie druppelsgewijs toe te voegen terwijl je continu roert — letterlijk druppel per druppel de eerste vijf minuten. Hier zit het werk.",
        },
      },
      {
        position: 3,
        body: {
          en: "Once you have a creamy base, you can up the stream a touch. Keep stirring in the same direction.",
          es: "Cuando tengas una base cremosa, puedes acelerar un poco. Sigue removiendo siempre en la misma dirección.",
          nl: "Zodra je een romige basis hebt, mag de stroom olie iets sneller. Blijf roeren in dezelfde richting.",
        },
      },
      {
        position: 4,
        body: {
          en: "Work it until you have a thick, glossy mayo-like sauce. A few drops of lemon to balance it out.",
          es: "Trabaja hasta una salsa espesa y brillante, tipo mayonesa. Unas gotas de limón para equilibrar.",
          nl: "Werk door tot je een dikke, glanzende mayonaise-achtige saus hebt. Een paar druppels citroen om te balanceren.",
        },
      },
      {
        position: 5,
        body: {
          en: "Spoon onto a tapas plate, or dip with grilled bread and quickly charred vegetables. Keeps one day in the fridge.",
          es: "Pon en un plato de tapas, o úsalo con pan a la brasa y verduras a la plancha. Se conserva un día en la nevera.",
          nl: "Schept op een tapasbord, of dip met gegrild brood en kort geroosterde groente. Bewaart één dag in de koelkast.",
        },
      },
    ],
  },
];
