// Route stub — kept so old links don't 404.
//
// The newsletter once used a double-opt-in confirmation link; it now
// submits directly to Netlify Forms with no confirmation step. Any old
// confirmation link still in the wild just redirects home.

import { NextResponse, type NextRequest } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.redirect(new URL("/#newsletter", request.url));
}
