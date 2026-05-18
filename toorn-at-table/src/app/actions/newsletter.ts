"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { getSupabaseServer } from "@/lib/supabase/server";
import { getDictionary } from "@/i18n/server";

export type NewsletterFormState = {
  status: "idle" | "ok" | "error";
  message?: string;
  email?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

async function siteBaseUrl(): Promise<string> {
  const env = process.env.NEXT_PUBLIC_SITE_URL;
  if (env) return env.replace(/\/$/, "");
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "http";
  return host ? `${proto}://${host}` : "http://localhost:3000";
}

export async function subscribeToNewsletter(
  _prev: NewsletterFormState,
  formData: FormData,
): Promise<NewsletterFormState> {
  const t = await getDictionary();
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  if (!email || !EMAIL_RE.test(email)) {
    return {
      status: "error",
      message: t.footer.newsletterMessages.invalidEmail,
      email,
    };
  }

  const supabase = getSupabaseServer();
  const resendKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_ADDRESS;

  if (!supabase && !resendKey) {
    return {
      status: "error",
      message: t.footer.newsletterMessages.backendDown,
      email,
    };
  }

  let token: string | undefined;
  if (supabase) {
    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .upsert(
        { email, source: "website-footer" },
        { onConflict: "email", ignoreDuplicates: false },
      )
      .select("confirmation_token, confirmed_at")
      .maybeSingle();

    if (error) {
      return {
        status: "error",
        message: t.footer.newsletterMessages.genericError,
        email,
      };
    }
    token = data?.confirmation_token as string | undefined;

    if (data?.confirmed_at) {
      return {
        status: "ok",
        message: t.footer.newsletterMessages.alreadySubscribed,
      };
    }
  }

  if (resendKey && from && token) {
    const base = await siteBaseUrl();
    const confirmUrl = `${base}/api/newsletter/confirm?token=${token}`;
    const resend = new Resend(resendKey);
    const html = `
      <div style="font-family:Georgia, serif; color:#1A1A1A; line-height:1.6; max-width:520px;">
        <h1 style="font-style:italic; font-size:28px; margin-bottom:8px;">${t.footer.newsletterTitle}</h1>
        <p>${t.footer.newsletterBody}</p>
        <p style="margin:2em 0;">
          <a href="${confirmUrl}" style="display:inline-block;background:#1A1A1A;color:#F4EDE0;font-family:monospace;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;text-decoration:none;padding:14px 22px;border-radius:999px;">${t.footer.newsletterButton}</a>
        </p>
        <p style="margin-top:2.5em; font-size:12px; color:#888;">TOORN at table · Costa del Sol</p>
      </div>`;
    await resend.emails
      .send({
        from,
        to: email,
        subject: t.footer.newsletterTitle,
        html,
      })
      .catch(() => null);

    return {
      status: "ok",
      message: t.footer.newsletterMessages.checkInbox,
    };
  }

  if (supabase && !resendKey && token) {
    await supabase
      .from("newsletter_subscribers")
      .update({ confirmed_at: new Date().toISOString() })
      .eq("email", email);
  }

  return {
    status: "ok",
    message: t.footer.newsletterMessages.thanks,
  };
}
