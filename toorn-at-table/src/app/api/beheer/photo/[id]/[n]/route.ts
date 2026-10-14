import { isAdmin } from "@/lib/guest-reviews/auth";
import { isSafeId } from "@/lib/guest-reviews/ingest";
import { keys, reviewStore } from "@/lib/guest-reviews/store";

/**
 * Serves a pending review's polaroid to /beheer. Admin-only and never
 * cached: until Nick approves it, the photo is not public.
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string; n: string }> },
) {
  const { id, n } = await params;
  const slot = Number(n);
  if (!(await isAdmin()) || !isSafeId(id) || ![1, 2, 3].includes(slot)) {
    return new Response("Not found", { status: 404 });
  }
  const bytes = await reviewStore().getBytes(keys.photo(id, slot));
  if (!bytes) return new Response("Not found", { status: 404 });
  return new Response(bytes, {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "private, no-store",
    },
  });
}
