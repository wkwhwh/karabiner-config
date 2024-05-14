import { toKey } from 'karabiner.ts';
import { toDeeplink } from '../utils/to-links';

export const desktop = {
  h: toKey('1', '⌃'),
  j: toKey('2', '⌃'),
  k: toKey('3', '⌃'),
  l: toKey('4', '⌃'),
  n: toDeeplink('raycast://extensions/raycast/window-management/next-desktop'),
  p: toDeeplink(
    'raycast://extensions/raycast/window-management/previous-desktop',
  ),
};
