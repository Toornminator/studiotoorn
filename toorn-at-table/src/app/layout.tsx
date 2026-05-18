import type { Metadata } from "next";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Footer } from "@/components/layout/Footer";
import { NavBar } from "@/components/layout/NavBar";
import { PaperBackground } from "@/components/layout/PaperBackground";
import { Preloader } from "@/components/layout/Preloader";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { StickerProvider } from "@/components/stickers/StickerProvider";
import { LocaleProvider } from "@/i18n/client";
import { getCurrentLocale, getDictionaryFor } from "@/i18n/server";
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
    images: [
      {
        url: "/images/logo-dark.jpg",
        width: 1024,
        height: 1024,
        alt: "TOORN at table wordmark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOORN at table — Art on a Plate",
    description:
      "Michelin-trained precision, Andalusian sun, one table. Not catering — a memory.",
    images: ["/images/logo-dark.jpg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCurrentLocale();
  const dict = getDictionaryFor(locale);

  return (
    <html lang={locale} className={cn(fontVariables, "h-full antialiased")}>
      <body className="relative min-h-full flex flex-col bg-cream text-ink font-serif">
        <LocaleProvider locale={locale} dict={dict}>
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
