import { style } from "@vanilla-extract/css";

import { f } from ".";

export const layout = style({
  padding: "12px",
});

export const title = style([f.typography.title1Bold]);
