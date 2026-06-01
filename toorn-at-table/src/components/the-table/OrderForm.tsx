"use client";

import { useRef, useState, useTransition } from "react";
import { Magnetic } from "@/components/ui/Magnetic";
import { useT } from "@/i18n/client";
import type { Dictionary } from "@/i18n/types";

/**
 * Weekly-menu order form for "Toorn aan de deur". Pure client-side submit
 * to Netlify Forms (form name "order"), the same mechanism as the contact
 * BookingForm: POST url-encoded to /__forms.html so Netlify's edge writes
 * it to the Forms dashboard. Nick confirms each order by WhatsApp and
 * takes cash on delivery.
 *
 * The matching field schema is registered in public/__forms.html.
 */

type OrderFields = {
  name: string;
  phone: string;
  email: string;
  address: string;
  portions: string;
  deliveryTime: string;
  allergies: string;
  menu: string;
};

type FieldErrors = Partial<Record<keyof OrderFields, string>>;

type FormState =
  | { status: "idle" }
  | { status: "ok"; message: string }
  | { status: "error"; message?: string; fieldErrors?: FieldErrors };

const INITIAL: FormState = { status: "idle" };

function inputClass(error?: string) {
  return `mt-2 w-full border-b bg-transparent pb-2 font-serif text-ink placeholder:text-ink/30 focus:outline-none focus:border-ink ${
    error ? "border-tattoo-red" : "border-ink/25"
  }`;
}

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

async function submitToNetlify(fields: OrderFields): Promise<boolean> {
  const body = new URLSearchParams();
  body.set("form-name", "order");
  body.set("bot-field", "");
  body.set("name", fields.name);
  body.set("phone", fields.phone);
  body.set("email", fields.email);
  body.set("address", fields.address);
  body.set("portions", fields.portions);
  body.set("deliveryTime", fields.deliveryTime);
  body.set("allergies", fields.allergies);
  body.set("menu", fields.menu);

  const res = await fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) {
    console.error(`[order] Netlify Forms POST failed: ${res.status} ${res.statusText}`);
  }
  return res.ok;
}

function validate(
  fields: OrderFields,
  maxPortions: number,
  t: Dictionary,
): FieldErrors | null {
  const e: FieldErrors = {};
  const err = t.theTable.form.errors;
  if (!fields.name || fields.name.length < 2) e.name = err.nameRequired;
  if (!fields.phone || fields.phone.replace(/\D/g, "").length < 6)
    e.phone = err.phoneRequired;
  if (!fields.address || fields.address.length < 4) e.address = err.addressRequired;
  const n = Number(fields.portions);
  if (!Number.isFinite(n) || n < 1 || n > maxPortions) e.portions = err.portionsRange;
  return Object.keys(e).length === 0 ? null : e;
}

