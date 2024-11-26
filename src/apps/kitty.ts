import { ifApp, toKey } from "karabiner.ts";

export const ifKitty = ifApp("^net.kovidgoyal.kitty$");

export const kitty = {
  open: toKey("h", "⌃⇧"),
};
