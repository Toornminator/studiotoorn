import type { Metadata } from "next";
import Script from "next/script";
import { CookieConsent } from "@/components/layout/CookieConsent";
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

const SITE_URL = "https://toornattable.com";

export const metadata: Metadata = {
  // metadataBase lets every relative URL in this object (OG image,
  // Twitter image, alternates) resolve against the production host
  // instead of localhost. Without it Next.js logs a warning on every
  // build and social previews break.
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TOORN at table · Private chef, Costa del Sol",
    template: "%s · TOORN at table",
  },
  description:
    "Private chef on the Costa del Sol. Michelin-trained precision, Andalusian calm, one table. Private dinners, villa weeks, workshops and open-booking events by Nick Toorn since 2023.",
  applicationName: "TOORN at table",
  authors: [{ name: "Nick Toorn" }],
  creator: "Nick Toorn",
  publisher: "TOORN at table",
  keywords: [
    "private chef",
    "Costa del Sol",
    "private chef Marbella",
    "villa chef Spain",
    "Michelin-trained chef",
    "private dining Andalucía",
    "Nick Toorn",
    "TOORN at table",
    "private dinner Spain",
  ],
  category: "food",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "TOORN at table",
    title: "TOORN at table · Art on a plate",
    description:
      "Michelin-trained precision, Andalusian sun, one table. Not catering. A memory.",
    url: SITE_URL,
    // The OG image itself is the 1200x630 card composed in
    // scripts/build-og-image.py and dropped at src/app/opengraph-image.png.
    // Next.js App Router auto-discovers that file and emits the right
    // <meta property="og:image"> tags. No need to repeat it here.
  },
  twitter: {
    card: "summary_large_image",
    title: "TOORN at table · Art on a plate",
    description:
      "Michelin-trained precision, Andalusian sun, one table. Not catering. A memory.",
    // Same story for Twitter — src/app/twitter-image.png is picked up
    // automatically and overrides the openGraph image for Twitter cards.
  },
};

/**
 * LocalBusiness JSON-LD. Lifts the brand from a "page" into a Knowledge
 * Panel candidate: Google reads this and can render the rich result in
 * search + maps + AI overviews. The Person embed lets Nick himself show
 * up as the founder of the business when someone searches the name.
 */
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "TOORN at table",
  alternateName: "Toorn at table",
  description:
    "Private chef serving the Costa del Sol. Private dinners, villa weeks, workshops and open-booking events by Michelin-trained chef Nick Toorn.",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/opengraph-image.png`,
  telephone: "+31614412102",
  email: "info@toornattable.com",
  priceRange: "€€€",
  foundingDate: "2023",
  founder: {
    "@type": "Person",
    name: "Nick Toorn",
    jobTitle: "Private Chef",
    image: `${SITE_URL}/images/nick-portrait.jpg`,
    knowsLanguage: ["en", "es", "nl"],
    nationality: { "@type": "Country", name: "Netherlands" },
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "Andalucía",
    addressCountry: "ES",
    addressLocality: "Costa del Sol",
  },
  areaServed: [
    { "@type": "Place", name: "Marbella" },
    { "@type": "Place", name: "Estepona" },
    { "@type": "Place", name: "Sotogrande" },
    { "@type": "Place", name: "Málaga" },
    { "@type": "Place", name: "Mijas" },
    { "@type": "Place", name: "Coín" },
    { "@type": "Place", name: "Benahavís" },
    { "@type": "Place", name: "Costa del Sol" },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.51,
    longitude: -4.88,
  },
  sameAs: [
    // Add Instagram / TikTok / LinkedIn URLs here once they're live.
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+31614412102",
    contactType: "customer service",
    email: "info@toornattable.com",
    availableLanguage: ["English", "Spanish", "Dutch"],
  },
  makesOffer: [
    {
      "@type": "Offer",
      name: "Private dinner",
      description:
        "A private chef cooking one bespoke menu at your home or villa for an evening.",
    },
    {
      "@type": "Offer",
      name: "Villa takeover",
      description:
        "A full week of dinners (and optional lunches / breakfasts) at your villa.",
    },
    {
      "@type": "Offer",
      name: "Cooking workshop",
      description:
        "Hands-on small-group workshops in your kitchen or mine.",
    },
    {
      "@type": "Offer",
      name: "Open-booking events",
      description:
        "Dinners hosted by Nick at rotating locations on the Costa del Sol.",
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCurrentLocale();

  return (
    <html lang={locale} className={cn(fontVariables, "h-full antialiased")}>
      <head>
        {/* Preconnect to the GA4 endpoints before the gtag script
            requests them. Saves the DNS lookup + TLS handshake on
            first contact, ~100-200 ms on a cold mobile cellular
            connection. dns-prefetch is the fallback for browsers
            that don't honour preconnect. */}
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className="relative min-h-full flex flex-col bg-cream text-ink font-serif">
        {/* LocalBusiness structured data. Google parses this on first
            crawl and uses it for the Knowledge Panel, rich results in
            SERP, and the AI-overview answer card. Inlined here so it
            ships on every route (the long-tail /privacy and /terms
            pages also benefit from the brand entity context). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        {/* Google Consent Mode v2 — runs BEFORE gtag.js so the default
            state is `denied` for every storage category. GA4 will load
            but stay inert until the CookieConsent banner posts an
            update. EU visitors land on an analytics-silent site by
            default, matching AEPD + EDPB guidance. */}
        <Script id="ga-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500,
            });
          `}
        </Script>
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
            gtag('config', 'G-WMXDMHKFCV', { anonymize_ip: true });
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
          <CookieConsent />
        </LocaleProvider>
      </body>
    </html>
  );
}
