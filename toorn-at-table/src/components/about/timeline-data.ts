/**
 * Timeline chapters — Nick's full route from Zwolle to the Costa del Sol.
 * Sourced from the May 2026 brand bible (merkdossier). Each chapter
 * renders as a card in the Timeline component with the sticky year column
 * flagging the period on the left.
 *
 * Replaces an earlier four-chapter sketch that compressed the story into
 * "Amsterdam (Michelin) → photo → move → private chef" and got several
 * facts wrong (Amsterdam upbringing, "8 years Michelin", missing the
 * Marechaussee + Gambia + Groningen entrepreneurial chapters).
 */

export type TimelineChapter = {
  id: string;
  number: string;
  period: string;
  yearShort: string;
  title: string;
  body: string[];
  marginalia?: string;
};

export const timelineChapters: TimelineChapter[] = [
  {
    id: "jeugd",
    number: "01",
    period: "Jeugd · Zwolle, België, Duitsland",
    yearShort: "JD",
    title: "Een jeugd over grenzen heen.",
    body: [
      "Geboren in Zwolle, opgegroeid deels in België en deels in Duitsland. Verschillende landen, verschillende keukens, verschillende tafels — een vroege les dat eten overal een andere taal spreekt.",
      "Uiteindelijk streek het gezin neer in Groningen, waar ik mijn opleiding afrondde.",
    ],
    marginalia: "drie landen · één tafel",
  },
  {
    id: "marechaussee",
    number: "02",
    period: "Circa drie jaar · Koninklijke Marechaussee",
    yearShort: "MAR",
    title: "Discipline in uniform.",
    body: [
      "Voordat de keuken riep, koos ik voor de dienst. Bij de Koninklijke Marechaussee volgde ik de opleiding tot wachtmeester eerste klasse en werkte ik onder meer op Schiphol.",
      "Drie jaar lang leerde ik wat precisie, verantwoordelijkheid en het afmaken van een taak écht betekenen — een houding die regelrecht de keuken in zou gaan.",
    ],
    marginalia: "wachtmeester eerste klasse · schiphol",
  },
  {
    id: "gambia",
    number: "03",
    period: "Een jaar · Gambia",
    yearShort: "GMB",
    title: "De wereld als leerschool.",
    body: [
      "Na de dienstjaren vertrok ik voor een jaar vrijwilligerswerk naar Gambia. Een van de wortels van mijn nieuwsgierigheid naar andere keukens en culturen.",
      "Het werd een van de eerste echte stempels in een paspoort dat er uiteindelijk 27 zou tellen.",
    ],
    marginalia: "vrijwilligerswerk · west-afrika",
  },
  {
    id: "amateur",
    number: "04",
    period: "Al die jaren · In de marge",
    yearShort: "...",
    title: "Amateur met ambitie.",
    body: [
      "Door alles heen werd er gekookt. Geen opleiding, geen brigade — wel een onverzadigbare honger, eindeloos 24Kitchen, en een camera die nooit ver weg was.",
      "Twee passies die op een laag pitje stonden te wachten op hun moment.",
    ],
    marginalia: "amateur · 24kitchen · geduld",
  },
  {
    id: "echte-start",
    number: "05",
    period: "Rond zijn 26e · De echte start",
    yearShort: "26",
    title: "De koude kant in.",
    body: [
      "Pas rond mijn zesentwintigste koos ik voluit voor het vak. Ik begon in de keuken van een restaurant, vooral aan de koude kant — de plek waar je leert dat opbouw, timing en netheid het halve werk zijn.",
      "Daarna trok ik verder, met een tussenstop bij De Middenstip in Epe, op weg naar Amsterdam.",
    ],
    marginalia: "koude kant · de middenstip, epe",
  },
  {
    id: "bordeau",
    number: "06",
    period: "2017 — 2018 · Amsterdam",
    yearShort: "'17",
    title: "Een jaar in een sterrenkeuken.",
    body: [
      "Via een ontmoeting op de Horecava met chef Mounir Toub, een doorverwijzing naar Robert Kranenborg en uiteindelijk een gesprek met Bas van Kranen, belandde ik in de keuken van Bord'eau in Hotel de L'Europe.",
      "Ik werkte in de patisserie en ving onderweg het ritme van alle andere parties op. De les die bleef hangen: een bord moet eerlijk zijn, en precisie zit in het kleinste detail.",
    ],
    marginalia: "bord'eau · hotel de l'europe · patisserie",
  },
  {
    id: "groningen",
    number: "07",
    period: "Na Amsterdam · Groningen",
    yearShort: "GRN",
    title: "Het ondernemerschap in.",
    body: [
      "Ik koos mijn eigen weg. Eerst nam ik Eetcafé Texels over — en leerde meteen hoe zwaar een verkeerde locatie en een te groot pand wegen.",
      "Daarna, in een klein pand aan de Gelkingestraat, opende ik Holyburgers: de eerste halal-burgerzaak van Groningen. Prachtige producten, toegankelijk maar met klasse. Het groeide uit tot de best beoordeelde burgerzaak van de stad. Hier leerde ik écht ondernemen.",
    ],
    marginalia: "holyburgers · gelkingestraat · best beoordeeld",
  },
  {
    id: "fotografie",
    number: "08",
    period: "Doorlopend · Achter de lens",
    yearShort: "'07",
    title: "Een tweede oog.",
    body: [
      "Sinds mijn achttiende fotografeer ik. Als allround fotograaf met een hart voor portret leerde ik dezelfde discipline die mijn keuken vormt: wachten op het juiste licht, het juiste moment kiezen, en weten wanneer je moet stoppen met bijschaven.",
      "In 2024 reisde ik door Japan — een schat aan beelden én keukeninspiratie.",
    ],
    marginalia: "portret · straat · japan '24",
  },
  {
    id: "costa-del-sol",
    number: "09",
    period: "2023 — nu · Costa del Sol",
    yearShort: "'23",
    title: "Een nieuwe tafel onder de zon.",
    body: [
      "Ik verruilde Nederland voor Andalusië. Hier groeit citroen aan de boom, komt de vis vers uit zee en neemt iedereen de tijd. Vrienden vroegen of ik voor hen wilde koken, daarna hun vrienden, daarna een villa voor een hele week.",
      "Zo werd TOORN at table geboren: privé koken aan andermans tafel, met de precisie van de sterrenkeuken en het tempo van het zuiden.",
    ],
    marginalia: "private dinners · villa takeovers · 2023",
  },
];
