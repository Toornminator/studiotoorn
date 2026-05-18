import type { LocalisedTravelLocation } from "@/lib/types";

/**
 * Concept travel blogs — 27 visited countries with short Nick-voiced text.
 * Every translatable field is an `{ en, es, nl }` trio; the country code
 * (slug), year and map coordinates stay single-shape.
 *
 * Coordinates are percentages of the 1400×640 atlas viewBox (top-left
 * anchored). `mapX` 0 = far west, 100 = far east; `mapY` 0 = north pole,
 * 100 = antarctic. Tweak in tandem with the atlas when shapes shift.
 *
 * Voice: raw-edge, direct, em-dashes welcome. Spanish skews Andalusian.
 * English stays intimate but a touch more polished for the Marbella ear.
 */
export const travelLocations: LocalisedTravelLocation[] = [
  // ── Home + Western Europe ──────────────────────────────────────────
  {
    slug: "nederland",
    name: { en: "Netherlands", es: "Países Bajos", nl: "Nederland" },
    country: { en: "Netherlands", es: "Países Bajos", nl: "Nederland" },
    year: 1989,
    mapX: 50,
    mapY: 28,
    intro: {
      en: "Where it started. Amsterdam kitchens, long winters and the idea that food as-it-is ought to be enough.",
      es: "Donde empezó. Cocinas de Ámsterdam, inviernos largos y la idea de que la comida tal cual debería bastar.",
      nl: "Waar het begon. Amsterdamse keukens, lange winters en het idee dat eten zoals het is genoeg moet zijn.",
    },
    body: {
      en: "Eight years in a kitchen in the Negen Straatjes and then the Michelin year. That's where I learned discipline, that's where I learned what a good plate is, and that's where I discovered halfway in that I wanted out — not out of Holland, out of that pace.\n\nI still like coming back for a few days. A proper haring on the Albert Cuyp, old friends, a walk through the Jordaan. Then back to the sun.",
      es: "Ocho años en una cocina de las Negen Straatjes y después el año Michelin. Ahí aprendí disciplina, ahí aprendí qué es un buen plato, y ahí descubrí a mitad de camino que quería salir — no de Holanda, de ese ritmo.\n\nAún me gusta volver unos días. Un buen arenque en el Albert Cuyp, viejos amigos, un paseo por el Jordaan. Y luego de vuelta al sol.",
      nl: "Acht jaar in een keuken in de Negen Straatjes en daarna de Michelin-jaren. Hier leerde ik discipline, hier leerde ik wat een goed bord is, en hier ontdekte ik halverwege dat ik weg wilde — niet uit Nederland, maar uit dat tempo.\n\nIk kom nog graag terug voor een paar dagen. Een goede haring op de Albert Cuyp, oude vrienden, een wandeling door de Jordaan. Dan weer terug naar de zon.",
    },
    pullQuote: {
      en: "It started here and it always belonged somewhere else.",
      es: "Empezó aquí y siempre perteneció a otro sitio.",
      nl: "Het begon hier en het hoorde altijd al ergens anders thuis.",
    },
  },
  {
    slug: "belgie",
    name: { en: "Belgium", es: "Bélgica", nl: "België" },
    country: { en: "Belgium", es: "Bélgica", nl: "België" },
    year: 2012,
    mapX: 49.5,
    mapY: 30,
    intro: {
      en: "Antwerp for the mussels, Brussels for the beers, Ghent for the Saturday-morning market.",
      es: "Amberes por los mejillones, Bruselas por las cervezas, Gante por el mercado del sábado por la mañana.",
      nl: "Antwerpen voor de mosselen, Brussel voor de bieren, Gent voor de markt op zaterdagochtend.",
    },
    body: {
      en: "The Belgians understand something we often forget — that simplicity is a craft. A bowl of frites, a glass of trappist, a table where you can sit for four hours and nobody minds.\n\nIt's also where I learned to pull stocks that actually say something. Meat with bone, cold water, patience.",
      es: "Los belgas entienden algo que nosotros olvidamos a menudo — que la sencillez es un oficio. Un cucurucho de patatas, un vaso de trapense, una mesa donde puedes sentarte cuatro horas sin que nadie te lo eche en cara.\n\nTambién es donde aprendí a hacer caldos que dicen algo de verdad. Carne con hueso, agua fría, paciencia.",
      nl: "De Belgen begrijpen iets dat wij vaak vergeten — dat eenvoud een vak is. Een schaal frietjes, een glas trappist, een tafel waar je vier uur kunt zitten zonder dat iemand het je kwalijk neemt.\n\nIk leerde er ook bouillonnen trekken die echt iets zeggen. Vlees met been, koud water, geduld.",
    },
  },
  {
    slug: "luxemburg",
    name: { en: "Luxembourg", es: "Luxemburgo", nl: "Luxemburg" },
    country: { en: "Luxembourg", es: "Luxemburgo", nl: "Luxemburg" },
    year: 2014,
    mapX: 50.2,
    mapY: 31,
    intro: {
      en: "One weekend, one dinner. Mostly a stopover on the way south.",
      es: "Un fin de semana, una cena. Sobre todo una parada de camino al sur.",
      nl: "Eén weekend, één avondje. Vooral een tussenstop op weg naar het zuiden.",
    },
    body: {
      en: "The Moselle valley on both sides of the border is worth the detour — white wine that follows the riverbank, restaurants where you'll hear German, French and something in between in one sentence.",
      es: "El valle del Mosela, a ambos lados de la frontera, merece el desvío — vinos blancos que siguen la ribera y restaurantes donde oyes alemán, francés y algo intermedio en una misma frase.",
      nl: "Het Moezeldal aan beide kanten van de grens is de moeite waard — witte wijn die de oever volgt, restaurants waar je in dezelfde zin Duits, Frans en iets daartussen hoort.",
    },
  },
  {
    slug: "duitsland",
    name: { en: "Germany", es: "Alemania", nl: "Duitsland" },
    country: { en: "Germany", es: "Alemania", nl: "Duitsland" },
    year: 2013,
    mapX: 52,
    mapY: 29,
    intro: {
      en: "Berlin for the kitchens, Bavaria for the pork, the Saarland for the wine.",
      es: "Berlín por las cocinas, Baviera por el cerdo, el Sarre por el vino.",
      nl: "Berlijn voor de keuken, Beieren voor de varkens, het Saargebied voor de wijn.",
    },
    body: {
      en: "Germany has a much bigger regional kitchen than people give it credit for. A Swabian Maultaschen in Stuttgart, a Sauerbraten in the Rhineland, a fish from the Bodensee in Konstanz — all different countries on one plate.\n\nIn Berlin I ate döner kebab and nothing else for a week and came home with better ideas than I'd had after four days of Michelin restaurants.",
      es: "Alemania tiene una cocina regional mucho más grande de lo que se cree. Un Maultaschen suabo en Stuttgart, un Sauerbraten en Renania, un pescado del lago de Constanza en Konstanz — todos países distintos en el mismo plato.\n\nEn Berlín pasé una semana comiendo solo döner y volví a casa con mejores ideas que tras cuatro días en restaurantes Michelin.",
      nl: "Duitsland heeft een grotere regionale keuken dan de mensen denken. Een Schwabische Maultaschen in Stuttgart, een Sauerbraten in het Rijnland, een vis uit het Bodenmeer in Konstanz — allemaal verschillende landen op één bord.\n\nIn Berlijn at ik een week alleen maar dönerkebab en kwam terug met betere ideeën dan na vier dagen Michelin-restaurants.",
    },
  },
  {
    slug: "frankrijk",
    name: { en: "France", es: "Francia", nl: "Frankrijk" },
    country: { en: "France", es: "Francia", nl: "Frankrijk" },
    year: 2015,
    mapX: 49,
    mapY: 33,
    intro: {
      en: "Lyon, three weeks of stage. That's where I learned that butter is a verb.",
      es: "Lyon, tres semanas de stage. Allí aprendí que la mantequilla es un verbo.",
      nl: "Lyon, drie weken stage. Daar leerde ik dat boter een werkwoord is.",
    },
    body: {
      en: "I worked in a brigade that was half the size of a normal one and worked twice as hard. It was also where I learned what a clean plate looks like — nothing more on it than strictly necessary.\n\nAfter Lyon: Paris, Provence, a week in Bordeaux with a sommelier who served every glass like it was a confession. France teaches you, mostly, things you're not allowed to unlearn afterwards.",
      es: "Trabajé en una brigada que era la mitad de lo normal y que rendía el doble. Y allí también aprendí qué es un plato limpio — nada en él que no sea estrictamente necesario.\n\nDespués de Lyon: París, Provenza, una semana en Burdeos con un sumiller que servía cada copa como si fuera una confesión. Francia te enseña, sobre todo, cosas que ya no tienes permiso para desaprender.",
      nl: "Ik liep mee in een brigade die de helft was van wat een normale brigade is, en die werkte twee keer zo hard. Het was er ook bij dat ik leerde wat duidelijk plateren is — niets meer op het bord dan strikt nodig.\n\nNa Lyon: Parijs, Provence, een week in Bordeaux met een sommelier die elk glas serveerde alsof het een biecht was. Frankrijk leert je vooral dingen die je daarna niet meer mag verleren.",
    },
    pullQuote: {
      en: "A French kitchen is a kitchen where nobody rushes — unless it really matters.",
      es: "Una cocina francesa es una cocina donde nadie se apura — salvo cuando hace falta de verdad.",
      nl: "Een Franse keuken is een keuken waar niemand zich haast — behalve als het echt moet.",
    },
  },
  {
    slug: "zwitserland",
    name: { en: "Switzerland", es: "Suiza", nl: "Zwitserland" },
    country: { en: "Switzerland", es: "Suiza", nl: "Zwitserland" },
    year: 2016,
    mapX: 51,
    mapY: 33,
    intro: {
      en: "Mountains, harder cheeses than I was used to, and cooks with nothing to prove.",
      es: "Montañas, quesos más duros de lo que conocía y cocineros sin nada que demostrar.",
      nl: "Bergen, hardere kazen dan ik gewend was, en koks die niets te bewijzen hebben.",
    },
    body: {
      en: "A few days in Sion, a long afternoon in Lausanne, a night in a chalet somewhere above Verbier where the owner scraped raclette himself. No fancy restaurants needed — the mountain kitchen is good enough on its own.",
      es: "Unos días en Sion, una larga tarde en Lausana, una noche en un chalé por encima de Verbier donde el dueño raspaba la raclette en persona. No hacen falta restaurantes pretenciosos — la cocina de montaña ya basta.",
      nl: "Een paar dagen in Sion, een lange middag in Lausanne, een nacht in een chalet ergens boven Verbier waar de eigenaar zelf raclette schraapte. Geen sjieke restaurants nodig — de bergkeuken is goed genoeg.",
    },
  },
  {
    slug: "oostenrijk",
    name: { en: "Austria", es: "Austria", nl: "Oostenrijk" },
    country: { en: "Austria", es: "Austria", nl: "Oostenrijk" },
    year: 2016,
    mapX: 53,
    mapY: 33,
    intro: {
      en: "Vienna for the coffee houses, Salzburg for the silence, the Wachau for the Grüner Veltliner.",
      es: "Viena por los cafés, Salzburgo por el silencio, la Wachau por el Grüner Veltliner.",
      nl: "Wenen voor de koffiehuizen, Salzburg voor de stilte, de Wachau voor de Grüner Veltliner.",
    },
    body: {
      en: "Vienna is a city for people who like to sit a long time. A Sachertorte at Café Sperl, then the Naschmarkt, then a Beisl where the Tafelspitz still arrives the old way. Three meals, one walk.",
      es: "Viena es una ciudad para gente a la que le gusta quedarse sentada un buen rato. Una Sachertorte en el Café Sperl, luego el Naschmarkt, después un Beisl donde el Tafelspitz aún llega como antes. Tres comidas, un solo paseo.",
      nl: "Wenen is een stad voor mensen die graag lang zitten. Een Sachertorte bij het Café Sperl, daarna naar de Naschmarkt, daarna naar een Beisl waar de Tafelspitz nog op de oude manier wordt geserveerd. Drie maaltijden, één wandeling.",
    },
  },
  {
    slug: "tsjechie",
    name: { en: "Czech Republic", es: "Chequia", nl: "Tsjechië" },
    country: { en: "Czech Republic", es: "Chequia", nl: "Tsjechië" },
    year: 2018,
    mapX: 53.5,
    mapY: 30,
    intro: {
      en: "Prague on a grey November — dark beer, dark bread, dark afternoons.",
      es: "Praga un noviembre gris — cerveza oscura, pan oscuro, tardes oscuras.",
      nl: "Praag op een grijze november — donker bier, donker brood, donkere middagen.",
    },
    body: {
      en: "It's a kitchen that looks heavy and is — but in November it makes sense. Knedlíky, svíčková, a glass of pilsner that actually makes you thirsty instead of the opposite.\n\nI learned there that a real dark stock isn't just left to draw longer — you smoke it in a small wood oven somewhere along the way.",
      es: "Es una cocina que parece pesada y lo es — pero en noviembre tiene sentido. Knedlíky, svíčková, un vaso de pilsner que en lugar de quitar sed te da más.\n\nAllí aprendí que un caldo oscuro de verdad no solo se cuece más tiempo — se ahuma a medio camino, en un hornito de leña.",
      nl: "Het is een keuken die heel zwaar lijkt en het ook is, maar in november klopt het. Knedlíky, svíčková, een goed glas pilsner waar je werkelijk dorst van krijgt in plaats van het tegenovergestelde.\n\nIk leerde er dat een echte donkere bouillon niet alleen langer trekt — je rookt 'm in een houtoventje ergens halverwege.",
    },
  },
  {
    slug: "hongarije",
    name: { en: "Hungary", es: "Hungría", nl: "Hongarije" },
    country: { en: "Hungary", es: "Hungría", nl: "Hongarije" },
    year: 2019,
    mapX: 54.5,
    mapY: 33,
    intro: {
      en: "Budapest, paprika, a goulash that retranslated my idea of what a soup is.",
      es: "Budapest, pimentón, un goulash que me redefinió lo que es una sopa.",
      nl: "Budapest, paprika, een goulash die mijn idee van een soep opnieuw vertaalde.",
    },
    body: {
      en: "Real paprika comes from Kalocsa or Szeged — sweet, smoked, with a depth I've never come across in any supermarket tin. I still stop in when I'm passing.\n\nHungarian cooking is surprisingly tender for everything it carries. A halászlé in a csárda on the Danube, on a windy evening — I'd happily sit there more often.",
      es: "El verdadero pimentón viene de Kalocsa o Szeged — dulce, ahumado, con una profundidad que no he encontrado en ninguna lata de supermercado. Sigo pasándome cuando estoy cerca.\n\nLa cocina húngara es sorprendentemente suave para todo el sabor que lleva dentro. Un halászlé en una csárda a la orilla del Danubio, en una noche de viento — me sentaría ahí más a menudo.",
      nl: "De échte paprika komt uit Kalocsa of Szeged — zoet, gerookt, met een rangschikking die ik in geen enkel supermarktblik ben tegengekomen. Ik ga er nog steeds langs als ik in de buurt ben.\n\nHongaarse keuken is verrassend zacht voor wat er allemaal aan smaak in zit. Een halászlé in een csárda aan de Donau, op een avond dat het waait — daar zou ik vaker willen zitten.",
    },
  },
  {
    slug: "roemenie",
    name: { en: "Romania", es: "Rumanía", nl: "Roemenië" },
    country: { en: "Romania", es: "Rumanía", nl: "Roemenië" },
    year: 2020,
    mapX: 56.5,
    mapY: 33,
    intro: {
      en: "Transylvania in summer. Hills, hay, sheep, memories of cooking by open fire.",
      es: "Transilvania en verano. Colinas, heno, ovejas y recuerdos de cocinar al fuego abierto.",
      nl: "Transsylvanië in de zomer. Heuvels, hooi, schapen, herinneringen aan koken bij open vuur.",
    },
    body: {
      en: "We stayed a week in a village above Sibiu, slept in a guesthouse run by a family that made their own sausage. The ciorbă de burtă is an acquired-taste soup — you don't have to understand it to keep eating.\n\nI brought home a recipe for stuffed cabbage rolls that I still cook when I want comfort food that isn't pasta.",
      es: "Pasamos una semana en un pueblo sobre Sibiu, dormimos en una casa rural de una familia que hacía sus propias salchichas. La ciorbă de burtă es una sopa de gusto adquirido — no hace falta entenderla para seguir comiendo.\n\nMe traje una receta de hojas de col rellenas que sigo preparando cuando me apetece comfort food que no sea pasta.",
      nl: "We bleven een week in een dorp boven Sibiu, sliepen in een gîte van een familie die hun eigen worst maakte. De ciorbă de burtă is een gewenningssoep — je hoeft 'm niet te begrijpen om door te eten.\n\nIk nam een receptje voor gevulde koolrolletjes mee die ik hier nog steeds maak als ik comfortfood wil dat geen pasta is.",
    },
  },

  // ── British Isles ──────────────────────────────────────────────────
  {
    slug: "uk",
    name: { en: "United Kingdom", es: "Reino Unido", nl: "United Kingdom" },
    country: {
      en: "United Kingdom",
      es: "Reino Unido",
      nl: "Verenigd Koninkrijk",
    },
    year: 2014,
    mapX: 47.5,
    mapY: 25,
    intro: {
      en: "London at its best — Borough Market on a Saturday morning, a gastro pub in Bermondsey in the evening.",
      es: "Londres en su mejor versión — Borough Market un sábado por la mañana, un gastropub en Bermondsey por la noche.",
      nl: "Londen op zijn best — Borough Market op zaterdagochtend, een gastro pub in Bermondsey 's avonds.",
    },
    body: {
      en: "British food has had a reappraisal nobody saw coming and that we've underestimated. St. John, The Quality Chop House, Brawn — cooks who dare to keep it simple on a scale where that's no longer allowed.\n\nI also learned to eat nose-to-tail there in a way I'd only understood in theory. Lamb shoulder, kidneys, heart — throw nothing out, all of it tastes like something if you treat it with enough patience.",
      es: "La cocina británica ha vivido una reivindicación que nadie veía venir y que hemos subestimado. St. John, The Quality Chop House, Brawn — cocineros que se atreven a ser simples a una escala donde ya no está permitido.\n\nTambién aprendí allí a comer nose-to-tail de una manera que antes solo entendía en teoría. Paletilla de cordero, riñones, corazón — no tirar nada, todo sabe a algo si lo tratas con paciencia.",
      nl: "Brits eten heeft een herwaardering doorgemaakt die niemand zag aankomen en die we onderschat hebben. St. John, The Quality Chop House, Brawn — koks die durven simpel te doen op een schaal waar dat niet meer mag.\n\nIk leerde er ook nose-to-tail eten op een manier die ik daarvoor alleen theoretisch begreep. Lamsschouder, niertjes, hart — niets weggooien, alles smaakt naar iets als je het maar geduldig genoeg behandelt.",
    },
    pullQuote: {
      en: "A proper English pub kitchen is deceptively good when the chef knows what they want.",
      es: "Una cocina de pub inglés bien hecha es engañosamente buena cuando el chef tiene claro lo que quiere.",
      nl: "Een Engelse pub-keuken is verraderlijk goed als de chef weet wat 'ie wil.",
    },
  },
  {
    slug: "ierland",
    name: { en: "Ireland", es: "Irlanda", nl: "Ierland" },
    country: { en: "Ireland", es: "Irlanda", nl: "Ierland" },
    year: 2017,
    mapX: 45,
    mapY: 26,
    intro: {
      en: "West Ireland, a long walk along the Wild Atlantic Way and oysters you pulled out of the water yourself that same morning.",
      es: "El oeste de Irlanda, una larga caminata por la Wild Atlantic Way y ostras que sacas tú mismo del agua esa misma mañana.",
      nl: "West-Ierland, een lange wandeling langs de Wild Atlantic Way en oesters die je dezelfde ochtend zelf uit het water plukt.",
    },
    body: {
      en: "Ireland has the best butter in the world — that's not a patriotic line from me, it's just the truth. It's greener grass, fatter cows, a smell you taste in every pancake.\n\nWent out with a fishing crew in Galway and ate lamb stew afterwards in a pub with turf-smoke in the walls. A different country than I'd pictured.",
      es: "Irlanda tiene la mejor mantequilla del mundo — no es patriotismo mío, es la pura verdad. Hierba más verde, vacas más grasas, un olor que se nota en cualquier crepe.\n\nSalí al mar con unos pescadores en Galway y luego me comí un lamb stew en un pub con el humo de turba metido en las paredes. Un país muy distinto al que me había imaginado.",
      nl: "Ierland heeft de béste boter ter wereld — dat is geen patriottisch sentiment van mij, het is gewoon zo. Het is groener gras, vettere koeien, een geur die je in elke pannenkoek terugproeft.\n\nMet de jongens van een visserij in Galway op zee geweest en daarna lams-stew gegeten in een pub waar de turf-rook in de muren zat. Een ander land dan ik me had voorgesteld.",
    },
  },

  // ── Nordics ────────────────────────────────────────────────────────
  {
    slug: "denemarken",
    name: { en: "Denmark", es: "Dinamarca", nl: "Denemarken" },
    country: { en: "Denmark", es: "Dinamarca", nl: "Denemarken" },
    year: 2018,
    mapX: 52,
    mapY: 23,
    intro: {
      en: "Copenhagen — a week I didn't want to end.",
      es: "Copenhague — una semana que no quería que acabara.",
      nl: "Kopenhagen — een week dat ik niet meer wilde dat het ophield.",
    },
    body: {
      en: "I went mostly to see how a kitchen works that treats fermentation as a tool, not a trend. Was at Amass, an evening at Hart Bageri for the bread, then over to Refshaleøen for a late-night ice cream of brambles and sourdough.\n\nAlmost everything I smoke or quickly grill now goes back to something I first saw working properly in Copenhagen.",
      es: "Fui sobre todo a ver cómo funciona una cocina que trata la fermentación como herramienta, no como moda. Pasé por Amass, una noche en Hart Bageri por el pan, y luego al Refshaleøen para un helado nocturno de moras y masa madre.\n\nCasi todo lo que ahora ahumo o paso rápido por la brasa viene de algo que vi funcionar de verdad en Copenhague.",
      nl: "Ik ging vooral om te kijken hoe een keuken werkt die fermenteren niet als trend maar als gereedschap behandelt. Was bij Amass, een avond bij Hart Bageri voor het brood, daarna door naar Refshaleøen voor een nachtelijke ijsje van bramen en zuurdesem.\n\nHet hele bestaan van wat ik nu rook of kort grill, gaat terug op iets wat ik in Kopenhagen voor het eerst goed zag werken.",
    },
    pullQuote: {
      en: "In Copenhagen you understand that fermenting isn't scary — it's just taking your time.",
      es: "En Copenhague entiendes que fermentar no da miedo — es simplemente tomarse el tiempo.",
      nl: "In Kopenhagen begrijp je dat fermenteren niet eng is — het is gewoon tijd nemen.",
    },
  },
  {
    slug: "zweden",
    name: { en: "Sweden", es: "Suecia", nl: "Zweden" },
    country: { en: "Sweden", es: "Suecia", nl: "Zweden" },
    year: 2019,
    mapX: 53.5,
    mapY: 18,
    intro: {
      en: "Stockholm in summer, archipelago islands, an evening of squid and aquavit.",
      es: "Estocolmo en verano, islas del archipiélago, una noche de calamares y aquavit.",
      nl: "Stockholm in de zomer, archipel-eilanden, een avond met inktvis en aquavit.",
    },
    body: {
      en: "The Swedes took fika seriously and the rest of the Western world is still watching. But there's a tougher kitchen underneath: gravlax, surströmming if you dare, a good knäckebröd.\n\nIn the archipelago I ate on a terrace where the host had built his own smokehouse. That's where I learned cold-smoking the way it actually works.",
      es: "Los suecos se tomaron en serio el fika y el resto del mundo occidental aún mira de reojo. Pero por debajo hay una cocina más dura: gravlax, surströmming si te atreves, un buen knäckebröd.\n\nEn las islas del archipiélago comí en una terraza donde el anfitrión se había construido su propio ahumadero. Ahí aprendí a ahumar en frío como debe hacerse.",
      nl: "De Zweden hebben de fika serieus opgenomen en de hele Westerse wereld kijkt nog mee. Maar er zit ook een hardere keuken onder: gravlax, surströmming als je durft, een goede knäckebröd.\n\nIn de scheren-eilanden gegeten op een terras waar de host zijn eigen rookkast bouwde. Daar leerde ik koud roken zoals je het echt moet doen.",
    },
  },
  {
    slug: "noorwegen",
    name: { en: "Norway", es: "Noruega", nl: "Noorwegen" },
    country: { en: "Norway", es: "Noruega", nl: "Noorwegen" },
    year: 2017,
    mapX: 51.5,
    mapY: 17,
    intro: {
      en: "Lofoten, mid-winter, a table set on what feels like the edge of the sea.",
      es: "Lofoten, pleno invierno, una mesa puesta en lo que parece el borde del mar.",
      nl: "Lofoten, midwinter, een tafel die op stoort van de zee staat.",
    },
    body: {
      en: "That's where I learned what truly honest ingredients can do. A coley that was alive that morning, a good potato, a knob of butter, salt — it doesn't have to be more than that. The cold makes everything sharper, the flavour included.\n\nFound out I deal with colder climates better than I thought, and that a good sherry has the same edge as a good aquavit. Different ingredient, same idea.",
      es: "Ahí aprendí lo que pueden hacer los ingredientes verdaderamente honestos. Un abadejo que esa misma mañana aún estaba vivo, una buena patata, una nuez de mantequilla, sal — no hace falta más. El frío lo afila todo, también el sabor.\n\nDescubrí que aguanto el frío mejor de lo que pensaba, y que un buen jerez tiene el mismo filo que un buen aquavit. Otro ingrediente, la misma idea.",
      nl: "Daar leerde ik wat echt eerlijke ingrediënten kunnen doen. Een koolvis die 's ochtends nog leefde, een goede aardappel, een klompje boter, zout — meer hoeft het niet te zijn. Door de kou wordt alles helderder, ook de smaak.\n\nIk kwam erachter dat ik koudere klimaten beter aankan dan ik dacht, en dat een goede sherry diezelfde scherpte heeft als een goede aquavit. Andere ingrediënt, hetzelfde idee.",
    },
  },
  {
    slug: "finland",
    name: { en: "Finland", es: "Finlandia", nl: "Finland" },
    country: { en: "Finland", es: "Finlandia", nl: "Finland" },
    year: 2021,
    mapX: 56,
    mapY: 17,
    intro: {
      en: "Helsinki briefly, then a cabin by a lake in Lapland — four days of sauna, dark bread and duck.",
      es: "Helsinki de paso, luego una cabaña junto a un lago en Laponia — cuatro días de sauna, pan negro y pato.",
      nl: "Helsinki kort, daarna een hut bij een meer in Lapland — vier dagen sauna, donker brood en eend.",
    },
    body: {
      en: "Finns cook differently from the Scandinavian image people have. Wilder, with more game, more mushrooms you fetch out of the forest yourself. A tar ice cream (really) at the Helsinki market that tasted like resin — better than it sounds.\n\nI still bring back black peppercorn root, and once a year I make a pulla that almost gets close to the real thing.",
      es: "Los finlandeses cocinan distinto a la imagen escandinava que la gente tiene. Más salvaje, con más caza, con más setas que vas a buscar tú mismo al bosque. Un helado de alquitrán (de verdad) en el mercado de Helsinki que sabía a resina — mejor de lo que suena.\n\nSigo trayéndome raíz de pimienta negra, y una vez al año hago una pulla que casi le hace justicia al original.",
      nl: "De Finnen koken anders dan de Scandinaviërs zoals iedereen ze beeldt. Wilder, met meer wild, met meer paddenstoelen die je zelf uit het bos haalt. Een tar-ijsje (jawel) op de markt van Helsinki dat naar harssen smaakte — beter dan het klinkt.\n\nIk neem er nog steeds zwarte peperwortel uit mee, en eens per jaar maak ik een pulla die het bijna haalt bij de echte.",
    },
  },

  // ── Iberia ─────────────────────────────────────────────────────────
  {
    slug: "spanje",
    name: { en: "Spain", es: "España", nl: "Spanje" },
    country: { en: "Spain", es: "España", nl: "Spanje" },
    year: 2023,
    mapX: 47,
    mapY: 39,
    intro: {
      en: "My new home. San Sebastián for technique, Andalucía for soul, the Costa del Sol for the daily shopping.",
      es: "Mi nueva casa. San Sebastián por la técnica, Andalucía por el alma, la Costa del Sol por el día a día.",
      nl: "Mijn nieuwe thuis. San Sebastián voor de techniek, Andalusië voor de ziel, de Costa del Sol voor de dagelijkse boodschappen.",
    },
    body: {
      en: "I cook in this kitchen every day now and I still learn something new every week. Olives from Jaén, tomatoes from Almería, the tuna from Cádiz that you watch travel from boat to market to plate in a single morning. Pintxos in Donostia where you learn that one bite ought to be enough to leave a memory.\n\nIt sometimes feels as if I'd always cooked here. That's probably the highest possible form of a match between a place and a craft.",
      es: "Cocino en esta cocina todos los días y aún aprendo algo nuevo cada semana. Las aceitunas de Jaén, los tomates de Almería, el atún de Cádiz que ves pasar del barco al mercado al plato en una sola mañana. Los pintxos en Donosti, donde aprendes que un solo bocado debería bastar para dejar un recuerdo.\n\nA veces parece que siempre cociné aquí. Probablemente sea la forma más alta posible de un encaje entre un sitio y un oficio.",
      nl: "Ik kook nu elke dag in deze keuken en ik leer nog elke week iets nieuws. De olijven uit Jaén, de tomaten uit Almería, de tonijn uit Cádiz die je in een korte ochtend van boot naar markt naar bord ziet komen. Pintxos in Donostia waar je leert dat één hap genoeg moet zijn om je iets te laten herinneren.\n\nHet voelt soms alsof ik hier altijd al kookte. Dat is denk ik de hoogst mogelijke vorm van een goed match tussen plek en vak.",
    },
    pullQuote: {
      en: "Spain isn't a holiday any more — it's what I taste before I think.",
      es: "España ya no es vacaciones — es lo que pruebo antes de pensar.",
      nl: "Spanje is geen vakantie meer — het is wat ik proef voor ik nadenk.",
    },
  },
  {
    slug: "portugal",
    name: { en: "Portugal", es: "Portugal", nl: "Portugal" },
    country: { en: "Portugal", es: "Portugal", nl: "Portugal" },
    year: 2022,
    mapX: 45.5,
    mapY: 40,
    intro: {
      en: "Lisbon, Porto, then down the east coast to a village where bacalhau was served five ways in five days.",
      es: "Lisboa, Oporto, y luego costa este abajo hasta un pueblo donde sirvieron bacalao de cinco maneras en cinco días.",
      nl: "Lissabon, Porto, daarna langs de oostkust naar een dorpje waar bacalhau geserieerd werd op vijf manieren in vijf dagen.",
    },
    body: {
      en: "Portugal is a kitchen of deep simplicity and I'll go to bat for it. Sardines on bread, a good caldo verde, a glass of vinho verde so light you almost forget it. And the pastéis, of course — I've made a few serious attempts and never quite hit the real thing.\n\nThe Atlantic coast is also rougher than I expected. A day on the Alentejo coast ended with grilled squid on the beach at sunset. No menu, no booking, my fingers still smelling of the sea.",
      es: "Portugal es una cocina de sencillez profunda y la defiendo a capa y espada. Sardinas sobre pan, un buen caldo verde, una copa de vinho verde tan ligera que casi se te olvida. Y los pastéis, claro — he hecho intentos serios y nunca he llegado al de verdad.\n\nLa costa atlántica también es más bravía de lo que pensaba. Un día en la costa alentejana acabó con calamares a la brasa en la playa al atardecer. Sin menú, sin reserva, los dedos aún con olor a mar.",
      nl: "Portugal is een keuken van diepe simpelheid en die hou ik vol. Sardines op brood, een goede caldo verde, een glas vinho verde dat zo licht is dat je 'm bijna vergeet. En de pastéis natuurlijk — ik heb er zelf een paar serieuze pogingen op gedaan en nooit de échte gehaald.\n\nDe Atlantische kust is ook ruwer dan ik dacht. Een dag op de Alentejo-kust eindigde met geroosterde inktvis op het strand bij zonsondergang. Geen menu, geen reservering, mijn vingers nog naar zee.",
    },
  },

  // ── Mediterranean ──────────────────────────────────────────────────
  {
    slug: "italie",
    name: { en: "Italy", es: "Italia", nl: "Italië" },
    country: { en: "Italy", es: "Italia", nl: "Italië" },
    year: 2015,
    mapX: 52,
    mapY: 39,
    intro: {
      en: "Rome first, then a summer in a village above Bologna where I learned to make pasta every morning.",
      es: "Primero Roma, luego un verano en un pueblo sobre Bolonia donde aprendía a hacer pasta cada mañana.",
      nl: "Eerst Rome, daarna een zomer in een dorpje boven Bologna waar ik elke ochtend pasta leerde maken.",
    },
    body: {
      en: "The nonna who tolerated me in her kitchen for four weeks spoke a dialect I couldn't follow and cooked with a precision I'd never seen before. No scale, no clock, all by feel — and always spot-on. A tagliatelle al ragù I still don't even try to imitate.\n\nItaly taught me two things: that fresh pasta is its own craft, separate from cooking, and that a good tomato in July is everything.",
      es: "La nonna que me aguantó cuatro semanas en su cocina hablaba un dialecto que no entendía y cocinaba con una precisión que no había visto nunca. Sin balanza, sin reloj, todo a ojo — y siempre clavado. Una tagliatelle al ragù que ni siquiera intento imitar.\n\nItalia me enseñó dos cosas: que la pasta fresca es otro oficio, aparte de la cocina, y que un buen tomate en julio lo es todo.",
      nl: "De nonna die mij vier weken in haar keuken duldde, sprak een dialect dat ik niet verstond en kookte met een precisie die ik nooit eerder had gezien. Geen weegschaal, geen klok, alles op gevoel — en altijd raak. Een tagliatelle al ragù die ik nog niet eens probeer te imiteren.\n\nItalië heeft me twee dingen geleerd: dat verse pasta een ander vak is dan koken, en dat een goede tomaat in juli alles is.",
    },
    pullQuote: {
      en: "In Italy you never need to add anything — only take something away.",
      es: "En Italia nunca hay que añadir nada — sólo quitar algo.",
      nl: "In Italië hoef je nooit iets toe te voegen — alleen iets weg te laten.",
    },
  },
  {
    slug: "vaticaan",
    name: { en: "Vatican City", es: "Ciudad del Vaticano", nl: "Vaticaanstad" },
    country: { en: "Vatican", es: "Vaticano", nl: "Vaticaan" },
    year: 2015,
    mapX: 52.5,
    mapY: 39.6,
    intro: {
      en: "One morning, no more. A tick on the list, a coffee nearby, then on to Trastevere for lunch.",
      es: "Una mañana, no más. Tachado de la lista, café cerca, y de paseo a Trastevere para el almuerzo.",
      nl: "Een ochtend, niet meer. Vinkje op de lijst, koffie in de buurt, daarna door naar Trastevere voor lunch.",
    },
    body: {
      en: "Not much to say about the kitchen here — plenty to say about the walk around it. The real place for pasta is a few streets away.",
      es: "Poco que decir de la cocina de aquí — mucho del paseo alrededor. El sitio bueno de pasta está unas calles más allá.",
      nl: "Niet veel te zeggen over de keuken hier — wel veel over de wandeling eromheen. De échte plek voor pasta zit een paar straten verder.",
    },
  },
  {
    slug: "griekenland",
    name: { en: "Greece", es: "Grecia", nl: "Griekenland" },
    country: { en: "Greece", es: "Grecia", nl: "Griekenland" },
    year: 2019,
    mapX: 55.5,
    mapY: 41,
    intro: {
      en: "A summer on a small island in the Cyclades where the table didn't get going until half past ten at night.",
      es: "Un verano en una isla pequeña de las Cícladas donde la mesa no arrancaba hasta las diez y media de la noche.",
      nl: "Een zomer op een klein eiland in de Cycladen waar de tafel pas om half elf 's avonds aanging.",
    },
    body: {
      en: "A Greek kitchen can't be copied — it belongs to that light, that heat, those olive trees. But you can take with you what they do well: one main ingredient per dish, the rest there to make that one shine.\n\nThe tavernas, a tomato salad that looks like nothing and is everything, an octopus left so long in the sun before going on the grill that it becomes a ritual. There was plenty to learn.",
      es: "La cocina griega no se copia — pertenece a esa luz, ese calor, esos olivos. Pero sí te puedes llevar lo que hacen bien: un ingrediente principal por plato y el resto para que ése brille.\n\nLas tabernas, una ensalada de tomate que parece nada y lo es todo, un pulpo que cuelga al sol tanto rato antes de pasar por la brasa que se convierte en un rito. Había mucho que aprender.",
      nl: "Een Griekse keuken kun je niet kopiëren — die hoort bij dat licht, die hitte, die olijfbomen. Maar je kunt wel meenemen wat ze er goed doen: één hoofdingrediënt per gerecht en de rest erbij om die ene tot zijn recht te laten komen.\n\nDe taverna's, een tomatensalade die op niets lijkt en alles is, een octopus die zo lang in de zon hangt voor 'ie de grill op gaat dat het ritueel wordt. Daar mocht ik wat van leren.",
    },
  },
  {
    slug: "turkije",
    name: { en: "Turkey", es: "Turquía", nl: "Turkije" },
    country: { en: "Turkey", es: "Turquía", nl: "Turkije" },
    year: 2018,
    mapX: 58,
    mapY: 42,
    intro: {
      en: "Istanbul — spice market, simit on the street, a kebab parlour with a host who still remembered the eighties.",
      es: "Estambul — mercado de especias, simit por la calle, un kebab cuyo dueño aún recordaba los ochenta.",
      nl: "Istanbul — kruidenmarkt, simit op straat, kebabsalon waar de host nog wist hoe het in de jaren tachtig was.",
    },
    body: {
      en: "I was there a week and the feeling was that I needed four. The bridge between Europe and Asia in every bite — and the way they handle spice changed my mind about what a good marinade is.\n\nI regularly slip pieces of Istanbul into a dish: a pinch of sumac on a tomato, ras el hanout instead of plain pepper, pomegranate molasses on a grilled aubergine.",
      es: "Estuve una semana y sentí que necesitaba cuatro. El puente entre Europa y Asia en cada bocado — y la manera en que manejan las especias me cambió la idea de lo que es una buena marinada.\n\nMeto trocitos de Estambul en muchos platos: una pizca de sumac sobre un tomate, ras el hanout en vez de pimienta, melaza de granada sobre una berenjena a la brasa.",
      nl: "Ik was er een week en heb het idee dat ik er vier waar van had moeten zijn. De brug tussen Europa en Azië in elke hap — en de manier waarop ze met kruiden omgaan veranderde mijn gedachten over wat een goede marinade is.\n\nIk neem regelmatig stukjes Istanbul mee in een gerecht: een snufje sumak op een tomaat, ras el hanout in plaats van gewone peper, granaatappelsiroop op een gegrilde aubergine.",
    },
  },

  // ── Africa ─────────────────────────────────────────────────────────
  {
    slug: "marokko",
    name: { en: "Morocco", es: "Marruecos", nl: "Marokko" },
    country: { en: "Morocco", es: "Marruecos", nl: "Marokko" },
    year: 2023,
    mapX: 47,
    mapY: 47,
    intro: {
      en: "Marrakech in May. The souk, the smells, the speed at which you learn to tell a real tagine from a tourist tagine.",
      es: "Marrakech en mayo. El zoco, los olores, la rapidez con la que aprendes a distinguir un tagine de verdad de uno turístico.",
      nl: "Marrakech in mei. De souk, de geuren, de manier waarop je heel snel leert wat een goede tagine van een toeristen-tagine onderscheidt.",
    },
    body: {
      en: "A road trip through the Atlas with a three-day stop in Fes, where I ate in a riad that stayed with me longer than most starred visits in Europe. Slow-cooking on coals, a mestiyya, bread baked in a communal oven.\n\nI came back with a spice mix. Since Morocco there's always a jar of ras el hanout in my kitchen with the balance set by hand — saffron, ginger, cinnamon, roasted pepper.",
      es: "Una ruta por el Atlas con tres días en Fez, donde comí en un riad que se me ha quedado más tiempo que la mayoría de visitas con estrella en Europa. Cocción lenta sobre brasas, una mestiyya, pan horneado en un horno comunal.\n\nVolví con una mezcla de especias. Desde Marruecos siempre hay un bote de ras el hanout en mi cocina con el equilibrio puesto a mano — azafrán, jengibre, canela, pimiento tostado.",
      nl: "Een rondreis door de Atlas met een driedaagse stop in Fes, waar ik in een riad gegeten heb dat me langer is bijgebleven dan de meeste sterren-bezoeken in Europa. Slow-cooking op kolen, een mestiyya, brood dat gebakken wordt in een gemeenschappelijke oven.\n\nMet kruidenmix kwam ik thuis terug. Sinds Marokko zit er in mijn keuken altijd een potje ras el hanout waar ik zelf de balans van heb gemaakt — saffraan, gember, kaneel, geroosterde peper.",
    },
    pullQuote: {
      en: "A tagine isn't a pan. It's a philosophy of how long you leave something alone.",
      es: "Un tagine no es una cazuela. Es una filosofía sobre cuánto tiempo dejas algo en paz.",
      nl: "Een tagine is geen pan. Het is een filosofie over hoe lang je iets met rust laat.",
    },
  },
  {
    slug: "senegal",
    name: { en: "Senegal", es: "Senegal", nl: "Senegal" },
    country: { en: "Senegal", es: "Senegal", nl: "Senegal" },
    year: 2024,
    mapX: 45,
    mapY: 65,
    intro: {
      en: "Dakar, a week, then up the coast to Saint-Louis. West Africa is closer than we think and completely different to what we imagine.",
      es: "Dakar, una semana, y luego por la costa hasta Saint-Louis. África Occidental está más cerca de lo que pensamos y es completamente distinta de lo que imaginamos.",
      nl: "Dakar, een week, daarna langs de kust naar Saint-Louis. West-Afrika is dichterbij dan we denken en compleet anders dan we ons voorstellen.",
    },
    body: {
      en: "Thiéboudienne, the national dish, is the single best fish-and-rice kitchen in the world if it's done properly — and in Senegal you can eat it in ten places in a day without tasting the same thing twice. A reddish rice, candied tomato, fish stuffed with its own spice paste.\n\nThe fish market at Soumbedioune in the early morning was the most impressive market I've ever seen. I stood there for four hours.",
      es: "El thiéboudienne, plato nacional, es la mejor cocina de pescado y arroz del mundo cuando se hace bien — y en Senegal puedes comerlo en diez sitios en un día sin probar dos veces lo mismo. Un arroz rojizo, tomate confitado, pescado relleno con su propia pasta de especias.\n\nLa lonja de Soumbedioune al amanecer fue el mercado más impresionante que he visto. Me quedé cuatro horas allí.",
      nl: "Thiéboudienne, het nationale gerecht, is de allerbeste vis-en-rijst-keuken ter wereld als 'ie goed gemaakt wordt — en in Senegal kun je 'm op tien plekken op een dag eten zonder dat je twee keer hetzelfde proeft. Roodachtige rijst, geconfijte tomaat, vis die met een eigen kruidenpasta gevuld is.\n\nDe vismarkt in Soumbedioune in de vroege ochtend was de meest indrukwekkende markt die ik ooit zag. Vier uur lang stond ik daar.",
    },
  },
  {
    slug: "gambia",
    name: { en: "The Gambia", es: "Gambia", nl: "The Gambia" },
    country: { en: "Gambia", es: "Gambia", nl: "Gambia" },
    year: 2024,
    mapX: 44.5,
    mapY: 67,
    intro: {
      en: "Three days along the Gambia river — smaller than Senegal, different kitchen, same warmth.",
      es: "Tres días a lo largo del río Gambia — más pequeño que Senegal, otra cocina, el mismo calor.",
      nl: "Drie dagen langs de Gambia-rivier — kleiner dan Senegal, andere keuken, dezelfde warmte.",
    },
    body: {
      en: "Fish out of the river instead of the sea, sharper chillies, a peanut sauce I still haven't fully figured out. Domoda, benachin — names for my notebook, dishes for later.",
      es: "Pescado de río en lugar de mar, guindillas más afiladas, una salsa de cacahuete que aún no acabo de pillar. Domoda, benachin — nombres para el cuaderno, platos para luego.",
      nl: "Vis uit de rivier in plaats van uit zee, scherpere pepers, een pinda-saus die ik nog niet helemaal door heb. Domoda, benachin — namen om in mijn schriftje bij te houden voor latere gerechten.",
    },
  },

  // ── Far afield ─────────────────────────────────────────────────────
  {
    slug: "verenigde-staten",
    name: { en: "United States", es: "Estados Unidos", nl: "Verenigde Staten" },
    country: { en: "USA", es: "EE.UU.", nl: "USA" },
    year: 2016,
    mapX: 19,
    mapY: 36,
    intro: {
      en: "New York and Brooklyn, a few weeks of eating as if it was my job — which it also was.",
      es: "Nueva York y Brooklyn, unas semanas comiendo como si fuera mi trabajo — que también lo era.",
      nl: "New York en Brooklyn, een paar weken eten alsof het mijn werk was — wat het ook was.",
    },
    body: {
      en: "American 'farm-to-table' was at its peak then and I worked in a kitchen in Bushwick where every supplier got named on the menu. Good product, complicated sauces, a pace I didn't have the shoes for.\n\nWhat I took home above all: how to run a service team without aggression. A lot of American kitchens have been working with a different tone for longer than most European ones, and I'm trying to carry that through here.",
      es: "El 'farm-to-table' americano estaba en su mejor momento y trabajé en una cocina de Bushwick donde cada proveedor aparecía con nombre en la carta. Buen producto, salsas complicadas, un ritmo para el que yo no tenía zapatos.\n\nLo que me llevé sobre todo: cómo dirigir un servicio sin agresividad. Muchas cocinas americanas llevan más tiempo trabajando con otro tono que muchas europeas, y aquí intento mantenerlo.",
      nl: "Het Amerikaanse 'farm-to-table' was destijds op haar hoogtepunt en ik liep mee in een keuken in Bushwick waar elke leverancier op naam genoemd werd. Goed product, ingewikkelde sauzen, een tempo waar ik geen schoenen voor had.\n\nWat ik vooral meenam: hoe je een serviceploeg leidt zonder agressie. Veel Amerikaanse keukens werken al langer met een ander toon dan veel Europese, en ik probeer dat hier door te trekken.",
    },
  },
  {
    slug: "japan",
    name: { en: "Japan", es: "Japón", nl: "Japan" },
    country: { en: "Japan", es: "Japón", nl: "Japan" },
    year: 2022,
    mapX: 86,
    mapY: 40,
    intro: {
      en: "Tokyo and Kyoto, two and a half weeks, and the feeling that I should have started ten years earlier.",
      es: "Tokio y Kioto, dos semanas y media, y la sensación de haber empezado diez años tarde.",
      nl: "Tokyo en Kyoto, twee en een halve week, en het gevoel dat ik tien jaar terug had moeten beginnen.",
    },
    body: {
      en: "Japan changed more about how I cook than any European country did. Not just the knife — the awareness around the knife. Not just the ingredients — the idea that an ingredient is important enough to do nothing more to it.\n\nOne evening I ate a thirteen-course kaiseki where every course told me something about season, place and technique. Since then I've been trying to plate smaller — less per portion, more meaning per bite.",
      es: "Japón cambió más sobre mi forma de cocinar que cualquier país europeo. No sólo el cuchillo — la conciencia alrededor del cuchillo. No sólo los ingredientes — la idea de que un ingrediente es lo bastante importante como para no hacerle nada más.\n\nUna noche comí un kaiseki de trece pases donde cada pase me decía algo sobre estación, lugar y técnica. Desde entonces intento emplatar más pequeño — menos por porción, más sentido por bocado.",
      nl: "Japan veranderde meer aan hoe ik kook dan welk Europees land ook. Niet alleen het mes, ook het mes-besef. Niet alleen de ingrediënten, ook het idee dat een ingrediënt belangrijk genoeg is om verder niets te doen.\n\nIk at een avond een kaiseki van dertien gangen waar elke gang me iets vertelde over seizoen, plaats en techniek. Sindsdien probeer ik kleinere borden te maken — minder per portie, meer betekenis per hap.",
    },
    pullQuote: {
      en: "In Japan you understand that 'enough' is the highest aim — not 'plenty'.",
      es: "En Japón entiendes que 'lo justo' es el objetivo más alto — no 'mucho'.",
      nl: "In Japan begrijp je dat 'genoeg' het hoogste doel is — niet 'genoeg geweest'.",
    },
  },
];
