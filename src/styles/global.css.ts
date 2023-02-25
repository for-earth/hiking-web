import { globalStyle } from "@vanilla-extract/css";

globalStyle(":root", {
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  color: "var(--seed-semantic-color-ink-text)",
  backgroundColor: "var(--seed-semantic-color-paper-default)",
});
