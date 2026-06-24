import type { Metadata } from "next";
import Link from "next/link";
import { RecipeIndex } from "@/components/kookboek/RecipeIndex";
import { CookbookAppPanel } from "@/components/kookboek/CookbookAppPanel";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { getCurrentLocale, getDictionary, setRequestLocale } from "@/i18n/server";
import { buildAlternates, localizedHref } from "@/i18n/config";
import { getRecipes } from "@/lib/content/recipes";

/**
 * /cookbook — the app shell. This is where the installed PWA opens
 * (manifest start_url) and the page the "put it on your phone" links
 * point at: install + offline panel up top, then the full recipe index.
 * Works exactly as well as a plain web page for anyone who lands here
 * from search.
 */

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  setRequestLocale((await params).locale);
  const [t, locale] = await Promise.all([getDictionary(), getCurrentLocale()]);
  return {
    title: t.cookbookApp.metaTitle,
    description: t.cookbookApp.metaDescription,
    alternates: buildAlternates("/cookbook", locale),
    robots: { index: true, follow: true },
    openGraph: {
      title: `${t.cookbookApp.metaTitle} · TOORN at table`,
      description: t.cookbookApp.metaDescription,
      url: "https://toornattable.com/cookbook",
      images: ["/opengraph-image.png"],
    },
  };
}

export default async function CookbookPage({ params }: Params) {
  setRequestLocale((await params).locale);
  const [t, locale] = await Promise.all([getDictionary(), getCurrentLocale()]);
  const recipes = await getRecipes(locale);
  const copy = t.cookbookApp;

  // Everything "save all recipes offline" pulls into the cache: this
  // index, every recipe page (in the visitor's language) and every hero
  // image (the original file; the service worker falls back to it when
  // an optimised /_next/image variant misses offline).
  const offlineUrls = [
    localizedHref("/cookbook", locale),
    ...recipes.map((r) => localizedHref(`/recipes/${r.slug}`, locale)),
    ...recipes.flatMap((r) => (r.heroImage ? [r.heroImage] : [])),
  ];

  return (
    <div className="relative w-full">
      <section className="mx-auto w-full max-w-6xl px-5 pt-24 pb-12 md:px-12 md:pt-32 md:pb-16">
        <Reveal
          as="p"
          className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red"
        >
          {copy.eyebrow}
        </Reveal>
        <h1
          className="mt-4 max-w-3xl font-display italic leading-[0.98] text-ink"
          style={{ fontSize: "clamp(38px, 6.5vw, 80px)" }}
        >
          <RevealWords text={copy.title} as="span" />
        </h1>
        <Reveal
          as="p"
          delay={0.2}
          className="mt-6 max-w-2xl font-serif italic text-ink/75"
        >
          <span style={{ fontSize: "clamp(17px, 1.3vw, 19px)", lineHeight: 1.5 }}>
            {copy.intro}
          </span>
        </Reveal>

        <Reveal delay={0.3} className="mt-12 md:mt-16">
          <CookbookAppPanel offlineUrls={offlineUrls} />
        </Reveal>
      </section>

      <section
        aria-label={copy.metaTitle}
        className="mx-auto w-full max-w-6xl px-5 pb-24 md:px-12 md:pb-32"
      >
        <RecipeIndex recipes={recipes} />
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-32 md:px-12 md:pb-40">
        <Link
          href={localizedHref("/", locale)}
          className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-ink/60 transition-colors hover:text-tattoo-red"
        >
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            aria-hidden
            className="rotate-180 transition-transform group-hover:-translate-x-0.5"
          >
            <path
              d="M1 5 H11 M8 1 L11 5 L8 9"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {copy.backToSite}
        </Link>
      </section>
    </div>
  );
}
