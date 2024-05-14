import {
  toKey,
  toMouseCursorPosition,
  toPointingButton,
  toSleepSystem,
} from 'karabiner.ts';
import { toDeeplink } from '../utils/to-links';

export const system = {
  h: toMouseCursorPosition({ x: '25%', y: '50%', screen: 0 }),
  l: toMouseCursorPosition({ x: '75%', y: '50%', screen: 0 }),
  '⏎': toPointingButton('button1'),
  n: toKey('\\', '⌃'),
  '␣': toSleepSystem(),
  c: toKey('`', '⌘'),
  v: toDeeplink(
    'raycast://extensions/raycast/clipboard-history/clipboard-history',
  ),
  t: toDeeplink('raycast://extensions/raycast/navigation/switch-windows'),
  m: toDeeplink('raycast://extensions/raycast/navigation/search-menu-items'),
  p: toKey('play_or_pause'),
  ']': toKey('fastforward'),
  '[': toKey('rewind'),
};
