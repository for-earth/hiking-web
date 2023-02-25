import React from "react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import type { ActivityComponentType } from "@stackflow/react";

const ActivityDetail: ActivityComponentType = () => {
  return <AppScreen appBar={{ title: "Detail" }}>Hello, Detail</AppScreen>;
};

export default ActivityDetail;