export function OrderForm({
  pricePerPortion,
  maxPortions,
  menuSlug,
  menuTitle,
  deliveryDate,
}: {
  pricePerPortion: number;
  maxPortions: number;
  menuSlug: string;
  menuTitle: string;
  deliveryDate: string;
}) {
  const t = useT();
  const f = t.theTable.form;
  const [state, setState] = useState<FormState>(INITIAL);
  const [pending, startTransition] = useTransition();
  const [portions, setPortions] = useState(2);
  const formRef = useRef<HTMLFormElement>(null);

  const total = Math.max(0, portions) * pricePerPortion;
  const menuRef = `${menuSlug} · ${menuTitle} · ${deliveryDate}`;
  const errors = state.status === "error" ? state.fieldErrors ?? {} : {};

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!formRef.current) return;
    const data = new FormData(formRef.current);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const fields: OrderFields = {
      name: get("name"),
      phone: get("phone"),
      email: get("email").toLowerCase(),
      address: get("address"),
      portions: get("portions"),
      deliveryTime: get("deliveryTime"),
      allergies: get("allergies"),
      menu: menuRef,
    };
    const fieldErrors = validate(fields, maxPortions, t);
    if (fieldErrors) {
      setState({ status: "error", fieldErrors });
      return;
    }
    startTransition(async () => {
      try {
        const ok = await submitToNetlify(fields);
        if (!ok) {
          setState({ status: "error", message: f.errors.backendDown });
          return;
        }
        setState({ status: "ok", message: f.success });
        formRef.current?.reset();
        setPortions(2);
      } catch {
        setState({ status: "error", message: f.errors.backendDown });
      }
    });
  };

  if (state.status === "ok") {
    return (
      <p className="max-w-md font-serif italic text-ink" style={{ fontSize: 18 }}>
        {state.message}
      </p>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      name="order"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-8"
      noValidate
    >
      <input type="hidden" name="form-name" value="order" />
      <input type="hidden" name="menu" value={menuRef} />
      <p hidden>
        <label>
          Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <FieldLabel htmlFor="order-name" error={errors.name}>
            {f.nameLabel}
          </FieldLabel>
          <input id="order-name" name="name" type="text" autoComplete="name" className={inputClass(errors.name)} />
        </div>
        <div>
          <FieldLabel htmlFor="order-phone" error={errors.phone}>
            {f.phoneLabel}
          </FieldLabel>
          <input id="order-phone" name="phone" type="tel" autoComplete="tel" className={inputClass(errors.phone)} />
        </div>
        <div className="md:col-span-2">
          <FieldLabel htmlFor="order-address" error={errors.address}>
            {f.addressLabel}
          </FieldLabel>
          <input
            id="order-address"
            name="address"
            type="text"
            autoComplete="street-address"
            className={inputClass(errors.address)}
          />
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
            {f.addressHint}
          </p>
        </div>
        <div>
          <FieldLabel htmlFor="order-portions" error={errors.portions}>
            {f.portionsLabel}
          </FieldLabel>
          <input
            id="order-portions"
            name="portions"
            type="number"
            min={1}
            max={maxPortions}
            value={portions}
            onChange={(e) => setPortions(Number(e.target.value))}
            className={inputClass(errors.portions)}
          />
        </div>
        <div>
          <FieldLabel htmlFor="order-time">{f.timeLabel}</FieldLabel>
          <input
            id="order-time"
            name="deliveryTime"
            type="text"
            placeholder={f.timePlaceholder}
            className={inputClass()}
          />
        </div>
        <div className="md:col-span-2">
          <FieldLabel htmlFor="order-email">
            {f.emailLabel} ({f.emailOptional})
          </FieldLabel>
          <input id="order-email" name="email" type="email" autoComplete="email" className={inputClass()} />
        </div>
        <div className="md:col-span-2">
          <FieldLabel htmlFor="order-allergies">{f.allergiesLabel}</FieldLabel>
          <textarea
            id="order-allergies"
            name="allergies"
            rows={3}
            className={`${inputClass()} resize-y leading-relaxed`}
            style={{ fontSize: 16, lineHeight: 1.5 }}
          />
        </div>
      </div>

      {/* Live total */}
      <div className="flex items-baseline justify-between border-t border-ink/15 pt-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/55">
          {f.totalLabel}
        </span>
        <span className="font-display text-ink" style={{ fontSize: 28 }}>
          €{total}
        </span>
      </div>

      <div className="flex flex-col items-start gap-5">
        <Magnetic strength={0.4}>
          <button
            type="submit"
            disabled={pending}
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-9 py-5 font-mono text-[11px] uppercase tracking-[0.28em] text-cream transition-colors hover:bg-tattoo-red disabled:opacity-60"
          >
            {pending ? f.submitting : f.submit}
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

        {state.status === "error" && state.message && (
          <p className="max-w-md font-serif italic text-tattoo-red" style={{ fontSize: 16 }}>
            {state.message}
          </p>
        )}

        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
          {f.cashNote}
        </p>
      </div>
    </form>
  );
}
