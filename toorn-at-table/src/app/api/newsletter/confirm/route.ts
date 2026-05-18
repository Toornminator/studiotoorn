// Route stub — kept around for git history.
//
// This used to handle the double-opt-in confirmation link from the
// Resend email (token → mark subscriber confirmed in Supabase →
// redirect to the home page with a status banner). The newsletter
// moved to a Netlify Forms direct-submit flow with no confirmation
// step, so this route is no longer used.
//
// Old confirmation links in the wild redirect home with a "thanks"
// banner so visitors aren't dropped on a 404.

import { NextResponse, type NextRequest } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.redirect(new URL("/#newsletter", request.url));
}
