import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

/**
 * /beheer access. One password (REVIEWS_ADMIN_PASSWORD, set in Netlify's
 * environment variables, 12+ characters) and an HttpOnly cookie derived
 * from it, so changing the password logs every device out. No user table,
 * no session store: there is exactly one admin and it is Nick.
 */

const COOKIE = "toorn_beheer";
const MAX_AGE = 60 * 60 * 24 * 180; // half a year on his phone

function password(): string | null {
  const pw = process.env.REVIEWS_ADMIN_PASSWORD ?? "";
  return pw.length >= 12 ? pw : null;
}

export function adminConfigured(): boolean {
  return password() !== null;
}

function sessionToken(pw: string): string {
  return createHmac("sha256", pw).update("toorn-beheer-v1").digest("hex");
}

/** Constant-time string compare that also hides length differences. */
function same(a: string, b: string): boolean {
  const ha = createHash("sha256").update(a).digest();
  const hb = createHash("sha256").update(b).digest();
  return timingSafeEqual(ha, hb);
}

export async function isAdmin(): Promise<boolean> {
  const pw = password();
  if (!pw) return false;
  const value = (await cookies()).get(COOKIE)?.value;
  return !!value && same(value, sessionToken(pw));
}

/** Checks the password and, when right, sets the session cookie. */
export async function logIn(attempt: string): Promise<boolean> {
  const pw = password();
  if (!pw || !same(attempt, pw)) return false;
  (await cookies()).set(COOKIE, sessionToken(pw), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: MAX_AGE,
  });
  return true;
}

export async function logOut(): Promise<void> {
  (await cookies()).delete(COOKIE);
}
