import type { LocalisedTimelineChapter } from "@/lib/types";

/**
 * Timeline chapters. Nick's full route from Zwolle to the Costa del Sol.
 * Sourced from the May 2026 brand bible (merkdossier). Each chapter
 * renders as a card in the Timeline component with the sticky year column
 * flagging the period on the left.
 *
 * Every translatable field is an `{ en, es, nl }` trio; `yearShort`
 * stays single-string (codes like "JD", "MAR", "'23" read the same in
 * every language).
 */

export const timelineChapters: LocalisedTimelineChapter[] = [
  {
    id: "jeugd",
    number: "01",
    yearShort: "JD",
    period: {
      en: "Childhood · Zwolle, Belgium, Germany",
      es: "Infancia · Zwolle, Bélgica, Alemania",
      nl: "Jeugd · Zwolle, België, Duitsland",
    },
    title: {
      en: "A childhood across borders.",
      es: "Una infancia entre fronteras.",
      nl: "Een jeugd over grenzen heen.",
    },
    body: {
      en: [
        "Born in Zwolle, raised partly in Belgium and partly in Germany. Different countries, different kitchens, different tables. An early lesson that food speaks a different language wherever you go.",
        "The family eventually settled in Groningen, where I finished my schooling.",
      ],
      es: [
        "Nacido en Zwolle, criado en parte en Bélgica y en parte en Alemania. Países distintos, cocinas distintas, mesas distintas. Una lección temprana de que la comida habla otro idioma en cada sitio.",
        "Al final la familia se asentó en Groningen, donde terminé mis estudios.",
      ],
      nl: [
        "Geboren in Zwolle, opgegroeid deels in België en deels in Duitsland. Verschillende landen, verschillende keukens, verschillende tafels. Een vroege les dat eten overal een andere taal spreekt.",
        "Uiteindelijk streek het gezin neer in Groningen, waar ik mijn opleiding afrondde.",
      ],
    },
    marginalia: {
      en: "three countries · one table",
      es: "tres países · una mesa",
      nl: "drie landen · één tafel",
    },
  },
  {
    id: "marechaussee",
    number: "02",
    yearShort: "MAR",
    period: {
      en: "About three years · Royal Marechaussee",
      es: "Unos tres años · Real Mariscalía",
      nl: "Circa drie jaar · Koninklijke Marechaussee",
    },
    title: {
      en: "Discipline in uniform.",
      es: "Disciplina de uniforme.",
      nl: "Discipline in uniform.",
    },
    body: {
      en: [
        "Before the kitchen called, I chose the service. With the Royal Marechaussee I trained as a first-class sergeant and worked, among other places, at Schiphol airport.",
        "Three years long I learned what precision, responsibility and finishing a task actually mean. An attitude that walked straight into the kitchen with me.",
      ],
      es: [
        "Antes de que llamara la cocina, escogí el servicio. En la Real Mariscalía me formé como sargento de primera clase y trabajé, entre otros sitios, en el aeropuerto de Schiphol.",
        "Durante tres años aprendí lo que significan de verdad la precisión, la responsabilidad y terminar bien una tarea. Una actitud que entró conmigo directa en la cocina.",
      ],
      nl: [
        "Voordat de keuken riep, koos ik voor de dienst. Bij de Koninklijke Marechaussee volgde ik de opleiding tot wachtmeester eerste klasse en werkte ik onder meer op Schiphol.",
        "Drie jaar lang leerde ik wat precisie, verantwoordelijkheid en het afmaken van een taak écht betekenen. Een houding die regelrecht de keuken in zou gaan.",
      ],
    },
    marginalia: {
      en: "first-class sergeant · schiphol",
      es: "sargento de primera · schiphol",
      nl: "wachtmeester eerste klasse · schiphol",
    },
  },
  {
    id: "gambia",
    number: "03",
    yearShort: "GMB",
    period: {
      en: "One year · The Gambia",
      es: "Un año · Gambia",
      nl: "Een jaar · Gambia",
    },
    title: {
      en: "The world as a classroom.",
      es: "El mundo como escuela.",
      nl: "De wereld als leerschool.",
    },
    body: {
      en: [
        "After the service years I left for a year of volunteer work in The Gambia. One of the roots of my curiosity about other kitchens and other cultures.",
        "It also turned out to be one of the first real stamps in a passport that would eventually count 27.",
      ],
      es: [
        "Tras los años de servicio me marché un año de voluntariado en Gambia. Una de las raíces de mi curiosidad por otras cocinas y otras culturas.",
        "Resultó ser también uno de los primeros sellos de verdad en un pasaporte que acabaría sumando 27.",
      ],
      nl: [
        "Na de dienstjaren vertrok ik voor een jaar vrijwilligerswerk naar Gambia. Een van de wortels van mijn nieuwsgierigheid naar andere keukens en culturen.",
        "Het werd een van de eerste echte stempels in een paspoort dat er uiteindelijk 27 zou tellen.",
      ],
    },
    marginalia: {
      en: "volunteer work · west africa",
      es: "voluntariado · áfrica occidental",
      nl: "vrijwilligerswerk · west-afrika",
    },
  },
  {
    id: "amateur",
    number: "04",
    yearShort: "...",
    period: {
      en: "All those years · In the margins",
      es: "Todos esos años · Al margen",
      nl: "Al die jaren · In de marge",
    },
    title: {
      en: "Amateur with ambition.",
      es: "Aficionado con ambición.",
      nl: "Amateur met ambitie.",
    },
    body: {
      en: [
        "All through it, I was cooking. No training, no brigade. But an unsatisfiable hunger, endless 24Kitchen, and a camera never far away.",
        "Two passions sitting on a low flame, waiting for their moment.",
      ],
      es: [
        "Durante todo ese tiempo, cocinaba. Sin formación, sin brigada. Pero con un hambre insaciable, 24Kitchen sin parar, y una cámara nunca lejos.",
        "Dos pasiones a fuego lento, esperando su momento.",
      ],
      nl: [
        "Door alles heen werd er gekookt. Geen opleiding, geen brigade. Wel een onverzadigbare honger, eindeloos 24Kitchen, en een camera die nooit ver weg was.",
        "Twee passies die op een laag pitje stonden te wachten op hun moment.",
      ],
    },
    marginalia: {
      en: "amateur · 24kitchen · patience",
      es: "aficionado · 24kitchen · paciencia",
      nl: "amateur · 24kitchen · geduld",
    },
  },
  {
    id: "echte-start",
    number: "05",
    yearShort: "26",
    period: {
      en: "Around twenty-six · The real start",
      es: "Hacia los veintiséis · El comienzo real",
      nl: "Rond zijn 26e · De echte start",
    },
    title: {
      en: "Into the cold section.",
      es: "Entrar por la cocina fría.",
      nl: "De koude kant in.",
    },
    body: {
      en: [
        "It wasn't until around twenty-six that I went all in on the craft. I started in a restaurant kitchen, mostly on the cold section. The place where you learn that build, timing and cleanliness are half the work.",
        "From there I moved on, with a stop at De Middenstip in Epe, on the road to Amsterdam.",
      ],
      es: [
        "No fue hasta los veintiséis cuando aposté del todo por el oficio. Empecé en la cocina de un restaurante, sobre todo en la fría. El sitio donde aprendes que montaje, tempo y limpieza son la mitad del trabajo.",
        "De ahí pasé adelante, con una parada en De Middenstip de Epe, camino de Ámsterdam.",
      ],
      nl: [
        "Pas rond mijn zesentwintigste koos ik voluit voor het vak. Ik begon in de keuken van een restaurant, vooral aan de koude kant. De plek waar je leert dat opbouw, timing en netheid het halve werk zijn.",
        "Daarna trok ik verder, met een tussenstop bij De Middenstip in Epe, op weg naar Amsterdam.",
      ],
    },
    marginalia: {
      en: "cold section · de middenstip, epe",
      es: "cocina fría · de middenstip, epe",
      nl: "koude kant · de middenstip, epe",
    },
  },
  {
    id: "bordeau",
    number: "06",
    yearShort: "'17",
    period: {
      en: "2017. 2018 · Amsterdam",
      es: "2017. 2018 · Ámsterdam",
      nl: "2017. 2018 · Amsterdam",
    },
    title: {
      en: "A year inside a starred kitchen.",
      es: "Un año en una cocina con estrella.",
      nl: "Een jaar in een sterrenkeuken.",
    },
    body: {
      en: [
        "Through a meeting at the Horecava trade fair with chef Mounir Toub, a referral to Robert Kranenborg and eventually a conversation with Bas van Kranen, I landed in the kitchen of Bord'eau at Hotel de L'Europe.",
        "I worked in the pastry section and picked up the rhythm of all the other parties on the way through. The lesson that stayed: a plate has to be honest, and precision lives in the smallest detail.",
      ],
      es: [
        "Por un encuentro en la feria Horecava con el chef Mounir Toub, una recomendación a Robert Kranenborg y, finalmente, una conversación con Bas van Kranen, acabé en la cocina del Bord'eau, en el Hotel de L'Europe.",
        "Trabajé en pastelería y, de paso, fui pillando el ritmo del resto de partidas. La lección que se queda: un plato tiene que ser honesto, y la precisión vive en el detalle más pequeño.",
      ],
      nl: [
        "Via een ontmoeting op de Horecava met chef Mounir Toub, een doorverwijzing naar Robert Kranenborg en uiteindelijk een gesprek met Bas van Kranen, belandde ik in de keuken van Bord'eau in Hotel de L'Europe.",
        "Ik werkte in de patisserie en ving onderweg het ritme van alle andere parties op. De les die bleef hangen: een bord moet eerlijk zijn, en precisie zit in het kleinste detail.",
      ],
    },
    marginalia: {
      en: "bord'eau · hotel de l'europe · pastry",
      es: "bord'eau · hotel de l'europe · pastelería",
      nl: "bord'eau · hotel de l'europe · patisserie",
    },
  },
  {
    id: "groningen",
    number: "07",
    yearShort: "GRN",
    period: {
      en: "After Amsterdam · Groningen",
      es: "Tras Ámsterdam · Groningen",
      nl: "Na Amsterdam · Groningen",
    },
    title: {
      en: "Into entrepreneurship.",
      es: "Al emprendimiento.",
      nl: "Het ondernemerschap in.",
    },
    body: {
      en: [
        "I picked my own road. First I took over Eetcafé Texels. And learned right away how heavy a wrong location and an oversized building weigh.",
        "After that, in a small unit on the Gelkingestraat, I opened Holyburgers: Groningen's first halal burger spot. Great product, accessible but with class. It grew into the best-reviewed burger spot in the city. That's where I really learned how to run a business.",
      ],
      es: [
        "Elegí mi propio camino. Primero me hice cargo del Eetcafé Texels. Y aprendí enseguida lo mucho que pesan un mal sitio y un local demasiado grande.",
        "Después, en un local pequeño de la Gelkingestraat, abrí Holyburgers: la primera hamburguesería halal de Groningen. Buen producto, accesible pero con clase. Creció hasta convertirse en la hamburguesería mejor valorada de la ciudad. Ahí aprendí de verdad a emprender.",
      ],
      nl: [
        "Ik koos mijn eigen weg. Eerst nam ik Eetcafé Texels over. En leerde meteen hoe zwaar een verkeerde locatie en een te groot pand wegen.",
        "Daarna, in een klein pand aan de Gelkingestraat, opende ik Holyburgers: de eerste halal-burgerzaak van Groningen. Prachtige producten, toegankelijk maar met klasse. Het groeide uit tot de best beoordeelde burgerzaak van de stad. Hier leerde ik écht ondernemen.",
      ],
    },
    marginalia: {
      en: "holyburgers · gelkingestraat · top-rated",
      es: "holyburgers · gelkingestraat · mejor valorada",
      nl: "holyburgers · gelkingestraat · best beoordeeld",
    },
  },
  {
    id: "fotografie",
    number: "08",
    yearShort: "'07",
    period: {
      en: "Ongoing · Behind the lens",
      es: "Continuo · Detrás de la lente",
      nl: "Doorlopend · Achter de lens",
    },
    title: {
      en: "A second eye.",
      es: "Un segundo ojo.",
      nl: "Een tweede oog.",
    },
    body: {
      en: [
        "I've been shooting since I was eighteen. As an all-round photographer with a heart for portraits I learned the same discipline that shapes my kitchen: wait for the right light, pick the right moment, and know when to stop fine-tuning.",
        "In 2024 I travelled across Japan. A wealth of images and a wealth of kitchen inspiration.",
      ],
      es: [
        "Hago fotos desde los dieciocho. Como fotógrafo polivalente con debilidad por el retrato aprendí la misma disciplina que da forma a mi cocina: esperar la luz adecuada, elegir el momento justo, y saber cuándo dejar de retocar.",
        "En 2024 viajé por Japón. Un tesoro de imágenes y de inspiración para la cocina.",
      ],
      nl: [
        "Sinds mijn achttiende fotografeer ik. Als allround fotograaf met een hart voor portret leerde ik dezelfde discipline die mijn keuken vormt: wachten op het juiste licht, het juiste moment kiezen, en weten wanneer je moet stoppen met bijschaven.",
        "In 2024 reisde ik door Japan. Een schat aan beelden én keukeninspiratie.",
      ],
    },
    marginalia: {
      en: "portrait · street · japan '24",
      es: "retrato · calle · japón '24",
      nl: "portret · straat · japan '24",
    },
  },
  {
    id: "costa-del-sol",
    number: "09",
    yearShort: "'23",
    period: {
      en: "2023. Now · Costa del Sol",
      es: "2023. Ahora · Costa del Sol",
      nl: "2023. Nu · Costa del Sol",
    },
    title: {
      en: "A new table under the sun.",
      es: "Una mesa nueva al sol.",
      nl: "Een nieuwe tafel onder de zon.",
    },
    body: {
      en: [
        "I swapped Holland for Andalucía. Lemons grow on the tree here, the fish comes straight out of the sea, and everyone takes their time. Friends asked if I'd cook for them, then their friends, then a villa for a whole week.",
        "That's how TOORN at table was born: private cooking at someone else's table, with the precision of the starred kitchen and the pace of the south.",
      ],
      es: [
        "Cambié Holanda por Andalucía. Aquí los limones crecen en el árbol, el pescado viene directo del mar y todo el mundo se toma su tiempo. Amigos me pidieron cocinar para ellos, luego sus amigos, luego una villa durante una semana entera.",
        "Así nació TOORN at table: cocinar en privado en la mesa de otro, con la precisión de la cocina con estrella y el ritmo del sur.",
      ],
      nl: [
        "Ik verruilde Nederland voor Andalusië. Hier groeit citroen aan de boom, komt de vis vers uit zee en neemt iedereen de tijd. Vrienden vroegen of ik voor hen wilde koken, daarna hun vrienden, daarna een villa voor een hele week.",
        "Zo werd TOORN at table geboren: privé koken aan andermans tafel, met de precisie van de sterrenkeuken en het tempo van het zuiden.",
      ],
    },
    marginalia: {
      en: "private dinners · villa takeovers · 2023",
      es: "cenas privadas · tomas de villa · 2023",
      nl: "private dinners · villa takeovers · 2023",
    },
  },
];
