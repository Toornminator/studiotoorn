"""
One-off: splice the new polaroid clusters (and the Japan ambient clip)
into src/content/travel.ts.

Each location object is closed by a `\\n  },\\n` (two-space indent on
the closing brace). For every slug in the mapping below we find that
closer immediately after the slug line and inject a `polaroids: [...]`
property — plus a `clip: {...}` for Japan — directly before it.

Run: python scripts/inject-travel-polaroids.py
"""
from __future__ import annotations

import re
import textwrap
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH = os.path.join(ROOT, "src/content/travel.ts")


def loc(en: str, es: str, nl: str) -> str:
    """Inline LocalisedString literal with double-quoted values."""
    def q(s: str) -> str:
        return '"' + s.replace('"', '\\"') + '"'
    return f'{{ en: {q(en)}, es: {q(es)}, nl: {q(nl)} }}'


def polaroid_block(src: str, alt_loc: str, caption_loc: str) -> str:
    return textwrap.indent(textwrap.dedent(f"""\
        {{
          src: "{src}",
          alt: {alt_loc},
          caption: {caption_loc},
        }},"""), "      ")


# slug -> list of (filename, alt-loc, caption-loc)
POLAROIDS: dict[str, list[tuple[str, str, str]]] = {
    "belgie": [
        ("/images/polaroids/antwerpen.jpeg",
         loc("Dinner at Ultimatum Foodbar, Antwerp",
             "Cena en Ultimatum Foodbar, Amberes",
             "Diner bij Ultimatum Foodbar, Antwerpen"),
         loc("Ultimatum Foodbar", "Ultimatum Foodbar", "Ultimatum Foodbar")),
        ("/images/polaroids/belgie-antwerpen.jpeg",
         loc("Grote Markt, Antwerp, with flags",
             "Grote Markt, Amberes, con banderas",
             "Grote Markt, Antwerpen, met vlaggen"),
         loc("Grote Markt", "Grote Markt", "Grote Markt")),
    ],
    "duitsland": [
        ("/images/polaroids/oktoberfest.jpeg",
         loc("Oktoberfest in full swing",
             "Oktoberfest a pleno",
             "Oktoberfest in volle gang"),
         loc("Oktoberfest", "Oktoberfest", "Oktoberfest")),
    ],
    "frankrijk": [
        ("/images/polaroids/paris.jpeg",
         loc("Paris, on foot", "París, a pie", "Parijs, te voet"),
         loc("Paris", "París", "Parijs")),
    ],
    "zwitserland": [
        ("/images/polaroids/zwitserse-alpen.jpeg",
         loc("Looking out over the Swiss Alps",
             "Mirando los Alpes suizos",
             "Uitzicht over de Zwitserse Alpen"),
         loc("Swiss Alps", "Alpes suizos", "Zwitserse Alpen")),
    ],
    "roemenie": [
        ("/images/polaroids/bucharest.jpeg",
         loc("Bucharest streets", "Calles de Bucarest", "Boekarest, op straat"),
         loc("Bucharest", "Bucarest", "Boekarest")),
    ],
    "uk": [
        ("/images/polaroids/edinburgh.jpeg",
         loc("Edinburgh, old town",
             "Edimburgo, casco antiguo",
             "Edinburgh, oude stad"),
         loc("Edinburgh", "Edimburgo", "Edinburgh")),
    ],
    "ierland": [
        ("/images/polaroids/dublin.jpeg",
         loc("Dublin, after dark", "Dublín, de noche", "Dublin, na donker"),
         loc("Dublin", "Dublín", "Dublin")),
    ],
    "spanje": [
        ("/images/polaroids/feria-malaga.jpeg",
         loc("Father and daughter at the Feria de Málaga",
             "Padre e hija en la Feria de Málaga",
             "Vader en dochter op de Feria de Málaga"),
         loc("Feria de Málaga", "Feria de Málaga", "Feria de Málaga")),
        ("/images/polaroids/malaga-flamenco.jpeg",
         loc("Flamenco, Málaga", "Flamenco, Málaga", "Flamenco, Málaga"),
         loc("Flamenco, Málaga", "Flamenco, Málaga", "Flamenco, Málaga")),
    ],
    "portugal": [
        ("/images/polaroids/lissabon.jpeg",
         loc("Lisbon viewpoint", "Mirador en Lisboa", "Uitzicht in Lissabon"),
         loc("Lisbon", "Lisboa", "Lissabon")),
    ],
    "italie": [
        ("/images/polaroids/rome.jpeg",
         loc("Rome, on foot", "Roma, a pie", "Rome, te voet"),
         loc("Rome", "Roma", "Rome")),
    ],
    "verenigde-staten": [
        ("/images/polaroids/santamonica-losangeles.jpeg",
         loc("Santa Monica, Los Angeles",
             "Santa Mónica, Los Ángeles",
             "Santa Monica, Los Angeles"),
         loc("Santa Monica", "Santa Mónica", "Santa Monica")),
    ],
    "japan": [
        ("/images/polaroids/japan-kyoto.jpeg",
         loc("At Kinkaku-ji, the Golden Pavilion in Kyoto",
             "En Kinkaku-ji, el Pabellón Dorado de Kioto",
             "Bij Kinkaku-ji, het Gouden Paviljoen in Kyoto"),
         loc("Kinkaku-ji, Kyoto", "Kinkaku-ji, Kioto", "Kinkaku-ji, Kyoto")),
        ("/images/polaroids/japan-yokohama.jpeg",
         loc("Eating ramen in Yokohama",
             "Comiendo ramen en Yokohama",
             "Ramen eten in Yokohama"),
         loc("Ramen, Yokohama", "Ramen, Yokohama", "Ramen, Yokohama")),
    ],
}

