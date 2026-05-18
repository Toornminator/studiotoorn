"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { LOCALE_COOKIE, isLocale, type Locale } from "@/i18n/config";

/**
 * Persist the visitor's locale choice in a year-long cookie + revalidate
 * the home page so the next render uses the new dictionary on the server
 * side (no flash of the wrong language on subsequent navigations).
 */
export async function setLocale(locale: Locale) {
  if (!isLocale(locale)) return;

  const store = await cookies();
  store.set({
    name: LOCALE_COOKIE,
    value: locale,
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  revalidatePath("/");
}
