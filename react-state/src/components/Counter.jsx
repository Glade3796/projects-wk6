import React, { useEffect, useState } from "react"; // eslint-disable-line

export default function Counter(props) {
  const [flash, setFlash] = useState(false);
  useEffect(() => {
    setFlash(true);
    const timeOutId = setTimeout(() => {
      setFlash(false);
    }, 300);
    return () => clearTimeout(timeOutId);
  }, [props.counter]);
  const flashClass = flash ? "flash-white" : "";

  return (
    <div className="counter-box">
      <h1>Counter: </h1> <h1 className={flashClass}>{props.counter}</h1>
    </div>
  );
}
