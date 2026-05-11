export function Portrait() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-warm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/nick-portrait.jpg"
        alt="Nick Toorn, private chef, aan het werk in zijn keuken"
        className="h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-multiply"
        style={{
          background:
            "radial-gradient(120% 90% at 30% 20%, rgba(232,220,196,0) 55%, rgba(26,26,26,0.18) 100%)",
        }}
      />
    </div>
  );
}
