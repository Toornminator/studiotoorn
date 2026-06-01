"""
Build the OpenGraph + Twitter social-share card from the chef-skull-knife
logo and the brand fonts.

Generates two files Next's App Router auto-discovers:
  - src/app/opengraph-image.png  (1200x630, OG default)
  - src/app/twitter-image.png    (1200x630, summary_large_image)

Layout: black-near-#0a0a0a backdrop with a soft warm radial behind the
logo, the chef-skull-knife mark on the left, and TOORN AT TABLE +
private-chef tagline + costa-del-sol locator stacked on the right.

Run: python scripts/build-og-image.py
Fonts come from scripts/og-fonts/ (downloaded once, not tracked in git
unless explicitly added).
"""

from __future__ import annotations

import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOGO_PATH = os.path.join(ROOT, "public/images/chef_skull_knife_transparent.png")
ALFA_PATH = os.path.join(ROOT, "scripts/og-fonts/AlfaSlabOne-Regular.ttf")
MONO_PATH = os.path.join(ROOT, "scripts/og-fonts/SpecialElite-Regular.ttf")

# Brand colours, mirrored from src/styles/tokens.css.
INK = (10, 10, 10, 255)
CREAM = (244, 237, 224, 255)
CREAM_MUTED = (244, 237, 224, 165)
CREAM_DIM = (244, 237, 224, 100)
TATTOO_RED = (200, 32, 42, 255)
GOLD = (201, 168, 106, 255)

# 1200x630 is the canonical OG card size — wider than Twitter's 2:1 but
# scaled cleanly by every major platform.
W, H = 1200, 630


def make_card() -> Image.Image:
    img = Image.new("RGBA", (W, H), INK)
    draw = ImageDraw.Draw(img, "RGBA")

    # Warm radial glow behind where the logo will sit. Painted onto a
    # blurred temp layer so it bleeds softly rather than ringing.
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_cx, glow_cy = 360, H // 2
    glow_max_r = 380
    # Concentric translucent ellipses fake a radial gradient — the blur
    # filter then smooths the banding away.
    for r in range(glow_max_r, 0, -8):
        alpha = int(55 * (1 - r / glow_max_r))
        glow_draw.ellipse(
            [glow_cx - r, glow_cy - r, glow_cx + r, glow_cy + r],
            fill=(255, 200, 120, alpha),
        )
    glow = glow.filter(ImageFilter.GaussianBlur(radius=60))
    img.alpha_composite(glow)

    # Logo — sized to take the left third with comfortable padding,
    # vertically centred. The mark is near-square (1227x1251), so we
    # scale by height and let the width follow.
    logo = Image.open(LOGO_PATH).convert("RGBA")
    target_h = 480
    target_w = round(logo.width * target_h / logo.height)
    logo = logo.resize((target_w, target_h), Image.LANCZOS)
    logo_x = 80
    logo_y = (H - target_h) // 2
    img.alpha_composite(logo, dest=(logo_x, logo_y))

    # Right column: wordmark + tagline + locator. Vertically grouped
    # around the midline so the type block balances the logo.
    text_x = 600
    alfa_120 = ImageFont.truetype(ALFA_PATH, 92)
    alfa_60 = ImageFont.truetype(ALFA_PATH, 58)
    mono_24 = ImageFont.truetype(MONO_PATH, 22)

    # Spaced-out mono eyebrow.
    eyebrow = "PRIVATE CHEF · COSTA DEL SOL"
    eyebrow_y = 188
    # Special Elite has no letterspacing — fake it by drawing per char.
    cursor_x = text_x
    char_space = 4
    for ch in eyebrow:
        ch_w = mono_24.getbbox(ch)[2] - mono_24.getbbox(ch)[0]
        draw.text((cursor_x, eyebrow_y), ch, font=mono_24, fill=TATTOO_RED)
        cursor_x += ch_w + char_space

    # TOORN — display, italic feel via simple slab.
    draw.text((text_x, 230), "TOORN", font=alfa_120, fill=CREAM, anchor="lt")

    # at table — smaller, indented like the hero. (Alfa Slab One is a
    # single-weight slab; italics are skipped, the staircase indent
    # carries the same "voice" the homepage uses.)
    draw.text((text_x + 80, 340), "at table", font=alfa_60, fill=CREAM, anchor="lt")

    # Tagline in Special Elite, same metric as the in-site eyebrows.
    tagline = "Art on a plate. Real food, by hand."
    cursor_x = text_x
    tagline_y = 440
    for ch in tagline:
        ch_w = mono_24.getbbox(ch)[2] - mono_24.getbbox(ch)[0]
        draw.text((cursor_x, tagline_y), ch, font=mono_24, fill=CREAM_MUTED)
        cursor_x += ch_w + 1

    # Bottom corner ornaments — small gold L-brackets like the
    # preloader's CornerMark, anchoring the composition.
    bracket_len = 26
    bracket_inset = 32
    bracket_w = 2
    # top-left
    draw.line(
        [(bracket_inset, bracket_inset),
         (bracket_inset + bracket_len, bracket_inset)],
        fill=GOLD, width=bracket_w,
    )
    draw.line(
        [(bracket_inset, bracket_inset),
         (bracket_inset, bracket_inset + bracket_len)],
        fill=GOLD, width=bracket_w,
    )
    # top-right
    draw.line(
        [(W - bracket_inset - bracket_len, bracket_inset),
         (W - bracket_inset, bracket_inset)],
        fill=GOLD, width=bracket_w,
    )
    draw.line(
        [(W - bracket_inset, bracket_inset),
         (W - bracket_inset, bracket_inset + bracket_len)],
        fill=GOLD, width=bracket_w,
    )
    # bottom-left
    draw.line(
        [(bracket_inset, H - bracket_inset),
         (bracket_inset + bracket_len, H - bracket_inset)],
        fill=GOLD, width=bracket_w,
    )
    draw.line(
        [(bracket_inset, H - bracket_inset - bracket_len),
         (bracket_inset, H - bracket_inset)],
        fill=GOLD, width=bracket_w,
    )
    # bottom-right
    draw.line(
        [(W - bracket_inset - bracket_len, H - bracket_inset),
         (W - bracket_inset, H - bracket_inset)],
        fill=GOLD, width=bracket_w,
    )
    draw.line(
        [(W - bracket_inset, H - bracket_inset - bracket_len),
         (W - bracket_inset, H - bracket_inset)],
        fill=GOLD, width=bracket_w,
    )

    # Subtle bottom-right URL stamp.
    url_label = "toornattable.com"
    url_bbox = mono_24.getbbox(url_label)
    url_w = url_bbox[2] - url_bbox[0]
    draw.text(
        (W - bracket_inset - url_w, H - bracket_inset - 38),
        url_label,
        font=mono_24,
        fill=CREAM_DIM,
    )

    return img.convert("RGB")


def main() -> None:
    card = make_card()
    og_path = os.path.join(ROOT, "src/app/opengraph-image.png")
    tw_path = os.path.join(ROOT, "src/app/twitter-image.png")
    card.save(og_path, "PNG", optimize=True)
    card.save(tw_path, "PNG", optimize=True)
    print(f"wrote {og_path}  ({os.path.getsize(og_path)/1024:.0f}KB)")
    print(f"wrote {tw_path}  ({os.path.getsize(tw_path)/1024:.0f}KB)")


if __name__ == "__main__":
    main()
