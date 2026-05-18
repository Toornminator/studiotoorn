/**
 * Hidden static form definitions rendered server-side so Netlify's
 * build bot can scan the page HTML and register the site's forms
 * for the dashboard / submission pipeline.
 *
 * The real, interactive forms live in BookingForm.tsx (contact) and
 * NewsletterForm.tsx (newsletter) and submit via client-side fetch.
 * These components are purely schema markers — they carry the exact
 * field names the real forms POST so Netlify doesn't reject the
 * submission as "unknown form."
 *
 * Why this AND public/__forms.html: the build bot has been observed
 * to miss public/__forms.html on Next.js 16 + @netlify/plugin-nextjs
 * deploys; rendering the form schema inside the actual page HTML is
 * a second, more reliable detection path.
 */
export function NetlifyFormSchema() {
  return (
    <>
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

      <form
        name="newsletter"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
        aria-hidden
      >
        <input type="hidden" name="form-name" value="newsletter" />
        <input type="text" name="bot-field" />
        <input type="email" name="email" />
        <input type="text" name="locale" />
        <input type="text" name="source" />
      </form>
    </>
  );
}
