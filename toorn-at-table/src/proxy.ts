import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, PREFIXED_LOCALES } from "@/i18n/config";

/**
 * Locale routing (Next 16 "proxy" convention, formerly middleware). English
 * is the default and lives at the root (no prefix); Spanish and Dutch are
 * served under /es and /nl. This reads the first path segment, and when it's
 * a prefixed locale it (a) rewrites the request to the un-prefixed route so
 * the existing route tree renders it, and (b) stamps the resolved locale onto
 * an `x-locale` request header that getCurrentLocale() reads on the server.
 *
 * Because it only acts on /es and /nl paths, the English site at the root is
 * passed straight through, untouched.
 */
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const seg = pathname.split("/")[1];
  const isPrefixed = (PREFIXED_LOCALES as readonly string[]).includes(seg);
  const locale = isPrefixed ? seg : DEFAULT_LOCALE;

  const headers = new Headers(req.headers);
  headers.set("x-locale", locale);

  if (isPrefixed) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.slice(seg.length + 1) || "/";
    return NextResponse.rewrite(url, { request: { headers } });
  }

  return NextResponse.next({ request: { headers } });
}

export const config = {
  // Run on everything except Next internals, API routes, and any path with a
  // file extension (assets, sitemap.xml, robots.txt, og images, favicon).
  matcher: ["/((?!_next/|api/|.*\\.).*)"],
};
