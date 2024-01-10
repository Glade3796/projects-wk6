import Buttons from "./components/Buttons";
import Counter from "./components/Counter";
import Header from "./components/Header";
import react, { useState } from "react"; // eslint-disable-line
export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Header />
      <div className="panel">
        <Counter counter={counter} />
        <Buttons counter={counter} setCounter={setCounter} />
      </div>
    </>
  );
}
