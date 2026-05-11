import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

let cached: SupabaseClient | null = null;

/**
 * Server-only Supabase client using the service role key. Bypasses RLS, so
 * use it strictly inside Server Components, Server Actions and Route
 * Handlers — never expose it to the browser. Returns `null` when env vars
 * are missing so we can gracefully fall back to static content.
 */
export function getSupabaseServer(): SupabaseClient | null {
  if (!URL || !SERVICE_KEY) return null;
  if (cached) return cached;
  cached = createClient(URL, SERVICE_KEY, {
    auth: { persistSession: false },
  });
  return cached;
}

export const isSupabaseServerConfigured = Boolean(URL && SERVICE_KEY);
