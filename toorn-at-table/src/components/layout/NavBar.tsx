"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocale, useT } from "@/i18n/client";
import { localizedHref, stripLocalePrefix } from "@/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function NavBar() {
  const t = useT();
  const locale = useLocale();
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Nav links use absolute "/#section" hrefs. An absolute (leading-slash)
  // href lets Next's <Link> replace the whole path + hash, so it behaves
  // the same on the home page (in-page scroll) and from /privacy, /terms,
  // /the-table (SPA hop home, then scroll to the section). Relative
  // "#section" hrefs are avoided on purpose: Next appends them to the
  // current hash and produces a broken doubled fragment like
  // /#contact#contact that scrolls nowhere.
  const isHome = stripLocalePrefix(pathname) === "/";

  // The mobile sheet must close when a section is picked, and also when
  // the visitor rotates to landscape / resizes up past md where the
  // inline links are visible instead. Close on Escape too — small
  // keyboard niceties that make sticky-mobile-nav not feel cheap.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  // The full sitemap. On md+ it spreads inline in the bar; on < md
  // it lives behind a hamburger that slides a sheet down from the
  // bottom of the bar. Touch visitors get the same direct-jump
  // navigation desktop users have.
  const links: {
    href: string;
    label: string;
    /** Highlighted as the primary "order" action. */
    highlight?: boolean;
  }[] = [
    { href: "/#about", label: t.nav.aboutNick },
    { href: "/#services", label: t.nav.services },
    { href: "/#travels", label: t.nav.travels },
    { href: "/#cookbook", label: t.nav.cookbook },
    { href: "/#events", label: t.nav.events },
    { href: "/the-table", label: t.nav.theTable, highlight: true },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md">
      <div className="flex items-center justify-between gap-2 border-b border-ink/10 bg-cream/75 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/70 sm:gap-3 sm:px-10 sm:py-5 sm:tracking-[0.22em] sm:text-[11px]">
        <Link
          href={localizedHref(isHome ? "/#hero" : "/", locale)}
          aria-label="TOORN at table · back to top"
          onClick={() => setOpen(false)}
          className="group flex min-w-0 items-center gap-2.5 font-medium text-ink transition-colors hover:text-tattoo-red sm:gap-3"
        >
          <Image
            src="/images/chef_skull_knife_transparent.png"
            alt=""
            width={785}
            height={800}
            priority
            className="h-7 w-auto shrink-0 transition-transform duration-300 group-hover:rotate-[-4deg] sm:h-8"
          />
          <span className="truncate">TOORN at table</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <ul className="hidden lg:flex items-center gap-3 sm:gap-5">
            {links.map((link, i) => (
              <li
                key={link.href}
                className="flex items-center gap-3 sm:gap-5"
              >
                {i > 0 && (
                  <span aria-hidden className="text-ink/30">
                    ·
                  </span>
                )}
                <Link
                  href={localizedHref(link.href, locale)}
                  className={`whitespace-nowrap transition-colors ${
                    link.highlight
                      ? "font-medium text-tattoo-red hover:text-ink"
                      : "hover:text-tattoo-red"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={open}
            aria-controls="mobile-nav-sheet"
            onClick={() => setOpen((v) => !v)}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 bg-cream-warm/40 text-ink transition-colors hover:border-ink/30 hover:bg-cream-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream lg:hidden"
          >
            {/* Two crossing strokes that morph between bars and an X.
                Pure SVG so it never animates the DOM, only paint. */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
              className="transition-transform duration-200"
            >
              <motion.path
                d="M1 4 H13"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                animate={
                  open
                    ? { d: "M2 2 L12 12", opacity: 1 }
                    : { d: "M1 4 H13", opacity: 1 }
                }
                transition={{ duration: reduceMotion ? 0 : 0.22 }}
              />
              <motion.path
                d="M1 10 H13"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                animate={
                  open
                    ? { d: "M12 2 L2 12", opacity: 1 }
                    : { d: "M1 10 H13", opacity: 1 }
                }
                transition={{ duration: reduceMotion ? 0 : 0.22 }}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile sheet — slides down out of the bar with a backdrop blur
          that doesn't block the underlying scroll position (sheet
          dismisses on link tap or backdrop tap). */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              role="presentation"
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-[3.25rem] z-40 bg-ink/30 backdrop-blur-[2px] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.18 }}
            />
            <motion.div
              key="sheet"
              id="mobile-nav-sheet"
              role="dialog"
              aria-modal="true"
              aria-label={t.nav.menuOpen}
              className="absolute left-0 right-0 top-full z-50 border-b border-ink/10 bg-cream shadow-[0_18px_36px_-18px_rgba(20,16,12,0.35)] lg:hidden"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.24,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ul className="flex flex-col py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/80">
                {links.map((link, i) => (
                  <li key={link.href}>
                    <Link
                      href={localizedHref(link.href, locale)}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between px-5 py-3.5 transition-colors hover:bg-cream-warm active:bg-cream-warm sm:px-6 ${
                        link.highlight
                          ? "text-tattoo-red"
                          : "hover:text-tattoo-red"
                      }`}
                    >
                      <span className="truncate">{link.label}</span>
                      <span
                        aria-hidden
                        className="ml-3 font-mono text-[10px] tracking-[0.3em] text-ink/35"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
