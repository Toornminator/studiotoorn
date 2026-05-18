import type { Dictionary } from "../types";

/**
 * Spanish copy — for locals on the Costa del Sol who'd rather read the
 * site in their own language. Voice tracks the Dutch / English: tattoo-
 * flash meets fine dining, warm-but-direct.
 */

export const es: Dictionary = {
  nav: {
    aboutNick: "Sobre Nick",
    services: "Servicios",
    travels: "Viajes",
    cookbook: "Recetario",
    events: "Eventos",
    contact: "Contacto",
  },
  languageSwitcher: {
    label: "Idioma",
  },
  hero: {
    establishedLine: "Chef privado · Costa del Sol · Est. 2023",
    tagline:
      "Ojo de fotógrafo, la disciplina de años en uniforme y la precisión de una cocina de estrella Michelin — en una mesa al sol.",
    handwrittenNote: "pst — cógeme y lánzame",
  },
  about: {
    eyebrow: "Capítulo 01 · Sobre Nick",
    headlineLine1: "Una cocina,",
    headlineLine2: "una cámara,",
    headlineLine3: "una mesa nueva.",
    body1:
      "Soy Nick. Treinta y seis, nacido en Zwolle, con una infancia partida entre Bélgica y Alemania. Terminé mis estudios en Groningen. La cocina me encontró tarde: primero tres años en la Marechaussee Real, luego un año de voluntariado en Gambia.",
    body2:
      "No fue hasta cerca de los veintiséis cuando me lancé del todo. Empecé por la partida fría de un restaurante, después un año formativo en la pastelería de Bord'eau en el Hotel de L'Europe — bajo Bas van Kranen. La cámara me acompaña desde los dieciocho: la misma disciplina, otra herramienta.",
    body3:
      "Desde 2023 cocino en privado en la Costa del Sol. La disciplina del uniforme, la precisión de la estrella, la calma de Andalucía — todo a la misma mesa. No es catering. Es un recuerdo.",
    chip1: "Formado en estrella Michelin",
    chip2: "Fotógrafo de retrato y calle",
    chip3: "Chef privado desde 2023",
    portraitCaption: "Nick Toorn · 36",
  },
  services: {
    eyebrow: "Servicios · Qué puedes reservar",
    title: "Cuatro maneras de sentarte a la mesa.",
    intro:
      "Sin tarifas fijas — todo a medida. Aquí va la forma; el contenido lo vemos juntos.",
    cards: {
      privateDinner: {
        eyebrow: "En tu mesa",
        title: "Cena privada",
        body:
          "Cocino en tu casa o tu villa. Una noche, una mesa, un menú que cerramos antes. De la compra al emplatado al final de la noche. Tú recibes a tus invitados y sostienes tu copa.",
        cta: "Planea una noche",
      },
      villaTakeover: {
        eyebrow: "Un chef en residencia, una semana",
        title: "Villa takeover",
        body:
          "Una semana entera en el sitio — cenas, y comidas o desayunos si quieres. Me adapto al ritmo del grupo: una noche fuego puro, otra un menú de pueblo italiano, todo directo del mercado.",
        cta: "Reserva una semana",
      },
      workshops: {
        eyebrow: "Práctico, a mi ritmo",
        title: "Talleres de cocina",
        body:
          "Grupo pequeño, tu cocina o la mía. Un plato o una línea completa, siempre con la temporada. Lo que te enseño: técnica ante todo — una buena base mejora cualquier noche.",
        cta: "Pregúntame",
      },
      events: {
        eyebrow: "Organizado por Nick",
        title: "Eventos propios",
        body:
          "Cenas que organizo yo: una noche de fogón en una finca, una mesa entre olivos, un Dining under the Stars en la playa. Inscripción abierta, grupo pequeño, una localización distinta cada vez.",
        cta: "Ver la agenda",
      },
    },
  },
  stats: {
    countriesLabel: "Países visitados",
    countriesSubline: "De San Sebastián a Tokio.",
    yearsLabel: "Años en el oficio",
    yearsSubline: "Desde los veintiséis — ni un año antes.",
    tablesLabel: "Mesas al mes",
    tablesSubline: "Pequeño a propósito.",
  },
  travel: {
    eyebrow: "Capítulo 03 · Viajes",
    title: "27 sellos, 27 cocinas que me enseñaron algo.",
    intro:
      "Haz clic en un sello con punto rojo para leer la historia. Los demás son lugares en los que he estado; los textos están en camino.",
    emptyState: "Aún no hay sellos — pronto.",
    legendTotal: "{count} sellos · {featured} historias",
    legendWithStory: "con historia",
    legendVisited: "solo visitado",
    overlayPlaceholder:
      "He estado allí. La historia viene en camino — Nick está escribiendo un blog corto sobre este sitio.",
    overlayEyebrow: "Viajes",
    cursorReadStory: "Leer historia",
  },
  cookbook: {
    eyebrow: "Capítulo 04 · El Recetario",
    title:
      "Recetas que cocino en casa — producto honesto, técnica sencilla, sol español.",
    intro:
      "Un recetario pequeño, en crecimiento. Elige una para una noche, cocina para alguien a quien quieres, sirve algo que en mi opinión combina.",
    filtersCategory: "Categoría",
    filtersSeason: "Temporada",
    categoryAll: "Todo",
    categoryStarter: "Entrante",
    categoryMain: "Principal",
    categorySide: "Guarnición",
    categoryDessert: "Postre",
    categoryDrink: "Aperitivo",
    categoryBasic: "Base",
    seasonAll: "Todo el año",
    seasonSpring: "Primavera",
    seasonSummer: "Verano",
    seasonAutumn: "Otoño",
    seasonWinter: "Invierno",
    resultsOne: "receta",
    resultsMany: "recetas",
    noResults:
      "No hay recetas con esta combinación. Prueba con otro filtro.",
    overlayIngredients: "Ingredientes",
    overlayMethod: "Preparación",
    overlayTotalTime: "Tiempo total",
    overlayServes: "Para",
    overlayServesUnit: "personas",
    overlayDifficulty: "Dificultad",
    overlayPairing: "Marida con",
    cursorOpen: "Abrir receta",
  },
  events: {
    eyebrow: "Capítulo 05 · Eventos",
    title: "Próximas cenas — mesas abiertas, listas cortas de invitados.",
    intro:
      "Unas veces al mes cocino en una mesa larga donde puedes reservar plaza. Grupos pequeños, producto local, cada vez en un sitio distinto de la Costa.",
    emptyState:
      "No hay eventos programados ahora mismo. Apúntate a la newsletter para enterarte del próximo.",
    soldOut: "Agotado",
    onRequest: "Bajo petición",
    spotsSuffix: "plazas",
    spotsAvailable: "disponibles",
    openLabel: "Abrir",
    bookCta: "Reservar plaza",
    responseTime: "Respondo en 24 horas",
    soldOutNote:
      "Agotado — apúntate a la newsletter para el siguiente",
    overlayEyebrow: "Evento",
    overlayLocation: "Lugar",
    overlayCity: "Ciudad",
    overlayPricePer: "Precio p.p.",
    overlaySpots: "Plazas",
    overlayMax: "máx",
    overlayFrom: "desde",
    cursorBook: "Reservar",
    cursorSoldOut: "Agotado",
  },
  closing: {
    eyebrow: "Pausa",
    quoteLine1: "No es catering.",
    quoteLine2: "Es un recuerdo.",
    signature: "— Nick",
    ctaIntro: "¿Te sientas a la mesa?",
    ctaButton: "Planea una cena",
    ctaNote: "Respondo en 24 horas",
  },
  contact: {
    eyebrow: "Capítulo 06 · A la mesa",
    title:
      "Cuéntame qué tienes en mente. Te respondo en menos de un día.",
    intro:
      "Una cena privada en casa, una semana en villa, un cumpleaños, otra cosa — todo cabe, mientras la mesa importe. Cuanto más sé, más afinada será la primera propuesta.",
    directEyebrow: "Directo",
    directWhatsApp: "WhatsApp",
    directBase: "Base",
    baseValue: "Costa del Sol, España",
    form: {
      nameLabel: "Tu nombre *",
      emailLabel: "Email *",
      phoneLabel: "Teléfono (opcional)",
      typeLabel: "¿Qué tienes en mente? *",
      typePlaceholder: "Elige un tipo",
      types: {
        privateDinner: "Cena privada en casa",
        villaTakeover: "Villa takeover (varios días)",
        eventTicket: "Plaza en un evento abierto",
        other: "Otra cosa",
      },
      dateLabel: "Fecha (si la tienes)",
      guestsLabel: "Número de invitados",
      locationLabel: "Lugar / ciudad",
      locationPlaceholder:
        "p. ej. Marbella, mi villa en Estepona, un Airbnb en Mijas…",
      messageLabel: "¿Cuál es el motivo? *",
      messagePlaceholder:
        "El motivo, con quién, qué esperas de la noche, alergias, una idea de presupuesto si la tienes…",
      submit: "Enviar consulta",
      submitting: "Enviando…",
      privacyNote:
        "Guardamos tus datos solo para responder a tu consulta.",
      errors: {
        nameRequired: "Escribe tu nombre.",
        emailRequired: "Escribe un email válido.",
        typeRequired: "Elige qué tipo de noche tienes en mente.",
        messageRequired:
          "Cuéntame en unas frases lo que quieres — el motivo, cuántos invitados, el sitio.",
        guestsRange: "Pon un número entre 1 y 200.",
        dateInvalid: "Esa fecha no es válida.",
        backendDown:
          "El envío automático ha fallado. Escríbeme a info@studiotoorn.com o por WhatsApp al +31 6 14 41 21 02.",
      },
      success:
        "Gracias — tu consulta ha llegado. Te respondo en 24 horas. Mira tu bandeja de entrada para la confirmación.",
    },
    cursorSubmit: "Enviar",
    cursorReserve: "Reservar",
  },
  footer: {
    newsletterEyebrow: "Carta desde la cocina",
    newsletterTitle:
      "Una nota al mes sobre lo que cocino, dónde cocino y qué viene.",
    newsletterBody:
      "Sin spam, un clic para darte de baja, una receta pequeña en cada carta. La confirmación llega a tu bandeja de entrada.",
    newsletterPlaceholder: "tu@email.com",
    newsletterButton: "Suscribirme",
    newsletterStatusBanners: {
      ok: "Confirmado. Bienvenido a la lista.",
      invalid: "Ese enlace de confirmación ya no funciona.",
      error: "No pudimos confirmar — inténtalo de nuevo en un momento.",
    },
    newsletterMessages: {
      backendDown:
        "La newsletter aún está en montaje — escríbeme a info@studiotoorn.com para entrar ya.",
      invalidEmail: "Pon un email válido.",
      genericError:
        "Algo falló por nuestro lado. Inténtalo de nuevo o escríbeme directamente.",
      alreadySubscribed: "Ya estás en la lista — ¡gracias!",
      checkInbox:
        "Mira tu bandeja de entrada — te he enviado un enlace de confirmación.",
      thanks: "Gracias — estás en la lista.",
    },
    brandEyebrow: "TOORN at table",
    brandLine1: "Chef privado",
    brandLine2: "Costa del Sol",
    contactEmail: "info@studiotoorn.com",
    contactPhone: "+31 6 14 41 21 02",
    sitemapKookboek: "Recetario",
    sitemapEvents: "Eventos",
    sitemapContact: "Contacto",
    sitemapAbout: "Sobre Nick",
    copyright: "Todos los derechos reservados.",
    madeWith: "Hecho con cariño en la Costa del Sol.",
  },
  preloader: {
    loadingMessage: "Poniendo la mesa",
    locationCaption: "Costa del Sol · Chef privado",
    ariaLabel: "TOORN at table — Poniendo la mesa",
  },
  gallery: {
    eyebrow: "Pausa · En la cocina",
    title: "Así se ve cuando arranca la noche.",
    intro:
      "Momentos de mesas anteriores — platos, fuegos, manos, vistas. Haz clic para verlos en grande.",
    cursorOpen: "Abrir foto",
    cursorClose: "Cerrar",
    cursorPrev: "Anterior",
    cursorNext: "Siguiente",
  },
  marquee: {
    primary: [
      "Costa del Sol",
      "Cocina abierta",
      "Mesas largas",
      "Producto local",
      "Un invitado a la vez",
    ],
    secondary: [
      "Cenas privadas",
      "Villa takeovers",
      "Cumpleaños",
      "Momentos irrepetibles",
      "Reservas abiertas",
    ],
  },
};
