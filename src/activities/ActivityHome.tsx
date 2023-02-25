import React from "react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import type { ActivityComponentType } from "@stackflow/react";

import { useFlow } from "../stackflow";

import * as css from "./ActivityHome.css";

const ActivityHome: ActivityComponentType = () => {
  const { push } = useFlow();

  return (
    <AppScreen appBar={{ title: "Home" }}>
      <h1 className={css.title}>Home</h1>
      <div>
        <a
          href="/onboarding"
          onClick={(e) => {
            e.preventDefault();
            push("Onboarding", {});
          }}
        >
          온보딩
        </a>
      </div>
    </AppScreen>
  );
};

export default ActivityHome;
