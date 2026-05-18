/**
 * Hidden static form definition rendered server-side so Netlify's
 * build bot can scan the page HTML and register the "contact" form
 * for the dashboard / submission pipeline.
 *
 * The real, interactive form lives in BookingForm.tsx and submits
 * via client-side fetch. This component is purely a schema marker —
 * it carries the exact field names BookingForm will POST so Netlify
 * doesn't reject the submission as "unknown form."
 *
 * Why this AND public/__forms.html: the build bot has been observed
 * to miss public/__forms.html on Next.js 16 + @netlify/plugin-nextjs
 * deploys; rendering the form schema inside the actual page HTML is
 * a second, more reliable detection path.
 */
export function NetlifyFormSchema() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      hidden
      aria-hidden
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="bot-field" />
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="tel" name="phone" />
      <input type="text" name="eventType" />
      <input type="date" name="eventDate" />
      <input type="number" name="guests" />
      <input type="text" name="location" />
      <textarea name="message" defaultValue="" />
    </form>
  );
}
