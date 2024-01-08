import React, { useState } from "react"; // eslint-disable-line
import Button from "./Button";
import Button1 from "./Button1";
import ClearButton from "./ClearBtn";
import Counter from "./Counter";
export function Main() {
  const initialState = 0;
  const [counter, setCounter] = useState(initialState);
  const [counter1, setCounter1] = useState(initialState);
  const clear = function () {
    setCounter(initialState);
    setCounter1(initialState);
  };

  return (
    <main>
      <p>Press button = increase number</p>
      <Counter counter={counter} counter1={counter1} />
      <Button counter={counter} setCounter={setCounter} />
      <Button1 counter1={counter1} setCounter1={setCounter1} />
      <ClearButton clear={clear} />
    </main>
  );
}
