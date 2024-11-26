import { ifApp, toKey } from "karabiner.ts";

export const ifGhostty = ifApp("^com.mitchellh.ghostty$");

export const ghostty = {
  open: toKey("h", "⌃⇧"),
};
