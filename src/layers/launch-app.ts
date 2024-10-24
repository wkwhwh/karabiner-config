import { toApp } from "karabiner.ts";
import { toDeeplink } from "../utils/to-links";

export const launch = {
  c: toDeeplink("raycast://extensions/raycast/raycast-ai/ai-chat"),
  s: toApp("Safari"),
  f: toApp("Finder"),
  r: toApp("Roon"),
  b: toApp("Bear"),
  d: toApp("Discord"),
  l: toApp("Slack"),
  k: toApp("Kitty"),
  i: toApp("iPhone Mirroring"),
  m: toApp("Music"),
};
