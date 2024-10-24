import { toDeeplink } from "../utils/to-links";

export const framing = {
  h: toDeeplink("rectangle-pro://execute-action?name=left-half"),
  j: toDeeplink("rectangle-pro://execute-action?name=bottom-half"),
  k: toDeeplink("rectangle-pro://execute-action?name=top-half"),
  l: toDeeplink("rectangle-pro://execute-action?name=right-half"),
  m: toDeeplink("rectangle-pro://execute-action?name=maximize"),
  n: toDeeplink("rectangle-pro://execute-action?name=next-space"),
  p: toDeeplink("rectangle-pro://execute-action?name=prev-space"),
};
