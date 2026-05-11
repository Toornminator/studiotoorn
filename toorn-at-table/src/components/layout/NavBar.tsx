export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 bg-cream/75 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/70 sm:px-10 sm:py-5 sm:text-[11px]">
        <a
          href="#hero"
          className="font-medium text-ink transition-colors hover:text-tattoo-red"
        >
          TOORN at table
        </a>
        <div className="flex items-center gap-3 sm:gap-6">
          <a
            href="#kookboek"
            className="transition-colors hover:text-tattoo-red"
          >
            <span className="hidden sm:inline">Het Kookboek</span>
            <span className="sm:hidden">Kookboek</span>
          </a>
          <span aria-hidden className="text-ink/30">
            ·
          </span>
          <a href="#events" className="transition-colors hover:text-tattoo-red">
            Events
          </a>
          <span aria-hidden className="text-ink/30">
            ·
          </span>
          <a
            href="#contact"
            className="transition-colors hover:text-tattoo-red"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
