import {
  map,
  rule,
  SideModifierAlias,
  ToEvent,
  withCondition,
} from "karabiner.ts";
import { ifSafari, safari } from "../apps/safari";
import { ifSlack, slack } from "../apps/slack";
import { discord, ifDiscord } from "../apps/discord";
import { ifRoon, roon } from "../apps/roon";
import { ifKitty, kitty } from "../apps/kitty";

const tapModifier = (v: SideModifierAlias, to: ToEvent) =>
  map(v).to(v).toIfAlone(to);

const historyNavi = [
  // Back/Forward history in most apps
  map("h", "⌃").to("[", "⌘"),
  map("l", "⌃").to("]", "⌘"),
];
const tabNavi = [
  // Pre/Next tab in most apps
  map("h", "⌥").to("[", "⌘⇧"),
  map("l", "⌥").to("]", "⌘⇧"),
];
const switcher = [
  // Pre/Next switcher in most apps
  map("h", "⌘⌥⌃").to("⇥", "⌃⇧"),
  map("l", "⌘⌥⌃").to("⇥", "⌃"),
];

export const appMappings = rule("app mappings").manipulators([
  withCondition(ifSafari)([
    ...historyNavi,
    ...tabNavi,
    ...switcher,
    safari.tabGroupUp,
    safari.tabGroupDown,
    tapModifier("‹⌘", safari.showHideSideBar),
    tapModifier("‹⌥", safari.reloadPage),
    tapModifier("›⌘", safari.showWebInspector),
    tapModifier("›⌥", safari.searchTabs),
  ]),

  withCondition(ifSlack)([
    ...historyNavi,
    ...tabNavi,
    tapModifier("‹⌘", slack.showHideSideBar),
    tapModifier("‹⌥", slack.moveFocusToTheNextSection),

    tapModifier("›⌘", slack.hideRightBar),
    tapModifier("›⌥", slack.open),
  ]),

  withCondition(ifDiscord)([
    ...historyNavi,
    ...tabNavi,
    tapModifier("›⌥", discord.open),
  ]),

  withCondition(ifKitty)([
    ...tabNavi,
    ...switcher,
    tapModifier("›⌥", kitty.open),
  ]),

  withCondition(ifRoon)([...historyNavi, tapModifier("›⌥", roon.open)]),
]);
