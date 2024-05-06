import { toApp } from 'karabiner.ts';
import { toDeeplink } from '../utils/to-links';

export const launch = {
  c: toDeeplink('raycast://extensions/raycast/raycast-ai/ai-chat'),
  b: toApp('Arc'),
  f: toApp('Finder'),
  m: toApp('Roon'),
  n: toApp('Bear'),
  d: toApp('Discord'),
  s: toApp('Slack'),
  t: toApp('Wezterm'),
  ',': toApp('System Settings'),
};
