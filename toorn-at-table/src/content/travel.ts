import type { TravelLocation } from "@/lib/types";

/**
 * Concept travel blogs — 27 visited countries with short Nick-voiced text.
 * All entries are placeholders until Nick edits them. Replace `intro` /
 * `body` / `pullQuote` per location to refine; remove the body to demote
 * a location to a plain marker.
 *
 * Coordinates are percentages of the 1400×640 atlas viewBox (top-left
 * anchored). `mapX` 0 = far west, 100 = far east; `mapY` 0 = north pole,
 * 100 = antarctic. Tweak in tandem with the atlas when shapes shift.
 */
export const travelLocations: TravelLocation[] = [
  // ── Home + Western Europe ──────────────────────────────────────────
  {
    slug: "nederland",
    name: "Nederland",
    country: "Nederland",
    year: 1989,
    mapX: 50,
    mapY: 28,
    intro:
      "Waar het begon. Amsterdamse keukens, lange winters en het idee dat eten zoals het is genoeg moet zijn.",
    body: "Acht jaar in een keuken in de Negen Straatjes en daarna de Michelin-jaren. Hier leerde ik discipline, hier leerde ik wat een goed bord is, en hier ontdekte ik halverwege dat ik weg wilde — niet uit Nederland, maar uit dat tempo.\n\nIk kom nog graag terug voor een paar dagen. Een goede haring op de Albert Cuyp, oude vrienden, een wandeling door de Jordaan. Dan weer terug naar de zon.",
    pullQuote: "Het begon hier en het hoorde altijd al ergens anders thuis.",
  },
  {
    slug: "belgie",
    name: "België",
    country: "België",
    year: 2012,
    mapX: 49.5,
    mapY: 30,
    intro:
      "Antwerpen voor de mosselen, Brussel voor de bieren, Gent voor de markt op zaterdagochtend.",
    body: "De Belgen begrijpen iets dat wij vaak vergeten — dat eenvoud een vak is. Een schaal frietjes, een glas trappist, een tafel waar je vier uur kunt zitten zonder dat iemand het je kwalijk neemt.\n\nIk leerde er ook bouillonnen trekken die echt iets zeggen. Vlees met been, koud water, geduld.",
  },
  {
    slug: "luxemburg",
    name: "Luxemburg",
    country: "Luxemburg",
    year: 2014,
    mapX: 50.2,
    mapY: 31,
    intro: "Eén weekend, één avondje. Vooral een tussenstop op weg naar het zuiden.",
    body: "Het Moezeldal aan beide kanten van de grens is de moeite waard — witte wijn die de oever volgt, restaurants waar je in dezelfde zin Duits, Frans en iets daartussen hoort.",
  },
  {
    slug: "duitsland",
    name: "Duitsland",
    country: "Duitsland",
    year: 2013,
    mapX: 52,
    mapY: 29,
    intro:
      "Berlijn voor de keuken, Beieren voor de varkens, het Saargebied voor de wijn.",
    body: "Duitsland heeft een grotere regionale keuken dan de mensen denken. Een Schwabische Maultaschen in Stuttgart, een Sauerbraten in het Rijnland, een vis uit het Bodenmeer in Konstanz — allemaal verschillende landen op één bord.\n\nIn Berlijn at ik een week alleen maar dönerkebab en kwam terug met betere ideeën dan na vier dagen Michelin-restaurants.",
  },
  {
    slug: "frankrijk",
    name: "Frankrijk",
    country: "Frankrijk",
    year: 2015,
    mapX: 49,
    mapY: 33,
    intro:
      "Lyon, drie weken stage. Daar leerde ik dat boter een werkwoord is.",
    body: "Ik liep mee in een brigade die de helft was van wat een normale brigade is, en die werkte twee keer zo hard. Het was er ook bij dat ik leerde wat duidelijk plateren is — niets meer op het bord dan strikt nodig.\n\nNa Lyon: Parijs, Provence, een week in Bordeaux met een sommelier die elk glas serveerde alsof het een biecht was. Frankrijk leert je vooral dingen die je daarna niet meer mag verleren.",
    pullQuote: "Een Franse keuken is een keuken waar niemand zich haast — behalve als het echt moet.",
  },
  {
    slug: "zwitserland",
    name: "Zwitserland",
    country: "Zwitserland",
    year: 2016,
    mapX: 51,
    mapY: 33,
    intro: "Bergen, hardere kazen dan ik gewend was, en koks die niets te bewijzen hebben.",
    body: "Een paar dagen in Sion, een lange middag in Lausanne, een nacht in een chalet ergens boven Verbier waar de eigenaar zelf raclette schraapte. Geen sjieke restaurants nodig — de bergkeuken is goed genoeg.",
  },
  {
    slug: "oostenrijk",
    name: "Oostenrijk",
    country: "Oostenrijk",
    year: 2016,
    mapX: 53,
    mapY: 33,
    intro:
      "Wenen voor de koffiehuizen, Salzburg voor de stilte, de Wachau voor de Grüner Veltliner.",
    body: "Wenen is een stad voor mensen die graag lang zitten. Een Sachertorte bij het Café Sperl, daarna naar de Naschmarkt, daarna naar een Beisl waar de Tafelspitz nog op de oude manier wordt geserveerd. Drie maaltijden, één wandeling.",
  },
  {
    slug: "tsjechie",
    name: "Tsjechië",
    country: "Tsjechië",
    year: 2018,
    mapX: 53.5,
    mapY: 30,
    intro: "Praag op een grijze november — donker bier, donker brood, donkere middagen.",
    body: "Het is een keuken die heel zwaar lijkt en het ook is, maar in november klopt het. Knedlíky, svíčková, een goed glas pilsner waar je werkelijk dorst van krijgt in plaats van het tegenovergestelde.\n\nIk leerde er dat een echte donkere bouillon niet alleen langer trekt — je rookt 'm in een houtoventje ergens halverwege.",
  },
  {
    slug: "hongarije",
    name: "Hongarije",
    country: "Hongarije",
    year: 2019,
    mapX: 54.5,
    mapY: 33,
    intro: "Budapest, paprika, een goulash die mijn idee van een soep opnieuw vertaalde.",
    body: "De échte paprika komt uit Kalocsa of Szeged — zoet, gerookt, met een rangschikking die ik in geen enkel supermarktblik ben tegengekomen. Ik ga er nog steeds langs als ik in de buurt ben.\n\nHongaarse keuken is verrassend zacht voor wat er allemaal aan smaak in zit. Een halászlé in een csárda aan de Donau, op een avond dat het waait — daar zou ik vaker willen zitten.",
  },
  {
    slug: "roemenie",
    name: "Roemenië",
    country: "Roemenië",
    year: 2020,
    mapX: 56.5,
    mapY: 33,
    intro: "Transsylvanië in de zomer. Heuvels, hooi, schapen, herinneringen aan koken bij open vuur.",
    body: "We bleven een week in een dorp boven Sibiu, sliepen in een gîte van een familie die hun eigen worst maakte. De ciorbă de burtă is een gewenningssoep — je hoeft 'm niet te begrijpen om door te eten.\n\nIk nam een receptje voor gevulde koolrolletjes mee die ik hier nog steeds maak als ik comfortfood wil dat geen pasta is.",
  },

  // ── British Isles ──────────────────────────────────────────────────
  {
    slug: "uk",
    name: "United Kingdom",
    country: "Verenigd Koninkrijk",
    year: 2014,
    mapX: 47.5,
    mapY: 25,
    intro:
      "Londen op zijn best — Borough Market op zaterdagochtend, een gastro pub in Bermondsey 's avonds.",
    body: "Brits eten heeft een herwaardering doorgemaakt die niemand zag aankomen en die we onderschat hebben. St. John, The Quality Chop House, Brawn — koks die durven simpel te doen op een schaal waar dat niet meer mag.\n\nIk leerde er ook nose-to-tail eten op een manier die ik daarvoor alleen theoretisch begreep. Lamsschouder, niertjes, hart — niets weggooien, alles smaakt naar iets als je het maar geduldig genoeg behandelt.",
    pullQuote: "Een Engelse pub-keuken is verraderlijk goed als de chef weet wat 'ie wil.",
  },
  {
    slug: "ierland",
    name: "Ierland",
    country: "Ierland",
    year: 2017,
    mapX: 45,
    mapY: 26,
    intro:
      "West-Ierland, een lange wandeling langs de Wild Atlantic Way en oesters die je dezelfde ochtend zelf uit het water plukt.",
    body: "Ierland heeft de béste boter ter wereld — dat is geen patriottisch sentiment van mij, het is gewoon zo. Het is groener gras, vettere koeien, een geur die je in elke pannenkoek terugproeft.\n\nMet de jongens van een visserij in Galway op zee geweest en daarna lams-stew gegeten in een pub waar de turf-rook in de muren zat. Een ander land dan ik me had voorgesteld.",
  },

  // ── Nordics ────────────────────────────────────────────────────────
  {
    slug: "denemarken",
    name: "Denemarken",
    country: "Denemarken",
    year: 2018,
    mapX: 52,
    mapY: 23,
    intro:
      "Kopenhagen — een week dat ik niet meer wilde dat het ophield.",
    body: "Ik ging vooral om te kijken hoe een keuken werkt die fermenteren niet als trend maar als gereedschap behandelt. Was bij Amass, een avond bij Hart Bageri voor het brood, daarna door naar Refshaleøen voor een nachtelijke ijsje van bramen en zuurdesem.\n\nHet hele bestaan van wat ik nu rook of kort grill, gaat terug op iets wat ik in Kopenhagen voor het eerst goed zag werken.",
    pullQuote: "In Kopenhagen begrijp je dat fermenteren niet eng is — het is gewoon tijd nemen.",
  },
  {
    slug: "zweden",
    name: "Zweden",
    country: "Zweden",
    year: 2019,
    mapX: 53.5,
    mapY: 18,
    intro:
      "Stockholm in de zomer, archipel-eilanden, een avond met inktvis en aquavit.",
    body: "De Zweden hebben de fika serieus opgenomen en de hele Westerse wereld kijkt nog mee. Maar er zit ook een hardere keuken onder: gravlax, surströmming als je durft, een goede knäckebröd.\n\nIn de scheren-eilanden gegeten op een terras waar de host zijn eigen rookkast bouwde. Daar leerde ik koud roken zoals je het echt moet doen.",
  },
  {
    slug: "noorwegen",
    name: "Noorwegen",
    country: "Noorwegen",
    year: 2017,
    mapX: 51.5,
    mapY: 17,
    intro: "Lofoten, midwinter, een tafel die op stoort van de zee staat.",
    body: "Daar leerde ik wat echt eerlijke ingrediënten kunnen doen. Een koolvis die 's ochtends nog leefde, een goede aardappel, een klompje boter, zout — meer hoeft het niet te zijn. Door de kou wordt alles helderder, ook de smaak.\n\nIk kwam erachter dat ik koudere klimaten beter aankan dan ik dacht, en dat een goede sherry diezelfde scherpte heeft als een goede aquavit. Andere ingrediënt, hetzelfde idee.",
  },
  {
    slug: "finland",
    name: "Finland",
    country: "Finland",
    year: 2021,
    mapX: 56,
    mapY: 17,
    intro:
      "Helsinki kort, daarna een hut bij een meer in Lapland — vier dagen sauna, donker brood en eend.",
    body: "De Finnen koken anders dan de Scandinaviërs zoals iedereen ze beeldt. Wilder, met meer wild, met meer paddenstoelen die je zelf uit het bos haalt. Een tar-ijsje (jawel) op de markt van Helsinki dat naar harssen smaakte — beter dan het klinkt.\n\nIk neem er nog steeds zwarte peperwortel uit mee, en eens per jaar maak ik een pulla die het bijna haalt bij de echte.",
  },

  // ── Iberia ─────────────────────────────────────────────────────────
  {
    slug: "spanje",
    name: "Spanje",
    country: "Spanje",
    year: 2023,
    mapX: 47,
    mapY: 39,
    intro:
      "Mijn nieuwe thuis. San Sebastián voor de techniek, Andalusië voor de ziel, de Costa del Sol voor de dagelijkse boodschappen.",
    body: "Ik kook nu elke dag in deze keuken en ik leer nog elke week iets nieuws. De olijven uit Jaén, de tomaten uit Almería, de tonijn uit Cádiz die je in een korte ochtend van boot naar markt naar bord ziet komen. Pintxos in Donostia waar je leert dat één hap genoeg moet zijn om je iets te laten herinneren.\n\nHet voelt soms alsof ik hier altijd al kookte. Dat is denk ik de hoogst mogelijke vorm van een goed match tussen plek en vak.",
    pullQuote: "Spanje is geen vakantie meer — het is wat ik proef voor ik nadenk.",
  },
  {
    slug: "portugal",
    name: "Portugal",
    country: "Portugal",
    year: 2022,
    mapX: 45.5,
    mapY: 40,
    intro:
      "Lissabon, Porto, daarna langs de oostkust naar een dorpje waar bacalhau geserieerd werd op vijf manieren in vijf dagen.",
    body: "Portugal is een keuken van diepe simpelheid en die hou ik vol. Sardines op brood, een goede caldo verde, een glas vinho verde dat zo licht is dat je 'm bijna vergeet. En de pastéis natuurlijk — ik heb er zelf een paar serieuze pogingen op gedaan en nooit de échte gehaald.\n\nDe Atlantische kust is ook ruwer dan ik dacht. Een dag op de Alentejo-kust eindigde met geroosterde inktvis op het strand bij zonsondergang. Geen menu, geen reservering, mijn vingers nog naar zee.",
  },

  // ── Mediterranean ──────────────────────────────────────────────────
  {
    slug: "italie",
    name: "Italië",
    country: "Italië",
    year: 2015,
    mapX: 52,
    mapY: 39,
    intro:
      "Eerst Rome, daarna een zomer in een dorpje boven Bologna waar ik elke ochtend pasta leerde maken.",
    body: "De nonna die mij vier weken in haar keuken duldde, sprak een dialect dat ik niet verstond en kookte met een precisie die ik nooit eerder had gezien. Geen weegschaal, geen klok, alles op gevoel — en altijd raak. Een tagliatelle al ragù die ik nog niet eens probeer te imiteren.\n\nItalië heeft me twee dingen geleerd: dat verse pasta een ander vak is dan koken, en dat een goede tomaat in juli alles is.",
    pullQuote: "In Italië hoef je nooit iets toe te voegen — alleen iets weg te laten.",
  },
  {
    slug: "vaticaan",
    name: "Vaticaanstad",
    country: "Vaticaan",
    year: 2015,
    mapX: 52.5,
    mapY: 39.6,
    intro:
      "Een ochtend, niet meer. Vinkje op de lijst, koffie in de buurt, daarna door naar Trastevere voor lunch.",
    body: "Niet veel te zeggen over de keuken hier — wel veel over de wandeling eromheen. De échte plek voor pasta zit een paar straten verder.",
  },
  {
    slug: "griekenland",
    name: "Griekenland",
    country: "Griekenland",
    year: 2019,
    mapX: 55.5,
    mapY: 41,
    intro:
      "Een zomer op een klein eiland in de Cycladen waar de tafel pas om half elf 's avonds aanging.",
    body: "Een Griekse keuken kun je niet kopiëren — die hoort bij dat licht, die hitte, die olijfbomen. Maar je kunt wel meenemen wat ze er goed doen: één hoofdingrediënt per gerecht en de rest erbij om die ene tot zijn recht te laten komen.\n\nDe taverna's, een tomatensalade die op niets lijkt en alles is, een octopus die zo lang in de zon hangt voor 'ie de grill op gaat dat het ritueel wordt. Daar mocht ik wat van leren.",
  },
  {
    slug: "turkije",
    name: "Turkije",
    country: "Turkije",
    year: 2018,
    mapX: 58,
    mapY: 42,
    intro:
      "Istanbul — kruidenmarkt, simit op straat, kebabsalon waar de host nog wist hoe het in de jaren tachtig was.",
    body: "Ik was er een week en heb het idee dat ik er vier waar van had moeten zijn. De brug tussen Europa en Azië in elke hap — en de manier waarop ze met kruiden omgaan veranderde mijn gedachten over wat een goede marinade is.\n\nIk neem regelmatig stukjes Istanbul mee in een gerecht: een snufje sumak op een tomaat, ras el hanout in plaats van gewone peper, granaatappelsiroop op een gegrilde aubergine.",
  },

  // ── Africa ─────────────────────────────────────────────────────────
  {
    slug: "marokko",
    name: "Marokko",
    country: "Marokko",
    year: 2023,
    mapX: 47,
    mapY: 47,
    intro:
      "Marrakech in mei. De souk, de geuren, de manier waarop je heel snel leert wat een goede tagine van een toeristen-tagine onderscheidt.",
    body: "Een rondreis door de Atlas met een driedaagse stop in Fes, waar ik in een riad gegeten heb dat me langer is bijgebleven dan de meeste sterren-bezoeken in Europa. Slow-cooking op kolen, een mestiyya, brood dat gebakken wordt in een gemeenschappelijke oven.\n\nMet kruidenmix kwam ik thuis terug. Sinds Marokko zit er in mijn keuken altijd een potje ras el hanout waar ik zelf de balans van heb gemaakt — saffraan, gember, kaneel, geroosterde peper.",
    pullQuote: "Een tagine is geen pan. Het is een filosofie over hoe lang je iets met rust laat.",
  },
  {
    slug: "senegal",
    name: "Senegal",
    country: "Senegal",
    year: 2024,
    mapX: 45,
    mapY: 65,
    intro:
      "Dakar, een week, daarna langs de kust naar Saint-Louis. West-Afrika is dichterbij dan we denken en compleet anders dan we ons voorstellen.",
    body: "Thiéboudienne, het nationale gerecht, is de allerbeste vis-en-rijst-keuken ter wereld als 'ie goed gemaakt wordt — en in Senegal kun je 'm op tien plekken op een dag eten zonder dat je twee keer hetzelfde proeft. Roodachtige rijst, geconfijte tomaat, vis die met een eigen kruidenpasta gevuld is.\n\nDe vismarkt in Soumbedioune in de vroege ochtend was de meest indrukwekkende markt die ik ooit zag. Vier uur lang stond ik daar.",
  },
  {
    slug: "gambia",
    name: "The Gambia",
    country: "Gambia",
    year: 2024,
    mapX: 44.5,
    mapY: 67,
    intro:
      "Drie dagen langs de Gambia-rivier — kleiner dan Senegal, andere keuken, dezelfde warmte.",
    body: "Vis uit de rivier in plaats van uit zee, scherpere pepers, een pinda-saus die ik nog niet helemaal door heb. Domoda, benachin — namen om in mijn schriftje bij te houden voor latere gerechten.",
  },

  // ── Far afield ─────────────────────────────────────────────────────
  {
    slug: "verenigde-staten",
    name: "Verenigde Staten",
    country: "USA",
    year: 2016,
    mapX: 19,
    mapY: 36,
    intro:
      "New York en Brooklyn, een paar weken eten alsof het mijn werk was — wat het ook was.",
    body: "Het Amerikaanse 'farm-to-table' was destijds op haar hoogtepunt en ik liep mee in een keuken in Bushwick waar elke leverancier op naam genoemd werd. Goed product, ingewikkelde sauzen, een tempo waar ik geen schoenen voor had.\n\nWat ik vooral meenam: hoe je een serviceploeg leidt zonder agressie. Veel Amerikaanse keukens werken al langer met een ander toon dan veel Europese, en ik probeer dat hier door te trekken.",
  },
  {
    slug: "japan",
    name: "Japan",
    country: "Japan",
    year: 2022,
    mapX: 86,
    mapY: 40,
    intro:
      "Tokyo en Kyoto, twee en een halve week, en het gevoel dat ik tien jaar terug had moeten beginnen.",
    body: "Japan veranderde meer aan hoe ik kook dan welk Europees land ook. Niet alleen het mes, ook het mes-besef. Niet alleen de ingrediënten, ook het idee dat een ingrediënt belangrijk genoeg is om verder niets te doen.\n\nIk at een avond een kaiseki van dertien gangen waar elke gang me iets vertelde over seizoen, plaats en techniek. Sindsdien probeer ik kleinere borden te maken — minder per portie, meer betekenis per hap.",
    pullQuote: "In Japan begrijp je dat 'genoeg' het hoogste doel is — niet 'genoeg geweest'.",
  },
];
