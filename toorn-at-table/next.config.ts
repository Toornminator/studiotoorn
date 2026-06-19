import type { NextConfig } from "next";

/**
 * Hardening notes:
 *  - `poweredByHeader: false` strips the default `X-Powered-By: Next.js`
 *    response header so the framework + version stay off the wire.
 *  - `productionBrowserSourceMaps: false` keeps `.map` files out of the
 *    deployed bundle so the original TypeScript can't be reconstructed
 *    from devtools. (Default is already `false`; we set it explicitly so
 *    a future "let me debug prod" toggle doesn't sneak it on.)
 *  - `compiler.removeConsole` strips `console.log`/`info`/`debug` calls
 *    from the production bundle. `console.error` and `console.warn` are
 *    kept so genuinely useful diagnostics still surface for visitors who
 *    open devtools — and so the SDK's own warnings aren't muted.
 *
 *  HTTP security headers (CSP, X-Frame-Options, HSTS, Referrer-Policy,
 *  Permissions-Policy) live in `netlify.toml` instead, because Netlify's
 *  CDN edge applies them more reliably than Next's serverless handler
 *  does for static assets.
 */

/**
 * Edge-cache the rendered HTML on Netlify's CDN.
 *
 * Every page reads the locale via `headers()` (getCurrentLocale), which
 * forces Next to render each route dynamically on every request. On
 * Netlify that means a serverless function boots and re-renders the whole
 * React tree per visit — the cold-start latency of that function is the
 * multi-second white screen mobile visitors were seeing (TTFB ≈ time to
 * first paint, because nothing is render-blocking once HTML arrives).
 *
 * The HTML is fully deterministic per URL: `/` is always English, `/es`
 * always Spanish, `/nl` always Dutch (the proxy derives locale from the
 * path, never from a cookie), and pages carry no per-user data (forms post
 * client-side to Netlify). So the response is safe to cache by URL.
 *
 * `Netlify-CDN-Cache-Control` takes precedence over `Cache-Control` for
 * Netlify's CDN only: browsers keep revalidating (Next's own private
 * no-store stays on the wire), while the CDN serves cached HTML in tens of
 * milliseconds. `durable` opts into the cross-region Durable Cache, which
 * Netlify purges automatically on every deploy, so publishing a new weekly
 * menu or event (a code deploy) refreshes instantly. `stale-while-
 * revalidate` keeps responses instant while a fresh copy renders in the
 * background. `/api/*` is excluded so server actions and the newsletter
 * confirm handler are never cached.
 */
const CDN_CACHE = "public, durable, s-maxage=3600, stale-while-revalidate=86400";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: {
      exclude: ["error", "warn"],
    },
  },
  async headers() {
    return [
      {
        // Every page route except API handlers and Next internals (which
        // carry their own immutable caching). The query string is ignored
        // by source matching, so RSC navigation payloads (`?_rsc=`) are
        // covered too — they are equally deterministic per URL.
        source: "/((?!api/|_next/).*)",
        headers: [
          { key: "Netlify-CDN-Cache-Control", value: CDN_CACHE },
          { key: "CDN-Cache-Control", value: CDN_CACHE },
        ],
      },
    ];
  },
  // Wrap client-side navigations in the View Transitions API: every route
  // change cross-fades instead of hard-cutting, and elements that share a
  // `view-transition-name` (the cookbook teaser photo and the recipe page
  // hero) morph from one into the other. Degrades to an instant nav where
  // the browser lacks support, and is silenced under prefers-reduced-motion
  // via globals.css.
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
