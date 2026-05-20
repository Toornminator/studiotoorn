import { Sticker } from "@/components/sticker/Sticker";
import { getDictionary } from "@/i18n/server";
import { NewsletterForm } from "./NewsletterForm";

export async function Footer() {
  const t = await getDictionary();
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="relative w-full bg-ink text-cream">
      <Sticker
        src="/images/stickers/cleaver.png"
        alt="Tattoo-flash hakmes"
        size="sm"
        rotation={-12}
        className="absolute right-[4vw] top-[2vh] z-10 hidden lg:block"
      />
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

            <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/55">
              <li><a href="#kookboek" className="hover:text-tattoo-mustard">{t.footer.sitemapKookboek}</a></li>
              <li><a href="#events" className="hover:text-tattoo-mustard">{t.footer.sitemapEvents}</a></li>
              <li><a href="#contact" className="hover:text-tattoo-mustard">{t.footer.sitemapContact}</a></li>
              <li><a href="#over-nick" className="hover:text-tattoo-mustard">{t.footer.sitemapAbout}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-cream/15 pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/45 md:flex-row md:items-center">
          <p>© {year} TOORN at table — {t.footer.copyright}</p>
          <p>{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
