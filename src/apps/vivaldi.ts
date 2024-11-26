import { ifApp, map, toKey } from "karabiner.ts";

export const ifVivaldi = ifApp("^com.vivaldi.Vivaldi$");

export const vivaldi = {
  reloadPage: toKey("r", "⌘"),
  showHideSideBar: toKey("p", "⌘⌥"),
  showWebInspector: toKey("i", "⌘⌥"),
  searchTabs: toKey("e", "⌘"),
  workspaceUp: map("k", "⌥").to("↑", "⌃⇧"),
  workspaceDown: map("j", "⌥").to("↓", "⌃⇧"),
};
