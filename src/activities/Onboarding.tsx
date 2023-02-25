import React, { MouseEventHandler, useEffect, useState } from "react";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import type { ActivityComponentType } from "@stackflow/react";

import { useFlow } from "../stackflow";
import * as commonCss from "../styles/common.css";

import * as css from "./Onboarding.css";

const Onboarding: ActivityComponentType = () => {
  const [mountains, setMountains] = useState<any[]>([]);
  const { push } = useFlow();
  const [clickedItems, setClickedItems] = useState<number[]>([]);

  const onConfirm: MouseEventHandler = (e) => {
    e.preventDefault();
    push("MyPage", {});
  };

  useEffect(() => {
    fetchMountains();
  }, []);

  const fetchMountains = async () => {
    const data = await fetch("http://localhost:3000/api/v1/mountains").then(
      async (response) =>
        JSON.parse(await response.json()).response.body.items.item,
    );
    console.log(data);
    setMountains(data);
  };
  return (
    <AppScreen appBar={{}}>
      <main className={commonCss.layout}>
        <h1 className={css.title}>등반한 산을 선택해주세요</h1>
        <section className={css.avatarGroup}>
          {mountains.map((mountain, index) => (
            <Avatar
              onClick={() => {
                setClickedItems((prev) => {
                  if (prev.includes(index)) {
                    return prev.filter((item) => item !== index);
                  }
                  return prev.concat(index);
                });
              }}
              key={mountain.mntilistno}
              sx={{
                width: 78,
                height: 78,
                backgroundColor: clickedItems.includes(index)
                  ? "lightblue"
                  : "ligthgray",
              }}
            >
              {mountain.mntiname}
            </Avatar>
          ))}
        </section>
        <div className={css.buttonWrap}>
          <Button
            className={css.confirmButton}
            variant="contained"
            onClick={onConfirm}
          >
            선택완료
          </Button>
        </div>
      </main>
    </AppScreen>
  );
};

export default Onboarding;
