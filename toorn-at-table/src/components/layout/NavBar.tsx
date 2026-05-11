const NAV_LINKS = [
  { href: "#over-nick", label: "Over Nick", hideOnMobile: true },
  { href: "#reizen", label: "Reizen", hideOnMobile: true },
  { href: "#kookboek", label: "Kookboek", hideOnMobile: false },
  { href: "#events", label: "Events", hideOnMobile: false },
  { href: "#contact", label: "Contact", hideOnMobile: false },
];

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md">
      <div className="flex items-center justify-between gap-3 border-b border-ink/10 bg-cream/75 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/70 sm:px-10 sm:py-5 sm:text-[11px]">
        <a
          href="#hero"
          className="font-medium text-ink transition-colors hover:text-tattoo-red whitespace-nowrap"
        >
          TOORN at table
        </a>
        <ul className="flex items-center gap-3 sm:gap-5">
          {NAV_LINKS.map((link, i) => (
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
      </div>
    </nav>
  );
}
