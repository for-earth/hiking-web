import { style } from "@vanilla-extract/css";

import { f } from "../styles";

export const avatarGroup = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
});

export const title = style([f.typography.title1Bold]);

export const confirmButton = style({
  width: "100%",
  fontSize: "18px !important",
  fontWeight: "bold !important",
});

export const buttonWrap = style({
  position: "absolute",
  bottom: 10,
  left: 10,
  right: 10,
});
