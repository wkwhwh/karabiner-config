import { ifApp, map, toKey } from 'karabiner.ts';

export const ifSafari = ifApp('^com.apple.Safari$');

export const safari = {
  goToTheNextTab: toKey(']', '⌘⇧'),
  goToThePreviousTab: toKey('[', '⌘⇧'),
  reOpenTheLastTabClosed: toKey('t', '⌘⇧'),

  reloadPage: toKey('r', '⌘'),

  showHideSideBar: toKey('l', '⌘⇧'),
  showWebInspector: toKey('i', '⌘⌥'),
  tabGroupUp: map('k', '⌥').to('↑', '⌘⌥'),
  tabGroupDown: map('j', '⌥').to('↓', '⌘⌥'),
};
