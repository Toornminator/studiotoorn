/**
 * Inline social-link row.
 *
 * Renders the four brand profiles as monoline SVG icons inside soft
 * round buttons. Default state is cream/70 with a thin cream/15 border;
 * hover lifts to tattoo-mustard (matches the existing email/WhatsApp
 * hover colour in Footer.tsx) and gives a subtle 1.05 scale.
 *
 * Icons are hand-set from Lucide-style geometry rather than pulled
 * from a CDN: keeps the bundle hairline, the stroke consistent with
 * the rest of the editorial typography, and lets us tweak each path
 * to brand spec without fighting third-party defaults.
 *
 * `rel="me noopener noreferrer"` is intentional:
 *   - `me` is the IndieAuth / Mastodon semantic "this is the same
 *     identity" claim. Google also reads it as a sameAs hint and uses
 *     it to round-trip the link back to the brand for Knowledge Graph
 *     verification.
 *   - `noopener` strips window.opener so the external page can't
 *     navigate this tab.
 *   - `noreferrer` keeps the visitor's URL path/query off the
 *     external page's referer header.
 */

type SocialLink = {
  name: string;
  href: string;
  /** SVG body, drawn inside viewBox 0 0 24 24. */
  icon: React.ReactNode;
};

const SOCIALS: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/toornattable",
    icon: (
      <>
        <rect width="18" height="18" x="3" y="3" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@toornattable",
    // Stylised musical-note silhouette: the "J" body of the TikTok
    // glyph stripped of the colour-shift duplicate so it lives
    // happily as a hairline monoline.
    icon: (
      <path d="M21 8.5a6.4 6.4 0 0 1-5-2.3v9.4A5.4 5.4 0 1 1 10.6 10v3.1a2.3 2.3 0 1 0 2.4 2.3V2h3a6.4 6.4 0 0 0 5 5.3z" />
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590121961495",
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nick-toorn-973351195/",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

export function SocialLinks() {
  return (
    <ul className="mt-8 flex items-center gap-3">
      {SOCIALS.map((s) => (
        <li key={s.name}>
          <a
            href={s.href}
            target="_blank"
            rel="me noopener noreferrer"
            aria-label={s.name}
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 bg-transparent text-cream/70 transition-all duration-300 ease-out hover:scale-[1.06] hover:border-tattoo-mustard/60 hover:bg-tattoo-mustard/[0.08] hover:text-tattoo-mustard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-mustard focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
              className="transition-transform duration-300 group-hover:rotate-[-2deg]"
            >
              {s.icon}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
