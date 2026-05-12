import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
// Accept either the new `sb_secret_…` key or the legacy service_role key.
const SECRET_KEY =
  process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;

let cached: SupabaseClient | null = null;

/**
 * Server-only Supabase client using the secret / service-role key. Bypasses
 * RLS, so use it strictly inside Server Components, Server Actions and
 * Route Handlers — never expose it to the browser. Returns `null` when env
 * vars are missing so we can gracefully fall back to static content.
 */
export function getSupabaseServer(): SupabaseClient | null {
  if (!URL || !SECRET_KEY) return null;
  if (cached) return cached;
  cached = createClient(URL, SECRET_KEY, {
    auth: { persistSession: false },
  });
  return cached;
}

export const isSupabaseServerConfigured = Boolean(URL && SECRET_KEY);
