import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/i18n/server";
import { NewsletterForm } from "./NewsletterForm";
import { SocialLinks } from "./SocialLinks";

export async function Footer() {
  const t = await getDictionary();
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="relative w-full bg-ink text-cream">
      <div className="mx-auto w-full max-w-6xl px-5 pb-14 pt-20 md:px-12 md:pb-16 md:pt-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7" id="newsletter">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-mustard">
              {t.footer.newsletterEyebrow}
            </p>
            <h2
              className="mt-4 font-display italic leading-[1.05]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              {t.footer.newsletterTitle}
            </h2>
            <p
              className="mt-4 max-w-xl font-serif italic text-cream/75"
              style={{ fontSize: 16 }}
            >
              {t.footer.newsletterBody}
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>

          <div className="md:col-span-5 md:pl-10">
            {/* The chef-skull-and-knife mark sits as the visual anchor
                of the brand column. White hat + cream skull + red drip
                land cleanly on the ink background; the dark knife
                handle stays legible through its detailed linework.
                Drop shadow lifts it just enough to feel placed rather
                than printed onto the dark. */}
            <Image
              src="/images/chef_skull_knife_transparent.png"
              alt="TOORN at table"
              width={785}
              height={800}
              className="mb-8 h-24 w-auto md:h-28"
              style={{
                filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.45))",
              }}
            />
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-cream/50">
              {t.footer.brandEyebrow}
            </p>
            <p
              className="mt-4 font-display italic leading-[1.1]"
              style={{ fontSize: "clamp(22px, 2.6vw, 30px)" }}
            >
              {t.footer.brandLine1}
              <br />
              {t.footer.brandLine2}
            </p>
            <ul className="mt-6 space-y-1.5 font-serif italic text-cream/80" style={{ fontSize: 16 }}>
              <li>
                <a href={`mailto:${t.footer.contactEmail}`} className="hover:text-tattoo-mustard">
                  {t.footer.contactEmail}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/31614412102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tattoo-mustard"
                >
                  {t.footer.contactPhone}
                </a>
              </li>
            </ul>

            {/* Social profile row. Same dark-footer hover language as
                the mail / WhatsApp links above (cream → tattoo-mustard)
                so the whole block reads as one. */}
            <SocialLinks />

            <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/55">
              <li><Link href="/#kookboek" className="hover:text-tattoo-mustard">{t.footer.sitemapKookboek}</Link></li>
              <li><Link href="/#events" className="hover:text-tattoo-mustard">{t.footer.sitemapEvents}</Link></li>
              <li><Link href="/#contact" className="hover:text-tattoo-mustard">{t.footer.sitemapContact}</Link></li>
              <li><Link href="/#over-nick" className="hover:text-tattoo-mustard">{t.footer.sitemapAbout}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/45 md:flex-row md:items-center">
          <p>© {year} TOORN at table · {t.footer.copyright}</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li>
              <Link
                href="/privacy"
                className="transition-colors hover:text-tattoo-mustard"
              >
                {t.legal.privacyLabel}
              </Link>
            </li>
            <li aria-hidden className="text-cream/25">·</li>
            <li>
              <Link
                href="/terms"
                className="transition-colors hover:text-tattoo-mustard"
              >
                {t.legal.termsLabel}
              </Link>
            </li>
            <li aria-hidden className="text-cream/25">·</li>
            <li>{t.footer.madeWith}</li>
            <li aria-hidden className="text-cream/25">·</li>
            <li>
              {/* Studio Toorn credit. opens the agency site in a new
                  tab; rel=noopener strips window.opener so the agency
                  page can't navigate this tab; rel=noreferrer + author
                  on the link gives the agency proper Google attribution
                  without leaking the visitor's referer header. */}
              <a
                href="https://www.studiotoorn.com"
                target="_blank"
                rel="author noopener noreferrer"
                className="transition-colors hover:text-tattoo-mustard"
              >
                Designed by Studio Toorn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
