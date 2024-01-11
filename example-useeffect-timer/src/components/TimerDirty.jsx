import { useEffect, useState } from "react";

export default function TimerDirty() {
  console.log("Dirty Timer render");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Use effect dirty timer callback");
    setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);
  }, []);
  return <div>Count: {count}</div>;
}
