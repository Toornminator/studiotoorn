"use client";

import { Suspense, useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import {
  submitBookingRequest,
  type ContactFormState,
} from "@/app/actions/contact";
import { Magnetic } from "@/components/ui/Magnetic";

const INITIAL: ContactFormState = { status: "idle" };

const EVENT_TYPES = [
  { id: "private-dinner", label: "Private dinner aan huis" },
  { id: "villa-takeover", label: "Villa takeover (meerdere dagen)" },
  { id: "event-ticket", label: "Plek op een open event" },
  { id: "anders", label: "Iets anders" },
];

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

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Magnetic strength={0.4}>
      <button
        type="submit"
        disabled={pending}
        data-cursor={pending ? undefined : "Verstuur"}
        className="group inline-flex items-center gap-3 rounded-full bg-ink px-9 py-5 font-mono text-[11px] uppercase tracking-[0.28em] text-cream transition-colors hover:bg-tattoo-red disabled:opacity-60"
      >
        {pending ? "Versturen…" : "Verstuur aanvraag"}
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
  const [state, action] = useActionState(submitBookingRequest, INITIAL);
  const params = useSearchParams();
  const eventSlug = params.get("event");
  const formRef = useRef<HTMLFormElement>(null);

  const defaultEventType = eventSlug ? "event-ticket" : "";
  const defaultMessage = eventSlug
    ? `Ik wil graag een plek reserveren voor het event "${eventSlug}". Hieronder met hoeveel personen en wat de aanleiding is —\n\n`
    : "";

  // Reset on success (imperative DOM call, not state).
  useEffect(() => {
    if (state.status === "ok") formRef.current?.reset();
  }, [state.status]);

  const v = state.values;
  const errors = state.fieldErrors ?? {};

  return (
    <form
      ref={formRef}
      action={action}
      className="space-y-10"
      noValidate
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <FieldLabel htmlFor="name" error={errors.name}>
            Je naam *
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
            Email *
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
          <FieldLabel htmlFor="phone">Telefoon (optional)</FieldLabel>
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
            Wat heb je in gedachten? *
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
              Kies een type
            </option>
            {EVENT_TYPES.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel htmlFor="eventDate" error={errors.eventDate}>
            Datum (indien al bekend)
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
            Aantal gasten
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
          <FieldLabel htmlFor="location">Locatie / stad</FieldLabel>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Bv. Marbella, eigen villa in Estepona, een Airbnb in Mijas…"
            defaultValue={v?.location}
            className={inputClass()}
          />
        </div>
      </div>

      <div>
        <FieldLabel htmlFor="message" error={errors.message}>
          Wat speelt er? *
        </FieldLabel>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          defaultValue={v?.message ?? defaultMessage}
          placeholder="Wat is de aanleiding, met wie, wat verwacht je van de avond, eventuele dieetwensen, budget-indicatie als je die hebt…"
          className={`${inputClass(errors.message)} resize-y leading-relaxed`}
          style={{ fontSize: 17, lineHeight: 1.5 }}
        />
      </div>

      <div className="flex flex-col items-start gap-5">
        <SubmitButton />

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
          We bewaren je gegevens uitsluitend om op je aanvraag te reageren.
        </p>
      </div>
    </form>
  );
}

export function BookingForm() {
  return (
    <Suspense
      fallback={
        <div
          className="font-serif italic text-ink/40"
          style={{ fontSize: 17 }}
        >
          Formulier laden…
        </div>
      }
    >
      <BookingFormInner />
    </Suspense>
  );
}
