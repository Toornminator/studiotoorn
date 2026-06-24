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
 * NOTE on edge caching: a previous attempt set `Netlify-CDN-Cache-Control`
 * on page routes to serve HTML from Netlify's CDN and kill the cold-start
 * TTFB. It had to be reverted: the proxy rewrites `/es/x` and `/nl/x` onto
 * the locale-stripped origin path `/x`, and the locale lives only in the
 * `x-locale` request header, NOT in the URL the CDN keys on. So all three
 * languages of a page collapsed onto ONE cache entry and the first render
 * to populate it won (the English home was served Dutch). Any future
 * caching MUST make the locale part of the cache key, which the rewrite
 * architecture does not currently allow. Left dynamic for correctness.
 */
const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: {
      exclude: ["error", "warn"],
    },
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
