"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type StickerPosition = {
  x: number;
  y: number;
  rotation: number;
  zIndex: number;
};

type StickerStore = {
  positions: Record<string, StickerPosition>;
  topZ: number;
  hasHydrated: boolean;
  setPosition: (id: string, x: number, y: number) => void;
  setRotation: (id: string, rotation: number) => void;
  bringToFront: (id: string) => number;
  resetAll: () => void;
  _setHydrated: (hydrated: boolean) => void;
};

const BASE_Z = 40;

export const useStickerStore = create<StickerStore>()(
  persist(
    (set, get) => ({
      positions: {},
      topZ: BASE_Z,
      hasHydrated: false,
      setPosition: (id, x, y) =>
        set((state) => {
          const prev = state.positions[id] ?? {
            x,
            y,
            rotation: 0,
            zIndex: state.topZ,
          };
          return {
            positions: {
              ...state.positions,
              [id]: { ...prev, x, y },
            },
          };
        }),
      setRotation: (id, rotation) =>
        set((state) => {
          const prev = state.positions[id] ?? {
            x: 0,
            y: 0,
            rotation,
            zIndex: state.topZ,
          };
          return {
            positions: {
              ...state.positions,
              [id]: { ...prev, rotation },
            },
          };
        }),
      bringToFront: (id) => {
        const next = get().topZ + 1;
        set((state) => {
          const prev = state.positions[id] ?? {
            x: 0,
            y: 0,
            rotation: 0,
            zIndex: next,
          };
          return {
            topZ: next,
            positions: {
              ...state.positions,
              [id]: { ...prev, zIndex: next },
            },
          };
        });
        return next;
      },
      resetAll: () => set({ positions: {}, topZ: BASE_Z }),
      _setHydrated: (hasHydrated) => set({ hasHydrated }),
    }),
    {
      // Bump this key after editing sticker-config.ts so stale positions
      // for removed / renamed stickers don't haunt repeat visitors.
      name: "toorn-stickers-v2",
      partialize: (state) => ({
        positions: state.positions,
        topZ: state.topZ,
      }),
      onRehydrateStorage: () => (state) => {
        state?._setHydrated(true);
      },
    },
  ),
);
