// import React from "react"; // eslint-disable-line

export default function Button(props) {
  // const [counter, setCounter] = useState(0)

  const handleClick1 = function () {
    props.setCounter1(props.counter1 + 1);
  };
  return (
    <button id="button" className="Button" onClick={handleClick1}>
      Add one
    </button>
  );
}
