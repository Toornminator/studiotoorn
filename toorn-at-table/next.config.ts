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
const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: {
      exclude: ["error", "warn"],
    },
  },
};

export default nextConfig;
