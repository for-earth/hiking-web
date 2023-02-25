import { vars } from "@seed-design/design-token";
import { style } from "@vanilla-extract/css";

/**
 * Vanilla Extract를 활용하면, 다음과 같이 나만의 CSS Lodash를 만들수 있어요.
 */
export const flex = style({
  display: "flex",
});

export const alignCenter = style({
  alignItems: "center",
});

/**
 * 네이티브의 Long Press 동작을 방지할 수 있어요.
 */
export const disableLongPress = style({
  WebkitUserSelect: "none",
  "@supports": {
    "(-webkit-touch-callout: none)": {
      WebkitTouchCallout: "none",
    },
  },
});

/**
 * CSS 들을 조합해 사용하고, (Functional CSS)
 * Atomic하게 쪼개서 어플리케이션 전체 CSS 용량을 줄여봐요.
 */
export const flexAlignCenter = style([flex, alignCenter]);

/**
 * @seed-design의 타이포그래피 토큰을 Vanilla Extract를 활용해 CSS 클래스 이름으로 변환합니다.
 */
export const typography = Object.entries(vars.$semantic.typography).reduce(
  (acc, [key, rules]) => {
    return {
      ...acc,
      [key]: style(rules),
    };
  },
  {} as {
    [key in keyof typeof vars["$semantic"]["typography"]]: string;
  },
);
