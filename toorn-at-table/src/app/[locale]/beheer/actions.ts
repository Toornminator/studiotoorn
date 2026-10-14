"use server";

import { redirect } from "next/navigation";
import { isAdmin, logIn, logOut } from "@/lib/guest-reviews/auth";
import { isSafeId } from "@/lib/guest-reviews/ingest";
import { githubConfig, publishReview, toGuestReview } from "@/lib/guest-reviews/publish";
import {
  deletePending,
  keys,
  reviewStore,
  type ApprovedRecord,
  type PendingReview,
} from "@/lib/guest-reviews/store";

const BASE = "/beheer";

export async function loginAction(formData: FormData) {
  const ok = await logIn(String(formData.get("password") ?? ""));
  if (!ok) {
    // A small, fixed delay takes the fun out of guessing.
    await new Promise((r) => setTimeout(r, 900));
    redirect(`${BASE}?fout=wachtwoord`);
  }
  redirect(BASE);
}

export async function logoutAction() {
  await logOut();
  redirect(BASE);
}

function reviewId(formData: FormData): string {
  const id = String(formData.get("id") ?? "");
  if (!isSafeId(id)) throw new Error("bad id");
  return id;
}

export async function approveAction(formData: FormData) {
  if (!(await isAdmin())) redirect(BASE);
  const id = reviewId(formData);
  const cfg = githubConfig();
  if (!cfg) redirect(`${BASE}?fout=github`);

  const store = reviewStore();
  const pending = await store.getJSON<PendingReview>(keys.pending(id));
  if (!pending) redirect(`${BASE}?fout=weg`);

  // Photos stay ticked by default; Nick can untick one before publishing.
  const kept = pending.photoNumbers.filter((n) => formData.get(`keep${n}`) === "on");
  const photos: ArrayBuffer[] = [];
  for (const n of kept) {
    const bytes = await store.getBytes(keys.photo(id, n));
    if (bytes) photos.push(bytes);
  }
  const review = toGuestReview(pending, kept.slice(0, photos.length));

  let commitUrl: string;
  try {
    const result = await publishReview(cfg, review, photos);
    commitUrl = result.commitUrl;
    const record: ApprovedRecord = {
      id,
      author: pending.name,
      email: pending.email,
      rating: pending.rating,
      receivedAt: pending.receivedAt,
      approvedAt: review.approvedAt,
      commitSha: result.commitSha,
      commitUrl: result.commitUrl,
    };
    await store.setJSON(keys.approved(id), record);
    await deletePending(store, id);
  } catch (err) {
    console.error("approve failed", id, err instanceof Error ? err.message : err);
    redirect(`${BASE}?fout=publiceren`);
  }

  const params = new URLSearchParams({ ok: pending.name, commit: commitUrl });
  redirect(`${BASE}?${params}`);
}

export async function rejectAction(formData: FormData) {
  if (!(await isAdmin())) redirect(BASE);
  const id = reviewId(formData);
  // Rejected reviews are deleted outright, photos included (privacy policy:
  // unpublished reviews are not kept).
  await deletePending(reviewStore(), id);
  redirect(`${BASE}?weg=1`);
}
