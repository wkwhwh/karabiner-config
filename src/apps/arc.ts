import { ifApp, toKey } from 'karabiner.ts';

export const ifArc = ifApp('^company.thebrowser.Browser$');

export const arc = {
  showHideSideBar: toKey('s', '⌘'),
  developerTools: toKey('i', '⌘⌥'),
  refreshThePage: toKey('r', '⌘'),
  searchTabs: toKey('t', '⌘'),
};
