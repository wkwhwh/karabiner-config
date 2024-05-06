import { to$ } from 'karabiner.ts';

// `open -a` sometimes gets confused by the non-standard path
export function toUserApp(name: string) {
  return to$(`open ~/Applications/${name}.app`);
}

export function toDeeplink(link: string) {
  return to$(`open -g ${link}`);
}
