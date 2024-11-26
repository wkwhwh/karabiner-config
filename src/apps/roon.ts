import { ifApp, toKey } from "karabiner.ts";

export const ifRoon = ifApp("^com.roon.Roon$");

export const roon = {
  open: toKey("f", "⌘"),
};
