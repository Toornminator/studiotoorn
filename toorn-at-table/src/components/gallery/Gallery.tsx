import { readdirSync } from "fs";
import { join } from "path";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { getDictionary } from "@/i18n/server";
import { GalleryGrid } from "./GalleryGrid";

/**
 * Visual interlude — "In de keuken". Auto-discovers every image inside
 * public/images/gallery/ at request time (filesystem read in a Server
 * Component, so it happens at SSG build OR on each dev request). When
 * the folder is empty the section returns null so the page stays clean.
 *
 * Workflow for Nick: drop a .jpg / .png / .webp / .avif into
 * public/images/gallery/ — git pull → push and Vercel rebuilds, image
 * appears in the grid. Filenames are sorted alphabetically; prefix with
 * a number (01-...jpg, 02-...jpg) to control order. The alt text falls
 * back to the filename so screen readers get something meaningful even
 * without a captions file.
 */
export async function Gallery() {
  const t = await getDictionary();
  const dir = join(process.cwd(), "public/images/gallery");

  let files: string[] = [];
  try {
    files = readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
      .filter((f) => !f.startsWith("."))
      .sort();
  } catch {
    return null;
  }

  if (files.length === 0) return null;

  const photos = files.map((file) => ({
    src: `/images/gallery/${file}`,
    alt: humanise(file),
  }));

  return (
    <section
      id="in-the-kitchen"
      aria-labelledby="gallery-heading"
      className="relative w-full"
    >
      <div className="mx-auto w-full max-w-6xl px-5 pb-32 md:px-12 md:pb-48">
        <header className="border-t border-ink/15 pt-12 md:pt-20">
          <Reveal
            as="p"
            className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red"
          >
            {t.gallery.eyebrow}
          </Reveal>
          <h2
            id="gallery-heading"
            className="mt-4 max-w-3xl font-display leading-[0.95] text-ink"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            <RevealWords text={t.gallery.title} />
          </h2>
          <Reveal
            as="p"
            delay={0.2}
            className="mt-6 max-w-2xl font-serif italic text-ink/75"
          >
            <span style={{ fontSize: "clamp(17px, 1.25vw, 19px)" }}>
              {t.gallery.intro}
            </span>
          </Reveal>
        </header>

        <GalleryGrid photos={photos} />
      </div>
    </section>
  );
}

function humanise(filename: string) {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/^[0-9]+[-_ ]*/, "")
    .replace(/[-_]/g, " ");
}
