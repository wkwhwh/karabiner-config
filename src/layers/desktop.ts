import { to$, toKey } from 'karabiner.ts';

export const desktop = {
  h: toKey('1', '⌃'),
  j: toKey('2', '⌃'),
  k: toKey('3', '⌃'),
  l: toKey('4', '⌃'),
  n: toKey('→', '⌃'),
  p: toKey('←', '⌃'),
  1: to$(`osascript ~/scripts/move_to_desktop.scpt "18"`),
  2: to$(`osascript ~/scripts/move_to_desktop.scpt "19"`),
  3: to$(`osascript ~/scripts/move_to_desktop.scpt "20"`),
  4: to$(`osascript ~/scripts/move_to_desktop.scpt "21"`),
};
