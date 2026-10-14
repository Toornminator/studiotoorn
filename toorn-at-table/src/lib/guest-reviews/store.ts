import { getStore } from "@netlify/blobs";
import { promises as fs } from "node:fs";
import path from "node:path";

/**
 * Pending-review storage. Guest reviews wait here between the Netlify Forms
 * submission and Nick's tap on "Goedkeuren" in /beheer: the review itself as
 * JSON, its polaroids as WebP bytes. Lives in Netlify Blobs, so no database
 * and no account-wide API token on the site.
 *
 * Imported by the `submission-created` Netlify function as well as by the
 * Next app, so this file uses relative imports only (no "@/" alias).
 *
 * Local testing: set REVIEWS_DEV_STORE=1 to swap Blobs for a folder on disk
 * (.beheer-dev/, git-ignored). Blobs only exist inside Netlify's runtime.
 */

export const STORE_NAME = "guest-reviews";

export const keys = {
  pending: (id: string) => `pending/${id}.json`,
  photo: (id: string, n: number) => `photos/${id}/${n}.webp`,
  approved: (id: string) => `approved/${id}.json`,
};

/** A submission waiting for moderation. The email is never published. */
export type PendingReview = {
  id: string;
  receivedAt: string;
  locale: "en" | "es" | "nl";
  name: string;
  email: string;
  occasion?: string;
  location?: string;
  eventDate?: string;
  rating: number;
  review: string;
  /** Handwritten caption per stored photo, same order as `photoNumbers`. */
  captions: string[];
  /** Which photo slots (1-3) were stored under keys.photo(id, n). */
  photoNumbers: number[];
  /** Slots that were sent but could not be fetched or were not a WebP. */
  photoErrors?: number[];
};

/** Kept after approval as the moderation trail (who, when, which commit). */
export type ApprovedRecord = {
  id: string;
  author: string;
  email: string;
  rating: number;
  receivedAt: string;
  approvedAt: string;
  commitSha: string;
  commitUrl: string;
};

export interface ReviewStore {
  listKeys(prefix: string): Promise<string[]>;
  getJSON<T>(key: string): Promise<T | null>;
  getBytes(key: string): Promise<ArrayBuffer | null>;
  setJSON(key: string, value: unknown): Promise<void>;
  setBytes(key: string, data: ArrayBuffer): Promise<void>;
  delete(key: string): Promise<void>;
}

export function reviewStore(): ReviewStore {
  return process.env.REVIEWS_DEV_STORE === "1" ? diskStore() : blobStore();
}

function blobStore(): ReviewStore {
  // Strong consistency: Nick opens /beheer seconds after the email lands,
  // and an eventual read could still miss the new review.
  const store = getStore({ name: STORE_NAME, consistency: "strong" });
  return {
    async listKeys(prefix) {
      const { blobs } = await store.list({ prefix });
      return blobs.map((b) => b.key);
    },
    async getJSON<T>(key: string) {
      return ((await store.get(key, { type: "json" })) as T | null) ?? null;
    },
    async getBytes(key) {
      return (await store.get(key, { type: "arrayBuffer" })) ?? null;
    },
    async setJSON(key, value) {
      await store.setJSON(key, value);
    },
    async setBytes(key, data) {
      await store.set(key, data);
    },
    async delete(key) {
      await store.delete(key);
    },
  };
}

function diskStore(): ReviewStore {
  const root = path.join(process.cwd(), ".beheer-dev");
  const file = (key: string) => path.join(root, ...key.split("/"));
  const read = async (key: string) => {
    try {
      return await fs.readFile(file(key));
    } catch {
      return null;
    }
  };
  const write = async (key: string, data: Buffer | string) => {
    await fs.mkdir(path.dirname(file(key)), { recursive: true });
    await fs.writeFile(file(key), data);
  };
  return {
    async listKeys(prefix) {
      const out: string[] = [];
      const walk = async (dir: string) => {
        let entries;
        try {
          entries = await fs.readdir(dir, { withFileTypes: true });
        } catch {
          return;
        }
        for (const e of entries) {
          const full = path.join(dir, e.name);
          if (e.isDirectory()) await walk(full);
          else out.push(path.relative(root, full).split(path.sep).join("/"));
        }
      };
      await walk(root);
      return out.filter((k) => k.startsWith(prefix)).sort();
    },
    async getJSON<T>(key: string) {
      const buf = await read(key);
      return buf ? (JSON.parse(buf.toString("utf8")) as T) : null;
    },
    async getBytes(key) {
      const buf = await read(key);
      return buf ? buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer : null;
    },
    async setJSON(key, value) {
      await write(key, JSON.stringify(value, null, 2));
    },
    async setBytes(key, data) {
      await write(key, Buffer.from(data));
    },
    async delete(key) {
      await fs.rm(file(key), { force: true });
    },
  };
}

/** Removes a pending review and all of its photos. */
export async function deletePending(store: ReviewStore, id: string): Promise<void> {
  const photoKeys = await store.listKeys(`photos/${id}/`);
  await Promise.all([store.delete(keys.pending(id)), ...photoKeys.map((k) => store.delete(k))]);
}
