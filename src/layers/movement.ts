import { toKey, withModifier } from 'karabiner.ts';

export const arrows = [
  withModifier('??')({
    h: toKey('←'),
    j: toKey('↓'),
    k: toKey('↑'),
    l: toKey('→'),
  }),
];
