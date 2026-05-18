"use client";

import { useT } from "@/i18n/client";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function NavBar() {
  const t = useT();
  const links = [
    { href: "#over-nick", label: t.nav.aboutNick, hideOnMobile: true },
    { href: "#diensten", label: t.nav.services, hideOnMobile: true },
    { href: "#reizen", label: t.nav.travels, hideOnMobile: true },
    { href: "#kookboek", label: t.nav.cookbook, hideOnMobile: false },
    { href: "#events", label: t.nav.events, hideOnMobile: false },
    { href: "#contact", label: t.nav.contact, hideOnMobile: false },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md">
      <div className="flex items-center justify-between gap-3 border-b border-ink/10 bg-cream/75 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/70 sm:px-10 sm:py-5 sm:text-[11px]">
        <a
          href="#hero"
          className="font-medium text-ink transition-colors hover:text-tattoo-red whitespace-nowrap"
        >
          TOORN at table
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="flex items-center gap-3 sm:gap-5">
            {links.map((link, i) => (
              <li
                key={link.href}
                className={`flex items-center gap-3 sm:gap-5 ${
                  link.hideOnMobile ? "hidden md:flex" : ""
                }`}
              >
                {i > 0 && (
                  <span aria-hidden className="text-ink/30">
                    ·
                  </span>
                )}
                <a
                  href={link.href}
                  className="whitespace-nowrap transition-colors hover:text-tattoo-red"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
