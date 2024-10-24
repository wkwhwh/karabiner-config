import { ifApp, map, toKey } from 'karabiner.ts';

export const ifSafari = ifApp('^com.apple.Safari$');

export const safari = {
  reloadPage: toKey('r', '⌘'),
  showHideSideBar: toKey('l', '⌘⇧'),
  showWebInspector: toKey('i', '⌘⌥'),
  searchTabs: toKey('t', '⌘'),
  tabGroupUp: map('k', '⌥').to('↑', '⌘⌥'),
  tabGroupDown: map('j', '⌥').to('↓', '⌘⌥'),
};
