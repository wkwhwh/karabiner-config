import { ifDevice, map, rule } from 'karabiner.ts';

const ifHhkbKeyboard = ifDevice({ vendor_id: 1278, product_id: 33 });

export const hhkbKeyboard = rule('Hhkb', ifHhkbKeyboard).manipulators([
  map('[', '⌃').to('⎋'),
  map('[', '⌘⌃').to('⎋', '⌘'),

  map('›⌘', '⌥').toHyper(),
  map('›⌥', '⇧').toMeh(),
]);
