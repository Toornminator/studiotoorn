import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow query-string suffixes on local images so we can cache-bust
    // stamp PNGs (e.g. `/images/stamps/nederland.png?v=3`) without
    // Next.js complaining about unconfigured patterns.
    localPatterns: [
      {
        pathname: "/images/stamps/**",
        search: "**",
      },
      {
        pathname: "/images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
