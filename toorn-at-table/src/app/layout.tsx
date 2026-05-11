import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "TOORN at table — Private chef, Costa del Sol",
  description:
    "Michelin-getrainde keuken, Spaanse zon, en een tafel die voelt als thuis. Private chef en culinair vakmanschap aan de Costa del Sol.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={cn(fontVariables, "h-full antialiased")}>
      <body className="min-h-full flex flex-col bg-cream text-ink font-serif">
        {children}
      </body>
    </html>
  );
}
