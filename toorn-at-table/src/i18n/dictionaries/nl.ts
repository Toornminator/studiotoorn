import type { Dictionary } from "../types";

/**
 * Dutch copy — the original voice all current components were written
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
    contact: "Contact",
  },
  languageSwitcher: {
    label: "Taal",
  },
  hero: {
    establishedLine: "Private chef · Costa del Sol · Est. 2023",
    tagline:
      "Een fotografenoog, de discipline van jaren in dienst en de precisie van een sterrenkeuken — aan één tafel in de zon.",
    handwrittenNote: "geen catering — een herinnering",
  },
  about: {
    eyebrow: "Hoofdstuk 01 · Over Nick",
    headlineLine1: "Een keuken,",
    headlineLine2: "een camera,",
    headlineLine3: "een nieuwe tafel.",
    body1:
      "Ik ben Nick. Zesendertig, geboren in Zwolle, met een jeugd over grenzen heen — deels België, deels Duitsland. Mijn opleiding rondde ik af in Groningen. De keuken vond me pas laat: eerst drie jaar bij de Marechaussee, daarna een jaar vrijwilligerswerk in Gambia.",
    body2:
      "Pas rond mijn zesentwintigste koos ik voluit voor het vak. Eerst aan de koude kant van een restaurantkeuken, daarna een vormend jaar in de patisserie van Bord'eau in Hotel de L'Europe — onder Bas van Kranen. De camera was er al sinds mijn achttiende: dezelfde discipline, een ander gereedschap.",
    body3:
      "Sinds 2023 kook ik privé aan de Costa del Sol. Discipline uit het uniform, precisie uit de sterrenkeuken, rust uit Andalusië — samengebracht aan één tafel. Geen catering. Een herinnering.",
    chip1: "Sterrenkeuken-getraind",
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
    warningPrefix: "let op —",
    wrongPrefix: "ging mis —",
  },
  services: {
    eyebrow: "Diensten · Wat je kunt boeken",
    title: "Vier manieren om aan tafel te zitten.",
    intro:
      "Geen vaste tarieven — alles op maat. Hieronder de vorm; de invulling bespreken we samen.",
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
          "Een hele week op locatie — diners, en lunches of ontbijten waar gewenst. Ik beweeg mee in het ritme van het gezelschap: één avond rauw vuur, een ander een Italiaans dorps-menu, alles vers van de markt.",
        cta: "Boek een week",
      },
      workshops: {
        eyebrow: "Hands-on in mijn tempo",
        title: "Kookworkshops",
        body:
          "Klein gezelschap, jouw keuken of de mijne. Eén gerecht of een hele line-up, alles meelopend met de seizoenen. Wat ik je leer: techniek bovenal — een goede basis maakt elke avond beter.",
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
    yearsSubline: "Sinds mijn 26e — geen jaar eerder.",
    tablesLabel: "Tafels per maand",
    tablesSubline: "Klein gehouden, met opzet.",
  },
  travel: {
    eyebrow: "Hoofdstuk 03 · Reizen",
    title: "27 stempels, 27 keukens die mij iets bijbrachten.",
    intro:
      "Tik op elke stempel om het verhaal erachter te openen — elke keuken had zijn les, elk bord zijn nasmaak.",
    emptyState: "Nog geen reisstempels — komt binnenkort.",
    legendTotal: "{count} stempels · {featured} verhalen",
    legendWithStory: "met verhaal",
    legendVisited: "alleen geweest",
    tapHint: "Tik om te lezen",
    overlayPlaceholder:
      "Geweest. Verhaal volgt — Nick werkt aan een korte blog over deze plek.",
    overlayEyebrow: "Reizen",
    cursorReadStory: "Lees verhaal",
    stampAlt: "{name} reisstempel",
    visitedInYear: ", bezocht {year}",
  },
  cookbook: {
    eyebrow: "Hoofdstuk 04 · Het Kookboek",
    title:
      "Recepten die ik thuis maak — eerlijke producten, simpele techniek, Spaanse zon.",
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
  },
  events: {
    eyebrow: "Hoofdstuk 05 · Events",
    title: "Komende dinners — open tafels, korte gastenlijsten.",
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
      "Volgeboekt — schrijf je in voor de nieuwsbrief voor de volgende",
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
    quoteLine1: "Geen catering.",
    quoteLine2: "Een herinnering.",
    signature: "— Nick",
    ctaIntro: "Wil je aan tafel?",
    ctaButton: "Plan een diner",
    ctaNote: "Reactie binnen 24 uur",
  },
  contact: {
    eyebrow: "Hoofdstuk 06 · Aan tafel",
    title: "Vertel me wat je in gedachten hebt. Ik denk binnen een dag mee.",
    intro:
      "Een private dinner aan huis, een villa-week, een verjaardag, zomaar — alles past, als de tafel maar belangrijk is. Hoe meer ik weet, hoe scherper het eerste voorstel.",
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
          "Schrijf even een paar zinnen over wat je wil — wat is de aanleiding, hoeveel gasten, locatie?",
        guestsRange: "Vul een getal tussen 1 en 200 in.",
        dateInvalid: "Geen geldige datum.",
        backendDown:
          "Het versturen lukte niet automatisch — kun je me direct mailen op info@studiotoorn.com of bellen op +31 6 14 41 21 02?",
      },
      success:
        "Bedankt — je aanvraag is binnen. Ik reageer binnen 24 uur. Check intussen je inbox voor de bevestiging.",
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
      error: "Bevestigen lukte niet — probeer het zo nog eens.",
    },
    newsletterMessages: {
      backendDown:
        "Nieuwsbrief wordt nog opgezet — mail me direct op info@studiotoorn.com om alvast op de lijst te komen.",
      invalidEmail: "Vul een geldig emailadres in.",
      genericError:
        "Er ging iets mis aan onze kant. Probeer het zo nog eens of mail me direct.",
      alreadySubscribed: "Je staat al op de lijst — dank!",
      checkInbox:
        "Check je inbox — er staat een mailtje van me met een bevestigingslink.",
      thanks: "Bedankt — je staat op de lijst.",
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
    ariaLabel: "TOORN at table — Een tafel wordt klaargemaakt",
  },
  gallery: {
    eyebrow: "Tussendoor · In de keuken",
    title: "Zo ziet het eruit als de avond loopt.",
    intro:
      "Momenten van vorige tafels — borden, vuren, handen, uitzichten. Klik om groot te zien.",
    cursorOpen: "Open foto",
    cursorClose: "Sluit",
    cursorPrev: "Vorige",
    cursorNext: "Volgende",
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
};