# Locations that carry an ambient 9:16 clip alongside the polaroids.
CLIPS: dict[str, tuple[str, str, str]] = {
    "japan": (
        "/videos/old-lady-yokohama.mp4",
        loc(
            "An old woman cooking in a small Yokohama kitchen",
            "Una anciana cocinando en una pequeña cocina de Yokohama",
            "Een oude vrouw die kookt in een kleine Yokohama-keuken",
        ),
        loc(
            "A grandmother's kitchen, Yokohama",
            "La cocina de una abuela, Yokohama",
            "De keuken van een oma, Yokohama",
        ),
    ),
}


def render_polaroids(slug: str) -> str:
    items = POLAROIDS.get(slug, [])
    if not items:
        return ""
    blocks = "\n".join(polaroid_block(s, a, c) for s, a, c in items)
    return f"    polaroids: [\n{blocks}\n    ],\n"


def render_clip(slug: str) -> str:
    if slug not in CLIPS:
        return ""
    src, alt_loc, cap_loc = CLIPS[slug]
    return textwrap.indent(textwrap.dedent(f"""\
        clip: {{
          src: "{src}",
          alt: {alt_loc},
          caption: {cap_loc},
        }},
        """), "    ")


def inject(content: str, slug: str) -> str:
    """Insert polaroids (+ clip) for `slug` right before its closing `  },`."""
    slug_m = re.search(rf'slug: "{slug}",', content)
    if not slug_m:
        raise RuntimeError(f"slug not found: {slug}")
    end_m = re.search(r"\n  \},\n", content[slug_m.end():])
    if not end_m:
        raise RuntimeError(f"location closer not found for: {slug}")
    insert_at = slug_m.end() + end_m.start() + 1  # after the leading \n
    payload = render_polaroids(slug) + render_clip(slug)
    return content[:insert_at] + payload + content[insert_at:]


def main() -> None:
    with open(PATH, "r", encoding="utf-8") as f:
        content = f.read()

    # Inject from the bottom of the file up so byte offsets stay valid.
    for slug in reversed(list(POLAROIDS.keys())):
        content = inject(content, slug)

    with open(PATH, "w", encoding="utf-8", newline="\n") as f:
        f.write(content)

    total_polaroids = sum(len(v) for v in POLAROIDS.values())
    print(f"injected {total_polaroids} polaroids across {len(POLAROIDS)} locations")
    print(f"injected {len(CLIPS)} ambient clip(s)")


if __name__ == "__main__":
    main()
