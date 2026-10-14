"use client";

import { useFormStatus } from "react-dom";

/**
 * Submit button for the /beheer forms: shows a pending label while the
 * server action runs (publishing takes a few seconds) and can ask for
 * confirmation first, for the one destructive action (rejecting).
 * `formAction` lets a second button in the same form run another action;
 * `intent` (sent as the submitter's value) tells the buttons apart, so only
 * the one that was pressed shows its pending label.
 */
export function SubmitButton({
  children,
  pendingLabel,
  intent = "submit",
  confirmText,
  formAction,
  className,
}: {
  children: React.ReactNode;
  pendingLabel: string;
  intent?: string;
  confirmText?: string;
  formAction?: (formData: FormData) => Promise<void>;
  className?: string;
}) {
  const { pending, data } = useFormStatus();
  const mine = pending && data?.get("intent") === intent;
  return (
    <button
      type="submit"
      name="intent"
      value={intent}
      formAction={formAction}
      disabled={pending}
      aria-busy={mine}
      onClick={(e) => {
        if (confirmText && !window.confirm(confirmText)) e.preventDefault();
      }}
      className={`${className ?? ""} disabled:cursor-wait disabled:opacity-60`}
    >
      {mine ? pendingLabel : children}
    </button>
  );
}
