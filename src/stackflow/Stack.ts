import React from "react";
import { vars } from "@seed-design/design-token";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { stackflow } from "@stackflow/react";

import ActivityNotFound from "../activities/ActivityNotFound";

const theme = /iphone|ipad|ipod/i.test(window.navigator.userAgent.toLowerCase())
  ? "cupertino"
  : "android";

const { Stack, useFlow } = stackflow({
  transitionDuration: 270,
  activities: {
    MyPage: React.lazy(() => import("../activities/MyPage")),
    Onboarding: React.lazy(() => import("../activities/Onboarding")),
    ActivityHome: React.lazy(() => import("../activities/ActivityHome")),
    ActivityDetail: React.lazy(() => import("../activities/ActivityDetail")),
    ActivityNotFound,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
      backgroundColor: vars.$semantic.color.paperDefault,
      appBar: {
        borderColor:
          theme === "cupertino"
            ? vars.$semantic.color.divider3
            : vars.$semantic.color.divider2,
        textColor: vars.$semantic.color.inkText,
        iconColor: vars.$semantic.color.inkText,
        closeButton: {
          onClick() {
            console.log("close");
          },
        },
      },
    }),
    historySyncPlugin({
      routes: {
        MyPage: "/mypage",
        Onboarding: "/onboarding",
        ActivityHome: "/",
        ActivityDetail: "/detail",
        ActivityNotFound: "/404",
      },
      fallbackActivity: () => "ActivityNotFound",
    }),
  ],
});

export { Stack };
export type TypeUseFlow = typeof useFlow;
