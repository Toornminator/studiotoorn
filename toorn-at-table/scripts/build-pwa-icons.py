"""Generate the PWA install icons from the chef-skull-knife logo.

Maskable icons need the artwork inside the central ~80% "safe zone"
(launchers crop the canvas to a circle / squircle), so the logo sits at
62% of the canvas on a solid cream plate. The "any" icons can run a
little larger. Run from the repo root:

    python scripts/build-pwa-icons.py

Outputs to public/icons/. Re-run any time the logo changes.
"""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
LOGO = ROOT / "public" / "images" / "chef_skull_knife_transparent.png"
OUT = ROOT / "public" / "icons"

CREAM = (244, 237, 224, 255)  # --color-cream #F4EDE0

SPECS = [
    # (filename, canvas px, logo height as fraction of canvas)
    ("maskable-192.png", 192, 0.62),
    ("maskable-512.png", 512, 0.62),
    ("any-192.png", 192, 0.78),
    ("any-512.png", 512, 0.78),
]


def build(logo: Image.Image, size: int, frac: float, name: str) -> None:
    canvas = Image.new("RGBA", (size, size), CREAM)
    target_h = round(size * frac)
    target_w = round(logo.width * target_h / logo.height)
    scaled = logo.resize((target_w, target_h), Image.LANCZOS)
    canvas.alpha_composite(
        scaled, ((size - target_w) // 2, (size - target_h) // 2)
    )
    canvas.convert("RGB").save(OUT / name, "PNG", optimize=True)
    print(f"  {name}  {size}x{size}  logo {frac:.0%}")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    logo = Image.open(LOGO).convert("RGBA")
    print(f"Logo: {LOGO.name} {logo.width}x{logo.height}")
    for name, size, frac in SPECS:
        build(logo, size, frac, name)
    print(f"Done -> {OUT}")


if __name__ == "__main__":
    main()
