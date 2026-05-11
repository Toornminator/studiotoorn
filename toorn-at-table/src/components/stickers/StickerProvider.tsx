import { Sticker } from "./Sticker";
import { stickerConfig } from "./sticker-config";

export function StickerProvider() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full overflow-hidden"
    >
      {stickerConfig.map((sticker) => (
        <Sticker key={sticker.id} {...sticker} />
      ))}
    </div>
  );
}
