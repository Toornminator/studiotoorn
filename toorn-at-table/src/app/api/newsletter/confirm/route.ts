import { NextResponse, type NextRequest } from "next/server";
import { getSupabaseServer } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  const baseRedirect = (status: "ok" | "invalid" | "error") =>
    NextResponse.redirect(
      new URL(`/?nieuwsbrief=${status}#newsletter`, request.url),
    );

  if (!token) return baseRedirect("invalid");

  const supabase = getSupabaseServer();
  if (!supabase) return baseRedirect("error");

  const { data, error } = await supabase
    .from("newsletter_subscribers")
    .update({ confirmed_at: new Date().toISOString() })
    .eq("confirmation_token", token)
    .is("confirmed_at", null)
    .select("id")
    .maybeSingle();

  if (error) return baseRedirect("error");
  if (!data) return baseRedirect("invalid");
  return baseRedirect("ok");
}
