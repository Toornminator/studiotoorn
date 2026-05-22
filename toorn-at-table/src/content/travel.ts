import type { LocalisedTravelLocation } from "@/lib/types";

/**
 * Travel blogs. 27 visited countries, voiced by Nick himself via the
 * Reisverhalen vragenlijst (May 2026). Every translatable field is an
 * `{ en, es, nl }` trio; the country slug, year and map coordinates
 * stay single-shape.
 *
 * Coordinates are percentages of the 1400×640 atlas viewBox (top-left
 * anchored). `mapX` 0 = far west, 100 = far east; `mapY` 0 = north pole,
 * 100 = antarctic.
 *
 * Voice: Bourdain raw-edge, direct, em-dashes welcome. Honest about the
 * ugly moments. Food is the spine of every entry. Spanish skews
 * Andalusian; English stays intimate for the Marbella ear.
 */
export const travelLocations: LocalisedTravelLocation[] = [
  // ── Home + Western Europe ──────────────────────────────────────────
  {
    slug: "nederland",
    name: { en: "Netherlands", es: "Países Bajos", nl: "Nederland" },
    country: { en: "Netherlands", es: "Países Bajos", nl: "Nederland" },
    year: 1990,
    mapX: 50,
    mapY: 28,
    intro: {
      en: "All the first times passed through here. First job, first party, first hangover.",
      es: "Por aquí pasaron todas las primeras veces. Primer trabajo, primera fiesta, primera resaca.",
      nl: "Hier kwamen alle eerste keren langs. Eerste baan, eerste feest, eerste kater.",
    },
    body: {
      en: "Born in Zwolle, raised across borders, schooling in Groningen. But the real work. Figuring out who you are by getting it wrong. Happened here. First job, first bottle, first time dancing till the light came back.\n\nThe eierbal. You don't get past it. After a night out on the Poelestraat, before going home, one more stop at the FEBO on the corner. Eierbal, thick filthy dollop of mayo on top. Same FEBO still standing. Every time I'm back in Groningen I have to have one, otherwise I wasn't really there.\n\nOne blue Monday I worked a catering gig at the Kurhaus in Scheveningen. Twenty-two years old. The party was so dull I thought: let me have a few drinks with the guests. The manager came over and fired me on the spot. That's where I learned someone else's party is never your party.",
      es: "Nací en Zwolle, crecí cruzando fronteras, me formé en Groningen. Pero el trabajo de verdad. Descubrir quién eres equivocándote. Pasó aquí. Primer trabajo, primera botella, primera vez bailando hasta que volvió la luz.\n\nEl eierbal. No te lo saltas. Después de una noche en la Poelestraat, antes de ir a casa, una parada más en el FEBO de la esquina. Eierbal, un pegote sucio y graso de mayonesa por encima. El mismo FEBO sigue ahí. Cuando vuelvo a Groningen tengo que comerme uno, si no, no he estado allí de verdad.\n\nUn lunes azul curré un catering en el Kurhaus de Scheveningen. Veintidós años. La fiesta era tan aburrida que pensé: me bebo unas copas con los invitados. El manager se acercó y me echó en el acto. Ahí aprendí que la fiesta de otro nunca es tu fiesta.",
      nl: "Geboren in Zwolle, opgegroeid over de grenzen, opleiding in Groningen. Maar het echte werk. Leren wie je bent door fouten te maken. Gebeurde hier. Eerste baan, eerste fles, eerste keer dansen tot het licht weer aanging.\n\nDe eierbal. Daar kun je niet omheen. Na een avond stappen in de Poelestraat, voordat je naar huis ging, eerst nog naar de FEBO op het hoekje. Eierbal, dikke vieze vette klodder mayo erbovenop. Daar staat hij nog steeds, dezelfde FEBO. En als ik in Groningen ben moet ik 'm hebben, anders heb ik er niet echt gestaan.\n\nEen blauwe maandag werkte ik catering in het Kurhaus op Scheveningen. Tweeëntwintig jaar oud. Het feest was zo saai dat ik dacht: ik drink even een paar borrels mee. De manager kwam langs en ontsloeg me ter plekke. Toen geleerd dat het op een feest van iemand anders niet jouw feest is.",
    },
    pullQuote: {
      en: "Making mistakes is fine. As long as you learn from them.",
      es: "Cometer errores está bien. Siempre que aprendas algo.",
      nl: "Fouten maken mag. Als je er maar wel van leert.",
    },
  },
  {
    slug: "belgie",
    name: { en: "Belgium", es: "Bélgica", nl: "België" },
    country: { en: "Belgium", es: "Bélgica", nl: "België" },
    year: 1998,
    mapX: 49.5,
    mapY: 30,
    intro: {
      en: "Primary school happened here. Eight to twelve years old, a stretch when I didn't have many friends. But those supermarkets, those I had.",
      es: "Aquí estaba mi colegio. De los ocho a los doce años, una época en la que no tenía muchos amigos. Pero los supermercados, sí los tenía.",
      nl: "Mijn basisschool stond hier. Acht tot twaalf jaar, een tijd dat ik niet zoveel vrienden had. Maar wel die supermarkten.",
    },
    body: {
      en: "Eight years old when I landed in Belgium. Four years of primary school, four years through a stretch I couldn't quite call mine. Few friends, different dialect, different snacks.\n\nWhat stuck is a patatje andalouse. Every Saturday I'd grab one. Thick fries, orange sauce, a paper tray that gave out faster than I could eat. My favourite, still. Whether I'm in Marbella or stranded in a freezing tram in Maastricht, a patatje andalouse takes me back to that one Belgian town.\n\nBut the supermarkets were the real find. Already in the late nineties they were nothing like the Dutch ones. Different chocolate wrappers, different beer bottles, different biscuits. I'd wander for hours between the shelves. That was the first lesson: food and culture are the same story, just labelled differently.",
      es: "Tenía ocho años cuando aterricé en Bélgica. Cuatro años de primaria, cuatro años en una etapa que no acabé de sentir mía. Pocos amigos, otro dialecto, otros snacks.\n\nLo que se quedó es el patatje andalouse. Todos los sábados me pedía uno. Patatas gordas, salsa naranja, una bandejita de papel que cedía antes de que pudiera terminar. Mi favorito, hasta hoy. Esté en Marbella o atascado en un tranvía helado en Maastricht, un patatje andalouse me devuelve a ese pueblo belga.\n\nPero lo mejor eran los supermercados. Ya a finales de los noventa no se parecían en nada a los holandeses. Otros envoltorios de chocolate, otras botellas de cerveza, otras galletas. Podía pasarme horas vagando entre las estanterías. Esa fue la primera lección: la comida y la cultura son la misma historia, con etiquetas distintas.",
      nl: "Acht jaar oud kwam ik in België terecht. Vier jaar lang naar de basisschool, vier jaar lang door een tijd die ik niet de mijne kon noemen. Weinig vriendjes, ander dialect, andere snacks.\n\nWat bleef is een patatje andalouse. Elke zaterdag haalde ik 'm. Dikke frieten, oranje saus, een papieren bakje dat sneller doorzakte dan ik kon eten. Mijn favoriet, nog steeds. Of het nu in Marbella is of in een vriestram in Maastricht, een patatje andalouse haalt me terug naar dat ene Belgische dorp.\n\nMaar het mooist vond ik de supermarkten. Die waren eind jaren negentig al zo anders dan die in Nederland. Andere chocoladewikkels, andere bierflessen, andere koekjes. Ik kon uren tussen die schappen rondzwerven. Het was mijn eerste les: eten en cultuur zijn hetzelfde verhaal, alleen met andere etiketten.",
    },
    pullQuote: {
      en: "A patatje andalouse isn't a snack. It's a memory card.",
      es: "Un patatje andalouse no es un snack. Es una tarjeta de memoria.",
      nl: "Een patatje andalouse is geen snack. Het is een geheugenkaart.",
    },
    polaroids: [
      {
        src: "/images/polaroids/antwerpen.jpeg",
        alt: { en: "Dinner at Ultimatum Foodbar, Antwerp", es: "Cena en Ultimatum Foodbar, Amberes", nl: "Diner bij Ultimatum Foodbar, Antwerpen" },
        caption: { en: "Ultimatum Foodbar", es: "Ultimatum Foodbar", nl: "Ultimatum Foodbar" },
      },
      {
        src: "/images/polaroids/belgie-antwerpen.jpeg",
        alt: { en: "Grote Markt, Antwerp, with flags", es: "Grote Markt, Amberes, con banderas", nl: "Grote Markt, Antwerpen, met vlaggen" },
        caption: { en: "Grote Markt", es: "Grote Markt", nl: "Grote Markt" },
      },
    ],
  },
  {
    slug: "luxemburg",
    name: { en: "Luxembourg", es: "Luxemburgo", nl: "Luxemburg" },
    country: { en: "Luxembourg", es: "Luxemburgo", nl: "Luxemburg" },
    year: 2009,
    mapX: 50.2,
    mapY: 31,
    intro: {
      en: "First weekend away with a girlfriend. A blue Fiat Panda, a castle in a forest, a handful of locals who never knew they'd been the whole story.",
      es: "Primer fin de semana fuera con una novia. Un Fiat Panda azul, un castillo en un bosque, un puñado de locales que nunca supieron que eran toda la historia.",
      nl: "Eerste weekendje weg met een vriendinnetje. Een blauwe Fiat Panda, een kasteel in een bos, een aantal locals die nooit wisten dat ze hun rol speelden.",
    },
    body: {
      en: "Two young people, a Fiat Panda Young. That square blue tin can. And a vague plan to drive to a castle somewhere in a Luxembourg forest. No GPS yet, or none we trusted. We got lost inside an hour.\n\nWound up in a tiny village. One street, one bar, a handful of people who didn't know us but let us in like we were a friend's friend. We drank too much. Luxembourg pilsners, then something stronger I never caught the name of. The bar owner eventually drew the route on a beer mat.\n\nThe castle? One minute's drive. One minute. If we hadn't done our stupid getting-lost we'd have missed the village. And an evening with people we didn't know before and never saw again. But who for one night were the whole world.",
      es: "Dos jóvenes, un Fiat Panda Young. Esa lata cuadrada y azul. Y un plan vago para llegar a un castillo en algún bosque luxemburgués. No teníamos GPS, o no uno fiable. Nos perdimos en menos de una hora.\n\nAcabamos en un pueblo diminuto. Una sola calle, un solo bar, un grupo de gente que no nos conocía pero nos dejó entrar como si fuéramos amigos de algún amigo. Bebimos demasiado. Pilsners luxemburguesas, luego algo más fuerte cuyo nombre nunca pillé. El dueño del bar acabó dibujando la ruta en un posavasos.\n\n¿El castillo? A un minuto en coche. Un minuto. Si no nos hubiéramos perdido habríamos saltado el pueblo entero. Y una noche con gente a la que no conocíamos antes y a la que no volvimos a ver. Pero que esa noche fueron todo nuestro mundo.",
      nl: "Twee jonge mensen, een Fiat Panda Young. Die vierkante koekblik, blauw. En een vaag plan om naar een kasteel in een Luxemburgs bos te rijden. Geen GPS toen, of niet die we vertrouwden. Wij verdwaalden binnen het uur.\n\nBeland in een klein dorpje. Eén straat, één café, een handvol mensen die ons niet kenden maar ons binnenlieten alsof we vrienden van een vriend waren. We dronken te veel. Luxemburgse pilsjes, daarna iets sterkers waarvan ik de naam nooit heb onthouden. De eigenaar van het café tekende ons uiteindelijk de route uit op een bierviltje.\n\nHet kasteel? Eén minuut rijden. Eén minuut. Als wij geen domme verdwaalden hadden we het hele dorp gemist. En een hele avond met mensen die we toen niet kenden en daarna ook niet meer hebben gezien. Maar die voor één avond onze hele wereld waren.",
    },
    pullQuote: {
      en: "Don't let anything stop you from diving in with locals.",
      es: "Que nada te impida lanzarte al fondo con la gente del lugar.",
      nl: "Laat niets je in de weg staan om in het diepe te duiken met locals.",
    },
  },
  {
    slug: "duitsland",
    name: { en: "Germany", es: "Alemania", nl: "Duitsland" },
    country: { en: "Germany", es: "Alemania", nl: "Duitsland" },
    year: 2021,
    mapX: 52,
    mapY: 29,
    intro: {
      en: "From Groningen, Germany was a day trip, not a country. Leer, Bremen, back home. Especially when December rolled in. Christmas markets are a religion.",
      es: "Desde Groninga, Alemania no era un país, era una excursión. Leer, Bremen, vuelta a casa. Sobre todo cuando llegaba diciembre. Los mercados de Navidad son una religión.",
      nl: "Vanuit Groningen reed je zo Duitsland in. Leer, Bremen, terug. Vooral als het december werd. Want kerstmarkten zijn een religie.",
    },
    body: {
      en: "When I lived in Groningen, Germany wasn't abroad, it was a side trip. I'd drive over to Leer or Bremen regularly, sometimes for no reason. Different supermarkets, different sausages, a different kind of quiet.\n\nBut the Christmas markets. Those are a religion. Give me a currywurst and a steaming mug of Jägertee every week between late November and Christmas and I won't complain. It's plain food in a world that keeps trying to be refined. Sometimes plain is exactly what you need.\n\nOnce I had thirteen currywursts in a single day. Thirteen. Plenty of beer too. Plenty of mustard, plenty of bad decisions. Not a culinary day, more a stress test on what a stomach can take.",
      es: "Cuando vivía en Groninga, Alemania no era el extranjero, era una escapada. Me iba con frecuencia a Leer o a Bremen, a veces sin motivo. Otros supermercados, otras salchichas, otro tipo de silencio.\n\nPero los mercados de Navidad. Eso es una religión. Dame una currywurst y una taza humeante de Jägertee cada semana entre finales de noviembre y Navidad y no me oirás quejarme. Es comida sencilla en un mundo que se empeña en ser refinado. A veces sencillo es justo lo que hace falta.\n\nUna vez me comí trece currywursts en un solo día. Trece. Con bastante cerveza. Bastante mostaza, bastante malas decisiones. No fue un día culinario, fue una prueba de resistencia para el estómago.",
      nl: "Toen ik in Groningen woonde was Duitsland geen buitenland, het was een uitstapje. Ik reed met regelmaat naar Leer of Bremen, soms zonder reden. Andere supermarkten, andere kookworsten, andere stilte.\n\nMaar de kerstmarkten. Die zijn een religie. Geef mij elke week tussen eind november en kerst een currywurst en een dampende beker Jägertee, en ik klaag niet. Het is plat eten in een wereld waarin alles steeds verfijnder moet. Soms is plat precies wat je nodig hebt.\n\nEen keer heb ik op één dag dertien currywurst gegeten. Dertien. Veel bier ook. Veel worst, veel mosterd, veel slechte beslissingen. Het was geen culinaire dag, het was een test van wat een maag aan kan.",
    },
    pullQuote: {
      en: "You ain't gay if you love a good wurst.",
      es: "You ain't gay if you love a good wurst.",
      nl: "You ain't gay if you love a good wurst.",
    },
    polaroids: [
      {
        src: "/images/polaroids/oktoberfest.jpeg",
        alt: { en: "Oktoberfest in full swing", es: "Oktoberfest a pleno", nl: "Oktoberfest in volle gang" },
        caption: { en: "Oktoberfest", es: "Oktoberfest", nl: "Oktoberfest" },
      },
    ],
  },
  {
    slug: "frankrijk",
    name: { en: "France", es: "Francia", nl: "Frankrijk" },
    country: { en: "France", es: "Francia", nl: "Frankrijk" },
    year: 2021,
    mapX: 49,
    mapY: 33,
    intro: {
      en: "Paris in 2021, Dijon in 2022. A week with my wife through arrondissements we couldn't pronounce, a week through wine fields. Fell in love with the kitchen, not always with the people.",
      es: "París en 2021, Dijon en 2022. Una semana con mi mujer por arrondissements que no sabíamos pronunciar, otra por viñedos. Enamorado de la cocina, no siempre de la gente.",
      nl: "Parijs in 2021, Dijon in 2022. Een week met mijn vrouw door arrondissementen, een week door wijnvelden. Verliefd op de keuken, niet altijd op de mensen.",
    },
    body: {
      en: "Paris first, a week with my wife, hand in hand through arrondissements we couldn't pronounce. A morning at a patisserie in the Marais where the butter was so good you'd pull the croissant apart just to keep looking at it.\n\nThe patisserie. The baguettes. The cheeses. The wines. Four things I can keep listing forever. No other kitchen does those four things this simple and this irreproachable at the same time. A baguette in Paris isn't bread, it's a stance.\n\nA year later: Dijon. No tourists, no big museums, just mustard and wine and a calm you can't imagine in Paris. That's where I learned France has two faces. One you want to photograph, the other you just want to sit in.",
      es: "Primero París, una semana con mi mujer, cogidos de la mano por arrondissements que no sabíamos pronunciar. Una mañana en una patisserie del Marais con una mantequilla tan buena que abrías el cruasán solo para seguir mirándola.\n\nLa pastelería. Las baguettes. Los quesos. Los vinos. Cuatro cosas que puedo seguir nombrando sin parar. Ninguna otra cocina hace esas cuatro cosas con esta sencillez y este nivel a la vez. Una baguette en París no es pan, es una postura.\n\nUn año después: Dijon. Sin turistas, sin museos enormes, solo mostaza y vino y una calma que en París es imposible. Allí aprendí que Francia tiene dos caras. Una quieres fotografiarla, la otra solo te apetece sentarte y quedarte.",
      nl: "Eerst Parijs, een week met mijn vrouw, hand in hand door arrondissementen die we niet konden uitspreken. Een ochtend bij een patisserie in de Marais waar de boter zo goed was dat je gewoon de croissant uit elkaar trok om er nog beter naar te kijken.\n\nDe patisserie. De baguettes. De kazen. De wijnen. Vier dingen die ik eindeloos kan blijven opnoemen. Geen enkele andere keuken doet die vier dingen zo simpel en zo onverbeterlijk tegelijk. Een baguette in Parijs is geen brood, het is een houding.\n\nEen jaar later: Dijon. Geen toeristen, geen grote musea, alleen mosterd en wijn en een rust die in Parijs ondenkbaar is. Daar leerde ik dat Frankrijk twee gezichten heeft. Het ene wil je foto's maken, het andere wil je gewoon zitten.",
    },
    pullQuote: {
      en: "Paris will make you fall in love with the French cuisine, not the people.",
      es: "Paris will make you fall in love with the French cuisine, not the people.",
      nl: "Paris will make you fall in love with the French cuisine, not the people.",
    },
    polaroids: [
      {
        src: "/images/polaroids/paris.jpeg",
        alt: { en: "Paris, on foot", es: "París, a pie", nl: "Parijs, te voet" },
        caption: { en: "Paris", es: "París", nl: "Parijs" },
      },
    ],
  },
  {
    slug: "zwitserland",
    name: { en: "Switzerland", es: "Suiza", nl: "Zwitserland" },
    country: { en: "Switzerland", es: "Suiza", nl: "Zwitserland" },
    year: 2022,
    mapX: 51,
    mapY: 33,
    intro: {
      en: "A pit stop on the way to Munich, no plan, no village, just a plate of rostis that wrote off the entire weekend in one go.",
      es: "Una parada técnica camino a Múnich, sin plan, sin pueblo, solo un plato de rostis que se cargó el fin de semana entero de una sentada.",
      nl: "Een tussenstop op weg naar München, geen plan, geen dorp, alleen een bord rostis dat al mijn weekenden in één keer verpestte.",
    },
    body: {
      en: "We were driving to Munich for Oktoberfest. Switzerland was only the road there. A border post, a fuel stop, a motorway restaurant. We were hungry and ordered rostis and a raclette because that's what you did. A Swiss eats rostis, we knew that much.\n\nThe rostis were so Swiss and so wrong at the same time. Somewhere in that grated potato and that melted cheese was something my body would reject within three hours. What happened next I'll leave to your imagination. Let's say both exits were active simultaneously and there was no winner.\n\nI missed the entire first day of Oktoberfest. Lay in a Munich hotel bed with a bucket beside me while Bavaria, downstairs, was sliding under beer steins. Since then I don't do motorway rostis. Not on principle. On body memory.",
      es: "Íbamos a Múnich, al Oktoberfest. Suiza era solo la carretera. Una frontera, un repostaje, un restaurante de autopista. Teníamos hambre y pedimos rostis y una raclette porque era lo que tocaba. Un suizo come rostis, eso lo sabíamos.\n\nLos rostis eran tan suizos y tan equivocados a la vez. En algún punto entre esa patata rallada y ese queso fundido había algo que mi cuerpo iba a rechazar en menos de tres horas. Lo que pasó después te lo dejo a la imaginación. Digamos que ambas salidas se activaron a la vez y no hubo ganador.\n\nMe perdí entero el primer día de Oktoberfest. Tirado en una cama de hotel en Múnich con un cubo al lado mientras abajo Baviera se deslizaba bajo las jarras de cerveza. Desde entonces no pido rostis en restaurantes de autopista. No por principio. Por memoria corporal.",
      nl: "We reden naar München, Oktoberfest. Zwitserland was alleen maar de weg ernaartoe. Een grenspost, een tank, een wegrestaurant. We hadden honger en bestelden rostis en een raclette omdat dat hoorde. Een Zwitser eet rostis, dat wisten we wel.\n\nDe rostis waren zo Zwitsers en zo verkeerd tegelijk. Ergens tussen die geraspte aardappel en die smeltkaas zat iets wat mijn lichaam binnen drie uur zou afkeuren. Wat er allemaal gebeurde laat ik je gissen. Laten we zeggen dat beide uitgangen tegelijk werkten en dat er geen winnaar was.\n\nDe eerste dag van Oktoberfest miste ik totaal. Lag in een hotelbed in München met een emmer naast me, terwijl beneden Beieren onder de bierpullen schoof. Sindsdien eet ik geen rostis meer langs de snelweg. Niet uit principe, uit lichaamsherinnering.",
    },
    pullQuote: {
      en: "A wrong rosti costs you a day of Oktoberfest. And most of your dignity.",
      es: "Un rosti malo te cuesta un día de Oktoberfest. Y casi toda tu dignidad.",
      nl: "Een verkeerde rosti kost je een dag Oktoberfest. En heel veel waardigheid.",
    },
    polaroids: [
      {
        src: "/images/polaroids/zwitserse-alpen.jpeg",
        alt: { en: "Looking out over the Swiss Alps", es: "Mirando los Alpes suizos", nl: "Uitzicht over de Zwitserse Alpen" },
        caption: { en: "Swiss Alps", es: "Alpes suizos", nl: "Zwitserse Alpen" },
      },
    ],
  },
  {
    slug: "oostenrijk",
    name: { en: "Austria", es: "Austria", nl: "Oostenrijk" },
    country: { en: "Austria", es: "Austria", nl: "Oostenrijk" },
    year: 2016,
    mapX: 53,
    mapY: 33,
    intro: {
      en: "A road trip through the Wachau valley. Four days between vineyards and silence, with a glass of Grüner Veltliner every so often to remember where you're heading.",
      es: "Un viaje por carretera por el valle de Wachau. Cuatro días entre viñedos y silencio, con alguna copa de Grüner Veltliner para recordar a dónde vas.",
      nl: "Autoreis door Wachau-vallei. Vier dagen tussen wijngaarden en stilte, met af en toe een glas Grüner Veltliner om te onthouden waar je heenrijdt.",
    },
    body: {
      en: "No plan, just a rental car and the idea we wanted to drive through vineyards. The Wachau along the Danube, the hills around Krems, a couple of villages where the building fronts still wore the same colour they wore a hundred years ago.\n\nGrüner Veltliner becomes the anchor. A wine so dry and so alive at the same time you can pour it with anything and lose nothing. A Heuriger on a Friday evening, a wooden table outdoors, a board of cold meats, a glass kept full without us asking.\n\nWhat I brought back wasn't really the wine. It was the idea that a good glass should breathe in a country. Not in a bottle with a sticker on it, but in a village, in a season, at a table under a tree.",
      es: "Sin plan, solo un coche de alquiler y la idea de querer atravesar viñedos. El Wachau a la orilla del Danubio, las colinas alrededor de Krems, un par de pueblos donde las fachadas seguían teniendo el mismo color que hace cien años.\n\nEl Grüner Veltliner se vuelve el ancla. Un vino tan seco y tan vivo a la vez que lo puedes servir con cualquier cosa sin perder nada. Un Heuriger un viernes por la tarde, una mesa de madera fuera, una tabla de embutidos, una copa que se rellenaba sin que la pidiéramos.\n\nLo que me llevé no era tanto el vino. Era la idea de que una buena copa debería respirar en un país. No en una botella con etiqueta, sino en un pueblo, en una estación, en una mesa bajo un árbol.",
      nl: "Geen plan, alleen een huurauto en het idee dat we door wijngaarden wilden rijden. De Wachau langs de Donau, de heuvels rondom Krems, een paar dorpjes waar de gevels nog dezelfde kleur hadden als honderd jaar geleden.\n\nGrüner Veltliner is dan het ankerpunt. Een wijn die zo droog en zo levend tegelijk is dat je 'm bij elk gerecht kunt schenken zonder verlies. Een Heuriger op een vrijdagavond, een houten tafel buiten, een schaal koude vleeswaren, een glas dat alsmaar bijgevuld werd zonder dat we het vroegen.\n\nWat ik er mee terugnam was niet zozeer de wijn. Het was het idee dat een goed glas in een land hoort te ademen. Niet in een fles met een sticker, maar in een dorp, in een seizoen, in een tafel onder een boom.",
    },
    pullQuote: {
      en: "A good wine breathes in a village. Not in a bottle.",
      es: "Un buen vino respira en un pueblo. No en una botella.",
      nl: "Een goede wijn ademt in een dorp. Niet in een fles.",
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
      en: "Prague on a grey November. Dark beer, dark bread, dark afternoons.",
      es: "Praga un noviembre gris. Cerveza oscura, pan oscuro, tardes oscuras.",
      nl: "Praag op een grijze november. Donker bier, donker brood, donkere middagen.",
    },
    body: {
      en: "It's a kitchen that looks heavy and is. But in November it makes sense. Knedlíky, svíčková, a glass of pilsner that actually makes you thirsty instead of the opposite.\n\nI learned there that a real dark stock isn't just left to draw longer. You smoke it in a small wood oven somewhere along the way.",
      es: "Es una cocina que parece pesada y lo es. Pero en noviembre tiene sentido. Knedlíky, svíčková, un vaso de pilsner que en lugar de quitar sed te da más.\n\nAllí aprendí que un caldo oscuro de verdad no solo se cuece más tiempo. Se ahuma a medio camino, en un hornito de leña.",
      nl: "Het is een keuken die heel zwaar lijkt en het ook is, maar in november klopt het. Knedlíky, svíčková, een goed glas pilsner waar je werkelijk dorst van krijgt in plaats van het tegenovergestelde.\n\nIk leerde er dat een echte donkere bouillon niet alleen langer trekt. Je rookt 'm in een houtoventje ergens halverwege.",
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
      en: "Real paprika comes from Kalocsa or Szeged. Sweet, smoked, with a depth I've never come across in any supermarket tin. I still stop in when I'm passing.\n\nHungarian cooking is surprisingly tender for everything it carries. A halászlé in a csárda on the Danube, on a windy evening. I'd happily sit there more often.",
      es: "El verdadero pimentón viene de Kalocsa o Szeged. Dulce, ahumado, con una profundidad que no he encontrado en ninguna lata de supermercado. Sigo pasándome cuando estoy cerca.\n\nLa cocina húngara es sorprendentemente suave para todo el sabor que lleva dentro. Un halászlé en una csárda a la orilla del Danubio, en una noche de viento. Me sentaría ahí más a menudo.",
      nl: "De échte paprika komt uit Kalocsa of Szeged. Zoet, gerookt, met een rangschikking die ik in geen enkel supermarktblik ben tegengekomen. Ik ga er nog steeds langs als ik in de buurt ben.\n\nHongaarse keuken is verrassend zacht voor wat er allemaal aan smaak in zit. Een halászlé in een csárda aan de Donau, op een avond dat het waait. Daar zou ik vaker willen zitten.",
    },
  },
  {
    slug: "roemenie",
    name: { en: "Romania", es: "Rumanía", nl: "Roemenië" },
    country: { en: "Romania", es: "Rumanía", nl: "Roemenië" },
    year: 2023,
    mapX: 56.5,
    mapY: 33,
    intro: {
      en: "A work trip to Bucharest. A few days, no tourism, just the city as it is on a Tuesday morning.",
      es: "Un viaje de trabajo a Bucarest. Unos días, nada de turismo, solo la ciudad tal como es un martes por la mañana.",
      nl: "Een werktrip naar Boekarest. Een paar dagen, geen toerisme, alleen de stad zoals die op een dinsdagochtend is.",
    },
    body: {
      en: "Work brought me to Bucharest for a few days in 2023. No time for tourism, no idea what I should or shouldn't be seeing. Walking the old districts between meetings, watching what a city looks like when you haven't prepped it for yourself.\n\nThe kitchen I caught in those few evenings was heavy and joke-free. Mici on the grill, sarmale, a stew that should have been simmering for hours and tasted like it had. Not a kitchen for those who like delicate. It's a kitchen that says: eat, it's winter, you need fuel.\n\nWhat I took back was respect for a country that kept its own rhythm without apologising. Romania is not for the faint hearted, as the saying goes. But if you just go with it, you get something back.",
      es: "El trabajo me llevó a Bucarest unos días en 2023. Sin tiempo para turismo, sin idea de lo que debería o no estar viendo. Andando por los barrios antiguos entre reuniones, viendo cómo se ve una ciudad cuando no la has preparado para ti.\n\nLa cocina que vi pasar en esas pocas noches era pesada y sin bromas. Mici a la brasa, sarmale, un guiso que debía haber estado horas a fuego lento y sabía a ello. No es una cocina para los que prefieren lo delicado. Es una cocina que te dice: come, es invierno, necesitas combustible.\n\nLo que me llevé fue respeto por un país que mantiene su propio ritmo sin pedir disculpas. Rumanía no es para los miedicas, como suele decirse. Pero si te dejas llevar, te devuelve algo.",
      nl: "Werk bracht me in 2023 voor een paar dagen naar Boekarest. Geen tijd voor toerisme, geen idee van wat ik wel of niet zou moeten zien. Tussen vergaderingen door door de oude wijken lopen en zien hoe een stad eruit ziet als je 'm niet voor jezelf hebt voorbereid.\n\nDe keuken die ik in die paar avonden voorbij zag komen was zwaar en zonder grappen. Mici op de grill, sarmale, een stoof die uren had moeten staan en ook zo smaakte. Het is geen keuken voor wie van delicaat houdt. Het is een keuken die zegt: eet, het is winter, je hebt energie nodig.\n\nWat ik meenam was respect voor een land dat z'n eigen ritme hield zonder verontschuldiging. Roemenië is niet voor de faint hearted, zoals dat heet. Maar als je gewoon meedoet, krijg je terug.",
    },
    pullQuote: {
      en: "Romania is not for the faint hearted.",
      es: "Rumanía no es para los miedicas.",
      nl: "Roemenië is niet voor de faint hearted.",
    },
    polaroids: [
      {
        src: "/images/polaroids/bucharest.jpeg",
        alt: { en: "Bucharest streets", es: "Calles de Bucarest", nl: "Boekarest, op straat" },
        caption: { en: "Bucharest", es: "Bucarest", nl: "Boekarest" },
      },
    ],
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
      en: "An FA Cup final, a mini-cruise, and in a Newcastle alley the realest Mexican kitchen I'd found in years.",
      es: "Una final de la FA Cup, un mini-crucero, y en un callejón de Newcastle la cocina mexicana más auténtica que había encontrado en años.",
      nl: "Een FA Cup finale, een mini-cruise, en in een Newcastle-steeg de echtste Mexicaan die ik in jaren tegenkwam.",
    },
    body: {
      en: "England was for the football: FA Cup final, Chelsea against Manchester United. An evening in London, then a mini-cruise up to Newcastle. A few days where everything was too cold and too beer, in the right way.\n\nBut the evening that stuck was in an alley in Newcastle. A small Mexican place, hardly any light, a family that had been there for years. That's where I tasted what Mexican cooking can actually do. A mole that had been on for hours, tortillas from their own masa, a salsa with a depth you don't get at the corner takeaway. In Newcastle. Ten minutes' walk from where you'd expect the worst food on earth.\n\nSince then I follow one rule: eat where the locals eat and drink where the sun doesn't go down. In Newcastle the sun went down early. The beer kept going late.",
      es: "Inglaterra fue por el fútbol: final de la FA Cup, Chelsea contra Manchester United. Una noche en Londres, después un mini-crucero hasta Newcastle. Unos días en los que todo era demasiado frío y demasiado cerveza, justo de la manera correcta.\n\nPero la noche que se quedó fue en un callejón de Newcastle. Un mexicano pequeño, sin apenas luz, una familia que llevaba años allí. Allí probé por primera vez lo que la cocina mexicana sabe hacer de verdad. Un mole que había estado horas al fuego, tortillas de su propia masa, una salsa con una profundidad que no encuentras en el take-away de la esquina. En Newcastle. A diez minutos andando del sitio donde esperabas la peor comida del mundo.\n\nDesde entonces sigo una regla: come donde comen los locales y bebe donde no se pone el sol. En Newcastle el sol se ponía pronto. La cerveza aguantaba hasta tarde.",
      nl: "Engeland was voor het voetbal: FA Cup finale, Chelsea tegen Manchester United. Een avond Londen, daarna een mini-cruise naar Newcastle. Een paar dagen waarin alles te koud en te bier was, op de juiste manier.\n\nMaar de avond die bleef hangen was in een steeg in Newcastle. Een Mexicaans tentje, klein, weinig licht, een familie die er al jaren stond. Hier proefde ik voor het eerst echt wat de Mexicaanse keuken kan. Een mole die uren had gestaan, tortillas van eigen masa, een salsa met een diepte die je niet bij een toko op de hoek krijgt. In Newcastle. Een tien minuten lopen vanaf de plek waar je verwacht het slechtste eten te krijgen.\n\nSindsdien volg ik één regel: eet waar de locals eten en drink waar de zon niet ondergaat. In Newcastle ging de zon vroeg onder. Het bier ging laat door.",
    },
    pullQuote: {
      en: "Eat where the locals eat, drink where the sun doesn't go down.",
      es: "Eat where the locals eat, drink where the sun doesn't go down.",
      nl: "Eat where the locals eat, drink where the sun doesn't go down.",
    },
    polaroids: [
      {
        src: "/images/polaroids/edinburgh.jpeg",
        alt: { en: "Edinburgh, old town", es: "Edimburgo, casco antiguo", nl: "Edinburgh, oude stad" },
        caption: { en: "Edinburgh", es: "Edimburgo", nl: "Edinburgh" },
      },
    ],
  },
  {
    slug: "ierland",
    name: { en: "Ireland", es: "Irlanda", nl: "Ierland" },
    country: { en: "Ireland", es: "Irlanda", nl: "Ierland" },
    year: 2021,
    mapX: 45,
    mapY: 26,
    intro: {
      en: "Dublin with my wife. Three days of Guinness, a tattoo that wouldn't stop bleeding, and a memory I wouldn't trade.",
      es: "Dublín con mi mujer. Tres días de Guinness, un tatuaje que no quería dejar de sangrar, y un recuerdo que no cambiaría.",
      nl: "Dublin met mijn vrouw. Drie dagen Guinness, een tattoo die niet wilde stoppen met bloeden, en een herinnering die ik niet zou ruilen.",
    },
    body: {
      en: "Three days in Dublin, with my wife. No plan except to drink well and let something thoughtless happen together. We got both. A drunk tattoo, side by side, with a good pub waiting around the corner.\n\nFood wasn't the lead. Guinness was the lead. Three days running, in every pub, on every corner. Pure rolling creaminess that doesn't taste this way anywhere else. In between, something savoury. Pies, stews, scones with thick butter. Food you need after four glasses of straight stout.\n\nThe tattoo bled all night. We slept on a towel, laughed until we cried, promised each other we'd do it again the next morning. Not the tattoo. The black beer. The best memories are the ones you didn't quite witness sober.",
      es: "Tres días en Dublín, con mi mujer. Sin más plan que beber bien y dejar que pasara algo sin pensarlo, juntos. Conseguimos las dos cosas. Un tatuaje borrachos, lado a lado, con un pub bueno esperando a la vuelta de la esquina.\n\nLa comida no era la protagonista. La Guinness era la protagonista. Tres días seguidos, en cada pub, en cada esquina. Una cremosidad líquida y oscura que no sabe igual en ningún otro sitio. En medio, algo salado. Pies, guisos, scones con mantequilla espesa. Comida que necesitas después de cuatro vasos de stout pura.\n\nEl tatuaje sangró toda la noche. Dormimos sobre una toalla, nos partimos de risa, nos prometimos que lo volveríamos a hacer a la mañana siguiente. No el tatuaje. La cerveza negra. Los mejores recuerdos son los que viviste sin estar del todo sobrio.",
      nl: "Drie dagen in Dublin, met mijn vrouw. Geen plan om iets specifieks te doen, behalve goed drinken en samen iets ondoordachts laten zetten. Het werd het laatste twee. Dronken een tattoo halen, samen, terwijl een goede pub om de hoek wachtte.\n\nEten was niet de hoofdrol. Guinness was de hoofdrol. Drie dagen lang, in elk café, op elke straathoek. Pure draaiende romigheid die nergens anders zo smaakt. Tussendoor wel iets hartig. Pies, stoofpotjes, scones met dikke boter. Eten dat je nodig hebt na vier glazen pure stout.\n\nDe tattoo bleef de hele nacht bloeden. We sliepen op een handdoek, lachten ons rot, beloofden elkaar dat we het de volgende ochtend weer zouden doen. Niet de tattoo, het zwarte bier. Beste herinneringen blijven van de dingen die je niet helemaal helder hebt meegemaakt.",
    },
    pullQuote: {
      en: "Best memories are the ones drunk.",
      es: "Best memories are the ones drunk.",
      nl: "Best memories are the ones drunk.",
    },
    polaroids: [
      {
        src: "/images/polaroids/dublin.jpeg",
        alt: { en: "Dublin, after dark", es: "Dublín, de noche", nl: "Dublin, na donker" },
        caption: { en: "Dublin", es: "Dublín", nl: "Dublin" },
      },
    ],
  },

  // ── Nordics ────────────────────────────────────────────────────────
  {
    slug: "denemarken",
    name: { en: "Denmark", es: "Dinamarca", nl: "Denemarken" },
    country: { en: "Denmark", es: "Dinamarca", nl: "Denemarken" },
    year: 2008,
    mapX: 52,
    mapY: 23,
    intro: {
      en: "A week in Copenhagen with the family, no restaurant chase, mostly berries and jams from a city that ran on fermentation before it was cool.",
      es: "Una semana en Copenhague con la familia, sin restaurantes de moda, sobre todo frutos rojos y mermeladas de una ciudad que ya funcionaba con fermentación antes de que fuera tendencia.",
      nl: "Een week Kopenhagen met de familie, geen restaurant-bezoeken, vooral bessen en jams uit een stad die op fermentatie draait nog voordat het hip werd.",
    },
    body: {
      en: "Copenhagen, 2008. A family week. Not the food trip I'd take later. No Noma, no Amass, no baker pilgrimage. Just walking around with the people you grew up with, watching what a country puts in its kitchen that you don't know.\n\nWhat stuck were the berries and jams. They were everywhere. At breakfast, on the markets, in small jars with handwritten labels. Lingon, blueberry, elderberry, currants of things I had to ask the name of. A different idea of sweet than I knew: deeper, more sideways, less sugar.\n\nIt was a first lesson in something I'd only take seriously much later: what ripens in a season you eat in that season, and what's left over you keep for when there's nothing. No fancy term for it, just how it should be done.",
      es: "Copenhague, 2008. Una semana en familia. No era el viaje gastronómico que haría más adelante. Sin Noma, sin Amass, sin peregrinación a panaderías. Solo caminar por la ciudad con la gente con la que has crecido, viendo qué pone un país en su cocina que tú no conoces.\n\nLo que se quedó fueron los frutos rojos y las mermeladas. Estaban en todas partes. En el desayuno, en los mercados, en tarritos con etiquetas escritas a mano. Lingon, arándano, sauco, grosellas de cosas cuyo nombre tenía que preguntar. Otra idea de lo dulce distinta a la mía: más profunda, más oblicua, menos azúcar.\n\nFue una primera lección de algo que sólo años después me tomaría en serio: lo que madura en una estación se come en esa estación, y lo que sobra se guarda para cuando no haya nada. Sin nombre rebuscado para ello, solo como debería ser.",
      nl: "Kopenhagen, 2008. Een gezinsweek. Niet de food-trip die ik later zou doen. Geen Noma-bezoek, geen Amass, geen baker-pilgrimage. Gewoon door de stad lopen met de mensen waar je mee bent opgegroeid en zien wat een land in een keuken zet wat je niet kent.\n\nWat bijbleef waren de bessen en jams. Overal stonden ze. Bij het ontbijt, bij de markten, in kleine potjes met handgeschreven etiketten. Lingon, blauwbes, vlierbes, krenten van dingen waarvan ik de naam moest opvragen. Een ander idee van zoet dan ik kende: dieper, dwarser, minder suiker.\n\nHet was eigenlijk een eerste les in iets wat ik veel later pas serieus zou nemen: wat in een seizoen rijp wordt eet je in dat seizoen, en wat over is bewaar je voor wanneer er niets is. Geen fancy term voor, gewoon hoe het hoort.",
    },
    pullQuote: {
      en: "What ripens now you eat now. What's left, you keep for when there's nothing.",
      es: "Lo que madura ahora se come ahora. Lo que sobra se guarda para luego.",
      nl: "Wat rijp wordt eet je nu. Wat over is bewaar je voor straks.",
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
      en: "A road trip with my brother through Swedish wilderness, a tent in the woods, a fishing rod we'd bought too idealistically.",
      es: "Un viaje por carretera con mi hermano por el bosque sueco, una tienda entre los árboles, una caña de pescar que habíamos comprado con demasiado idealismo.",
      nl: "Een roadtrip met mijn broer door Zweeds wild, tent in het bos, een vishengel die we te idealistisch hadden gekocht.",
    },
    body: {
      en: "Stockholm was the starting point, then north. A rental car, a cheap tent, a fishing rod we'd picked up for next to nothing because we figured: this is Sweden, the water's full of fish, we'll catch our own dinner.\n\nWild camping between lakes where we were the only ones. We bought ingredients from local supermarkets or along the road. Pure, simple things. Bread, dense butter, smoked fish, dill. A dinner you don't need to do anything to.\n\nWe held the rod by the lake for three hours. Three hours. Not one bite. At some point the hunger overruled the ideal and we walked to the nearest village for something fried. The rod's probably still lying somewhere in a Swedish forest.",
      es: "Estocolmo fue el punto de partida, después al norte. Un coche de alquiler, una tienda barata, una caña de pescar que cogimos por cuatro euros porque pensábamos: esto es Suecia, el agua está llena de pesca, cazaremos nuestra propia cena.\n\nAcampada salvaje entre lagos en los que no había nadie más. Los ingredientes los sacábamos del supermercado local o de algún puesto al borde de la carretera. Cosas puras, sencillas. Pan, mantequilla densa, pescado ahumado, eneldo. Una cena a la que no tienes que hacerle nada.\n\nAguantamos la caña al borde del lago tres horas. Tres horas. Ni un solo bocado. En algún momento el hambre ganó al ideal y caminamos hasta el pueblo más cercano a buscar algo frito. La caña sigue, supongo, en algún bosque sueco.",
      nl: "Stockholm was het beginpunt, daarna noord. Een huurauto, een goedkope tent, een vishengel die we voor weinig geld hadden gekocht omdat we dachten: dit is Zweden, het water zit vol vis, we vangen ons eten zelf.\n\nWild kamperen tussen meren waar alleen wij waren. Ingrediënten haalden we uit de plaatselijke supermarkt of langs de weg. Pure, simpele dingen. Brood, dichte boter, gerookte vis, dille. Een avondmaal waar je niets aan hoeft te doen.\n\nDe vishengel hebben we drie uur lang naast het meer gehouden. Drie uur. Niet één hap. Op een gegeven moment werd de honger sterker dan ons ideaal, en gingen we naar het dichtstbijzijnde dorpje om iets gebakken te kopen. De hengel ligt nog steeds ergens in een Zweeds bos, denk ik.",
    },
    pullQuote: {
      en: "Don't wait for the fish to come to you. Go to the fish instead.",
      es: "Don't wait for the fish to come to you. Go to the fish instead.",
      nl: "Don't wait for the fish to come to you. Go to the fish instead.",
    },
  },
  {
    slug: "noorwegen",
    name: { en: "Norway", es: "Noruega", nl: "Noorwegen" },
    country: { en: "Norway", es: "Noruega", nl: "Noorwegen" },
    year: 2019,
    mapX: 51.5,
    mapY: 17,
    intro: {
      en: "Same road trip, a day further north. The Lofoten in view, and the realisation that a potato with butter and salt doesn't have to be too simple.",
      es: "El mismo viaje, un día más al norte. Las Lofoten a la vista, y la idea de que una patata con mantequilla y sal no tiene por qué ser demasiado simple.",
      nl: "Dezelfde roadtrip, een dag noorder gereden. Lofoten in beeld, en het besef dat een aardappel met boter en zout niet altijd te simpel hoeft te zijn.",
    },
    body: {
      en: "From Sweden onward, with my brother, north. Norway was where you kept going until you couldn't keep going. Mountains, fjords, villages of five houses that only existed among themselves.\n\nWhat I learned in Norway was really just one thing: everything tastes better there. A potato out of Norwegian soil. A knob of butter from a Norwegian cow. A pinch of coarse salt. A white fish that had been swimming that morning. The same dish, composed by the sun and the cold and the water. Not by a cook.\n\nSince then I try not to overdo what a good ingredient already is. That's not a philosophy, that's what Norway teaches you within three meals.",
      es: "Desde Suecia hacia arriba, con mi hermano. Noruega era el sitio donde sigues hasta que ya no se puede seguir. Montañas, fiordos, pueblos de cinco casas que solo existían entre ellos.\n\nLo que aprendí en Noruega fue una sola cosa: todo sabe mejor allí. Una patata de la tierra noruega. Una nuez de mantequilla de una vaca noruega. Una pizca de sal gruesa. Un pescado blanco que esa misma mañana estaba nadando. El mismo plato, compuesto por el sol, el frío y el agua. No por un cocinero.\n\nDesde entonces intento no sobreponerme a lo que un buen ingrediente ya es. No es filosofía, es lo que Noruega te enseña en tres comidas.",
      nl: "Vanuit Zweden door, met mijn broer, naar boven. Noorwegen was waar je doorging tot er niet meer doorgegaan kon worden. Bergen, fjorden, dorpjes van vijf huizen die alleen onderling bestonden.\n\nWat ik in Noorwegen leerde was eigenlijk maar één ding: alles smaakt daar beter. Een aardappel uit de Noorse aarde. Een klontje boter van een Noorse koe. Een snufje grof zout. Een witte vis die nog die ochtend had gezwommen. Hetzelfde gerecht, samengesteld door de zon en de kou en het water. Niet door een kok.\n\nSindsdien probeer ik niet te overdoen wat een goed ingrediënt al is. Dat is geen filosofie, dat is wat Noorwegen je leert binnen drie maaltijden.",
    },
    pullQuote: {
      en: "A good ingredient doesn't need interpretation. It needs respect.",
      es: "Un buen ingrediente no pide interpretación. Pide respeto.",
      nl: "Een goed ingrediënt vraagt geen interpretatie. Vraagt om respect.",
    },
  },
  {
    slug: "finland",
    name: { en: "Finland", es: "Finlandia", nl: "Finland" },
    country: { en: "Finland", es: "Finlandia", nl: "Finland" },
    year: 2019,
    mapX: 56,
    mapY: 17,
    intro: {
      en: "Same road trip, one country further. Finland is where the silence settles in a way the north of the Netherlands can't touch.",
      es: "El mismo viaje, un país más allá. Finlandia es donde el silencio se instala de una manera que el norte de Holanda no puede igualar.",
      nl: "Zelfde roadtrip, een land verder. Finland is waar het stil wordt op een manier waar Noord-Nederland niet bij in de buurt komt.",
    },
    body: {
      en: "With my brother we crossed from Norway into Finland. The north. Lakes, pines, and a kind of silence you can never quite get used to in Holland. Finland is a country that tells you you don't need to speak.\n\nFood was austere, like everywhere in this corner of Europe. Dark bread, smoked fish, coffee stronger than you thought coffee could be. A bite of reindeer once in a roadside place. Meat with a depth you don't get out of a Dutch cow.\n\nWhat I remember most isn't a dish but an evening light. Ten at night, midsummer, a lake where the sun didn't set. We ate bread and tinned salmon and went quiet more than we spoke. That was Finland.",
      es: "Con mi hermano cruzamos de Noruega a Finlandia. El norte. Lagos, pinos, y un tipo de silencio al que en Holanda nunca acabas de acostumbrarte. Finlandia es un país que te dice que no necesitas hablar.\n\nLa comida era austera, como en todo este rincón de Europa. Pan oscuro, pescado ahumado, café más fuerte de lo que pensabas que el café podía ser. Un bocado de reno en un bar de carretera. Carne con una profundidad que no sale de una vaca holandesa.\n\nLo que más recuerdo no es un plato sino una luz de tarde. Diez de la noche, pleno verano, un lago donde el sol no se ponía. Comimos pan y salmón de lata y callamos más de lo que hablamos. Eso era Finlandia.",
      nl: "Met mijn broer reden we vanuit Noorwegen Finland in. Het noorden. Meren, dennen, en een type stilte waar je in Nederland nooit aan kunt wennen. Finland is een land dat je vertelt dat je niet hoeft te praten.\n\nEten was er sober, zoals overal in deze hoek van Europa. Donker brood, gerookte vis, koffie sterker dan je dacht dat koffie kon zijn. Een keer een hap rendier in een wegrestaurant. Vlees met een diepte die je niet uit een Hollandse koe haalt.\n\nWat ik me vooral herinner is geen gerecht maar een avondlicht. Tien uur 's avonds, midzomer, een meer waar de zon niet onderging. We aten brood en zalm uit een blik en zwegen meer dan we praatten. Dat was Finland.",
    },
    pullQuote: {
      en: "Some places ask you, mostly, to stay quiet.",
      es: "Algunos lugares te piden, sobre todo, que te quedes callado.",
      nl: "Sommige plekken vragen je vooral om stil te zijn.",
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
      en: "My home since 2023. A country where Manchego and serrano jamón aren't garnishes. They're the floor an evening rests on.",
      es: "Mi casa desde 2023. Un país donde el manchego y el jamón serrano no son adornos. Son el suelo sobre el que se apoya la noche.",
      nl: "Mijn thuis sinds 2023. Een land waar Manchego en serrano jamón geen accessoires zijn. Het is de basis waarop een avond rust.",
    },
    body: {
      en: "I live here now. That changes how you look at a kitchen. Not as a visitor any more, but as someone doing the weekly shop. Olives from Jaén, tomatoes from Almería, tuna from Cádiz. Not a travel report, a daily routine.\n\nTwo things I never run out of: Manchego and serrano jamón. A block of Manchego at the age where it starts to crumble, a slice of serrano your hand reaches for before you realise you're back for more. Give me more, give me more. On a wooden board, with good olive oil and bread, an evening is already made.\n\nSan Sebastián keeps being the technique, Andalucía keeps being the soul, the Costa del Sol keeps being the daily rhythm. Three different Spains in one country, and only here am I learning the difference between cooking for tourists and cooking for yourself.",
      es: "Vivo aquí ahora. Eso cambia cómo miras una cocina. Ya no como visitante, sino como alguien que hace la compra cada semana. Aceitunas de Jaén, tomates de Almería, atún de Cádiz. No un reporte de viaje, una rutina diaria.\n\nDos cosas que no se me acaban: manchego y jamón serrano. Un trozo de manchego de la edad en la que empieza a desmenuzarse, una loncha de serrano que la mano coge antes de que te des cuenta de que has vuelto a por más. Give me more, give me more. Sobre una tabla de madera, con buen aceite de oliva y pan, una noche ya está hecha.\n\nSan Sebastián sigue siendo la técnica, Andalucía sigue siendo el alma, la Costa del Sol sigue siendo el ritmo diario. Tres Españas distintas en un mismo país, y solo aquí estoy aprendiendo la diferencia entre cocinar para turistas y cocinar para uno mismo.",
      nl: "Ik woon hier nu. Dat verandert hoe je naar een keuken kijkt. Niet meer als bezoeker, maar als iemand die elke week boodschappen doet. Olijven uit Jaén, tomaten uit Almería, tonijn uit Cádiz. Niet als reisreport, als dagindeling.\n\nTwee dingen verlies ik nooit: Manchego en serrano jamón. Een blok Manchego van een leeftijd waarop hij begint te kruimelen, een schaaf serrano dat je hand pakt voordat je doorhebt dat je er weer bij grijpt. Geef me meer, geef me meer. Op een houten plank, met een goede olijfolie en wat brood, is een avond gemaakt.\n\nSan Sebastián blijft de techniek, Andalusië blijft de ziel, de Costa del Sol blijft de dagindeling. Drie verschillende Spanjes in één land, en pas hier leer ik wat het verschil maakt tussen koken voor toeristen en koken voor jezelf.",
    },
    pullQuote: {
      en: "Spain isn't a holiday any more. It's what I taste before I think.",
      es: "España ya no es vacaciones. Es lo que pruebo antes de pensar.",
      nl: "Spanje is geen vakantie meer. Het is wat ik proef voor ik nadenk.",
    },
    polaroids: [
      {
        src: "/images/polaroids/feria-malaga.jpeg",
        alt: { en: "Father and daughter at the Feria de Málaga", es: "Padre e hija en la Feria de Málaga", nl: "Vader en dochter op de Feria de Málaga" },
        caption: { en: "Feria de Málaga", es: "Feria de Málaga", nl: "Feria de Málaga" },
      },
      {
        src: "/images/polaroids/malaga-flamenco.jpeg",
        alt: { en: "Flamenco, Málaga", es: "Flamenco, Málaga", nl: "Flamenco, Málaga" },
        caption: { en: "Flamenco, Málaga", es: "Flamenco, Málaga", nl: "Flamenco, Málaga" },
      },
    ],
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
      en: "Portugal is a kitchen of deep simplicity and I'll go to bat for it. Sardines on bread, a good caldo verde, a glass of vinho verde so light you almost forget it. And the pastéis, of course. I've made a few serious attempts and never quite hit the real thing.\n\nThe Atlantic coast is also rougher than I expected. A day on the Alentejo coast ended with grilled squid on the beach at sunset. No menu, no booking, my fingers still smelling of the sea.",
      es: "Portugal es una cocina de sencillez profunda y la defiendo a capa y espada. Sardinas sobre pan, un buen caldo verde, una copa de vinho verde tan ligera que casi se te olvida. Y los pastéis, claro. He hecho intentos serios y nunca he llegado al de verdad.\n\nLa costa atlántica también es más bravía de lo que pensaba. Un día en la costa alentejana acabó con calamares a la brasa en la playa al atardecer. Sin menú, sin reserva, los dedos aún con olor a mar.",
      nl: "Portugal is een keuken van diepe simpelheid en die hou ik vol. Sardines op brood, een goede caldo verde, een glas vinho verde dat zo licht is dat je 'm bijna vergeet. En de pastéis natuurlijk. Ik heb er zelf een paar serieuze pogingen op gedaan en nooit de échte gehaald.\n\nDe Atlantische kust is ook ruwer dan ik dacht. Een dag op de Alentejo-kust eindigde met geroosterde inktvis op het strand bij zonsondergang. Geen menu, geen reservering, mijn vingers nog naar zee.",
    },
    polaroids: [
      {
        src: "/images/polaroids/lissabon.jpeg",
        alt: { en: "Lisbon viewpoint", es: "Mirador en Lisboa", nl: "Uitzicht in Lissabon" },
        caption: { en: "Lisbon", es: "Lisboa", nl: "Lissabon" },
      },
    ],
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
      en: "The nonna who tolerated me in her kitchen for four weeks spoke a dialect I couldn't follow and cooked with a precision I'd never seen before. No scale, no clock, all by feel. And always spot-on. A tagliatelle al ragù I still don't even try to imitate.\n\nItaly taught me two things: that fresh pasta is its own craft, separate from cooking, and that a good tomato in July is everything.",
      es: "La nonna que me aguantó cuatro semanas en su cocina hablaba un dialecto que no entendía y cocinaba con una precisión que no había visto nunca. Sin balanza, sin reloj, todo a ojo. Y siempre clavado. Una tagliatelle al ragù que ni siquiera intento imitar.\n\nItalia me enseñó dos cosas: que la pasta fresca es otro oficio, aparte de la cocina, y que un buen tomate en julio lo es todo.",
      nl: "De nonna die mij vier weken in haar keuken duldde, sprak een dialect dat ik niet verstond en kookte met een precisie die ik nooit eerder had gezien. Geen weegschaal, geen klok, alles op gevoel. En altijd raak. Een tagliatelle al ragù die ik nog niet eens probeer te imiteren.\n\nItalië heeft me twee dingen geleerd: dat verse pasta een ander vak is dan koken, en dat een goede tomaat in juli alles is.",
    },
    pullQuote: {
      en: "In Italy you never need to add anything. Only take something away.",
      es: "En Italia nunca hay que añadir nada. Sólo quitar algo.",
      nl: "In Italië hoef je nooit iets toe te voegen. Alleen iets weg te laten.",
    },
    polaroids: [
      {
        src: "/images/polaroids/rome.jpeg",
        alt: { en: "Rome, on foot", es: "Roma, a pie", nl: "Rome, te voet" },
        caption: { en: "Rome", es: "Roma", nl: "Rome" },
      },
    ],
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
      en: "Not much to say about the kitchen here. Plenty to say about the walk around it. The real place for pasta is a few streets away.",
      es: "Poco que decir de la cocina de aquí. Mucho del paseo alrededor. El sitio bueno de pasta está unas calles más allá.",
      nl: "Niet veel te zeggen over de keuken hier. Wel veel over de wandeling eromheen. De échte plek voor pasta zit een paar straten verder.",
    },
  },
  {
    slug: "griekenland",
    name: { en: "Greece", es: "Grecia", nl: "Griekenland" },
    country: { en: "Greece", es: "Grecia", nl: "Griekenland" },
    year: 2022,
    mapX: 55.5,
    mapY: 41,
    intro: {
      en: "A summer on Zakynthos. Table not laid till half ten at night, taverns under a roof of vines, and the realisation that a tomato salad can be everything.",
      es: "Un verano en Zakynthos. Mesa puesta a las diez y media de la noche, tabernas con un techo de parras, y la idea de que una ensalada de tomate puede serlo todo.",
      nl: "Een zomer op Zakynthos. Tafel pas om half elf 's avonds, taverna's met een dak van wijnranken, en het besef dat een tomatensalade alles kan zijn.",
    },
    body: {
      en: "Zakynthos in summer, 2022. No plan beyond following the island's rhythm. Sleep until it got too hot, back in the water on time, eat when the light started to drop. The Greek table doesn't start before half ten and ends itself somewhere around three.\n\nUnder a roof of vines a tomato salad I'll remember for ten years. No vinaigrette, no herb circus. Just four colours of tomato, a pinch of coarse salt, a glug of olive oil I wished I could carry home. Above it, on a wooden board, an octopus that had hung in the sun for hours before it touched the grill.\n\nWhat Greece teaches you is that a main ingredient doesn't need a defence. The tomato doesn't sit at the side of the plate. The tomato is the plate. An octopus doesn't sit as a side. It is the evening.",
      es: "Zakynthos en verano, 2022. Sin plan más allá de seguir el ritmo de la isla. Dormir hasta que hiciera demasiado calor, al agua a tiempo, comer cuando la luz empezaba a caer. La mesa griega no se monta antes de las diez y media y termina sola sobre las tres.\n\nBajo un techo de parras, una ensalada de tomate que recordaré durante diez años. Sin vinagreta, sin circo de hierbas. Solo cuatro colores de tomate, una pizca de sal gruesa, un chorro de aceite de oliva que me hubiera querido llevar a casa. Encima, sobre una tabla de madera, un pulpo que había estado horas colgando al sol antes de tocar la parrilla.\n\nLo que Grecia te enseña es que un ingrediente principal no necesita defensa. El tomate no se queda al lado del plato. El tomate es el plato. Un pulpo no se queda de acompañamiento. Es la noche.",
      nl: "Zakynthos in de zomer, 2022. Geen plan behalve het ritme van het eiland volgen. Slapen tot het te warm werd, op tijd weer in het water, eten als het licht begon te zakken. De Griekse tafel start pas om half elf en eindigt vanzelf rond drie.\n\nOnder een dak van wijnranken een tomatensalade die ik tien jaar lang niet zal vergeten. Geen vinaigrette, geen kruidenfeest. Gewoon vier kleuren tomaat, een snufje grof zout, een glug olijfolie waarvan ik wenste dat ik die mee kon nemen. Daarboven, op een houten plank, een octopus die uren in de zon had gehangen voordat hij op de grill kwam.\n\nWat Griekenland je leert is dat een hoofdingrediënt geen verdediging nodig heeft. De tomaat hoort niet aan de kant van het bord. De tomaat is het bord. Een octopus hoort niet als bijgerecht. Hij is de avond.",
    },
    pullQuote: {
      en: "A tomato doesn't sit at the side of the plate. A tomato is the plate.",
      es: "Un tomate no está al lado del plato. Un tomate es el plato.",
      nl: "Een tomaat hoort niet aan de kant van het bord. Een tomaat is het bord.",
    },
  },
  {
    slug: "turkije",
    name: { en: "Turkey", es: "Turquía", nl: "Turkije" },
    country: { en: "Turkey", es: "Turquía", nl: "Turkije" },
    year: 2008,
    mapX: 58,
    mapY: 42,
    intro: {
      en: "Istanbul. Spice market, simit on the street, a kebab parlour with a host who still remembered the eighties.",
      es: "Estambul. Mercado de especias, simit por la calle, un kebab cuyo dueño aún recordaba los ochenta.",
      nl: "Istanbul. Kruidenmarkt, simit op straat, kebabsalon waar de host nog wist hoe het in de jaren tachtig was.",
    },
    body: {
      en: "I was there a week and the feeling was that I needed four. The bridge between Europe and Asia in every bite. And the way they handle spice changed my mind about what a good marinade is.\n\nI regularly slip pieces of Istanbul into a dish: a pinch of sumac on a tomato, ras el hanout instead of plain pepper, pomegranate molasses on a grilled aubergine.",
      es: "Estuve una semana y sentí que necesitaba cuatro. El puente entre Europa y Asia en cada bocado. Y la manera en que manejan las especias me cambió la idea de lo que es una buena marinada.\n\nMeto trocitos de Estambul en muchos platos: una pizca de sumac sobre un tomate, ras el hanout en vez de pimienta, melaza de granada sobre una berenjena a la brasa.",
      nl: "Ik was er een week en heb het idee dat ik er vier waar van had moeten zijn. De brug tussen Europa en Azië in elke hap. En de manier waarop ze met kruiden omgaan veranderde mijn gedachten over wat een goede marinade is.\n\nIk neem regelmatig stukjes Istanbul mee in een gerecht: een snufje sumak op een tomaat, ras el hanout in plaats van gewone peper, granaatappelsiroop op een gegrilde aubergine.",
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
      en: "A road trip through the Atlas with a three-day stop in Fes, where I ate in a riad that stayed with me longer than most starred visits in Europe. Slow-cooking on coals, a mestiyya, bread baked in a communal oven.\n\nI came back with a spice mix. Since Morocco there's always a jar of ras el hanout in my kitchen with the balance set by hand. Saffron, ginger, cinnamon, roasted pepper.",
      es: "Una ruta por el Atlas con tres días en Fez, donde comí en un riad que se me ha quedado más tiempo que la mayoría de visitas con estrella en Europa. Cocción lenta sobre brasas, una mestiyya, pan horneado en un horno comunal.\n\nVolví con una mezcla de especias. Desde Marruecos siempre hay un bote de ras el hanout en mi cocina con el equilibrio puesto a mano. Azafrán, jengibre, canela, pimiento tostado.",
      nl: "Een rondreis door de Atlas met een driedaagse stop in Fes, waar ik in een riad gegeten heb dat me langer is bijgebleven dan de meeste sterren-bezoeken in Europa. Slow-cooking op kolen, een mestiyya, brood dat gebakken wordt in een gemeenschappelijke oven.\n\nMet kruidenmix kwam ik thuis terug. Sinds Marokko zit er in mijn keuken altijd een potje ras el hanout waar ik zelf de balans van heb gemaakt. Saffraan, gember, kaneel, geroosterde peper.",
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
    year: 2009,
    mapX: 45,
    mapY: 65,
    intro: {
      en: "A year of volunteer work, somewhere around 2009 and the feeling I was nobody yet. Senegal taught me food doesn't have to be luxury to become a memory.",
      es: "Un año de voluntariado, en algún punto entre 2009 y la sensación de que aún no era nadie. Senegal me enseñó que la comida no tiene que ser un lujo para convertirse en un recuerdo.",
      nl: "Een jaar vrijwilligerswerk, ergens tussen 2009 en het idee dat ik nog niemand was. Hier leerde ik dat eten geen luxe hoeft te zijn om een herinnering te worden.",
    },
    body: {
      en: "Senegal in 2009. A year of volunteer work, alongside Gambia. I was in my early twenties and didn't know yet what I'd end up doing. Let alone that I'd become a cook. Dakar, Saint-Louis, a few roads you won't find on a map.\n\nI'd wander around the market without much purpose. A guy was selling a soft baguette with mayonnaise, a couple of boiled potatoes, a crumbled Maggi cube and some ketchup on top. Strange that something like that still sticks. No Michelin, no technique, no smoked fish. A few-coin sandwich.\n\nBut that's what Senegal teaches you: a good food moment isn't a dish, it's a setting. A market, a man who's been doing this for years, a street louder than you're used to, and you taking a bite. The plate is beside the point.",
      es: "Senegal en 2009. Un año de voluntariado, junto con Gambia. Tenía veintipocos años y todavía no sabía qué iba a hacer. Y menos aún que terminaría siendo cocinero. Dakar, Saint-Louis, unas carreteras que no salen en ningún mapa.\n\nSolía pasearme por el mercado sin un objetivo concreto. Un tipo vendía allí una baguette blanda con mayonesa, un par de patatas cocidas, una pastilla Maggi desmenuzada y un poco de ketchup por encima. Raro que algo así siga ahí. Sin Michelin, sin técnica, sin pescado ahumado. Un bocadillo de unas monedas.\n\nPero eso es lo que Senegal te enseña: un buen momento de comida no es un plato, es una situación. Un mercado, un hombre que lleva años haciéndolo, una calle más ruidosa de lo que conoces, y tú dando un bocado. El plato es lo de menos.",
      nl: "Senegal in 2009. Een jaar vrijwilligerswerk, samen met Gambia. Ik was begin twintig en wist nog niet wat ik later zou doen. Laat staan dat ik kok zou worden. Dakar, Saint-Louis, een paar wegen die je niet op een kaart vindt.\n\nOp de markt liep ik vaak rond, niet om iets specifieks. Een vent verkocht daar een slap stokbroodje met mayo, een paar gekookte aardappelen, een verkruimeld Maggi-blokje en wat ketchup eroverheen. Bizar dat zoiets nog steeds bij blijft. Geen Michelin, geen techniek, geen gerookte vis. Een sandwich van een paar muntjes.\n\nMaar dat is wat Senegal je leert: een goed eet-moment is geen gerecht, het is een omstandigheid. Een markt, een man die het al jaren doet, een straat met meer geluid dan je gewend bent, en jij die hapt. Het bord is bijzaak.",
    },
    pullQuote: {
      en: "A good food moment isn't a dish. It's a setting.",
      es: "Un buen momento de comida no es un plato. Es una situación.",
      nl: "Een goed eet-moment is geen gerecht. Het is een omstandigheid.",
    },
  },
  {
    slug: "gambia",
    name: { en: "The Gambia", es: "Gambia", nl: "The Gambia" },
    country: { en: "Gambia", es: "Gambia", nl: "Gambia" },
    year: 2009,
    mapX: 44.5,
    mapY: 67,
    intro: {
      en: "The same year as Senegal, other side of the river. Building houses for people who didn't have them, and eating out of one bowl every evening.",
      es: "El mismo año que Senegal, al otro lado del río. Construyendo casas para gente que no tenía, y comiendo de un solo cuenco cada noche.",
      nl: "Hetzelfde jaar als Senegal, andere kant van de rivier. Huizen bouwen voor daklozen, en iedere avond uit één kom eten.",
    },
    body: {
      en: "Gambia in 2009, just after Senegal. A few months helping a project that built houses for people without them. No culinary plan, no tourist gaze. Just a table where the same thing happened every evening.\n\nWe ate out of one bowl. All of us. Rice at the bottom, a peanut sauce on top that wasn't sweet like the Western European version. Bitter, deeper, somewhere between earth and chocolate. Dried fish as topping, the kind of fish Europeans would call 'rough'. Here it was what there was.\n\nDomoda and benachin became anchor words in my memory. Not because I'd later cook them. I never make them well. But because they taught me how to share a meal without plates, without courses, without pretence. One bowl, one spoon each, everything at once.",
      es: "Gambia en 2009, justo después de Senegal. Unos meses ayudando en un proyecto que construía casas para gente sin ellas. Sin plan culinario, sin mirada de turista. Solo una mesa donde cada noche pasaba lo mismo.\n\nComíamos de un solo cuenco. Todos. Arroz al fondo, una salsa de cacahuete por encima que no era dulce como la versión de Europa occidental. Amarga, más profunda, en algún punto entre la tierra y el chocolate. Pescado seco como topping, del tipo que en Europa llamaríamos 'rústico'. Aquí era lo que había.\n\nDomoda y benachin se convirtieron en palabras-ancla en mi memoria. No porque las fuera a cocinar más adelante. Nunca me salen bien. Sino porque me enseñaron a compartir una comida sin platos, sin pases, sin pretensiones. Un cuenco, una cuchara por cabeza, todo a la vez.",
      nl: "Gambia 2009, kort na Senegal. Een paar maanden helpen bij een project dat huizen bouwde voor mensen die er geen hadden. Geen culinair plan, geen toeristische blik. Wel een tafel waar iedere avond hetzelfde gebeurde.\n\nWe aten uit één kom. Allemaal. Rijst onderin, een pinda-saus eroverheen die niet zoet was zoals de West-Europese versie. Bitter, dieper, ergens tussen aarde en chocolade. Gedroogde vis als topping, het soort vis dat je in Europa als 'rauwheid' zou bestempelen. Hier was het wat er was.\n\nDomoda en benachin werden ankerwoorden in m'n geheugen. Niet omdat ik ze later zou maken. Ik maak ze nooit goed. Maar omdat ze me leerden hoe je een maaltijd kunt delen zonder borden, zonder gangen, zonder pretenties. Eén kom, één lepel per persoon, alles tegelijk.",
    },
    pullQuote: {
      en: "One bowl, one spoon each. A table without pretence.",
      es: "Un cuenco, una cuchara por cabeza. Una mesa sin pretensión.",
      nl: "Eén kom, één lepel per persoon. Een tafel zonder pretentie.",
    },
  },

  // ── Far afield ─────────────────────────────────────────────────────
  {
    slug: "verenigde-staten",
    name: { en: "United States", es: "Estados Unidos", nl: "Verenigde Staten" },
    country: { en: "USA", es: "EE.UU.", nl: "USA" },
    year: 2022,
    mapX: 19,
    mapY: 36,
    intro: {
      en: "Los Angeles in 2022. A few weeks of eating as work, and the honest verdict: not my kitchen.",
      es: "Los Ángeles en 2022. Unas semanas de comer como trabajo, y la conclusión honesta: no es mi cocina.",
      nl: "Los Angeles in 2022. Een paar weken eten als werk, en de eerlijke conclusie: niet mijn keuken.",
    },
    body: {
      en: "LA, 2022. A few weeks of eating. Restaurants, food trucks, an attempt to figure out where the American west-coast kitchen actually lived. Walked in open-minded, walked out with a direct opinion.\n\nEverything is greasy. Everything is dirty, in the way a burger from a windowless truck is supposed to be dirty. Everything is sloppy. Portions that don't make sense, sauces that run more across the plate than sit on it, an endless stack of toppings European chefs would argue over. Fun once. Twice, also. Three weeks in, it was enough.\n\nNot my kitchen, I wrote in the notebook. No judgement on the people who do live in it. I get the pull. But my taste runs to fewer plates, smaller portions, more space per bite. LA is loud, and eating there is loud too. Some people live on that volume knob. I don't.",
      es: "LA, 2022. Unas semanas comiendo. Restaurantes, food trucks, un intento de entender dónde estaba realmente la cocina de la costa oeste americana. Entré con la mente abierta y salí con una opinión clara.\n\nTodo es grasiento. Todo es sucio, de la manera en que una hamburguesa de un camión sin ventanas se supone que tiene que ser sucia. Todo es desordenado. Raciones que no cuadran, salsas que se escapan del plato más que se quedan en él, un montón infinito de toppings sobre los que los chefs europeos discutirían. Divertido una vez. Dos veces, también. Tres semanas después, ya era suficiente.\n\nNo es mi cocina, escribí en el cuaderno. Sin juzgar a quienes sí viven en ella. Entiendo el atractivo. Pero mi gusto va a menos platos, raciones más pequeñas, más espacio por bocado. LA es ruidosa, y comer allí también lo es. Hay gente que vive en ese volumen alto. Yo no.",
      nl: "LA, 2022. Een paar weken eten. Restaurants af, food trucks af, een poging om te begrijpen waar de Amerikaanse west-coast keuken zat. Ik kwam binnen met een open mind en ging weg met een directe mening.\n\nAlles is vettig. Alles is vies, op de manier waarop een burger uit een raamloze truck vies hoort te zijn. Alles is slordig. Porties die niet kloppen, sauzen die meer over het bord lopen dan in zitten, een eindeloze stapel toppings waar Europese chefs over zouden discussiëren. Het is leuk een keer. Twee keer ook. Maar drie weken eraan vond ik genoeg.\n\nNiet mijn keuken, schreef ik in m'n schrift. Geen oordeel over mensen die het wel zijn. Ik begrijp de aantrekkingskracht. Maar mijn smaak gaat naar minder borden, kleinere porties, meer rust per hap. LA is luid, en eten daar is ook luid. Sommige mensen leven op die volumeknop. Ik niet.",
    },
    pullQuote: {
      en: "Not every country needs to be your kitchen. Being honest about what you taste is enough.",
      es: "No todo país tiene que ser tu cocina. Ser honesto con lo que pruebas ya es suficiente.",
      nl: "Niet elk land hoeft jouw keuken te zijn. Eerlijk zijn over wat je proeft is genoeg.",
    },
    polaroids: [
      {
        src: "/images/polaroids/santamonica-losangeles.jpeg",
        alt: { en: "Santa Monica, Los Angeles", es: "Santa Mónica, Los Ángeles", nl: "Santa Monica, Los Angeles" },
        caption: { en: "Santa Monica", es: "Santa Mónica", nl: "Santa Monica" },
      },
    ],
  },
  {
    slug: "japan",
    name: { en: "Japan", es: "Japón", nl: "Japan" },
    country: { en: "Japan", es: "Japón", nl: "Japan" },
    year: 2024,
    mapX: 86,
    mapY: 40,
    intro: {
      en: "Tokyo, Kyoto, Osaka, Yokohama. Two and a half weeks in 2024. And the realisation I want to be buried in Japan.",
      es: "Tokio, Kioto, Osaka, Yokohama. Dos semanas y media en 2024. Y la sensación de que quiero ser enterrado en Japón.",
      nl: "Tokyo, Kyoto, Osaka, Yokohama. Twee en een halve week in 2024. En het besef dat ik mijn lichaam in Japan begraven wil hebben.",
    },
    body: {
      en: "Two and a half weeks, four cities, one continent. Tokyo for the complexity, Kyoto for the silence, Osaka for the street food, Yokohama for the port districts that never make the guidebook. A country that teaches you something new every day without ever overwhelming.\n\nThe food moment that stays isn't one dish. It's everything. A five-yen ramen you taste for an hour afterwards. A sushi counter where the chef remembers your name after one visit. A convenience-store onigiri better than most European 'gourmet' sandwiches. A thirteen-course kaiseki where every course tells a season. A coffee in Yokohama you hold with two hands because you feel you need to hold it for a moment.\n\nJapan is the only country where every meal taught me something new. Not just about the dish, about the idea of eating. Less per portion, more meaning per bite. A knife isn't a tool, it's a stance. An ingredient isn't something you work on, it's something you stand for.",
      es: "Dos semanas y media, cuatro ciudades, un continente. Tokio por la complejidad, Kioto por el silencio, Osaka por la comida callejera, Yokohama por los barrios portuarios que no salen en las guías. Un país que te enseña algo nuevo cada día sin abrumarte.\n\nEl momento de comida que se queda no es un plato. Son todos. Un ramen de cinco yenes que te resuena durante una hora. Una barra de sushi donde el chef se acuerda de tu nombre después de una sola visita. Un onigiri de tienda de conveniencia mejor que la mayoría de bocadillos 'gourmet' europeos. Un kaiseki de trece pases donde cada uno cuenta una estación. Un café en Yokohama que sostienes con dos manos porque sientes que tienes que sostenerlo un momento.\n\nJapón es el único país donde cada comida me enseñó algo nuevo. No solo del plato, sino de la idea de comer. Menos por ración, más sentido por bocado. Un cuchillo no es una herramienta, es una postura. Un ingrediente no es algo sobre lo que trabajas, es algo por lo que apuestas.",
      nl: "Twee en een halve week, vier steden, één continent. Tokyo voor de complexiteit, Kyoto voor de stilte, Osaka voor het straatvoer, Yokohama voor de havenwijken die nooit het toeristengidsje halen. Een land dat je elke dag iets nieuws leert zonder dat het ooit te veel wordt.\n\nHet eet-moment dat blijft is geen specifiek gerecht. Het is alles. Een ramen van vijf yen die je een uur lang nasmaakt. Een sushi-counter waar de chef je naam onthoudt na één bezoek. Een conbini-onigiri die beter is dan de meeste Europese 'gourmet' broodjes. Een kaiseki van dertien gangen waar elke gang een seizoen vertelt. Een kop koffie in Yokohama die je met twee handen vasthoudt omdat je voelt dat 'm even moet vasthouden.\n\nJapan is het enige land waar ik bij elke maaltijd iets nieuws leerde, niet alleen over het gerecht maar over het idee van eten. Minder per portie, meer betekenis per hap. Een mes is geen gereedschap, het is een houding. Een ingrediënt is niet iets dat je bewerkt, het is iets waar je voor gaat staan.",
    },
    pullQuote: {
      en: "If I die, bring my body to Japan. Bury me there.",
      es: "If I die, bring my body to Japan. Bury me there.",
      nl: "If I die, bring my body to Japan. Bury me there.",
    },
    polaroids: [
      {
        src: "/images/polaroids/japan-kyoto.jpeg",
        alt: { en: "At Kinkaku-ji, the Golden Pavilion in Kyoto", es: "En Kinkaku-ji, el Pabellón Dorado de Kioto", nl: "Bij Kinkaku-ji, het Gouden Paviljoen in Kyoto" },
        caption: { en: "Kinkaku-ji, Kyoto", es: "Kinkaku-ji, Kioto", nl: "Kinkaku-ji, Kyoto" },
      },
      {
        src: "/images/polaroids/japan-yokohama.jpeg",
        alt: { en: "Eating ramen in Yokohama", es: "Comiendo ramen en Yokohama", nl: "Ramen eten in Yokohama" },
        caption: { en: "Ramen, Yokohama", es: "Ramen, Yokohama", nl: "Ramen, Yokohama" },
      },
    ],
    clip: {
      src: "/videos/old-lady-yokohama.mp4",
      alt: { en: "An old woman cooking in a small Yokohama kitchen", es: "Una anciana cocinando en una pequeña cocina de Yokohama", nl: "Een oude vrouw die kookt in een kleine Yokohama-keuken" },
      caption: { en: "A grandmother's kitchen, Yokohama", es: "La cocina de una abuela, Yokohama", nl: "De keuken van een oma, Yokohama" },
    },
  },
];
