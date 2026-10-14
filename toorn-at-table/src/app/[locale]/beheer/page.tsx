import type { Metadata } from "next";
import { setRequestLocale } from "@/i18n/server";
import { adminConfigured, isAdmin } from "@/lib/guest-reviews/auth";
import { githubConfig } from "@/lib/guest-reviews/publish";
import {
  reviewStore,
  type ApprovedRecord,
  type PendingReview,
} from "@/lib/guest-reviews/store";
import { approveAction, loginAction, logoutAction, rejectAction } from "./actions";
import { SubmitButton } from "./SubmitButton";

/**
 * /beheer: Nick's private guest-book desk. Every review sent through
 * /reviews waits here (parked by the submission-created function) until he
 * taps "Goedkeuren" (committed to the site, live after the next build) or
 * "Afwijzen" (deleted with its photos).
 *
 * Dutch only on purpose: one reader, and it is Nick. Never cached, never
 * indexed; the proxy skips its CDN header for this path.
 */

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Beheer",
  robots: { index: false, follow: false },
};

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const ROTATIONS = [-3, 2.5, -1.5];

const fmtDate = (iso: string) =>
  new Intl.DateTimeFormat("nl-NL", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(iso.length === 10 ? `${iso}T12:00:00` : iso),
  );

const fmtStamp = (iso: string) =>
  new Intl.DateTimeFormat("nl-NL", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Madrid",
  }).format(new Date(iso));

const LANG = { en: "Engels", es: "Spaans", nl: "Nederlands" } as const;

