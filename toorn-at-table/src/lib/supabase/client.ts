import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
// Supabase rolled out new key naming (`sb_publishable_…` / `sb_secret_…`)
// alongside the old `anon` / `service_role` keys. Accept either so projects
// on the new format work without renaming env vars.
const PUBLIC_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let cached: SupabaseClient | null = null;

/**
 * Browser / public Supabase client. Returns `null` when env vars are missing
 * so the rest of the app can fall back to static content during development
 * and before the first deploy with real keys.
 */
export function getSupabaseBrowser(): SupabaseClient | null {
  if (!URL || !PUBLIC_KEY) return null;
  if (cached) return cached;
  cached = createClient(URL, PUBLIC_KEY, {
    auth: { persistSession: false },
  });
  return cached;
}

export const isSupabaseConfigured = Boolean(URL && PUBLIC_KEY);
