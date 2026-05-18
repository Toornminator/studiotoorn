"use client";

import { Suspense, useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import {
  subscribeToNewsletter,
  type NewsletterFormState,
} from "@/app/actions/newsletter";
import { useT } from "@/i18n/client";
import type { Dictionary } from "@/i18n/types";

const INITIAL: NewsletterFormState = { status: "idle" };

function SubmitArrow({ t }: { t: Dictionary }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-cream transition-colors hover:bg-tattoo-red disabled:opacity-60"
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

function NewsletterFormInner() {
  const t = useT();
  const [state, action] = useActionState(subscribeToNewsletter, INITIAL);
  const formRef = useRef<HTMLFormElement>(null);
  const params = useSearchParams();
  const confirmStatus = params.get("nieuwsbrief");

  useEffect(() => {
    if (state.status === "ok") formRef.current?.reset();
  }, [state.status]);

  const banner =
    confirmStatus === "ok"
      ? { tone: "ok" as const, text: t.footer.newsletterStatusBanners.ok }
      : confirmStatus === "invalid"
        ? {
            tone: "error" as const,
            text: t.footer.newsletterStatusBanners.invalid,
          }
        : confirmStatus === "error"
          ? {
              tone: "error" as const,
              text: t.footer.newsletterStatusBanners.error,
            }
          : null;

  return (
    <div className="space-y-4">
      {banner && (
        <p
          className="font-mono text-[10px] uppercase tracking-[0.22em]"
          style={{ color: banner.tone === "ok" ? "#2E7D5B" : "#C8202A" }}
        >
          {banner.text}
        </p>
      )}
      <form ref={formRef} action={action} className="relative max-w-sm">
        <label htmlFor="newsletter-email" className="sr-only">
          {t.contact.form.emailLabel}
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder={t.footer.newsletterPlaceholder}
          defaultValue={state.email ?? ""}
          className="w-full rounded-full border border-ink/20 bg-cream-warm/40 py-3 pl-5 pr-14 font-serif text-ink placeholder:text-ink/35 focus:border-ink focus:outline-none"
          style={{ fontSize: 16, fontStyle: "italic" }}
        />
        <SubmitArrow t={t} />
      </form>
      {state.status === "ok" && state.message && (
        <p className="font-serif italic text-tattoo-jade" style={{ fontSize: 15 }}>
          {state.message}
        </p>
      )}
      {state.status === "error" && state.message && (
        <p className="font-serif italic text-tattoo-red" style={{ fontSize: 15 }}>
          {state.message}
        </p>
      )}
    </div>
  );
}

export function NewsletterForm() {
  return (
    <Suspense
      fallback={<div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">…</div>}
    >
      <NewsletterFormInner />
    </Suspense>
  );
}