export default async function BeheerPage({ params, searchParams }: Props) {
  setRequestLocale((await params).locale);
  const sp = await searchParams;
  const one = (k: string) => (typeof sp[k] === "string" ? (sp[k] as string) : undefined);

  if (!adminConfigured()) {
    return (
      <Shell>
        <Notice tone="red">
          Nog niet ingesteld. Zet <code>REVIEWS_ADMIN_PASSWORD</code> (minstens 12 tekens) in de
          Netlify-omgevingsvariabelen en deploy opnieuw.
        </Notice>
      </Shell>
    );
  }

  if (!(await isAdmin())) {
    return (
      <Shell>
        <form action={loginAction} className="mt-10 flex max-w-sm flex-col gap-4">
          <label htmlFor="beheer-pw" className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/60">
            Wachtwoord
          </label>
          <input
            id="beheer-pw"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="border-b border-ink/30 bg-transparent py-2 font-serif text-ink outline-none focus:border-tattoo-red"
            style={{ fontSize: 20 }}
          />
          {one("fout") === "wachtwoord" && (
            <p className="font-serif italic text-tattoo-red">Dat wachtwoord klopt niet.</p>
          )}
          <SubmitButton pendingLabel="Even kijken..." className={BTN_DARK}>
            Binnenkomen
          </SubmitButton>
        </form>
      </Shell>
    );
  }

  const store = reviewStore();
  const [pendingKeys, approvedKeys] = await Promise.all([
    store.listKeys("pending/"),
    store.listKeys("approved/"),
  ]);
  const pending = (await Promise.all(pendingKeys.map((k) => store.getJSON<PendingReview>(k))))
    .filter((p): p is PendingReview => !!p)
    .sort((a, b) => b.receivedAt.localeCompare(a.receivedAt));
  const approved = (await Promise.all(approvedKeys.map((k) => store.getJSON<ApprovedRecord>(k))))
    .filter((a): a is ApprovedRecord => !!a)
    .sort((a, b) => b.approvedAt.localeCompare(a.approvedAt))
    .slice(0, 8);

  const fout = one("fout");

  return (
    <Shell
      count={pending.length}
      logout={
        <form action={logoutAction}>
          <button className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/50 hover:text-tattoo-red">
            Uitloggen
          </button>
        </form>
      }
    >
      {!githubConfig() && (
        <Notice tone="red">
          Goedkeuren werkt pas als <code>REVIEWS_GITHUB_TOKEN</code> in Netlify staat.
        </Notice>
      )}
      {one("ok") && (
        <Notice tone="jade">
          De review van {one("ok")} is gepubliceerd. Netlify bouwt nu; over een minuut of twee
          staat hij live.{" "}
          {one("commit") && (
            <a href={one("commit")} target="_blank" rel="noopener noreferrer" className="underline">
              Bekijk de commit
            </a>
          )}
        </Notice>
      )}
      {one("weg") && <Notice tone="ink">Afgewezen en verwijderd, foto&apos;s inbegrepen.</Notice>}
      {fout === "publiceren" && (
        <Notice tone="red">
          Publiceren is mislukt (GitHub gaf een fout). Er is niets veranderd; probeer het zo nog
          eens.
        </Notice>
      )}
      {fout === "weg" && <Notice tone="red">Die review bestaat niet meer.</Notice>}
      {fout === "github" && <Notice tone="red">GitHub-token ontbreekt, dus publiceren kan nog niet.</Notice>}

      {pending.length === 0 ? (
        <p className="mt-12 font-serif italic text-ink/60" style={{ fontSize: 19 }}>
          Niets te keuren. Alle gasten zijn gezien.
        </p>
      ) : (
        <ul className="mt-10 flex flex-col gap-10">
          {pending.map((p) => (
            <li key={p.id}>
              <PendingCard review={p} />
            </li>
          ))}
        </ul>
      )}

      {approved.length > 0 && (
        <section className="mt-20 border-t border-ink/15 pt-8">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/55">
            Laatst gepubliceerd
          </h2>
          <ul className="mt-4 divide-y divide-ink/10">
            {approved.map((a) => (
              <li key={a.id} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3">
                <span className="font-serif text-ink" style={{ fontSize: 17 }}>
                  {a.author} <span className="text-tattoo-mustard">{"★".repeat(a.rating)}</span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                  {fmtStamp(a.approvedAt)} ·{" "}
                  <a href={a.commitUrl} target="_blank" rel="noopener noreferrer" className="hover:text-tattoo-red">
                    commit
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Shell>
  );
}

const BTN_DARK =
  "inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.26em] text-cream transition-colors hover:bg-tattoo-red";
const BTN_LINE =
  "inline-flex items-center justify-center rounded-full border border-ink/25 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.26em] text-ink/70 transition-colors hover:border-tattoo-red hover:text-tattoo-red";

function PendingCard({ review: p }: { review: PendingReview }) {
  const meta = [p.occasion, p.location, p.eventDate ? fmtDate(p.eventDate) : undefined].filter(Boolean);
  return (
    <article className="border border-ink/15 bg-cream-warm/30 p-5 md:p-8">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <span className="text-tattoo-mustard" style={{ fontSize: 22, letterSpacing: 2 }} aria-label={`${p.rating} van 5 sterren`}>
          {"★".repeat(p.rating)}
          <span className="opacity-30">{"★".repeat(5 - p.rating)}</span>
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
          Binnen {fmtStamp(p.receivedAt)} · {LANG[p.locale]}
        </span>
      </div>

      <h2 className="mt-3 font-display text-ink" style={{ fontSize: 26 }}>
        {p.name}
      </h2>
      {meta.length > 0 && (
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/60">{meta.join(" · ")}</p>
      )}
      <p className="mt-1 font-serif text-ink/60" style={{ fontSize: 15 }}>
        <a href={`mailto:${p.email}`} className="underline decoration-ink/25 underline-offset-2 hover:text-tattoo-red">
          {p.email}
        </a>{" "}
        <span className="italic">(niet openbaar)</span>
      </p>

      <blockquote
        lang={p.locale}
        className="mt-5 whitespace-pre-line border-l-2 border-tattoo-red/40 pl-4 font-serif text-ink/90"
        style={{ fontSize: 18, lineHeight: 1.55 }}
      >
        {p.review}
      </blockquote>

      <form action={approveAction} className="mt-6">
        <input type="hidden" name="id" value={p.id} />
        {p.photoNumbers.length > 0 && (
          <fieldset>
            <legend className="font-mono text-[10px] uppercase tracking-[0.26em] text-ink/55">
              Polaroids (vinkje uit = niet publiceren)
            </legend>
            <div className="mt-4 flex flex-wrap gap-5">
              {p.photoNumbers.map((n, i) => (
                <label key={n} className="group flex w-[132px] cursor-pointer flex-col items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element -- private, uncached admin preview */}
                  <img
                    src={`/api/beheer/photo/${p.id}/${n}`}
                    alt={p.captions[i] || `Foto ${n}`}
                    width={132}
                    height={161}
                    className="h-auto w-full shadow-[0_8px_20px_-10px_rgba(20,16,12,0.55)] transition-opacity group-has-[input:not(:checked)]:opacity-35"
                    style={{ transform: `rotate(${ROTATIONS[i] ?? 0}deg)` }}
                  />
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">
                    <input type="checkbox" name={`keep${n}`} defaultChecked className="accent-tattoo-red" />
                    Op de site
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        )}
        {p.photoErrors && p.photoErrors.length > 0 && (
          <p className="mt-3 font-serif italic text-tattoo-red" style={{ fontSize: 15 }}>
            {p.photoErrors.length === 1 ? "Eén foto kon" : `${p.photoErrors.length} foto's konden`} niet worden
            opgehaald; die staat nog wel in het Netlify-dashboard.
          </p>
        )}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <SubmitButton intent="approve" pendingLabel="Publiceren..." className={BTN_DARK}>
            Goedkeuren
          </SubmitButton>
          <SubmitButton
            intent="reject"
            formAction={rejectAction}
            pendingLabel="Verwijderen..."
            confirmText={`Review van ${p.name} afwijzen en definitief verwijderen?`}
            className={BTN_LINE}
          >
            Afwijzen
          </SubmitButton>
        </div>
      </form>
    </article>
  );
}

function Shell({
  children,
  count,
  logout,
}: {
  children: React.ReactNode;
  count?: number;
  logout?: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 pt-20 pb-32 md:px-12 md:pt-28">
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">Beheer · gastenboek</p>
        {logout}
      </div>
      <h1 className="mt-4 font-display italic leading-[0.98] text-ink" style={{ fontSize: "clamp(36px, 6vw, 64px)" }}>
        {count === undefined
          ? "Even inloggen."
          : count === 0
            ? "Alles gekeurd."
            : `${count} ${count === 1 ? "review wacht" : "reviews wachten"} op je.`}
      </h1>
      {children}
    </div>
  );
}

function Notice({ tone, children }: { tone: "red" | "jade" | "ink"; children: React.ReactNode }) {
  const color = { red: "border-tattoo-red/50 text-tattoo-red", jade: "border-tattoo-jade/50 text-ink", ink: "border-ink/25 text-ink/80" }[tone];
  return (
    <p className={`mt-8 border-l-2 bg-cream-warm/40 px-4 py-3 font-serif ${color}`} style={{ fontSize: 16, lineHeight: 1.5 }}>
      {children}
    </p>
  );
}
