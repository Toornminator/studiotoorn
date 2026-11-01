/**
 * GA4 events, sent through the page's gtag() (defined in the root layout,
 * under Consent Mode v2: until a visitor accepts, Google only receives
 * cookieless pings). These are the conversions Google Ads can bid on once
 * the GA4 property is linked to Ads and the events are marked as key
 * events: generate_lead (contact / booking / order requests), sign_up
 * (newsletter) and contact (WhatsApp, mail and phone taps).
 *
 * Never put personal data (names, emails, phone numbers) in event params.
 */
type Params = Record<string, string | number | undefined>;

export function trackEvent(name: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", name, params);
}
