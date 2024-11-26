import { ifApp, toKey } from "karabiner.ts";

export const ifDiscord = ifApp("^com.hnc.Discord$");

export const discord = {
  open: toKey("k", "⌘"),
};
