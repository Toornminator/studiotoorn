"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * One delegated click listener for the "talk to Nick" taps that never pass
 * through a form: WhatsApp, mail and phone links anywhere on the page.
 * Reported as a GA4 `contact` event with the channel as `method`, so they
 * can count as Google Ads conversions alongside the form leads.
 */
export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const method = /wa\.me|whatsapp/i.test(href)
        ? "whatsapp"
        : href.startsWith("mailto:")
          ? "email"
          : href.startsWith("tel:")
            ? "phone"
            : null;
      if (method) trackEvent("contact", { method, page_path: window.location.pathname });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
