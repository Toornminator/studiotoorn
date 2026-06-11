"use client";

import { useEffect } from "react";

/**
 * Registers /sw.js once the page has loaded, production only (a service
 * worker in dev caches stale chunks and turns hot reload into a liar).
 * Registration is deferred to the window load event so it never competes
 * with hydration or LCP resources for bandwidth.
 */
export function ServiceWorkerRegistrar() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;

    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // A failed registration just means no offline support this visit.
      });
    };

    if (document.readyState === "complete") {
      register();
      return;
    }
    window.addEventListener("load", register, { once: true });
    return () => window.removeEventListener("load", register);
  }, []);

  return null;
}
