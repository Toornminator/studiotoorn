/**
 * Hand-styled atlas plate covering the whole world — needed because Nick's
 * visits run from Senegal to Japan. Coastlines are deliberately rough: this
 * is a zine illustration, not a survey map. Coordinates the rest of the
 * system uses (`posVw`, `mapX/mapY`) are percentages of the 1400×640 viewBox.
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
      viewBox="0 0 1400 640"
      preserveAspectRatio="xMidYMid meet"
      className={`block h-auto w-full ${className}`}
      role="img"
      aria-label="Atlas-kaart van bezochte landen"
    >
      {/* Cream paper plate */}
      <rect width="1400" height="640" fill="#F4EDE0" />

      {/* Decorative double border */}
      <g fill="none" stroke="#1A1A1A" strokeWidth="1.4">
        <rect x="14" y="14" width="1372" height="612" />
        <rect x="22" y="22" width="1356" height="596" strokeWidth="0.6" />
      </g>

      {/* Latitude / longitude grid (rough graticule) */}
      <g stroke="#1A1A1A" strokeOpacity="0.07" strokeWidth="0.7">
        {[160, 320, 480, 640, 800, 960, 1120, 1280].map((x) => (
          <line key={x} x1={x} y1="22" x2={x} y2="618" />
        ))}
        {[160, 320, 480].map((y) => (
          <line key={y} x1="22" y1={y} x2="1378" y2={y} />
        ))}
      </g>

      {/* Title */}
      <text
        x="700"
        y="72"
        textAnchor="middle"
        fill="#1A1A1A"
        fontFamily="var(--font-display), serif"
        fontStyle="italic"
        fontSize="34"
        letterSpacing="4"
      >
        Tableau des Voyages
      </text>

      {/* Sea wash */}
      <text
        x="900"
        y="320"
        textAnchor="middle"
        fill="#1A1A1A"
        fillOpacity="0.18"
        fontFamily="var(--font-display), serif"
        fontStyle="italic"
        fontSize="42"
        letterSpacing="10"
      >
        OCEANUS
      </text>

      {/* Subtle wave hatching */}
      <g stroke="#1A1A1A" strokeOpacity="0.08" strokeWidth="0.6" fill="none">
        <path d="M120 460 q 24 -8 48 0 t 48 0 t 48 0 t 48 0 t 48 0" />
        <path d="M800 480 q 24 -8 48 0 t 48 0 t 48 0 t 48 0 t 48 0" />
        <path d="M200 540 q 24 -8 48 0 t 48 0 t 48 0 t 48 0 t 48 0" />
        <path d="M900 540 q 24 -8 48 0 t 48 0 t 48 0 t 48 0 t 48 0" />
        <path d="M1100 380 q 24 -8 48 0 t 48 0 t 48 0 t 48 0" />
      </g>

      {/* ── Continents ────────────────────────────────────────────────── */}
      <g
        fill="#E8DCC4"
        fillOpacity="0.55"
        stroke="#1A1A1A"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* North America (rough) */}
        <path d="M70 150 Q110 110 175 110 Q260 100 320 130 Q360 145 360 175 Q340 200 320 220 Q310 254 318 282 Q314 312 290 320 Q260 322 240 296 Q210 260 180 252 Q140 246 110 226 Q80 196 70 150 Z" />
        <text
          x="218"
          y="200"
          fontFamily="var(--font-mono), monospace"
          fontSize="11"
          letterSpacing="2"
          fill="#1A1A1A"
          fillOpacity="0.55"
        >
          NORTH AMERICA
        </text>

        {/* Central America stub */}
        <path d="M298 320 Q302 350 314 374 Q325 396 340 408 Q336 396 332 380 Q320 354 312 332 Z" />

        {/* South America */}
        <path d="M340 420 Q360 396 386 396 Q412 400 422 422 Q436 460 432 504 Q420 548 396 568 Q368 584 348 568 Q330 540 332 502 Q330 462 340 420 Z" />
        <text
          x="376"
          y="490"
          fontFamily="var(--font-mono), monospace"
          fontSize="10"
          letterSpacing="2"
          fill="#1A1A1A"
          fillOpacity="0.4"
        >
          BRAZIL
        </text>

        {/* British Isles */}
        <path d="M644 152 Q676 144 692 158 Q702 172 696 192 Q686 208 672 212 Q654 208 646 192 Q638 172 644 152 Z" />
        <ellipse cx="623" cy="172" rx="9" ry="14" />

        {/* Iberian Peninsula */}
        <path d="M624 240 Q636 226 668 226 Q702 224 720 236 Q734 254 732 274 Q724 296 700 304 Q672 308 644 304 Q628 296 624 280 Q620 258 624 240 Z" />
        <text x="664" y="270" fontFamily="var(--font-mono), monospace" fontSize="9" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.65">
          ESPAÑA
        </text>

        {/* France hexagon */}
        <path d="M676 192 Q700 180 720 184 Q738 192 744 208 Q748 224 740 240 Q726 250 706 250 Q686 246 676 234 Q670 214 676 192 Z" />
        <text x="700" y="222" fontFamily="var(--font-mono), monospace" fontSize="9" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.65">
          FRANCE
        </text>

        {/* Low Countries cluster (NL/BE/LUX/DE) */}
        <path d="M708 170 Q726 162 744 168 Q756 180 754 196 Q748 210 738 214 Q720 212 712 200 Q706 188 708 170 Z" />
        <text x="722" y="190" fontFamily="var(--font-mono), monospace" fontSize="7" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.55">
          NL · BE · DE
        </text>

        {/* Central Europe (CZ/AT/HU) + Scandinavia bridge */}
        <path d="M752 168 Q780 158 814 164 Q834 178 832 198 Q826 218 810 224 Q784 224 760 216 Q748 200 752 168 Z" />
        <text x="788" y="200" fontFamily="var(--font-mono), monospace" fontSize="8" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.55">
          CZ · AT · HU
        </text>

        {/* Italy boot */}
        <path d="M742 240 Q758 232 768 248 Q772 268 766 290 Q762 312 758 332 Q758 346 766 354 Q768 362 760 364 Q748 362 742 350 Q738 332 740 308 Q738 286 736 264 Q734 248 742 240 Z" />
        <text x="750" y="290" fontFamily="var(--font-mono), monospace" fontSize="8" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.65">
          ITALIA
        </text>

        {/* Sicily / Sardinia */}
        <ellipse cx="760" cy="376" rx="14" ry="6" />
        <ellipse cx="728" cy="316" rx="7" ry="14" />

        {/* Balkans + Greece + Romania */}
        <path d="M824 224 Q860 218 884 226 Q900 238 898 258 Q890 280 870 286 Q848 290 832 280 Q822 264 824 224 Z" />
        <text x="852" y="258" fontFamily="var(--font-mono), monospace" fontSize="8" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.55">
          BALKAN
        </text>
        <path d="M826 286 Q848 288 866 296 Q876 310 870 328 Q852 336 836 332 Q826 318 826 286 Z" />
        <text x="838" y="316" fontFamily="var(--font-mono), monospace" fontSize="7" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.55">
          GR
        </text>

        {/* Turkey / Anatolia */}
        <path d="M896 244 Q940 238 980 248 Q1004 262 1002 286 Q990 304 962 306 Q930 304 906 296 Q890 282 896 244 Z" />
        <text x="942" y="280" fontFamily="var(--font-mono), monospace" fontSize="9" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.65">
          ANATOLIA
        </text>

        {/* Scandinavia (Nordics) */}
        <path d="M740 90 Q780 80 810 96 Q820 130 808 168 Q794 178 776 168 Q762 144 752 124 Q740 110 740 90 Z" />
        <text x="772" y="130" fontFamily="var(--font-mono), monospace" fontSize="9" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.55">
          NORDICS
        </text>

        {/* Russia / Eurasia outline */}
        <path d="M834 100 Q1000 90 1180 110 Q1260 128 1280 158 Q1280 200 1260 220 Q1180 240 1040 240 Q900 230 836 198 Q822 158 834 100 Z" />
        <text x="1080" y="170" fontFamily="var(--font-mono), monospace" fontSize="10" letterSpacing="3" fill="#1A1A1A" fillOpacity="0.4">
          EURASIAN STEPPE
        </text>

        {/* North + West Africa */}
        <path d="M580 320 Q700 296 820 312 Q900 320 940 340 Q960 380 950 420 Q920 460 870 466 Q820 460 780 454 Q740 460 700 470 Q660 482 624 466 Q604 446 600 420 Q590 392 588 360 Q582 340 580 320 Z" />
        <text x="700" y="380" fontFamily="var(--font-mono), monospace" fontSize="11" letterSpacing="3" fill="#1A1A1A" fillOpacity="0.55">
          NORTH AFRICA
        </text>

        {/* Sub-Saharan West Africa */}
        <path d="M610 466 Q660 470 690 484 Q700 510 696 540 Q686 568 660 580 Q628 572 614 552 Q606 524 608 498 Q610 478 610 466 Z" />
        <text x="638" y="528" fontFamily="var(--font-mono), monospace" fontSize="9" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.45">
          WEST AFRICA
        </text>

        {/* Central + East Africa */}
        <path d="M720 470 Q800 470 860 488 Q890 510 900 540 Q894 580 866 596 Q830 600 800 590 Q760 580 736 560 Q720 530 720 470 Z" />

        {/* Arabian Peninsula */}
        <path d="M980 308 Q1020 304 1056 316 Q1080 336 1078 372 Q1064 400 1036 410 Q1006 412 988 396 Q972 376 974 348 Q976 326 980 308 Z" />
        <text x="1014" y="368" fontFamily="var(--font-mono), monospace" fontSize="9" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.5">
          ARABIA
        </text>

        {/* Indian subcontinent */}
        <path d="M1080 270 Q1140 264 1180 282 Q1200 320 1180 360 Q1156 392 1120 392 Q1080 386 1064 358 Q1058 326 1066 294 Q1074 278 1080 270 Z" />
        <text x="1108" y="332" fontFamily="var(--font-mono), monospace" fontSize="10" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.5">
          INDIA
        </text>

        {/* East Asia chunk */}
        <path d="M1200 200 Q1260 196 1310 214 Q1336 244 1330 282 Q1308 314 1268 318 Q1230 312 1208 286 Q1196 254 1200 200 Z" />
        <text x="1252" y="262" fontFamily="var(--font-mono), monospace" fontSize="10" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.55">
          EAST ASIA
        </text>

        {/* Japan archipelago */}
        <path d="M1336 226 Q1352 220 1360 232 Q1364 246 1356 258 Q1346 264 1338 256 Q1334 244 1336 226 Z" />
        <path d="M1342 268 Q1358 268 1364 282 Q1362 296 1352 302 Q1340 300 1338 290 Z" />

        {/* SE Asia + Indonesia */}
        <path d="M1240 340 Q1280 336 1310 352 Q1324 378 1318 402 Q1296 416 1268 412 Q1242 400 1232 380 Q1234 358 1240 340 Z" />

        {/* Australia */}
        <path d="M1240 470 Q1300 462 1340 478 Q1358 506 1346 540 Q1318 558 1280 558 Q1240 552 1224 528 Q1224 498 1240 470 Z" />
        <text x="1280" y="518" fontFamily="var(--font-mono), monospace" fontSize="10" letterSpacing="2" fill="#1A1A1A" fillOpacity="0.45">
          AUSTRALIA
        </text>
      </g>

      {/* Compass rose */}
      <g
        transform="translate(96, 130)"
        stroke="#1A1A1A"
        strokeWidth="1"
        fill="none"
      >
        <circle r="22" />
        <path d="M0 -22 L4 0 L0 22 L-4 0 Z" fill="#1A1A1A" />
        <path d="M-22 0 L0 4 L22 0 L0 -4 Z" fill="#1A1A1A" fillOpacity="0.25" />
        <text
          x="0"
          y="-28"
          textAnchor="middle"
          fontFamily="var(--font-mono), monospace"
          fontSize="9"
          letterSpacing="2"
          fill="#1A1A1A"
        >
          N
        </text>
      </g>

      {/* Scale bar */}
      <g
        transform="translate(1200, 600)"
        stroke="#1A1A1A"
        strokeWidth="1"
        fill="#1A1A1A"
      >
        <line x1="0" y1="0" x2="160" y2="0" />
        <line x1="0" y1="-4" x2="0" y2="4" />
        <line x1="80" y1="-4" x2="80" y2="4" />
        <line x1="160" y1="-4" x2="160" y2="4" />
        <text
          x="80"
          y="-10"
          textAnchor="middle"
          fontFamily="var(--font-mono), monospace"
          fontSize="9"
          letterSpacing="2"
        >
          2000 KM
        </text>
      </g>

      {/* Count plate top-right */}
      <g transform="translate(1240, 86)">
        <rect
          x="-90"
          y="-26"
          width="180"
          height="52"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="1.4"
        />
        <text
          x="0"
          y="-6"
          textAnchor="middle"
          fontFamily="var(--font-mono), monospace"
          fontSize="9"
          letterSpacing="3"
          fill="#1A1A1A"
          fillOpacity="0.6"
        >
          BEZOCHT
        </text>
        <text
          x="0"
          y="18"
          textAnchor="middle"
          fontFamily="var(--font-display), serif"
          fontStyle="italic"
          fontSize="22"
          fill="#1A1A1A"
        >
          27 landen
        </text>
      </g>

      {/* Slot for markers + interactivity */}
      {children}
    </svg>
  );
}
