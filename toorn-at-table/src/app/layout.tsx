import type { Metadata } from "next";
import Script from "next/script";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Footer } from "@/components/layout/Footer";
import { NavBar } from "@/components/layout/NavBar";
import { PaperBackground } from "@/components/layout/PaperBackground";
import { Preloader } from "@/components/layout/Preloader";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { StickerProvider } from "@/components/stickers/StickerProvider";
import { LocaleProvider } from "@/i18n/client";
import { getCurrentLocale } from "@/i18n/server";
import { fontVariables } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "TOORN at table — Private chef, Costa del Sol",
  description:
    "An eye for light, the discipline of years in uniform and the precision of a Michelin-trained kitchen — at one table in the sun. Private chef Nick Toorn, Costa del Sol.",
  openGraph: {
    title: "TOORN at table — Art on a Plate",
    description:
      "Michelin-trained precision, Andalusian sun, one table. Not catering — a memory.",
    type: "website",
    locale: "en_GB",
    // The OG image itself is the 1200×630 card composed in
    // scripts/build-og-image.py and dropped at src/app/opengraph-image.png —
    // Next.js App Router auto-discovers that file and emits the right
    // <meta property="og:image"> tags. No need to repeat it here.
  },
  twitter: {
    card: "summary_large_image",
    title: "TOORN at table — Art on a Plate",
    description:
      "Michelin-trained precision, Andalusian sun, one table. Not catering — a memory.",
    // Same story for Twitter — src/app/twitter-image.png is picked up
    // automatically and overrides the openGraph image for Twitter cards.
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCurrentLocale();

  return (
    <html lang={locale} className={cn(fontVariables, "h-full antialiased")}>
      <body className="relative min-h-full flex flex-col bg-cream text-ink font-serif">
        {/* Google Analytics 4 — loaded with `afterInteractive` so it
            never blocks first paint, never delays Lenis/framer-motion
            startup, and ships after hydration. The Next <Script>
            wrapper deduplicates across client-side navigations and
            keeps the gtag init out of React's render cycle. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WMXDMHKFCV"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WMXDMHKFCV');
          `}
        </Script>

        <LocaleProvider initialLocale={locale}>
          <SmoothScroll>
            <PaperBackground />
            <NavBar />
            <main className="relative z-10 flex flex-1 flex-col">{children}</main>
            <Footer />
            <StickerProvider />
            <CustomCursor />
          </SmoothScroll>
          <Preloader />
        </LocaleProvider>
      </body>
    </html>
  );
}
