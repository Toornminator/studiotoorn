import type { Dictionary } from "../types";

/**
 * Dutch copy. The original voice all current components were written
 * against. Kept so Dutch-speaking visitors can read the site in the
 * language Nick actually uses to talk and write.
 */

export const nl: Dictionary = {
  nav: {
    aboutNick: "Over Nick",
    services: "Diensten",
    travels: "Reizen",
    cookbook: "Kookboek",
    events: "Events",
    theTable: "Aan de deur",
    contact: "Contact",
    menuOpen: "Menu openen",
    menuClose: "Menu sluiten",
  },
  languageSwitcher: {
    label: "Taal",
  },
  hero: {
    establishedLine: "Private chef · Costa del Sol · Est. 2023",
    tagline:
      "Een fotografenoog. Jaren in dienst. Een sterrenkeuken voor de precisie. Eén tafel in de zon, meer niet.",
    handwrittenNote: "echt eten, met de hand, aan jouw tafel",
    scrollCue: "scroll",
  },
  about: {
    eyebrow: "Hoofdstuk 01 · Over Nick",
    headlineLine1: "Een keuken,",
    headlineLine2: "een camera,",
    headlineLine3: "een nieuwe tafel.",
    body1:
      "Ik ben Nick. Zesendertig. Geboren in Zwolle, jeugd deels in België en Duitsland, school afgerond in Groningen. De keuken vond me pas laat. Eerst drie jaar bij de Marechaussee. Daarna een jaar vrijwilligerswerk in Gambia.",
    body2:
      "Pas op mijn zesentwintigste ben ik voluit gegaan. Begonnen aan de koude kant van een keuken. Daarna een jaar in de patisserie van Bord'eau, Hotel de L'Europe, onder Bas van Kranen. Het jaar dat me leerde wat discipline echt is. De camera was er al eerder, achttien. Dezelfde discipline, ander gereedschap.",
    body3:
      "Sinds 2023 kook ik privé aan de Costa del Sol. Discipline uit het uniform. Precisie uit de sterrenkeuken. Rust uit Andalusië. Alles samen aan één tafel. Echt eten, met de hand gemaakt.",
    chip1: "Sterrenkeuken-getraind · Bord'eau, Amsterdam",
    chip2: "Portret- en straatfotograaf",
    chip3: "Private chef sinds 2023",
    portraitCaption: "Nick Toorn · 36",
  },
  timeline: {
    eyebrow: "Hoofdstuk 02 · De Tijdlijn",
    title:
      "Hoe een Hollandse keukenjongen aan een tafel in Andalusië belandde.",
    chapterPrefix: "Hfdstk",
  },
  marginalia: {
    warningPrefix: "let op ",
    wrongPrefix: "ging mis ",
  },
  services: {
    eyebrow: "Diensten · Wat je kunt boeken",
    title: "Vier manieren om aan tafel te zitten.",
    intro:
      "Geen vaste tarieven. Alles op maat. Hieronder de vorm; de invulling bespreken we samen.",
    cards: {
      privateDinner: {
        eyebrow: "Aan jouw tafel",
        title: "Private dinner",
        body:
          "Ik kook bij jou thuis of in je villa. Eén avond, één tafel, één menu dat we vooraf samen vastleggen. Van inkoop tot uitserveren tot opruimen. Jij ontvangt je gasten en houdt je glas vast.",
        cta: "Plan een avond",
      },
      villaTakeover: {
        eyebrow: "Een vaste chef voor een week",
        title: "Villa takeover",
        body:
          "Een hele week op locatie. Diners, en lunches of ontbijten waar gewenst. Ik beweeg mee in het ritme van het gezelschap: één avond rauw vuur, een ander een Italiaans dorps-menu, alles vers van de markt.",
        cta: "Boek een week",
      },
      workshops: {
        eyebrow: "Hands-on in mijn tempo",
        title: "Kookworkshops",
        body:
          "Klein gezelschap, jouw keuken of de mijne. Eén gerecht of een hele line-up, alles meelopend met de seizoenen. Wat ik je leer: techniek bovenal. Een goede basis maakt elke avond beter.",
        cta: "Vraag aan",
      },
      events: {
        eyebrow: "Door Nick georganiseerd",
        title: "Eigen events",
        body:
          "Diners die ik zelf organiseer: een vuurplaats-avond op een finca, een olijfboomgaard-tafel, een Dining under the Stars op het strand. Open inschrijving, kleine groep, telkens een andere plek.",
        cta: "Bekijk de agenda",
      },
    },
  },
  stats: {
    countriesLabel: "Landen bezocht",
    countriesSubline: "Van San Sebastián tot Tokio.",
    yearsLabel: "Jaar in het vak",
    yearsSubline: "Sinds mijn 26e. Geen jaar eerder.",
    tablesLabel: "Tafels per maand",
    tablesSubline: "Klein gehouden, met opzet.",
  },
  travel: {
    eyebrow: "Hoofdstuk 03 · Reizen",
    title: "27 stempels, 27 keukens die mij iets bijbrachten.",
    intro:
      "Tik op elke stempel voor het verhaal. Elke keuken had zijn les. Elk bord liet een spoor achter.",
    emptyState: "Nog geen reisstempels. Komt binnenkort.",
    legendTotal: "{count} stempels · {featured} verhalen",
    legendWithStory: "met verhaal",
    legendVisited: "alleen geweest",
    tapHint: "Tik om te lezen",
    overlayPlaceholder:
      "Geweest. Verhaal volgt. Nick werkt aan een korte blog over deze plek.",
    overlayEyebrow: "Reizen",
    cursorReadStory: "Lees verhaal",
    stampAlt: "{name} reisstempel",
    visitedInYear: ", bezocht {year}",
  },
  cookbookTeaser: {
    eyebrow: "Vers uit de keuken",
    title: "Een voorproefje van wat ik maak.",
    cta: "Bekijk het hele kookboek",
  },
  cookbook: {
    eyebrow: "Hoofdstuk 04 · Het Kookboek",
    title:
      "Recepten die ik thuis maak. Eerlijke producten, simpele techniek, Spaanse zon.",
    intro:
      "Een klein, groeiend kookboek. Pak er een avond een uit, kook voor wie je liefhebt, drink er iets bij dat er volgens mij bij past.",
    filtersCategory: "Categorie",
    filtersSeason: "Seizoen",
    categoryAll: "Alle",
    categoryStarter: "Voor",
    categoryMain: "Hoofd",
    categorySide: "Bij",
    categoryDessert: "Dessert",
    categoryDrink: "Borrel",
    categoryBasic: "Basis",
    seasonAll: "Hele jaar",
    seasonSpring: "Lente",
    seasonSummer: "Zomer",
    seasonAutumn: "Herfst",
    seasonWinter: "Winter",
    resultsOne: "recept",
    resultsMany: "recepten",
    noResults: "Geen recepten in deze combinatie. Probeer een andere filter.",
    overlayIngredients: "Ingrediënten",
    overlayMethod: "Bereiding",
    overlayTotalTime: "Tijd totaal",
    overlayServes: "Voor",
    overlayServesUnit: "personen",
    overlayDifficulty: "Moeilijkheid",
    overlayPairing: "Erbij",
    cursorOpen: "Open recept",
    share: "Delen",
    shareCopied: "Link gekopieerd",
  },
  events: {
    eyebrow: "Hoofdstuk 05 · Events",
    title: "Komende dinners. Open tafels, korte gastenlijsten.",
    intro:
      "Een paar keer per maand kook ik aan een lange tafel waar je een plek kunt boeken. Kleine gezelschappen, lokale producten, telkens een andere plek aan de Costa.",
    emptyState:
      "Geen geplande events op dit moment. Schrijf je in voor de nieuwsbrief om als eerste te horen wanneer de volgende erbij komt.",
    soldOut: "Volgeboekt",
    onRequest: "Op aanvraag",
    spotsSuffix: "plekken",
    spotsAvailable: "beschikbaar",
    openLabel: "Open",
    bookCta: "Reserveer een plek",
    responseTime: "Reactie binnen 24 uur",
    soldOutNote:
      "Volgeboekt. Schrijf je in voor de nieuwsbrief voor de volgende",
    overlayEyebrow: "Event",
    overlayLocation: "Locatie",
    overlayCity: "Stad",
    overlayPricePer: "Prijs p.p.",
    overlaySpots: "Plekken",
    overlayMax: "max",
    overlayFrom: "vanaf",
    cursorBook: "Boek plek",
    cursorSoldOut: "Volgeboekt",
  },
  closing: {
    eyebrow: "Tussenrust",
    quoteLine1: "Echt eten, met de hand,",
    quoteLine2: "aan jouw tafel.",
    signature: " Nick",
    ctaIntro: "Wil je aan tafel?",
    ctaButton: "Plan een diner",
    ctaNote: "Reactie binnen 24 uur",
  },
  contact: {
    eyebrow: "Hoofdstuk 06 · Aan tafel",
    title: "Vertel me wat je in gedachten hebt. Ik denk binnen een dag mee.",
    intro:
      "Een private dinner aan huis. Een villa-week. Een verjaardag. Iets heel anders. Alles past, als de tafel maar belangrijk is. Hoe meer je me vertelt, hoe scherper het eerste voorstel.",
    directEyebrow: "Direct",
    directWhatsApp: "WhatsApp",
    directBase: "Basis",
    baseValue: "Costa del Sol, Spanje",
    form: {
      nameLabel: "Je naam *",
      emailLabel: "Email *",
      phoneLabel: "Telefoon (optional)",
      typeLabel: "Wat heb je in gedachten? *",
      typePlaceholder: "Kies een type",
      types: {
        privateDinner: "Private dinner aan huis",
        villaTakeover: "Villa takeover (meerdere dagen)",
        eventTicket: "Plek op een open event",
        other: "Iets anders",
      },
      dateLabel: "Datum (indien al bekend)",
      guestsLabel: "Aantal gasten",
      locationLabel: "Locatie / stad",
      locationPlaceholder:
        "Bv. Marbella, eigen villa in Estepona, een Airbnb in Mijas…",
      messageLabel: "Wat speelt er? *",
      messagePlaceholder:
        "Wat is de aanleiding, met wie, wat verwacht je van de avond, eventuele dieetwensen, budget-indicatie als je die hebt…",
      submit: "Verstuur aanvraag",
      submitting: "Versturen…",
      privacyNote:
        "We bewaren je gegevens uitsluitend om op je aanvraag te reageren.",
      errors: {
        nameRequired: "Vul je naam in.",
        emailRequired: "Vul een geldig emailadres in.",
        typeRequired: "Kies wat voor avond je in gedachten hebt.",
        messageRequired:
          "Schrijf even een paar zinnen over wat je wil. Wat is de aanleiding, hoeveel gasten, locatie?",
        guestsRange: "Vul een getal tussen 1 en 200 in.",
        dateInvalid: "Geen geldige datum.",
        backendDown:
          "Het versturen lukte niet automatisch. Kun je me direct mailen op info@studiotoorn.com of bellen op +31 6 14 41 21 02?",
      },
      success:
        "Bedankt. Je aanvraag is binnen. Ik reageer binnen 24 uur. Check intussen je inbox voor de bevestiging.",
    },
    cursorSubmit: "Verstuur",
    cursorReserve: "Reserveer",
  },
  footer: {
    newsletterEyebrow: "Brief vanuit de keuken",
    newsletterTitle:
      "Eens per maand een berichtje over wat ik kook, waar ik kook en wat eraan komt.",
    newsletterBody:
      "Geen spam, één klik om uit te schrijven, een receptje per brief. Bevestiging in je inbox.",
    newsletterPlaceholder: "jouw@email.nl",
    newsletterButton: "Schrijf in",
    newsletterStatusBanners: {
      ok: "Bevestigd. Welkom op de lijst.",
      invalid: "Die bevestigingslink werkt niet (meer).",
      error: "Bevestigen lukte niet. Probeer het zo nog eens.",
    },
    newsletterMessages: {
      backendDown:
        "Nieuwsbrief wordt nog opgezet. Mail me direct op info@studiotoorn.com om alvast op de lijst te komen.",
      invalidEmail: "Vul een geldig emailadres in.",
      genericError:
        "Er ging iets mis aan onze kant. Probeer het zo nog eens of mail me direct.",
      alreadySubscribed: "Je staat al op de lijst. Dank!",
      checkInbox:
        "Check je inbox. Er staat een mailtje van me met een bevestigingslink.",
      thanks: "Bedankt. Je staat op de lijst.",
    },
    brandEyebrow: "TOORN at table",
    brandLine1: "Private chef",
    brandLine2: "Costa del Sol",
    contactEmail: "info@studiotoorn.com",
    contactPhone: "+31 6 14 41 21 02",
    sitemapKookboek: "Kookboek",
    sitemapEvents: "Events",
    sitemapContact: "Contact",
    sitemapAbout: "Over Nick",
    copyright: "Alle rechten voorbehouden.",
    madeWith: "Gemaakt met liefde aan de Costa del Sol.",
  },
  preloader: {
    loadingMessage: "Een tafel wordt klaargemaakt",
    locationCaption: "Costa del Sol · Privé chef",
    ariaLabel: "TOORN at table. Een tafel wordt klaargemaakt",
  },
  gallery: {
    eyebrow: "Tussendoor · In de keuken",
    title: "Zo ziet het eruit als de avond loopt.",
    intro:
      "Momenten van vorige tafels. Borden, vuren, handen, uitzichten. Klik om groot te zien.",
    cursorOpen: "Open foto",
    cursorClose: "Sluit",
    cursorPrev: "Vorige",
    cursorNext: "Volgende",
  },
  testimonials: {
    eyebrow: "Aan tafel · Gasten",
    title: "Hoe het is om aan te schuiven.",
    intro:
      "Een handvol avonden, in de woorden van de mensen die er waren. Elke quote is echt, getoond met toestemming van de gast.",
    tablesServed: "privétafels",
    cta: "Plan jouw avond",
    invitation: "En die van jou? De volgende tafel staat klaar.",
  },
  faq: {
    eyebrow: "Voordat je schrijft · Vragen",
    title: "Wat mensen het eerst vragen.",
    intro:
      "Rechttoe rechtaan antwoorden, zodat je weet waar je staat voor je een woord stuurt.",
    items: [
      {
        q: "Wat kost het?",
        a: "Alles is op maat, dus er is geen vaste prijslijst. Vertel me de vorm van je avond en ik stuur binnen een dag een eerste voorstel, met een prijs. Daarna geen verrassingen.",
      },
      {
        q: "Waar kook je?",
        a: "Bij jou thuis of in je villa, overal aan de Costa del Sol. Marbella, Estepona, Sotogrande, Benahavís, Mijas, Málaga en omstreken. Verder weg op aanvraag.",
      },
      {
        q: "Allergieën en diëten?",
        a: "Laat het weten bij de boeking en ik bouw het menu eromheen. Heeft een gast een allergie die ik niet veilig kan garanderen, dan zeg ik het eerlijk in plaats van het risico te nemen.",
      },
      {
        q: "Moet ik zelf iets voorbereiden?",
        a: "Nee. De boodschappen, het koken, het uitserveren, de afwas, allemaal van mij. Jij ontvangt je gasten en houdt je glas vast. Je wordt wakker met een schonere keuken dan je 'm achterliet.",
      },
      {
        q: "Hoe boek ik, en hoe ver van tevoren?",
        a: "Stuur de vorm ervan via het formulier, WhatsApp of mail. Ik reageer binnen een dag met een voorstel. De datum staat vast zodra je schriftelijk akkoord gaat en de aanbetaling doet. Goede data gaan snel, dus eerder is veiliger.",
      },
      {
        q: "Aanbetaling en betaling?",
        a: "Dertig procent bij bevestiging, de rest binnen een week na het diner. Bankoverschrijving of kaart. Nette bonnen vanuit een Spaans autónomo-nummer.",
      },
      {
        q: "En als plannen veranderen?",
        a: "Je mag de datum één keer kosteloos verzetten tot 14 dagen ervoor. De volledige annuleringsvoorwaarden staan, in gewone woorden, op de voorwaarden-pagina.",
      },
      {
        q: "Ben je verzekerd?",
        a: "Ja. Ik heb een beroepsaansprakelijkheidsverzekering voor het kookwerk. Jaren in een sterrenkeuken leerden me dat hygiëne en veiligheid niet optioneel zijn.",
      },
      {
        q: "Welke talen spreek je?",
        a: "Engels, Spaans en Nederlands. De avond verloopt in de taal waar jouw tafel, en jouw personeel, zich het prettigst bij voelen.",
      },
    ],
  },
  theEvening: {
    eyebrow: "De avond · Hoe een avond is",
    title: "Een avond aan jouw tafel.",
    intro:
      "Geen bezorging, geen buffet. Eén menu, gemaakt voor de mensen in de kamer, voor hun ogen gekookt.",
    flowHeading: "Hoe de avond loopt",
    flow: [
      {
        title: "We bespreken het",
        body: "Eerst geven we de avond samen vorm. De tafel, de mensen, wat ze geweldig vinden en wat ze niet aanraken.",
      },
      {
        title: "Ik doe die ochtend de markt",
        body: "'s Ochtends naar de markt, wat er die dag uitspringt. Het menu maakt zichzelf af bij de kraam, niet een week ervoor.",
      },
      {
        title: "Open keuken, bij jou thuis",
        body: "Ik kook in het volle zicht. Niet weggestopt achter een deur. De keuken hoort bij de avond, geen achterkamer.",
      },
      {
        title: "Gang na gang, jouw tempo",
        body: "Niets gehaast. De avond beweegt met de tafel, niet met de klok. We stoppen als je vol zit, niet eerder.",
      },
      {
        title: "Je wordt wakker met een schone keuken",
        body: "De boodschappen, het uitserveren, de afwas. Jij houdt je glas vast en ontvangt je gasten. De rest doe ik.",
      },
    ],
    menuHeading: "Een voorbeeldavond",
    menuNote:
      "Een voorbeeld, geen vaste kaart. Elk menu wordt gebouwd rond jouw tafel en de ochtendmarkt.",
    lightsNote: "het licht gaat uit",
    cta: "Plan jouw avond",
    courses: {
      aperitivo: "Om te beginnen",
      starter: "Voorgerecht",
      sea: "Uit de zee",
      main: "Hoofdgerecht",
      dessert: "Om af te sluiten",
    },
  },
  theTable: {
    serviceName: "Toorn aan de deur",
    teaserEyebrow: "Deze week · Arroyo de la Miel",
    teaserSpotsLeft: "plekken over",
    teaserSoldOut: "Deze week vol",
    teaserDeliveryPrefix: "Bezorgd op",
    teaserCta: "Bekijk het menu van deze week",
    metaTitle: "Toorn aan de deur · Arroyo de la Miel",
    metaDescription:
      "Fine dining aan je deur in Arroyo de la Miel. Elke week een nieuw menu, vers gekookt, contant bij levering. Bestel tot twee dagen van tevoren.",
    heroEyebrow: "Toorn aan de deur · Arroyo de la Miel",
    heroTitle: "Fine dining aan je deur.",
    heroIntro:
      "Elke week een nieuw menu, vers gekookt en bij je thuisbezorgd in Arroyo de la Miel. Bestel tot twee dagen van tevoren, betaal contant aan de deur.",
    menuEyebrow: "Het menu van deze week",
    perPerson: "per persoon",
    deliveryDayLabel: "Bezorging",
    orderByLabel: "Bestel voor",
    spotsLeftLabel: "plekken over",
    soldOutLabel: "Deze week vol",
    allergensLabel: "Allergenen",
    howEyebrow: "Hoe het werkt",
    howTitle: "Van mijn deur naar jouw tafel, elke week.",
    steps: [
      {
        title: "Elke week een nieuw menu",
        body: "Ik plaats het menu van de week vroeg. Eén menu, één keer gekookt, goed gedaan.",
      },
      {
        title: "Bestel tot twee dagen ervoor",
        body: "Zeg me hoeveel porties en waar. Bestellen sluit twee dagen voor de bezorging.",
      },
      {
        title: "Ik kook het vers",
        body: "Alles gemaakt op de dag dat het de deur uitgaat. Niets opgewarmd, geen shortcuts.",
      },
      {
        title: "Aan je deur, contant",
        body: "Ik breng het naar je deur in Arroyo de la Miel. Je betaalt contant bij levering.",
      },
    ],
    areaEyebrow: "Waar ik bezorg",
    areaTitle: "Alleen Arroyo de la Miel.",
    areaBody:
      "Dit is de lokale tafel. Ik bezorg binnen Arroyo de la Miel, niet verder. Of je hier nu woont of op bezoek bent maakt niet uit, zolang je een adres in het dorp hebt.",
    form: {
      eyebrow: "Bestellen",
      title: "Bestel het menu van deze week.",
      intro:
        "Vul dit in en ik bevestig binnen de dag via WhatsApp. Betaling is contant aan de deur.",
      nameLabel: "Je naam",
      phoneLabel: "Telefoon (WhatsApp)",
      emailLabel: "E-mail",
      emailOptional: "optioneel",
      addressLabel: "Bezorgadres",
      addressHint: "We bezorgen alleen binnen Arroyo de la Miel.",
      portionsLabel: "Aantal porties",
      timeLabel: "Gewenst bezorgmoment",
      timePlaceholder: "bijv. rond 19:00",
      allergiesLabel: "Allergieën of opmerkingen",
      totalLabel: "Totaal",
      cashNote: "Betaling is contant bij levering.",
      submit: "Verstuur bestelling",
      submitting: "Versturen...",
      success: "Ontvangen. Ik bevestig binnen de dag via WhatsApp.",
      closedTitle: "Bestellen is gesloten voor deze week.",
      closedBody: "Het volgende menu komt begin volgende week online. Kom dan terug.",
      errors: {
        nameRequired: "Je naam, graag",
        phoneRequired: "Een telefoonnummer, zodat ik kan bevestigen",
        addressRequired: "Een adres in Arroyo de la Miel",
        portionsRange: "Tussen 1 en het aantal plekken over",
        backendDown: "Er ging iets mis. Probeer opnieuw, of stuur me een WhatsApp.",
      },
    },
    faqEyebrow: "Goed om te weten",
    faqTitle: "Korte vragen.",
    faqItems: [
      {
        q: "Bezorg je bij mij?",
        a: "Alleen binnen Arroyo de la Miel. Heb je een adres in het dorp, bewoner of op bezoek, dan kan het.",
      },
      {
        q: "Hoe betaal ik?",
        a: "Contant aan de deur bij levering. Geen kaart, geen overschrijving, geen apps.",
      },
      {
        q: "Wanneer sluit bestellen?",
        a: "Twee dagen voor de bezorging. Daarna zit de week op slot zodat ik goed kan inkopen en koken.",
      },
      {
        q: "En als het vol is?",
        a: "Ik zet elke week een max zodat het eten goed blijft. Vol is vol. Het volgende menu komt begin volgende week online.",
      },
      {
        q: "Allergieën?",
        a: "Zet het bij de opmerkingen van je bestelling. Ik werk eromheen wat ik veilig kan en zeg het eerlijk als het niet kan.",
      },
    ],
  },
  nudge: {
    message: "Een avond in gedachten?",
    cta: "Even praten",
    dismiss: "Sluiten",
  },
  marquee: {
    primary: [
      "Costa del Sol",
      "Open keuken",
      "Lange tafels",
      "Lokale producten",
      "Eén gast tegelijk",
    ],
    secondary: [
      "Private dinners",
      "Villa takeovers",
      "Verjaardagen",
      "Eens-in-het-leven momenten",
      "Boekingen open",
    ],
  },
  cookies: {
    eyebrow: "Cookies",
    body: "We gebruiken cookies om bij te houden hoeveel mensen op de site landen en welke pagina's ze lezen. Meer niet. Accepteer en we zien de aantallen. Weiger en we zien niets.",
    linkLabel: "Lees de volledige privacyverklaring",
    accept: "Accepteren",
    reject: "Weigeren",
  },
  legal: {
    columnHeading: "Juridisch",
    privacyLabel: "Privacy",
    termsLabel: "Voorwaarden",
  },
  privacy: {
    eyebrow: "Privacyverklaring",
    title: "Wat we van je weten, en wat niet.",
    lastUpdated: "Laatst bijgewerkt: 25 mei 2026",
    intro:
      "Korte versie: we gebruiken deze site om te praten met mensen die misschien een private dinner willen. We verkopen geen data. We delen niks met adverteerders. We gebruiken het minimum dat we nodig hebben om je terug te schrijven en om te zien hoeveel bezoekers de site vinden. Lange versie hieronder.",
    sections: [
      {
        heading: "Wie achter deze site zit",
        body: [
          "TOORN at table wordt gerund door Nick Toorn, werkzaam als private chef vanaf de Costa del Sol, Spanje. Voor elke privacyvraag of -verzoek kun je me bereiken op info@studiotoorn.com of via WhatsApp op +31 6 14412102.",
          "Ik ben de verwerkingsverantwoordelijke voor alles wat hieronder staat.",
        ],
      },
      {
        heading: "Wat jij ons geeft",
        body: [
          "Contactformulier: naam, e-mail, optioneel telefoonnummer, de datum en vorm van wat je in gedachten hebt, en wat je in het bericht schrijft. Ik gebruik dat om je terug te schrijven en een eerste voorstel op te stellen.",
          "Nieuwsbrief: alleen je e-mailadres en de taal waarin je de site leest. Ik gebruik het om af en toe een dispatch te sturen, en verder niks.",
          "Ik vraag op deze site nooit betaalgegevens. Eventuele facturatie gebeurt via aparte kanalen zodra een boeking definitief is.",
        ],
      },
      {
        heading: "Wat de site zelf verzamelt",
        body: [
          "Analytics: ik gebruik Google Analytics 4 om bezoeken te tellen en te zien welke secties mensen lezen. Het draait pas nadat je op Accepteer klikt in de cookiebanner. Weiger je, dan wordt er geen analytics-cookie gezet en geen event gelogd. IP-adressen worden geanonimiseerd voor ze bij Google aankomen.",
          "Serverlogs: mijn hosting (Netlify) houdt kortdurende toegangslogs bij voor security en performance, zoals elke webhost doet. Die worden niet gebruikt om jou te profileren.",
        ],
      },
      {
        heading: "Wie het verder ziet",
        body: [
          "Netlify host de site en verwerkt formulier-inzendingen. Hun EU-servers behandelen de data. Privacyverklaring: netlify.com/privacy.",
          "Supabase bewaart nieuwsbrief-aanmeldingen in EU-Postgres. Privacyverklaring: supabase.com/privacy.",
          "Resend stuurt transactionele e-mail (boekingsbevestigingen, nieuwsbrief). Privacyverklaring: resend.com/legal/privacy-policy.",
          "Google Analytics ontvangt geanonimiseerde bezoekdata, alleen na toestemming. Privacyverklaring: policies.google.com/privacy.",
        ],
      },
      {
        heading: "Hoe lang we het bewaren",
        body: [
          "Antwoorden op het contactformulier leven in m'n inbox zolang een gesprek loopt, plus een jaar erna voor het geval je opnieuw boekt. Daarna weg.",
          "Nieuwsbrief-aanmeldingen blijven tot je je uitschrijft.",
          "Analytics-data wordt 14 maanden bewaard in Google Analytics, de kortste instelling die ze bieden.",
        ],
      },
      {
        heading: "Jouw rechten",
        body: [
          "Onder de EU-AVG kun je me vragen om: te laten zien wat ik van je heb, fouten te corrigeren, het te verwijderen, het in een overdraagbaar formaat te sturen, of te stoppen met verwerken. Mail info@studiotoorn.com en ik reageer binnen dertig dagen.",
          "Als je vindt dat ik je data slecht heb behandeld kun je ook klagen bij je nationale toezichthouder. In Nederland is dat de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl); in Spanje de AEPD (aepd.es).",
        ],
      },
      {
        heading: "Wijzigingen",
        body: [
          "Als deze verklaring verandert op een manier die ertoe doet, wordt de datum bovenaan bijgewerkt en wordt de wijziging in de eerstvolgende nieuwsbrief vermeld. Kleine typfoutjes niet.",
        ],
      },
    ],
    contactNote:
      "Vragen over iets hierboven? Mail info@studiotoorn.com of stuur een bericht naar +31 6 14412102.",
  },
  terms: {
    eyebrow: "Voorwaarden",
    title: "Hoe een boeking werkt, in gewone taal.",
    lastUpdated: "Laatst bijgewerkt: 25 mei 2026",
    intro:
      "Dit zijn de werkafspraken tussen jou en mij als je een dinner, een villa-week, een workshop, of plekken bij een van mijn eigen events boekt. Eén keer doorlezen en je weet waar je staat.",
    sections: [
      {
        heading: "De dienst",
        body: [
          "Ik ben Nick Toorn, werkzaam als private chef vanaf de Costa del Sol. Ik kook private dinners bij jou thuis of in een villa, langere weken op locatie, kleine workshops, en de open-inschrijving events die ik zelf organiseer. Alles is op maat. Geen vast menu en geen vaste prijslijst.",
        ],
      },
      {
        heading: "Boeking en bevestiging",
        body: [
          "Stuur de ruwe vorm van wat je in gedachten hebt via het contactformulier, WhatsApp, of e-mail. Ik reageer binnen 24 uur met een eerste voorstel: menu-richting, timing, een prijs.",
          "Een boeking staat pas vast nadat je het voorstel schriftelijk accepteert en de aanbetaling hebt gedaan. Tot dat moment is er niks in mijn agenda gereserveerd.",
        ],
      },
      {
        heading: "Betaling",
        body: [
          "Standaard verdeling: 30% aanbetaling bij bevestiging, de rest binnen zeven dagen na het dinner. Voor villa-weken of grotere formats spreken we het schema vooraf samen af.",
          "Betalingen per bankoverschrijving of, op verzoek, per kaart. Facturen worden uitgereikt vanuit een Spaans autonomo-nummer.",
        ],
      },
      {
        heading: "Wijzigingen en annulering",
        body: [
          "Je kunt de datum één keer kosteloos verschuiven tot 14 dagen voor de boeking, mits mijn agenda het toelaat.",
          "Annulering meer dan 30 dagen vooraf: volledige terugbetaling van de aanbetaling minus al ingekochte verse producten. Tussen 14 en 30 dagen: 50% terugbetaling van de aanbetaling. Binnen 14 dagen: de aanbetaling is niet meer terug te krijgen, omdat de inkoop al gedaan is en de plek vergeven is.",
          "Als ik om welke reden dan ook van mijn kant moet annuleren, krijg je de volledige aanbetaling terug. Dat is nog niet gebeurd en ik wil het zo houden.",
        ],
      },
      {
        heading: "Allergieën en dieet",
        body: [
          "Vertel me over allergieën, intoleranties, of sterke dieet-voorkeuren bij het boeken. Ik werk ze in, of als een gast een ernstige allergie heeft waar ik niet veilig omheen kan garanderen, dan zeg ik dat eerlijk in plaats van het risico te nemen.",
          "Als allergieën niet bij het boeken worden gedeeld en pas op de avond zelf naar boven komen, doe ik wat ik kan maar kan ik er geen verantwoordelijkheid voor dragen.",
        ],
      },
      {
        heading: "Aansprakelijkheid",
        body: [
          "Ik heb een beroepsaansprakelijkheidsverzekering voor het kookwerk zelf. Daarbuiten ben ik niet aansprakelijk voor: alcoholgebruik van gasten, dingen die buiten het afgesproken servicevenster gebeuren, schade aan eigendom veroorzaakt door een gast, of verliezen die redelijkerwijs buiten mijn controle vallen.",
        ],
      },
      {
        heading: "Overmacht",
        body: [
          "Beide kanten mogen kosteloos verschuiven als er iets gebeurt dat echt buiten onze controle ligt: een serieuze ziekte, een vervoersstaking, een overheidsbevel, een natuurgebeurtenis. We boeken opnieuw op de eerstvolgende werkbare datum.",
        ],
      },
      {
        heading: "Toepasselijk recht",
        body: [
          "Op deze voorwaarden is Spaans recht van toepassing. Elk geschil dat we niet in der minne kunnen oplossen wordt voorgelegd aan de rechtbank van Málaga, Spanje.",
        ],
      },
    ],
    contactNote:
      "Iets hier dat duidelijker mag? Mail info@studiotoorn.com of stuur een bericht naar +31 6 14412102 en ik leg het uit.",
  },
};
