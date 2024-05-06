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

  m: toPointingButton('button1'),

  n: toKey('\\', '⌃'),

  '␣': toSleepSystem(),

  j: toKey('⇥', '⌘'),
  k: toKey('⇥', '⌘⇧'),
  c: toKey('`', '⌘'),
  t: toDeeplink('raycast://extensions/raycast/navigation/switch-windows'),
  p: toKey('play_or_pause'),
  ']': toKey('fastforward'),
  '[': toKey('rewind'),
};
