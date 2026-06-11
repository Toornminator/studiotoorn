/**
 * TOORN at table — cookbook service worker.
 *
 * Strategy per request type (same-origin GET only):
 *  - Navigations: network-first, falling back to the cached page, then
 *    to /offline.html. Every successful navigation is cached, so any
 *    recipe you've opened once keeps working offline.
 *  - /_next/static/*: cache-first (content-hashed, immutable).
 *  - Images (incl. /_next/image): stale-while-revalidate, capped. When
 *    an optimised /_next/image request misses offline, the original
 *    file from its `url` param is served as a fallback.
 *  - Other static assets (scripts/styles/fonts): stale-while-revalidate.
 *
 * The /cookbook page can post {type:"PRECACHE_URLS", urls:[...]} to pull
 * the whole cookbook (pages + hero images) into cache in one go: the
 * "save all recipes offline" button.
 *
 * Bump VERSION on strategy changes; old caches are dropped on activate.
 */

const VERSION = "toorn-sw-v1";
const PAGES = `${VERSION}-pages`;
const ASSETS = `${VERSION}-assets`;
const IMAGES = `${VERSION}-images`;

const OFFLINE_URL = "/offline.html";
const PRECACHE_PAGES = ["/cookbook", "/es/cookbook", "/nl/cookbook"];

const MAX_PAGES = 120;
const MAX_IMAGES = 200;

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const assets = await caches.open(ASSETS);
      await assets.add(OFFLINE_URL);
      const pages = await caches.open(PAGES);
      // Best-effort: a failing page must not block install.
      await Promise.allSettled(
        PRECACHE_PAGES.map((url) => pages.add(url)),
      );
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names
          .filter((n) => !n.startsWith(VERSION))
          .map((n) => caches.delete(n)),
      );
      await self.clients.claim();
    })(),
  );
});

/** FIFO-trim a cache to a maximum number of entries. */
async function trim(cacheName, max) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= max) return;
  await Promise.all(keys.slice(0, keys.length - max).map((k) => cache.delete(k)));
}

async function networkFirstPage(request) {
  const cache = await caches.open(PAGES);
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
      trim(PAGES, MAX_PAGES);
    }
    return response;
  } catch {
    const cached =
      (await cache.match(request, { ignoreSearch: true })) ||
      (await cache.match(new URL(request.url).pathname));
    if (cached) return cached;
    const assets = await caches.open(ASSETS);
    return (await assets.match(OFFLINE_URL)) || Response.error();
  }
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) cache.put(request, response.clone());
  return response;
}

async function staleWhileRevalidate(request, cacheName, max) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const refresh = fetch(request)
    .then((response) => {
      if (response.ok) {
        cache.put(request, response.clone());
        if (max) trim(cacheName, max);
      }
      return response;
    })
    .catch(() => null);
  if (cached) return cached;
  const fresh = await refresh;
  if (fresh) return fresh;
  // Offline miss on an optimised image: serve the cached original the
  // optimiser would have read (/_next/image?url=<encoded>&w=...&q=...).
  const url = new URL(request.url);
  if (url.pathname === "/_next/image") {
    const original = url.searchParams.get("url");
    if (original && original.startsWith("/")) {
      const fallback = await cache.match(original);
      if (fallback) return fallback;
    }
  }
  return Response.error();
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  // Never cache API traffic or the Netlify forms endpoint.
  if (url.pathname.startsWith("/api/")) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirstPage(request));
    return;
  }

  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(cacheFirst(request, ASSETS));
    return;
  }

  if (request.destination === "image" || url.pathname === "/_next/image") {
    event.respondWith(staleWhileRevalidate(request, IMAGES, MAX_IMAGES));
    return;
  }

  if (["script", "style", "font"].includes(request.destination)) {
    event.respondWith(staleWhileRevalidate(request, ASSETS));
  }
});

self.addEventListener("message", (event) => {
  const data = event.data;
  if (!data || data.type !== "PRECACHE_URLS" || !Array.isArray(data.urls)) {
    return;
  }
  const reply = (payload) => {
    if (event.ports && event.ports[0]) event.ports[0].postMessage(payload);
  };
  event.waitUntil(
    (async () => {
      try {
        const pages = await caches.open(PAGES);
        const images = await caches.open(IMAGES);
        let failed = 0;
        // Sequential-ish small batches: 21 recipes + images, gentle on
        // a phone connection instead of 40 parallel fetches.
        const queue = [...data.urls];
        const BATCH = 4;
        while (queue.length) {
          const batch = queue.splice(0, BATCH);
          await Promise.all(
            batch.map(async (u) => {
              try {
                const isImage = /\.(jpe?g|png|webp|avif|gif)$/i.test(u);
                const cache = isImage ? images : pages;
                const response = await fetch(u, { cache: "no-cache" });
                if (response.ok) await cache.put(u, response);
                else failed++;
              } catch {
                failed++;
              }
            }),
          );
        }
        reply({ ok: failed === 0, failed });
      } catch {
        reply({ ok: false });
      }
    })(),
  );
});
