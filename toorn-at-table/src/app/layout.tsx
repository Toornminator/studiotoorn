import type { Metadata } from "next";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Footer } from "@/components/layout/Footer";
import { NavBar } from "@/components/layout/NavBar";
import { PaperBackground } from "@/components/layout/PaperBackground";
import { Preloader } from "@/components/layout/Preloader";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { StickerProvider } from "@/components/stickers/StickerProvider";
import { fontVariables } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "TOORN at table — Private chef, Costa del Sol",
  description:
    "Een fotografenoog, de discipline van jaren in dienst en de precisie van een sterrenkeuken — aan één tafel in de zon. Private chef Nick Toorn, Costa del Sol.",
  openGraph: {
    title: "TOORN at table — Art on a Plate",
    description:
      "Sterrenkeuken-precisie, Andalusische zon, één tafel. Geen catering — een herinnering.",
    type: "website",
    locale: "nl_NL",
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
      "Sterrenkeuken-precisie, Andalusische zon, één tafel. Geen catering — een herinnering.",
    images: ["/images/logo-dark.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={cn(fontVariables, "h-full antialiased")}>
      <body className="relative min-h-full flex flex-col bg-cream text-ink font-serif">
        <SmoothScroll>
          <PaperBackground />
          <NavBar />
          <main className="relative z-10 flex flex-1 flex-col">{children}</main>
          <Footer />
          <StickerProvider />
          <CustomCursor />
        </SmoothScroll>
        <Preloader />
      </body>
    </html>
  );
}
