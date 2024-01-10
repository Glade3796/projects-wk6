import "./main.css";
import React, { useState } from "react";

export default function Inital({ setStage }) {
  const [seen, setSeen] = useState(false);
  return (
    <>
      {!seen ? <h1>hi</h1> : <h1> would you like to play a game???</h1>}
      {!seen && <button onClick={() => setSeen(true)}>...</button>}
      {seen && (
        <div className="button-box">
          <button onClick={() => setStage(1)}>Yes please</button>{" "}
          <button onClick={() => setSeen(false)}>God no!</button>
        </div>
      )}
    </>
  );
}
