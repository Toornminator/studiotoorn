/**
 * Hand-styled atlas plate of the Mediterranean basin. Coastlines are
 * deliberately rough — this is a zine illustration, not a survey-grade
 * map. Coordinates the rest of the system uses (`posVw`, `mapX/mapY`)
 * are percentages of the 800×500 viewBox.
 */
export function AtlasMap({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid meet"
      className={`block h-auto w-full ${className}`}
      role="img"
      aria-label="Atlas-kaart van het Middellandse-Zeebekken"
    >
      {/* Cream paper plate */}
      <rect width="800" height="500" fill="#F4EDE0" />

      {/* Decorative double border */}
      <g fill="none" stroke="#1A1A1A" strokeWidth="1.4">
        <rect x="14" y="14" width="772" height="472" />
        <rect x="22" y="22" width="756" height="456" strokeWidth="0.6" />
      </g>

      {/* Latitude/longitude grid */}
      <g stroke="#1A1A1A" strokeOpacity="0.08" strokeWidth="0.7">
        <line x1="22" y1="125" x2="778" y2="125" />
        <line x1="22" y1="250" x2="778" y2="250" />
        <line x1="22" y1="375" x2="778" y2="375" />
        <line x1="160" y1="22" x2="160" y2="478" />
        <line x1="320" y1="22" x2="320" y2="478" />
        <line x1="480" y1="22" x2="480" y2="478" />
        <line x1="640" y1="22" x2="640" y2="478" />
      </g>

      {/* Sea label */}
      <text
        x="430"
        y="285"
        textAnchor="middle"
        fill="#1A1A1A"
        fillOpacity="0.32"
        fontFamily="var(--font-display), serif"
        fontStyle="italic"
        fontSize="36"
        letterSpacing="6"
      >
        MARE NOSTRUM
      </text>
      <text
        x="430"
        y="310"
        textAnchor="middle"
        fill="#1A1A1A"
        fillOpacity="0.18"
        fontFamily="var(--font-mono), monospace"
        fontSize="10"
        letterSpacing="4"
      >
        ·  M E D I T E R R A N E A N  ·
      </text>

      {/* Subtle wave hatching for sea zones */}
      <g stroke="#1A1A1A" strokeOpacity="0.08" strokeWidth="0.6" fill="none">
        <path d="M150 350 q 20 -6 40 0 t 40 0 t 40 0 t 40 0" />
        <path d="M460 360 q 20 -6 40 0 t 40 0 t 40 0 t 40 0" />
        <path d="M200 405 q 20 -6 40 0 t 40 0 t 40 0 t 40 0" />
        <path d="M500 410 q 20 -6 40 0 t 40 0 t 40 0 t 40 0" />
      </g>

      {/* Continents — deliberately stylised, not geographically accurate */}
      <g stroke="#1A1A1A" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
        {/* Iberian peninsula (Spain + Portugal) */}
        <path
          d="M118 170 Q132 156 168 158 Q210 154 244 168 Q272 178 285 200 Q294 222 285 246 Q272 268 244 274 Q210 280 178 274 Q150 268 132 252 Q118 232 116 208 Q114 188 118 170 Z"
          fill="#E8DCC4"
          fillOpacity="0.55"
        />
        <text x="180" y="220" fontFamily="var(--font-mono), monospace" fontSize="9" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.65">
          ESPAÑA
        </text>
        <text x="138" y="245" fontFamily="var(--font-mono), monospace" fontSize="7" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.45">
          PORT.
        </text>

        {/* France (rough hex) */}
        <path
          d="M280 110 Q310 96 340 100 Q370 104 390 122 Q396 144 388 168 Q376 188 354 196 Q330 200 304 192 Q286 184 280 168 Q272 148 280 128 Q280 118 280 110 Z"
          fill="#E8DCC4"
          fillOpacity="0.55"
        />
        <text x="324" y="156" fontFamily="var(--font-mono), monospace" fontSize="9" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.65">
          FRANCE
        </text>

        {/* Italy boot */}
        <path
          d="M420 150 Q440 142 452 156 Q460 174 454 196 Q450 218 444 240 Q442 260 450 280 Q458 296 472 304 Q478 314 470 322 Q458 328 446 322 Q436 314 432 300 Q426 280 426 258 Q424 234 418 212 Q412 188 412 168 Q412 154 420 150 Z"
          fill="#E8DCC4"
          fillOpacity="0.55"
        />
        <text x="430" y="220" fontFamily="var(--font-mono), monospace" fontSize="9" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.65">
          ITALIA
        </text>

        {/* British Isles */}
        <path
          d="M260 38 Q280 32 296 42 Q306 56 302 78 Q294 96 278 100 Q260 96 252 80 Q248 60 260 38 Z"
          fill="#E8DCC4"
          fillOpacity="0.45"
        />
        <text x="266" y="68" fontFamily="var(--font-mono), monospace" fontSize="7" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.45">
          UK
        </text>

        {/* North African coast slab */}
        <path
          d="M70 380 Q120 360 200 364 Q280 358 360 366 Q440 360 520 370 Q600 376 680 382 Q720 388 740 400 L740 478 L60 478 Z"
          fill="#E8DCC4"
          fillOpacity="0.55"
        />
        <text x="190" y="430" fontFamily="var(--font-mono), monospace" fontSize="9" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.55">
          MAROC
        </text>
        <text x="370" y="430" fontFamily="var(--font-mono), monospace" fontSize="9" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.55">
          TUNIS
        </text>
        <text x="560" y="430" fontFamily="var(--font-mono), monospace" fontSize="9" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.55">
          LIBYA · EGYPT
        </text>

        {/* Balkans / Greece block */}
        <path
          d="M500 130 Q540 122 580 132 Q612 144 624 168 Q628 196 614 218 Q598 234 576 240 Q558 246 542 240 Q524 232 514 216 Q500 196 498 168 Q496 146 500 130 Z"
          fill="#E8DCC4"
          fillOpacity="0.55"
        />
        <text x="538" y="190" fontFamily="var(--font-mono), monospace" fontSize="9" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.65">
          BALKAN
        </text>

        {/* Greek islands / Crete hint */}
        <ellipse cx="588" cy="280" rx="22" ry="6" fill="#E8DCC4" fillOpacity="0.55" />
        <text x="568" y="298" fontFamily="var(--font-mono), monospace" fontSize="7" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.45">
          KRETA
        </text>

        {/* Turkey / Anatolia */}
        <path
          d="M620 124 Q670 116 720 128 Q752 140 760 170 Q760 198 740 214 Q716 224 682 222 Q650 220 628 210 Q608 198 608 178 Q608 152 620 124 Z"
          fill="#E8DCC4"
          fillOpacity="0.55"
        />
        <text x="666" y="178" fontFamily="var(--font-mono), monospace" fontSize="9" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.65">
          ANATOLIA
        </text>

        {/* Sicily + Sardinia */}
        <ellipse cx="436" cy="332" rx="20" ry="9" fill="#E8DCC4" fillOpacity="0.55" />
        <ellipse cx="384" cy="262" rx="11" ry="20" fill="#E8DCC4" fillOpacity="0.45" />

        {/* Balearic islands hint */}
        <ellipse cx="298" cy="252" rx="9" ry="5" fill="#E8DCC4" fillOpacity="0.55" />
      </g>

      {/* Compass rose */}
      <g transform="translate(96, 86)" stroke="#1A1A1A" strokeWidth="1" fill="none">
        <circle r="22" />
        <path d="M0 -22 L4 0 L0 22 L-4 0 Z" fill="#1A1A1A" />
        <path d="M-22 0 L0 4 L22 0 L0 -4 Z" fill="#1A1A1A" fillOpacity="0.25" />
        <text x="0" y="-28" textAnchor="middle" fontFamily="var(--font-mono), monospace" fontSize="9" letterSpacing="2" fill="#1A1A1A">N</text>
      </g>

      {/* Scale bar */}
      <g transform="translate(620, 446)" stroke="#1A1A1A" strokeWidth="1" fill="#1A1A1A">
        <line x1="0" y1="0" x2="120" y2="0" />
        <line x1="0" y1="-4" x2="0" y2="4" />
        <line x1="60" y1="-4" x2="60" y2="4" />
        <line x1="120" y1="-4" x2="120" y2="4" />
        <text x="60" y="-10" textAnchor="middle" fontFamily="var(--font-mono), monospace" fontSize="9" letterSpacing="2">500 KM</text>
      </g>

      {/* Title plate */}
      <text
        x="400"
        y="64"
        textAnchor="middle"
        fill="#1A1A1A"
        fontFamily="var(--font-display), serif"
        fontStyle="italic"
        fontSize="28"
        letterSpacing="3"
      >
        Tableau des Voyages
      </text>

      {/* Slot for markers + interactivity */}
      {children}
    </svg>
  );
}
