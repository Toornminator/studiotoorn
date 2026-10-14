import type { GuestReview } from "@/lib/types";
import type { PendingReview } from "./store";

/**
 * Publishing an approved review = one commit on the deploy branch, made
 * through the GitHub API: the polaroids into public/images/reviews/ and the
 * review appended to src/content/guest-reviews.json. Netlify builds that
 * commit like any other push, so the review is static HTML within a couple
 * of minutes and the git history doubles as the moderation log.
 *
 * Needs REVIEWS_GITHUB_TOKEN: a fine-grained token limited to this one
 * repository with "Contents: read and write", nothing else.
 */

type GitHubConfig = { token: string; repo: string; branch: string; dir: string };

export function githubConfig(): GitHubConfig | null {
  const token = process.env.REVIEWS_GITHUB_TOKEN;
  if (!token) return null;
  return {
    token,
    repo: process.env.REVIEWS_GITHUB_REPO ?? "Toornminator/studiotoorn",
    branch: process.env.REVIEWS_GITHUB_BRANCH ?? "claude/toorn-chef-website-bird9",
    dir: process.env.REVIEWS_REPO_DIR ?? "toorn-at-table",
  };
}

export function slugify(name: string): string {
  return (
    name
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 40) || "gast"
  );
}

/** The published shape of a pending review, minus anything private. */
export function toGuestReview(p: PendingReview, keptPhotos: number[]): GuestReview {
  const slug = `${slugify(p.name)}-${p.id.slice(-6).toLowerCase()}`;
  return {
    id: p.id,
    slug,
    author: p.name,
    quote: p.review,
    lang: p.locale,
    rating: p.rating,
    date: p.eventDate ?? p.receivedAt.slice(0, 10),
    ...(p.occasion ? { occasion: p.occasion } : {}),
    ...(p.location ? { location: p.location } : {}),
    photos: keptPhotos.map((_, i) => `/images/reviews/${slug}-${i + 1}.webp`),
    approvedAt: new Date().toISOString(),
  };
}

class GitHubError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
  }
}

async function gh<T>(cfg: GitHubConfig, path: string, init?: { method?: string; body?: unknown }): Promise<T> {
  const res = await fetch(`https://api.github.com/repos/${cfg.repo}${path}`, {
    method: init?.method ?? "GET",
    headers: {
      Authorization: `Bearer ${cfg.token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init?.body ? { "Content-Type": "application/json" } : {}),
    },
    body: init?.body ? JSON.stringify(init.body) : undefined,
    cache: "no-store",
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new GitHubError(`GitHub ${res.status} on ${path}: ${detail.slice(0, 200)}`, res.status);
  }
  return (await res.json()) as T;
}

export type PublishResult = { commitSha: string; commitUrl: string; alreadyPublished: boolean };

/**
 * Commits the review. Safe to retry: if the id is already in the JSON on
 * the branch, nothing is written. A concurrent push (the branch moved under
 * us) is retried on top of the new head.
 */
export async function publishReview(
  cfg: GitHubConfig,
  review: GuestReview,
  photos: ArrayBuffer[],
): Promise<PublishResult> {
  const jsonPath = `${cfg.dir}/src/content/guest-reviews.json`;

  for (let attempt = 0; ; attempt++) {
    const ref = await gh<{ object: { sha: string } }>(cfg, `/git/ref/heads/${cfg.branch}`);
    const head = ref.object.sha;
    const headCommit = await gh<{ tree: { sha: string } }>(cfg, `/git/commits/${head}`);

    let current: GuestReview[] = [];
    try {
      const file = await gh<{ content: string }>(
        cfg,
        `/contents/${jsonPath}?ref=${encodeURIComponent(head)}`,
      );
      current = JSON.parse(Buffer.from(file.content, "base64").toString("utf8")) as GuestReview[];
    } catch (err) {
      if (!(err instanceof GitHubError && err.status === 404)) throw err;
    }
    if (current.some((r) => r.id === review.id)) {
      return {
        commitSha: head,
        commitUrl: `https://github.com/${cfg.repo}/commit/${head}`,
        alreadyPublished: true,
      };
    }

    const blobs = await Promise.all(
      photos.map((bytes) =>
        gh<{ sha: string }>(cfg, "/git/blobs", {
          method: "POST",
          body: { content: Buffer.from(bytes).toString("base64"), encoding: "base64" },
        }),
      ),
    );
    const json = `${JSON.stringify([...current, review], null, 2)}\n`;
    const jsonBlob = await gh<{ sha: string }>(cfg, "/git/blobs", {
      method: "POST",
      body: { content: json, encoding: "utf-8" },
    });

    const tree = await gh<{ sha: string }>(cfg, "/git/trees", {
      method: "POST",
      body: {
        base_tree: headCommit.tree.sha,
        tree: [
          { path: jsonPath, mode: "100644", type: "blob", sha: jsonBlob.sha },
          ...review.photos.map((src, i) => ({
            path: `${cfg.dir}/public${src}`,
            mode: "100644",
            type: "blob",
            sha: blobs[i].sha,
          })),
        ],
      },
    });

    const stars = "★".repeat(review.rating);
    const commit = await gh<{ sha: string; html_url: string }>(cfg, "/git/commits", {
      method: "POST",
      body: {
        message: `Review gepubliceerd: ${review.author} ${stars}\n\nGoedgekeurd via /beheer (submission ${review.id}).`,
        tree: tree.sha,
        parents: [head],
      },
    });

    try {
      await gh(cfg, `/git/refs/heads/${cfg.branch}`, {
        method: "PATCH",
        body: { sha: commit.sha, force: false },
      });
      return { commitSha: commit.sha, commitUrl: commit.html_url, alreadyPublished: false };
    } catch (err) {
      // 422 = not a fast-forward: someone pushed meanwhile. Rebuild on top.
      if (err instanceof GitHubError && err.status === 422 && attempt < 2) continue;
      throw err;
    }
  }
}
