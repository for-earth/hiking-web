import React from "react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import type { ActivityComponentType } from "@stackflow/react";

const ActivityNotFound: ActivityComponentType = () => {
  return <AppScreen appBar={{}}>404 Not Found</AppScreen>;
};

export default ActivityNotFound;
