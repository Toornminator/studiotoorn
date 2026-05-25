import type { Dictionary } from "../types";

/**
 * Spanish copy. For locals on the Costa del Sol who'd rather read the
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
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
  },
  languageSwitcher: {
    label: "Idioma",
  },
  hero: {
    establishedLine: "Chef privado · Costa del Sol · Est. 2023",
    tagline:
      "Ojo de fotógrafo. Años en uniforme. Una cocina de estrella para la precisión. Una mesa al sol, y nada más.",
    handwrittenNote: "no es catering. es un recuerdo",
  },
  about: {
    eyebrow: "Capítulo 01 · Sobre Nick",
    headlineLine1: "Una cocina,",
    headlineLine2: "una cámara,",
    headlineLine3: "una mesa nueva.",
    body1:
      "Soy Nick. Treinta y seis. Nacido en Zwolle, infancia partida entre Bélgica y Alemania, estudios terminados en Groningen. La cocina me encontró tarde. Tres años en la Marechaussee Real primero. Después un año de voluntariado en Gambia.",
    body2:
      "Veintiséis años antes de lanzarme del todo. Empecé por la partida fría de un restaurante. Después un año en la pastelería de Bord'eau, Hotel de L'Europe, bajo Bas van Kranen. El año que me enseñó qué es la disciplina. La cámara llegó antes, a los dieciocho. La misma disciplina, otra herramienta.",
    body3:
      "Desde 2023 cocino en privado en la Costa del Sol. Disciplina del uniforme. Precisión de la estrella. Calma de Andalucía. Todo a la misma mesa. No es catering. Es un recuerdo.",
    chip1: "Formado en estrella Michelin",
    chip2: "Fotógrafo de retrato y calle",
    chip3: "Chef privado desde 2023",
    portraitCaption: "Nick Toorn · 36",
  },
  timeline: {
    eyebrow: "Capítulo 02 · La Cronología",
    title:
      "Cómo un cocinero holandés acabó en una mesa en Andalucía.",
    chapterPrefix: "Cap.",
  },
  marginalia: {
    warningPrefix: "ojo ",
    wrongPrefix: "salió mal ",
  },
  services: {
    eyebrow: "Servicios · Qué puedes reservar",
    title: "Cuatro maneras de sentarte a la mesa.",
    intro:
      "Sin tarifas fijas. Todo a medida. Aquí va la forma; el contenido lo vemos juntos.",
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
          "Una semana entera en el sitio. Cenas, y comidas o desayunos si quieres. Me adapto al ritmo del grupo: una noche fuego puro, otra un menú de pueblo italiano, todo directo del mercado.",
        cta: "Reserva una semana",
      },
      workshops: {
        eyebrow: "Práctico, a mi ritmo",
        title: "Talleres de cocina",
        body:
          "Grupo pequeño, tu cocina o la mía. Un plato o una línea completa, siempre con la temporada. Lo que te enseño: técnica ante todo. Una buena base mejora cualquier noche.",
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
    yearsSubline: "Desde los veintiséis. Ni un año antes.",
    tablesLabel: "Mesas al mes",
    tablesSubline: "Pequeño a propósito.",
  },
  travel: {
    eyebrow: "Capítulo 03 · Viajes",
    title: "27 sellos, 27 cocinas que me enseñaron algo.",
    intro:
      "Toca cualquier sello para la historia. Cada cocina tuvo su lección. Cada plato dejó huella.",
    emptyState: "Aún no hay sellos. Pronto.",
    legendTotal: "{count} sellos · {featured} historias",
    legendWithStory: "con historia",
    legendVisited: "solo visitado",
    tapHint: "Toca para leer",
    overlayPlaceholder:
      "He estado allí. La historia viene en camino. Nick está escribiendo un blog corto sobre este sitio.",
    overlayEyebrow: "Viajes",
    cursorReadStory: "Leer historia",
    stampAlt: "Sello de viaje de {name}",
    visitedInYear: ", visitado en {year}",
  },
  cookbook: {
    eyebrow: "Capítulo 04 · El Recetario",
    title:
      "Recetas que cocino en casa. Producto honesto, técnica sencilla, sol español.",
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
    title: "Próximas cenas. Mesas abiertas, listas cortas de invitados.",
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
      "Agotado. Apúntate a la newsletter para el siguiente",
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
    signature: " Nick",
    ctaIntro: "¿Te sientas a la mesa?",
    ctaButton: "Planea una cena",
    ctaNote: "Respondo en 24 horas",
  },
  contact: {
    eyebrow: "Capítulo 06 · A la mesa",
    title:
      "Cuéntame qué tienes en mente. Te respondo en menos de un día.",
    intro:
      "Una cena privada en casa. Una semana en villa. Un cumpleaños. Cualquier otra cosa. Todo cabe, mientras la mesa importe. Cuanto más me cuentes, más afinada será la primera propuesta.",
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
          "Cuéntame en unas frases lo que quieres. El motivo, cuántos invitados, el sitio.",
        guestsRange: "Pon un número entre 1 y 200.",
        dateInvalid: "Esa fecha no es válida.",
        backendDown:
          "El envío automático ha fallado. Escríbeme a info@studiotoorn.com o por WhatsApp al +31 6 14 41 21 02.",
      },
      success:
        "Gracias. Tu consulta ha llegado. Te respondo en 24 horas. Mira tu bandeja de entrada para la confirmación.",
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
      error: "No pudimos confirmar. Inténtalo de nuevo en un momento.",
    },
    newsletterMessages: {
      backendDown:
        "La newsletter aún está en montaje. Escríbeme a info@studiotoorn.com para entrar ya.",
      invalidEmail: "Pon un email válido.",
      genericError:
        "Algo falló por nuestro lado. Inténtalo de nuevo o escríbeme directamente.",
      alreadySubscribed: "Ya estás en la lista  ¡gracias!",
      checkInbox:
        "Mira tu bandeja de entrada. Te he enviado un enlace de confirmación.",
      thanks: "Gracias. Estás en la lista.",
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
    ariaLabel: "TOORN at table. Poniendo la mesa",
  },
  gallery: {
    eyebrow: "Pausa · En la cocina",
    title: "Así se ve cuando arranca la noche.",
    intro:
      "Momentos de mesas anteriores. Platos, fuegos, manos, vistas. Haz clic para verlos en grande.",
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
  cookies: {
    eyebrow: "Cookies",
    body: "Usamos cookies para contar cuántas personas llegan al sitio y qué páginas leen. Nada más. Acepta y vemos los totales. Rechaza y no vemos nada.",
    linkLabel: "Lee la política de privacidad completa",
    accept: "Aceptar",
    reject: "Rechazar",
  },
  legal: {
    columnHeading: "Legal",
    privacyLabel: "Privacidad",
    termsLabel: "Términos",
  },
  privacy: {
    eyebrow: "Política de privacidad",
    title: "Lo que sabemos de ti, y lo que no.",
    lastUpdated: "Última actualización: 25 de mayo de 2026",
    intro:
      "Versión corta: usamos este sitio para hablar con gente que quizá quiera una cena privada. No vendemos datos. No los compartimos con anunciantes. Usamos lo mínimo que necesitamos para responderte y para saber cuántos visitantes encuentran el sitio. Versión larga abajo.",
    sections: [
      {
        heading: "Quién está detrás de este sitio",
        body: [
          "TOORN at table lo lleva Nick Toorn, trabajando como chef privado desde la Costa del Sol, España. Para cualquier consulta o solicitud de privacidad escríbeme a info@toornattable.com o por WhatsApp al +31 6 14412102.",
          "Soy el responsable del tratamiento de todo lo descrito a continuación.",
        ],
      },
      {
        heading: "Lo que tú nos das",
        body: [
          "Formulario de contacto: nombre, email, teléfono opcional, la fecha y el formato de lo que planeas, y lo que escribas en el mensaje. Lo uso para responderte y redactar una primera propuesta.",
          "Newsletter: solo tu email y el idioma en el que lees el sitio. Lo uso para mandar el ocasional despacho y nada más.",
          "Nunca pido datos de pago en este sitio. La facturación se hace por canales aparte cuando una reserva está firme.",
        ],
      },
      {
        heading: "Lo que el sitio recoge por su cuenta",
        body: [
          "Analítica: uso Google Analytics 4 para contar visitas y ver qué secciones se leen. Solo se activa después de que pulses Aceptar en el banner de cookies. Si rechazas, no se coloca cookie de analítica y no se registra ningún evento. Las direcciones IP se anonimizan antes de llegar a Google.",
          "Logs del servidor: mi proveedor de hosting, Netlify, guarda logs de acceso a corto plazo por seguridad y rendimiento, como todo hosting web. No se usan para perfilarte.",
        ],
      },
      {
        heading: "Quién más lo ve",
        body: [
          "Netlify aloja el sitio y procesa los envíos de formularios. Sus servidores europeos manejan los datos. Política de privacidad: netlify.com/privacy.",
          "Supabase guarda las altas de newsletter en Postgres europeo. Política: supabase.com/privacy.",
          "Resend entrega los correos transaccionales (confirmaciones, newsletter). Política: resend.com/legal/privacy-policy.",
          "Google Analytics recibe datos anonimizados solo tras consentimiento. Política: policies.google.com/privacy.",
        ],
      },
      {
        heading: "Cuánto tiempo lo guardamos",
        body: [
          "Las respuestas del formulario viven en mi bandeja mientras una conversación esté activa, más un año extra por si vuelves a reservar. Después fuera.",
          "Las altas a newsletter se quedan hasta que te das de baja.",
          "Los datos de analítica se guardan 14 meses en Google Analytics, el periodo más corto que ofrecen.",
        ],
      },
      {
        heading: "Tus derechos",
        body: [
          "Bajo el RGPD europeo puedes pedirme que: te enseñe lo que tengo sobre ti, corrija errores, lo borre, te lo mande en un formato portable, o deje de tratarlo. Escribe a info@toornattable.com y respondo dentro de treinta días.",
          "Si crees que he tratado tus datos mal puedes también reclamar a tu autoridad nacional de protección de datos. En España es la AEPD (aepd.es); en Países Bajos la AP (autoriteitpersoonsgegevens.nl).",
        ],
      },
      {
        heading: "Cambios",
        body: [
          "Si esta política cambia de forma relevante, la fecha de arriba se actualiza y el cambio aparece en la siguiente newsletter. Los typos menores no.",
        ],
      },
    ],
    contactNote:
      "¿Preguntas sobre algo de arriba? Escribe a info@toornattable.com o manda un mensaje al +31 6 14412102.",
  },
  terms: {
    eyebrow: "Términos",
    title: "Cómo funciona una reserva, en palabras claras.",
    lastUpdated: "Última actualización: 25 de mayo de 2026",
    intro:
      "Estas son las reglas de trabajo entre tú y yo cuando reservas una cena, una semana en villa, un workshop, o plazas en uno de mis eventos. Están escritas para que las leas una vez y sepas a qué atenerte.",
    sections: [
      {
        heading: "El servicio",
        body: [
          "Soy Nick Toorn, chef privado en la Costa del Sol. Cocino cenas privadas en tu casa o villa, semanas más largas en residencia, workshops pequeños, y las cenas de inscripción abierta que organizo yo mismo. Todo a medida. No hay menú fijo ni lista de precios fija.",
        ],
      },
      {
        heading: "Reserva y confirmación",
        body: [
          "Mándame la forma aproximada de lo que tienes en mente por el formulario, WhatsApp o email. Respondo en 24 horas con una primera propuesta: dirección del menú, timing, un precio.",
          "Una reserva queda firme solo después de que aceptes la propuesta por escrito y pagues la señal. Hasta entonces no hay nada bloqueado en mi agenda.",
        ],
      },
      {
        heading: "Pago",
        body: [
          "Reparto estándar: 30% de señal al confirmar, el resto dentro de los siete días posteriores a la cena. Para semanas en villa o formatos mayores acordamos el calendario juntos al inicio.",
          "Los pagos van por transferencia bancaria o, bajo petición, con tarjeta. Las facturas se emiten desde un número de autónomo español.",
        ],
      },
      {
        heading: "Cambios y cancelación",
        body: [
          "Puedes mover la fecha una vez sin coste hasta 14 días antes de la reserva, sujeto a mi agenda.",
          "Cancelación a más de 30 días: devolución completa de la señal menos perecederos ya comprados. Entre 14 y 30 días: 50% de la señal. Dentro de 14 días: la señal no se devuelve, ya está hecha la compra y la plaza está bloqueada.",
          "Si yo tengo que cancelar por cualquier motivo de mi lado, recibes la señal completa de vuelta. Aún no ha pasado y pienso mantenerlo así.",
        ],
      },
      {
        heading: "Alergias y dieta",
        body: [
          "Dime las alergias, intolerancias o preferencias dietéticas fuertes al reservar. Las integro, o si un comensal tiene una alergia severa que no puedo garantizar con seguridad, te lo digo claro en lugar de correr el riesgo.",
          "Si las alergias no se comunican al reservar y solo aparecen la noche misma, hago lo que puedo pero no puedo asumir responsabilidad por el resultado.",
        ],
      },
      {
        heading: "Responsabilidad",
        body: [
          "Tengo seguro de responsabilidad profesional para el trabajo de cocina en sí. Más allá de eso, no soy responsable de: el consumo de alcohol de los invitados, cualquier cosa que pase fuera de la ventana acordada, daños a la propiedad causados por un invitado, o pérdidas que estén razonablemente fuera de mi control.",
        ],
      },
      {
        heading: "Fuerza mayor",
        body: [
          "Ambas partes pueden aplazar sin penalización si pasa algo realmente fuera de nuestro control: una enfermedad seria, una huelga de transporte, una orden gubernamental, un evento natural. Reservamos de nuevo en la próxima fecha viable.",
        ],
      },
      {
        heading: "Ley aplicable",
        body: [
          "Estos términos se rigen por la ley española. Cualquier disputa que no podamos resolver amistosamente se someterá a los juzgados de Málaga, España.",
        ],
      },
    ],
    contactNote:
      "¿Algo aquí que necesite más claridad? Escribe a info@toornattable.com o manda un mensaje al +31 6 14412102 y lo explico.",
  },
};
