/**
 * Dictionary shape. Defined once here as a manual TypeScript type so the
 * English / Spanish / Dutch dictionaries can all be checked against it,
 * and components can autocomplete every key.
 */

export type Dictionary = {
  nav: {
    aboutNick: string;
    services: string;
    travels: string;
    cookbook: string;
    events: string;
    contact: string;
  };
  languageSwitcher: {
    label: string;
  };
  hero: {
    establishedLine: string;
    tagline: string;
    handwrittenNote: string;
  };
  about: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    headlineLine3: string;
    body1: string;
    body2: string;
    body3: string;
    chip1: string;
    chip2: string;
    chip3: string;
    portraitCaption: string;
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: {
      privateDinner: ServiceCard;
      villaTakeover: ServiceCard;
      workshops: ServiceCard;
      events: ServiceCard;
    };
  };
  stats: {
    countriesLabel: string;
    countriesSubline: string;
    yearsLabel: string;
    yearsSubline: string;
    tablesLabel: string;
    tablesSubline: string;
  };
  travel: {
    eyebrow: string;
    title: string;
    intro: string;
    emptyState: string;
    legendTotal: string;
    legendWithStory: string;
    legendVisited: string;
    overlayPlaceholder: string;
    overlayEyebrow: string;
    cursorReadStory: string;
    /** Alt text for the stamp PNG. `{name}` is replaced with the country. */
    stampAlt: string;
    /** Suffix in the stamp aria-label. `{year}` is replaced with the year. */
    visitedInYear: string;
  };
  cookbook: {
    eyebrow: string;
    title: string;
    intro: string;
    filtersCategory: string;
    filtersSeason: string;
    categoryAll: string;
    categoryStarter: string;
    categoryMain: string;
    categorySide: string;
    categoryDessert: string;
    categoryDrink: string;
    categoryBasic: string;
    seasonAll: string;
    seasonSpring: string;
    seasonSummer: string;
    seasonAutumn: string;
    seasonWinter: string;
    resultsOne: string;
    resultsMany: string;
    noResults: string;
    overlayIngredients: string;
    overlayMethod: string;
    overlayTotalTime: string;
    overlayServes: string;
    overlayServesUnit: string;
    overlayDifficulty: string;
    overlayPairing: string;
    cursorOpen: string;
  };
  events: {
    eyebrow: string;
    title: string;
    intro: string;
    emptyState: string;
    soldOut: string;
    onRequest: string;
    spotsSuffix: string;
    spotsAvailable: string;
    openLabel: string;
    bookCta: string;
    responseTime: string;
    soldOutNote: string;
    overlayEyebrow: string;
    overlayLocation: string;
    overlayCity: string;
    overlayPricePer: string;
    overlaySpots: string;
    overlayMax: string;
    overlayFrom: string;
    cursorBook: string;
    cursorSoldOut: string;
  };
  closing: {
    eyebrow: string;
    quoteLine1: string;
    quoteLine2: string;
    signature: string;
    ctaIntro: string;
    ctaButton: string;
    ctaNote: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    directEyebrow: string;
    directWhatsApp: string;
    directBase: string;
    baseValue: string;
    form: {
      nameLabel: string;
      emailLabel: string;
      phoneLabel: string;
      typeLabel: string;
      typePlaceholder: string;
      types: {
        privateDinner: string;
        villaTakeover: string;
        eventTicket: string;
        other: string;
      };
      dateLabel: string;
      guestsLabel: string;
      locationLabel: string;
      locationPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      privacyNote: string;
      errors: {
        nameRequired: string;
        emailRequired: string;
        typeRequired: string;
        messageRequired: string;
        guestsRange: string;
        dateInvalid: string;
        backendDown: string;
      };
      success: string;
    };
    cursorSubmit: string;
    cursorReserve: string;
  };
  footer: {
    newsletterEyebrow: string;
    newsletterTitle: string;
    newsletterBody: string;
    newsletterPlaceholder: string;
    newsletterButton: string;
    newsletterStatusBanners: {
      ok: string;
      invalid: string;
      error: string;
    };
    newsletterMessages: {
      backendDown: string;
      invalidEmail: string;
      genericError: string;
      alreadySubscribed: string;
      checkInbox: string;
      thanks: string;
    };
    brandEyebrow: string;
    brandLine1: string;
    brandLine2: string;
    contactEmail: string;
    contactPhone: string;
    sitemapKookboek: string;
    sitemapEvents: string;
    sitemapContact: string;
    sitemapAbout: string;
    copyright: string;
    madeWith: string;
  };
  preloader: {
    loadingMessage: string;
    locationCaption: string;
    ariaLabel: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    intro: string;
    cursorOpen: string;
    cursorClose: string;
    cursorPrev: string;
    cursorNext: string;
  };
  marquee: {
    primary: string[];
    secondary: string[];
  };
};

type ServiceCard = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
};
