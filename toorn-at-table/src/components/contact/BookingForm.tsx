"use client";

import { Suspense, useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import {
  submitBookingRequest,
  type ContactFormState,
} from "@/app/actions/contact";
import { Magnetic } from "@/components/ui/Magnetic";
import { useT } from "@/i18n/client";
import type { Dictionary } from "@/i18n/types";

const INITIAL: ContactFormState = { status: "idle" };

function FieldLabel({
  children,
  htmlFor,
  error,
}: {
  children: React.ReactNode;
  htmlFor: string;
  error?: string;
}) {
  return (
    <div className="flex items-baseline justify-between">
      <label
        htmlFor={htmlFor}
        className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/55"
      >
        {children}
      </label>
      {error && (
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-tattoo-red">
          {error}
        </span>
      )}
    </div>
  );
}

function inputClass(error?: string) {
  return `mt-2 w-full border-b bg-transparent pb-2 font-serif text-ink placeholder:text-ink/30 focus:outline-none focus:border-ink ${
    error ? "border-tattoo-red" : "border-ink/25"
  }`;
}

function SubmitButton({ t }: { t: Dictionary }) {
  const { pending } = useFormStatus();
  return (
    <Magnetic strength={0.4}>
      <button
        type="submit"
        disabled={pending}
        data-cursor={pending ? undefined : t.contact.cursorSubmit}
        className="group inline-flex items-center gap-3 rounded-full bg-ink px-9 py-5 font-mono text-[11px] uppercase tracking-[0.28em] text-cream transition-colors hover:bg-tattoo-red disabled:opacity-60"
      >
        {pending ? t.contact.form.submitting : t.contact.form.submit}
        {!pending && (
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden>
            <path
              d="M1 5 H13 M10 1 L13 5 L10 9"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5"
            />
          </svg>
        )}
      </button>
    </Magnetic>
  );
}

function BookingFormInner() {
  const t = useT();
  const [state, action] = useActionState(submitBookingRequest, INITIAL);
  const params = useSearchParams();
  const eventSlug = params.get("event");
  const formRef = useRef<HTMLFormElement>(null);

  const eventTypes = [
    { id: "private-dinner", label: t.contact.form.types.privateDinner },
    { id: "villa-takeover", label: t.contact.form.types.villaTakeover },
    { id: "event-ticket", label: t.contact.form.types.eventTicket },
    { id: "anders", label: t.contact.form.types.other },
  ];

  const defaultEventType = eventSlug ? "event-ticket" : "";
  const defaultMessage = eventSlug
    ? `Event: ${eventSlug}\n\n`
    : "";

  useEffect(() => {
    if (state.status === "ok") formRef.current?.reset();
  }, [state.status]);

  const v = state.values;
  const errors = state.fieldErrors ?? {};

  return (
    <form ref={formRef} action={action} className="space-y-10" noValidate>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <FieldLabel htmlFor="name" error={errors.name}>
            {t.contact.form.nameLabel}
          </FieldLabel>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            defaultValue={v?.name}
            className={inputClass(errors.name)}
          />
        </div>
        <div>
          <FieldLabel htmlFor="email" error={errors.email}>
            {t.contact.form.emailLabel}
          </FieldLabel>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={v?.email}
            className={inputClass(errors.email)}
          />
        </div>
        <div>
          <FieldLabel htmlFor="phone">{t.contact.form.phoneLabel}</FieldLabel>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            defaultValue={v?.phone}
            className={inputClass()}
          />
        </div>
        <div>
          <FieldLabel htmlFor="eventType" error={errors.eventType}>
            {t.contact.form.typeLabel}
          </FieldLabel>
          <select
            id="eventType"
            name="eventType"
            required
            defaultValue={v?.eventType ?? defaultEventType}
            className={`${inputClass(errors.eventType)} appearance-none pr-6`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%231A1A1A' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 4px center",
              backgroundSize: "10px 6px",
            }}
          >
            <option value="" disabled>
              {t.contact.form.typePlaceholder}
            </option>
            {eventTypes.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel htmlFor="eventDate" error={errors.eventDate}>
            {t.contact.form.dateLabel}
          </FieldLabel>
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            defaultValue={v?.eventDate}
            className={inputClass(errors.eventDate)}
          />
        </div>
        <div>
          <FieldLabel htmlFor="guests" error={errors.guests}>
            {t.contact.form.guestsLabel}
          </FieldLabel>
          <input
            id="guests"
            name="guests"
            type="number"
            min={1}
            max={200}
            defaultValue={v?.guests}
            className={inputClass(errors.guests)}
          />
        </div>
        <div className="md:col-span-2">
          <FieldLabel htmlFor="location">
            {t.contact.form.locationLabel}
          </FieldLabel>
          <input
            id="location"
            name="location"
            type="text"
            placeholder={t.contact.form.locationPlaceholder}
            defaultValue={v?.location}
            className={inputClass()}
          />
        </div>
      </div>

      <div>
        <FieldLabel htmlFor="message" error={errors.message}>
          {t.contact.form.messageLabel}
        </FieldLabel>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          defaultValue={v?.message ?? defaultMessage}
          placeholder={t.contact.form.messagePlaceholder}
          className={`${inputClass(errors.message)} resize-y leading-relaxed`}
          style={{ fontSize: 17, lineHeight: 1.5 }}
        />
      </div>

      <div className="flex flex-col items-start gap-5">
        <SubmitButton t={t} />

        {state.status === "ok" && state.message && (
          <p className="max-w-md font-serif italic text-tattoo-jade" style={{ fontSize: 16 }}>
            {state.message}
          </p>
        )}
        {state.status === "error" && state.message && (
          <p className="max-w-md font-serif italic text-tattoo-red" style={{ fontSize: 16 }}>
            {state.message}
          </p>
        )}

        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
          {t.contact.form.privacyNote}
        </p>
      </div>
    </form>
  );
}

export function BookingForm() {
  return (
    <Suspense
      fallback={
        <div className="font-serif italic text-ink/40" style={{ fontSize: 17 }}>
          …
        </div>
      }
    >
      <BookingFormInner />
    </Suspense>
  );
}
