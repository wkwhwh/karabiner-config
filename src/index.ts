import { duoLayer, rule, writeToProfile } from 'karabiner.ts';
import { duoModifier } from './utils/duo-modifier';
import { launch } from './layers/launch-app';
import { framing } from './layers/framing';
import { desktop } from './layers/desktop';
import { arrows } from './layers/movement';
import { system } from './layers/system';
import { hhkbKeyboard } from './devices/hhkb-keyboard';
import { appMappings } from './rules/app-mappings';
import { appleKeyboard } from './devices/apple-keyboard';

const rules = [
  rule('duo-modifiers').manipulators([
    duoModifier('fd', '⌘'),
    duoModifier('fs', '⌃'),
    duoModifier('fa', '⌥'),
    duoModifier('ds', '⇧'),

    duoModifier('gd', '⌘⇧'),
    duoModifier('gs', '⌃⇧'),
    duoModifier('ga', '⌥⇧'),

    duoModifier('vc', '⌘⌥'),
    duoModifier('vx', '⌘⌃'),
    duoModifier('cx', '⌥⌃'),
    duoModifier('vz', '⌘⌥⌃'),

    duoModifier('jk', '⌘'),
    duoModifier('jl', '⌃'),
    duoModifier('j;', '⌥'),
    duoModifier('kl', '⇧'),

    duoModifier('hk', '⌘⇧'),
    duoModifier('hl', '⌃⇧'),
    duoModifier('h;', '⌥⇧'),

    duoModifier('m,', '⌘⌥'),
    duoModifier('m.', '⌘⌃'),
    duoModifier(',.', '⌥⌃'),
    duoModifier('m/', '⌘⌥⌃'),
  ]),

  duoLayer('f', ';').manipulators(framing),
  duoLayer('d', ';').manipulators(desktop),
  duoLayer('s', ';').manipulators(system),
  duoLayer('a', ';').manipulators(arrows),
  duoLayer('l', ';').manipulators(launch),

  hhkbKeyboard,
  appleKeyboard,
  appMappings,
];

writeToProfile('Default', rules, {
  'basic.simultaneous_threshold_milliseconds': 40,
  'duo_layer.threshold_milliseconds': 60,
  'duo_layer.notification': false,
});
