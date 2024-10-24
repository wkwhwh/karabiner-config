import {
  toKey,
  toMouseCursorPosition,
  toPointingButton,
  toSleepSystem,
} from 'karabiner.ts';
import { toDeeplink } from '../utils/to-links';

export const system = {
  '[': toMouseCursorPosition({ x: '25%', y: '50%', screen: 0 }),
  ']': toMouseCursorPosition({ x: '75%', y: '50%', screen: 0 }),
  '⏎': toPointingButton('button1'),
  n: toKey('\\', '⌃'),
  '␣': toSleepSystem(),
  c: toDeeplink(
    'raycast://extensions/raycast/clipboard-history/clipboard-history',
  ),
  w: toDeeplink('raycast://extensions/raycast/navigation/switch-windows'),
  m: toDeeplink('raycast://extensions/raycast/navigation/search-menu-items'),
  l: toKey('⇥', '⌘'),
  h: toKey('⇥', '⌘⇧'),
  i: toDeeplink('raycast://extensions/benvp/audio-device/set-input-device'),
  o: toDeeplink('raycast://extensions/benvp/audio-device/set-output-device'),
  b: toDeeplink(
    'raycast://extensions/VladCuciureanu/toothpick/manage-bluetooth-connections',
  ),
  s: toDeeplink('raycast://extensions/raycast/snippets/search-snippets'),
};
