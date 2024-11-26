import { toApp } from "karabiner.ts";
import { toDeeplink } from "../utils/to-links";

export const launch = {
  c: toDeeplink("raycast://extensions/raycast/raycast-ai/ai-chat"),
  b: toApp("Safari"),
  f: toApp("Finder"),
  r: toApp("Roon"),
  d: toApp("Discord"),
  s: toApp("Slack"),
  k: toApp("Kodi"),
  i: toApp("iPhone Mirroring"),
  m: toApp("Music"),
  n: toDeeplink("raycast://extensions/raycast/raycast-notes/raycast-notes"),
  o: toApp("Obsidian"),
  t: toApp("Ghostty"),
};
