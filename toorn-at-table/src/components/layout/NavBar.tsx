"use client";

import Image from "next/image";
import { useT } from "@/i18n/client";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function NavBar() {
  const t = useT();
  // On mobile (< md) the in-page sitemap lives in the footer; the top
  // bar collapses to brand + language pill so it fits a 360-375px viewport
  // without horizontal overflow.
  const links = [
    { href: "#over-nick", label: t.nav.aboutNick },
    { href: "#diensten", label: t.nav.services },
    { href: "#reizen", label: t.nav.travels },
    { href: "#kookboek", label: t.nav.cookbook },
    { href: "#events", label: t.nav.events },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md">
      <div className="flex items-center justify-between gap-2 border-b border-ink/10 bg-cream/75 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/70 sm:gap-3 sm:px-10 sm:py-5 sm:tracking-[0.22em] sm:text-[11px]">
        <a
          href="#hero"
          aria-label="TOORN at table — back to top"
          className="group flex min-w-0 items-center gap-2.5 font-medium text-ink transition-colors hover:text-tattoo-red sm:gap-3"
        >
          <Image
            src="/images/chef_skull_knife_transparent.png"
            alt=""
            width={1227}
            height={1251}
            priority
            unoptimized
            className="h-7 w-auto shrink-0 transition-transform duration-300 group-hover:rotate-[-4deg] sm:h-8"
          />
          <span className="truncate">TOORN at table</span>
        </a>
        <div className="flex items-center gap-3 sm:gap-6">
          <ul className="hidden md:flex items-center gap-3 sm:gap-5">
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
