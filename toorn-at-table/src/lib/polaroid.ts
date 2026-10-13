/**
 * Turn a guest's photo into a polaroid, entirely in the browser, and
 * export it as WebP.
 *
 * Why client-side: the site has no server-side image pipeline and no
 * database. Reviews submit straight to Netlify Forms, which caps a whole
 * submission at 8 MB and times file uploads out after 30 s. A raw phone
 * photo is 3 to 12 MB; a finished polaroid WebP is ~150 to 300 KB. So the
 * photo is framed, graded and compressed here, and what reaches Netlify is
 * already the final asset, ready to publish.
 *
 * Frame geometry follows real instant film (88 x 107 mm, 79 mm square
 * window): even side and top borders, a deep bottom strip for a caption
 * scribbled in the site's marker font. The file itself stays square-on;
 * the tossed-on-the-table rotation is applied at display time, like the
 * Polaroid component does everywhere else.
 *
 * WebP encoding: Chrome, Edge, Firefox and Android encode WebP natively via
 * canvas.toBlob. Safari (macOS and iOS) silently returns PNG instead, so on
 * those browsers a WebAssembly encoder (@jsquash/webp, ~300 KB) is loaded
 * on demand. Nobody else ever downloads it.
 */

const MM = 1080 / 88; // px per mm at the output width
export const POLAROID_WIDTH = 1080;
export const POLAROID_HEIGHT = Math.round(107 * MM); // 1313
const WINDOW = Math.round(79 * MM); // 970, square photo window
const SIDE = Math.round((POLAROID_WIDTH - WINDOW) / 2); // 55
const TOP = Math.round(5.5 * MM); // 68
const STRIP_TOP = TOP + WINDOW; // caption strip starts here

const WEBP_QUALITY = 0.82;
export const MAX_INPUT_BYTES = 30 * 1024 * 1024;

export class PolaroidError extends Error {
  constructor(public code: "type" | "size" | "decode" | "encode") {
    super(code);
  }
}

/* ── decoding ──────────────────────────────────────────────────────── */

async function decode(file: File): Promise<ImageBitmap | HTMLImageElement> {
  // createImageBitmap honours EXIF orientation with "from-image", so phone
  // photos taken sideways come out upright.
  try {
    return await createImageBitmap(file, { imageOrientation: "from-image" });
  } catch {
    // Older engines without the options bag, or formats createImageBitmap
    // rejects but <img> can still decode (e.g. HEIC on Safari).
    const url = URL.createObjectURL(file);
    try {
      const img = new Image();
      img.decoding = "async";
      img.src = url;
      await img.decode();
      return img;
    } catch {
      throw new PolaroidError("decode");
    } finally {
      URL.revokeObjectURL(url);
    }
  }
}

/* ── grading: the instant-film look ────────────────────────────────── */

/**
 * Lifted blacks, softened highlights, a little warmth and a touch less
 * saturation. Done per pixel (rather than ctx.filter) so the result is
 * identical in every browser, including Safari where ctx.filter is
 * unreliable.
 */
function gradePhoto(ctx: CanvasRenderingContext2D, size: number) {
  const img = ctx.getImageData(0, 0, size, size);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    let r = d[i];
    let g = d[i + 1];
    let b = d[i + 2];
    // pull 8% toward luma (gentle desaturation)
    const l = 0.299 * r + 0.587 * g + 0.114 * b;
    r += (l - r) * 0.08;
    g += (l - g) * 0.08;
    b += (l - b) * 0.08;
    // tone curve: lift the floor to ~16, cap the ceiling at ~246
    r = 16 + r * 0.902;
    g = 16 + g * 0.902;
    b = 16 + b * 0.902;
    // warmth
    r += 7;
    g += 2;
    b -= 7;
    d[i] = r;
    d[i + 1] = g;
    d[i + 2] = b;
  }
  ctx.putImageData(img, 0, 0);

  // soft vignette, darker toward the corners like an old print
  const v = ctx.createRadialGradient(
    size / 2,
    size / 2,
    size * 0.32,
    size / 2,
    size / 2,
    size * 0.75,
  );
  v.addColorStop(0, "rgba(40, 24, 10, 0)");
  v.addColorStop(1, "rgba(40, 24, 10, 0.32)");
  ctx.fillStyle = v;
  ctx.fillRect(0, 0, size, size);
}

/** Film grain + paper tooth over the whole card, one cheap pass. */
function addGrain(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * 14;
    d[i] += n;
    d[i + 1] += n;
    d[i + 2] += n;
  }
  ctx.putImageData(img, 0, 0);
}

/* ── caption font ──────────────────────────────────────────────────── */

/**
 * next/font hashes the family name, so read the real one from the CSS
 * variable the layout exposes, and make sure the face is loaded before
 * drawing (canvas silently falls back to a system font otherwise).
 */
