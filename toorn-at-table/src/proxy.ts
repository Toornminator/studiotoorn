import { NextResponse, type NextRequest } from "next/server";
import { PREFIXED_LOCALES } from "@/i18n/config";

/**
 * Locale routing + edge caching (Next 16 "proxy" convention, formerly
 * middleware).
 *
 * All page routes live under `app/[locale]/`, and the locale is read from the
 * route param (see i18n/server.ts), never from a request header. Spanish and
 * Dutch keep their URL prefix, so `/es/x` and `/nl/x` already match
 * `[locale]` natively and pass straight through. English is the default and
 * stays at the root publicly (`/x`, no prefix, to preserve every indexed
 * URL); it is rewritten onto the internal `/en` segment so it resolves
 * against the same `[locale]` tree.
 *
 * Because the locale is part of the URL the CDN keys on (`/en/x`, `/es/x`,
 * `/nl/x` are three distinct keys), caching can never collapse the languages
 * onto one entry, the bug that previously served the English home in Dutch.
 *
 * `Netlify-CDN-Cache-Control` is set on every page response so Netlify's CDN
 * serves the HTML from the edge in tens of milliseconds instead of cold-
 * starting a serverless function per visit (the multi-second mobile white
 * screen). `durable` opts into the cross-region cache, purged on every
 * deploy, so a new weekly menu or event (a deploy) refreshes immediately.
 */
const CDN_CACHE = "public, durable, s-maxage=3600, stale-while-revalidate=86400";

function withCache(res: NextResponse): NextResponse {
  res.headers.set("Netlify-CDN-Cache-Control", CDN_CACHE);
  res.headers.set("CDN-Cache-Control", CDN_CACHE);
  return res;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const seg = pathname.split("/")[1];

  // `/en` is internal only. Send any public `/en…` URL to the canonical
  // un-prefixed path so the English content never lives under two URLs.
  if (seg === "en") {
    const url = req.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  // `/es/…` and `/nl/…` already match `app/[locale]/…`; pass through.
  if ((PREFIXED_LOCALES as readonly string[]).includes(seg)) {
    return withCache(NextResponse.next());
  }

  // English at the root: rewrite onto the internal `/en` segment.
  const url = req.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return withCache(NextResponse.rewrite(url));
}

export const config = {
  // Run on everything except Next internals, API routes, and any path with a
  // file extension (assets, sitemap.xml, robots.txt, og images, favicon).
  matcher: ["/((?!_next/|api/|.*\\.).*)"],
};
