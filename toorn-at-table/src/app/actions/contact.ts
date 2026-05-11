"use server";

import { Resend } from "resend";
import { getSupabaseServer } from "@/lib/supabase/server";

export type ContactFormState = {
  status: "idle" | "ok" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof ContactFormFields, string>>;
  /** Values to repopulate the form on error so users don't retype. */
  values?: Partial<ContactFormFields>;
};

type ContactFormFields = {
  name: string;
  email: string;
  phone?: string;
  eventType: string;
  eventDate?: string;
  guests?: string;
  location?: string;
  message: string;
};

const EVENT_TYPE_LABEL: Record<string, string> = {
  "private-dinner": "Private dinner aan huis",
  "villa-takeover": "Villa takeover (meerdere dagen)",
  "event-ticket": "Plek op een open event",
  anders: "Iets anders",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function parse(formData: FormData): ContactFormFields {
  return {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim().toLowerCase(),
    phone: String(formData.get("phone") ?? "").trim() || undefined,
    eventType: String(formData.get("eventType") ?? "").trim(),
    eventDate: String(formData.get("eventDate") ?? "").trim() || undefined,
    guests: String(formData.get("guests") ?? "").trim() || undefined,
    location: String(formData.get("location") ?? "").trim() || undefined,
    message: String(formData.get("message") ?? "").trim(),
  };
}

function validate(
  fields: ContactFormFields,
): ContactFormState["fieldErrors"] | null {
  const errors: ContactFormState["fieldErrors"] = {};
  if (!fields.name || fields.name.length < 2) errors.name = "Vul je naam in.";
  if (!fields.email || !EMAIL_RE.test(fields.email))
    errors.email = "Vul een geldig emailadres in.";
  if (!fields.eventType) errors.eventType = "Kies wat voor avond je in gedachten hebt.";
  if (!fields.message || fields.message.length < 20)
    errors.message = "Schrijf even een paar zinnen over wat je wil — wat is de aanleiding, hoeveel gasten, locatie?";
  if (fields.guests) {
    const n = Number(fields.guests);
    if (!Number.isFinite(n) || n < 1 || n > 200)
      errors.guests = "Vul een getal tussen 1 en 200 in.";
  }
  if (fields.eventDate) {
    const d = new Date(fields.eventDate);
    if (Number.isNaN(d.getTime())) errors.eventDate = "Geen geldige datum.";
  }
  return Object.keys(errors).length === 0 ? null : errors;
}

async function storeSubmission(fields: ContactFormFields) {
  const supabase = getSupabaseServer();
  if (!supabase) return { ok: false as const, reason: "no-supabase" };
  const { error } = await supabase.from("contact_submissions").insert({
    name: fields.name,
    email: fields.email,
    phone: fields.phone,
    event_date: fields.eventDate || null,
    guests: fields.guests ? Number(fields.guests) : null,
    location: fields.location,
    message: `[${EVENT_TYPE_LABEL[fields.eventType] ?? fields.eventType}] ${fields.message}`,
    source: "website-booking-form",
  });
  if (error) return { ok: false as const, reason: error.message };
  return { ok: true as const };
}

async function sendNotificationMail(fields: ContactFormFields) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_ADDRESS;
  const to = process.env.NOTIFICATION_EMAIL;
  if (!key || !from || !to) return { ok: false as const, reason: "no-resend" };

  const resend = new Resend(key);
  const subject = `Nieuwe aanvraag van ${fields.name} — ${EVENT_TYPE_LABEL[fields.eventType] ?? fields.eventType}`;
  const html = `
    <div style="font-family:Georgia, serif; color:#1A1A1A; line-height:1.6;">
      <h1 style="font-style:italic;">Nieuwe aanvraag via de site</h1>
      <p><strong>Van:</strong> ${fields.name} &lt;${fields.email}&gt;</p>
      ${fields.phone ? `<p><strong>Telefoon:</strong> ${fields.phone}</p>` : ""}
      <p><strong>Type:</strong> ${EVENT_TYPE_LABEL[fields.eventType] ?? fields.eventType}</p>
      ${fields.eventDate ? `<p><strong>Datum:</strong> ${fields.eventDate}</p>` : ""}
      ${fields.guests ? `<p><strong>Aantal gasten:</strong> ${fields.guests}</p>` : ""}
      ${fields.location ? `<p><strong>Locatie:</strong> ${fields.location}</p>` : ""}
      <hr style="border:none;border-top:1px solid rgba(26,26,26,0.15); margin:1.5em 0;" />
      <p style="white-space:pre-wrap;">${fields.message}</p>
    </div>`;
  const { error } = await resend.emails.send({ from, to, subject, html });
  if (error) return { ok: false as const, reason: error.message };
  return { ok: true as const };
}

async function sendConfirmationMail(fields: ContactFormFields) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_ADDRESS;
  if (!key || !from) return { ok: false as const, reason: "no-resend" };
  const resend = new Resend(key);
  const html = `
    <div style="font-family:Georgia, serif; color:#1A1A1A; line-height:1.6; max-width:520px;">
      <h1 style="font-style:italic; font-size:28px; margin-bottom:8px;">Dank je, ${fields.name.split(" ")[0]}.</h1>
      <p>Je aanvraag is binnen. Ik kijk hem binnen 24 uur door en reageer dan persoonlijk met beschikbaarheid en een eerste voorstel.</p>
      <p>Mocht je in de tussentijd iets willen toevoegen — een dieetwens, een budget-indicatie, een sfeerbeeld — beantwoord deze mail dan gewoon.</p>
      <p style="margin-top:1.5em;">— Nick</p>
      <p style="margin-top:2.5em; font-size:12px; color:#888;">TOORN at table · Costa del Sol</p>
    </div>`;
  await resend.emails.send({
    from,
    to: fields.email,
    subject: "Je aanvraag is binnen — TOORN at table",
    html,
  });
  return { ok: true as const };
}

export async function submitBookingRequest(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const fields = parse(formData);
  const fieldErrors = validate(fields);
  if (fieldErrors) {
    return { status: "error", fieldErrors, values: fields };
  }

  const [stored, notified] = await Promise.all([
    storeSubmission(fields),
    sendNotificationMail(fields),
  ]);

  // Best-effort confirmation mail, don't fail the whole submit if it errors.
  await sendConfirmationMail(fields).catch(() => null);

  if (!stored.ok && !notified.ok) {
    return {
      status: "error",
      message:
        "Het versturen lukte niet automatisch — kun je me direct mailen op info@studiotoorn.com of bellen op +31 6 14 41 21 02?",
      values: fields,
    };
  }

  return {
    status: "ok",
    message:
      "Bedankt — je aanvraag is binnen. Ik reageer binnen 24 uur. Check intussen je inbox voor de bevestiging.",
  };
}