async function markerFont(px: number): Promise<string> {
  const family =
    getComputedStyle(document.documentElement)
      .getPropertyValue("--font-permanent-marker")
      .trim() || "cursive";
  const font = `${px}px ${family}`;
  try {
    await document.fonts.load(font, "Aa");
  } catch {
    // Drawing still works with the fallback face.
  }
  return font;
}

/* ── WebP encoding ─────────────────────────────────────────────────── */

let nativeWebp: Promise<boolean> | null = null;

function canvasToBlob(
  canvas: HTMLCanvasElement,
  type: string,
  quality?: number,
): Promise<Blob | null> {
  return new Promise((resolve) => canvas.toBlob(resolve, type, quality));
}

/** Does this browser actually encode WebP, or quietly hand back PNG? */
function supportsNativeWebp(): Promise<boolean> {
  if (!nativeWebp) {
    nativeWebp = (async () => {
      const c = document.createElement("canvas");
      c.width = c.height = 2;
      const blob = await canvasToBlob(c, "image/webp", 0.8);
      return blob?.type === "image/webp";
    })();
  }
  return nativeWebp;
}

async function encodeWebp(canvas: HTMLCanvasElement): Promise<Blob> {
  if (await supportsNativeWebp()) {
    const blob = await canvasToBlob(canvas, "image/webp", WEBP_QUALITY);
    if (blob && blob.type === "image/webp") return blob;
  }
  try {
    const { default: encode } = await import("@jsquash/webp/encode.js");
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("no 2d context");
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const buffer = await encode(pixels, { quality: WEBP_QUALITY * 100 });
    return new Blob([buffer], { type: "image/webp" });
  } catch {
    throw new PolaroidError("encode");
  }
}

/* ── public API ────────────────────────────────────────────────────── */

export type Polaroid = {
  blob: Blob;
  /** Object URL for previews. Revoke with URL.revokeObjectURL when done. */
  url: string;
};

/**
 * Frame, grade, caption and encode one photo. Throws PolaroidError with a
 * code the form maps to a localised message.
 */
export async function makePolaroid(
  file: File,
  caption: string,
): Promise<Polaroid> {
  if (!file.type.startsWith("image/") && !/\.(heic|heif)$/i.test(file.name)) {
    throw new PolaroidError("type");
  }
  if (file.size > MAX_INPUT_BYTES) throw new PolaroidError("size");

  const source = await decode(file);
  const sw = "naturalWidth" in source ? source.naturalWidth : source.width;
  const sh = "naturalHeight" in source ? source.naturalHeight : source.height;
  if (!sw || !sh) throw new PolaroidError("decode");

  // 1. The photo: centre-crop to a square, scale into the film window.
  const photo = document.createElement("canvas");
  photo.width = photo.height = WINDOW;
  const pctx = photo.getContext("2d", { willReadFrequently: true });
  if (!pctx) throw new PolaroidError("encode");
  const side = Math.min(sw, sh);
  pctx.imageSmoothingQuality = "high";
  pctx.drawImage(
    source,
    (sw - side) / 2,
    (sh - side) / 2,
    side,
    side,
    0,
    0,
    WINDOW,
    WINDOW,
  );
  if ("close" in source) source.close();
  gradePhoto(pctx, WINDOW);

  // 2. The card.
  const card = document.createElement("canvas");
  card.width = POLAROID_WIDTH;
  card.height = POLAROID_HEIGHT;
  const ctx = card.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new PolaroidError("encode");

  // warm paper, a touch lighter at the top like light falling across it
  const paper = ctx.createLinearGradient(0, 0, POLAROID_WIDTH, POLAROID_HEIGHT);
  paper.addColorStop(0, "#F3EBDA");
  paper.addColorStop(1, "#E7DBC2");
  ctx.fillStyle = paper;
  ctx.fillRect(0, 0, POLAROID_WIDTH, POLAROID_HEIGHT);

  ctx.drawImage(photo, SIDE, TOP);

  // the film sits slightly recessed in the frame
  ctx.strokeStyle = "rgba(26, 26, 26, 0.18)";
  ctx.lineWidth = 2;
  ctx.strokeRect(SIDE + 1, TOP + 1, WINDOW - 2, WINDOW - 2);

  // 3. The caption, marker on the bottom strip.
  const text = caption.trim();
  if (text) {
    const stripHeight = POLAROID_HEIGHT - STRIP_TOP;
    const maxWidth = WINDOW - 40;
    let px = 78;
    let font = await markerFont(px);
    ctx.font = font;
    while (ctx.measureText(text).width > maxWidth && px > 40) {
      px -= 4;
      font = await markerFont(px);
      ctx.font = font;
    }
    ctx.save();
    ctx.translate(POLAROID_WIDTH / 2, STRIP_TOP + stripHeight * 0.5);
    ctx.rotate((-1.6 * Math.PI) / 180);
    ctx.fillStyle = "#C8202A";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 0, 0, maxWidth);
    ctx.restore();
  }

  addGrain(ctx, POLAROID_WIDTH, POLAROID_HEIGHT);

  const blob = await encodeWebp(card);
  return { blob, url: URL.createObjectURL(blob) };
}
