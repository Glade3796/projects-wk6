import "./main.css";
import React, { useState } from "react";
import Initial from "./Initial";
import Welcome from "./Welcome";
import Shoplifter from "./Shoplifter";

export default function Main() {
  const [stage, setStage] = useState(0);
  const [friend, setFriend] = useState(false);
  console.log("stage: ", stage);
  console.log("thief friend: ", friend);
  return (
    <main>
      {stage === 0 && <Initial setStage={setStage} />}
      {stage == 1 && <Welcome setStage={setStage} />}
      {stage == 2 && <Shoplifter setStage={setStage} setFriend={setFriend} />}
    </main>
  );
}
