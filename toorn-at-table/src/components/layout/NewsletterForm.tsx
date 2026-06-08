"use client";

import { useRef, useState, useTransition } from "react";
import { useLocale, useT } from "@/i18n/client";
import type { Dictionary } from "@/i18n/types";

/**
 * Newsletter signup. Client-side submit straight to Netlify Forms —
 * mirrors the BookingForm pattern. Subscribers land in the Forms
 * dashboard under the "newsletter" form; sending the actual newsletter
 * is a separate concern (export CSV → import into a sending tool when
 * Nick is ready to broadcast).
 *
 * Captured per signup:
 *   - email (required, validated client-side)
 *   - locale (auto-filled from the cookie — useful when we later send
 *     EN/ES/NL versions of a dispatch and want to route by language)
 *   - source ("footer" today; could become "popup", "checkout", etc.
 *     as more signup surfaces appear)
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type FormState =
  | { status: "idle" }
  | { status: "ok"; message: string }
  | { status: "error"; message: string; email?: string };

const INITIAL: FormState = { status: "idle" };

async function submitToNetlify(
  email: string,
  locale: string,
): Promise<boolean> {
  const body = new URLSearchParams();
  body.set("form-name", "newsletter");
  body.set("bot-field", "");
  body.set("email", email);
  body.set("locale", locale);
  body.set("source", "footer");

  const res = await fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) {
    console.error(
      `[newsletter] Netlify Forms POST failed: ${res.status} ${res.statusText}`,
    );
  }
  return res.ok;
}

function SubmitArrow({
  pending,
  t,
}: {
  pending: boolean;
  t: Dictionary;
}) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-cream transition-colors hover:bg-tattoo-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream disabled:opacity-60"
      aria-label={t.footer.newsletterButton}
    >
      {pending ? (
        <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-cream border-t-transparent" />
      ) : (
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
          <path
            d="M1 5 H11 M8 1 L11 5 L8 9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

export function NewsletterForm() {
  const t = useT();
  const locale = useLocale();
  const [state, setState] = useState<FormState>(INITIAL);
  const [pending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    const data = new FormData(formRef.current);
    const email = String(data.get("email") ?? "").trim().toLowerCase();

    if (!email || !EMAIL_RE.test(email)) {
      setState({
        status: "error",
        message: t.footer.newsletterMessages.invalidEmail,
        email,
      });
      return;
    }

    startTransition(async () => {
      try {
        const ok = await submitToNetlify(email, locale);
        if (!ok) {
          setState({
            status: "error",
            message: t.footer.newsletterMessages.genericError,
            email,
          });
          return;
        }
        setState({
          status: "ok",
          message: t.footer.newsletterMessages.thanks,
        });
        formRef.current?.reset();
      } catch {
        setState({
          status: "error",
          message: t.footer.newsletterMessages.genericError,
          email,
        });
      }
    });
  };

  const defaultEmail = state.status === "error" ? state.email ?? "" : "";

  return (
    <div className="space-y-4">
      <form
        ref={formRef}
        onSubmit={onSubmit}
        name="newsletter"
        method="POST"
        action="/__forms.html"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="relative max-w-sm"
      >
        <input type="hidden" name="form-name" value="newsletter" />
        <input type="hidden" name="locale" value={locale} />
        <input type="hidden" name="source" value="footer" />
        <p hidden>
          <label>
            Don&apos;t fill this out:{" "}
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>
        <label htmlFor="newsletter-email" className="sr-only">
          {t.contact.form.emailLabel}
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder={t.footer.newsletterPlaceholder}
          defaultValue={defaultEmail}
          className="w-full rounded-full border border-ink/20 bg-cream-warm/40 py-3 pl-5 pr-14 font-serif text-ink placeholder:text-ink/35 focus:border-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          style={{ fontSize: 16, fontStyle: "italic" }}
        />
        <SubmitArrow pending={pending} t={t} />
      </form>
      {state.status === "ok" && (
        <p
          className="font-serif italic text-tattoo-jade"
          style={{ fontSize: 15 }}
        >
          {state.message}
        </p>
      )}
      {state.status === "error" && (
        <p
          className="font-serif italic text-tattoo-red"
          style={{ fontSize: 15 }}
        >
          {state.message}
        </p>
      )}
    </div>
  );
}
