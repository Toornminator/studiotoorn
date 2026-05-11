/**
 * Concept copy — to be reviewed and edited by Nick. Each chapter renders
 * as a card in the timeline with the sticky year column flagging the
 * period on the left.
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
    id: "amsterdam",
    number: "02",
    period: "2014 — 2020",
    yearShort: "'14",
    title: "Amsterdam, een ster en lange nachten.",
    body: [
      "Mijn keuken-jaren begonnen in een restaurant in de Negen Straatjes waar je tot drie uur 's nachts nog vis kon staan ontvliezen. Vier jaar later stond ik in een team dat een Michelin-ster pakte — en in de jaren daarna probeerden we niet te zakken.",
      "Ik leerde er één ding boven alles: een bord moet eerlijk zijn. Hoe je het ook plateert, gasten voelen meteen of het ergens vandaan komt.",
    ],
    marginalia: "negen straatjes — 4 jaar — 1 ster",
  },
  {
    id: "fotografie",
    number: "03",
    period: "2018 — 2023",
    yearShort: "'18",
    title: "Een camera als tweede oog.",
    body: [
      "Naast de keuken begon ik portretten te maken. Eerst voor vrienden, daarna voor magazines en restaurants. Het bleek dezelfde discipline: wachten op het juiste licht, het juiste moment, en weten wanneer je moet stoppen met aanpassen.",
      "Het heeft hoe ik kook veranderd. Een bord is óók een compositie — alleen dan eentje die binnen drie minuten weg is.",
    ],
    marginalia: "portretten · interiors · stilllevens",
  },
  {
    id: "verhuizing",
    number: "04",
    period: "voorjaar 2023",
    yearShort: "'23",
    title: "Een vliegticket naar het zuiden.",
    body: [
      "Ik raakte een beetje op in Nederland. De grijsheid, de schaal, de tweederdes leven binnen. We pakten een huis aan de Costa del Sol, eerst voor een paar maanden, daarna voor een paar jaar, daarna voor altijd.",
      "Hier eet je buiten, hier groeit citroen aan een boom in de tuin, hier neemt iedereen z'n tijd. Iets in mijn manier van koken kwam pas hier los.",
    ],
    marginalia: "costa del sol — andalucía",
  },
  {
    id: "private-chef",
    number: "05",
    period: "2024 — nu",
    yearShort: "'24",
    title: "Een private tafel onder de zon.",
    body: [
      "TOORN at table begon eigenlijk per ongeluk: vrienden vroegen of ik thuis voor hen wilde koken, daarna vroegen hun vrienden het ook, daarna huurde een villa me in voor een week. Op een gegeven moment was het een baan.",
      "Nu kook ik voor mensen aan hun eigen tafel — verjaardagen, retraites, bedrijfsdiners die niet als bedrijfsdiners voelen. Michelin-discipline, Spaanse producten, en een tempo dat past bij waar we zitten.",
    ],
    marginalia: "private dinners · villa takeovers · retreats",
  },
];
