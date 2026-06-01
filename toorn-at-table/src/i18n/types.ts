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
    /** Accessible label for the mobile menu trigger when closed. */
    menuOpen: string;
    /** Accessible label for the mobile menu trigger when open. */
    menuClose: string;
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
  timeline: {
    eyebrow: string;
    title: string;
    /** Prefix shown before every chapter number (e.g. "Chap." / "Hfdstk"). */
    chapterPrefix: string;
  };
  marginalia: {
    /** Struck-through preamble on a `warning` margin note. */
    warningPrefix: string;
    /** Struck-through preamble on a `wrong` margin note. */
    wrongPrefix: string;
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
    /** Subtle "tap to read" hint shown next to the carousel legend so
     *  touch visitors know each stamp opens an overlay (the desktop
     *  custom-cursor hint is invisible on coarse pointers). */
    tapHint: string;
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
  testimonials: {
    eyebrow: string;
    title: string;
    intro: string;
    /** Plural noun after the count in the aggregate line ("12 private tables"). */
    tablesServed: string;
    /** Link label under the grid, sends the reader to the booking form. */
    cta: string;
    /** Soft prompt that fills the trailing grid cell on an odd count. */
    invitation: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    intro: string;
    /** Question + answer pairs. Drives both the accordion and FAQ schema. */
    items: { q: string; a: string }[];
  };
  theEvening: {
    eyebrow: string;
    title: string;
    intro: string;
    /** Heading above the step-by-step flow of the night. */
    flowHeading: string;
    /** Ordered beats of how the evening unfolds. */
    flow: { title: string; body: string }[];
    /** Heading above the illustrative tasting menu. */
    menuHeading: string;
    /** Honesty note: the menu is a sample, not a fixed card. */
    menuNote: string;
    cta: string;
    /** Course labels, keyed to the sample-menu course order. */
    courses: {
      aperitivo: string;
      starter: string;
      sea: string;
      main: string;
      dessert: string;
    };
  };
  theTable: {
    /** Brand sub-label for the local weekly service, per locale. */
    serviceName: string;
    /** Homepage teaser. */
    teaserEyebrow: string;
    teaserSpotsLeft: string;
    teaserSoldOut: string;
    teaserDeliveryPrefix: string;
    teaserCta: string;
    /** Page metadata. */
    metaTitle: string;
    metaDescription: string;
    /** Page hero. */
    heroEyebrow: string;
    heroTitle: string;
    heroIntro: string;
    /** This week's menu block. */
    menuEyebrow: string;
    perPerson: string;
    deliveryDayLabel: string;
    orderByLabel: string;
    spotsLeftLabel: string;
    soldOutLabel: string;
    allergensLabel: string;
    /** How it works. */
    howEyebrow: string;
    howTitle: string;
    steps: { title: string; body: string }[];
    /** Delivery area. */
    areaEyebrow: string;
    areaTitle: string;
    areaBody: string;
    /** Order form. */
    form: {
      eyebrow: string;
      title: string;
      intro: string;
      nameLabel: string;
      phoneLabel: string;
      emailLabel: string;
      emailOptional: string;
      addressLabel: string;
      addressHint: string;
      portionsLabel: string;
      timeLabel: string;
      timePlaceholder: string;
      allergiesLabel: string;
      totalLabel: string;
      cashNote: string;
      submit: string;
      submitting: string;
      success: string;
      closedTitle: string;
      closedBody: string;
      errors: {
        nameRequired: string;
        phoneRequired: string;
        addressRequired: string;
        portionsRange: string;
        backendDown: string;
      };
    };
    /** Mini-FAQ. */
    faqEyebrow: string;
    faqTitle: string;
    faqItems: { q: string; a: string }[];
  };
  marquee: {
    primary: string[];
    secondary: string[];
  };
  cookies: {
    /** Top-line eyebrow on the consent banner. */
    eyebrow: string;
    /** Single-paragraph explanation shown above the buttons. */
    body: string;
    /** Inline link label that opens the privacy page. */
    linkLabel: string;
    accept: string;
    reject: string;
  };
  legal: {
    /** Footer column heading and section title used on the legal pages. */
    columnHeading: string;
    privacyLabel: string;
    termsLabel: string;
  };
  privacy: LegalPage;
  terms: LegalPage;
};

type LegalSection = {
  heading: string;
  body: string[];
};

type LegalPage = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
  contactNote: string;
};

type ServiceCard = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
};
