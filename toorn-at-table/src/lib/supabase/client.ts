import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let cached: SupabaseClient | null = null;

/**
 * Browser / public Supabase client. Returns `null` when env vars are missing
 * so the rest of the app can fall back to static content during development
 * and before the first deploy with real keys.
 */
export function getSupabaseBrowser(): SupabaseClient | null {
  if (!URL || !ANON_KEY) return null;
  if (cached) return cached;
  cached = createClient(URL, ANON_KEY, {
    auth: { persistSession: false },
  });
  return cached;
}

export const isSupabaseConfigured = Boolean(URL && ANON_KEY);
