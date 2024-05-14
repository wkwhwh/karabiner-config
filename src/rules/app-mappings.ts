import {
  map,
  rule,
  SideModifierAlias,
  ToEvent,
  withCondition,
} from 'karabiner.ts';
import { ifSafari, safari } from '../apps/safari';
import { ifSlack, slack } from '../apps/slack';
import { arc, ifArc } from '../apps/arc';
import { discord, ifDiscord } from '../apps/discord';
import { ifRoon, roon } from '../apps/roon';

const tapModifier = (v: SideModifierAlias, to: ToEvent) =>
  map(v).to(v).toIfAlone(to);

const historyNavi = [
  // Back/Forward history in most apps
  map('h', '⌃').to('[', '⌘'),
  map('l', '⌃').to(']', '⌘'),
];
const tabNavi = [
  // Pre/Next tab in most apps
  map('h', '⌥').to('[', '⌘⇧'),
  map('l', '⌥').to(']', '⌘⇧'),
];
const switcher = [
  // Pre/Next switcher in most apps
  map('h', '⌘⌥⌃').to('⇥', '⌃⇧'),
  map('l', '⌘⌥⌃').to('⇥', '⌃'),
];

export const appMappings = rule('app mappings').manipulators([
  withCondition(ifSafari)([
    ...historyNavi,
    ...tabNavi,
    ...switcher,
    tapModifier('‹⌘', safari.showHideSideBar),
    tapModifier('‹⌥', safari.reloadPage),

    tapModifier('›⌘', safari.showWebInspector),
  ]),

  withCondition(ifSlack)([
    ...historyNavi,
    tapModifier('‹⌘', slack.showHideSideBar),
    tapModifier('‹⌥', slack.moveFocusToTheNextSection),

    tapModifier('›⌘', slack.hideRightBar),
    tapModifier('›⌥', slack.open),
  ]),

  withCondition(ifDiscord)([...historyNavi, tapModifier('›⌥', discord.open)]),

  withCondition(ifRoon)([...historyNavi, tapModifier('›⌥', roon.open)]),

  withCondition(ifArc)([
    ...historyNavi,
    ...tabNavi,
    ...switcher,
    tapModifier('‹⌘', arc.showHideSideBar),
    tapModifier('‹⌥', arc.refreshThePage),
    tapModifier('›⌘', arc.developerTools),
    tapModifier('›⌥', arc.searchTabs),
  ]),
]);
