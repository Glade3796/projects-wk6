// import React from "react"; // eslint-disable-line

export default function Button(props) {
  // const [counter, setCounter] = useState(0)

  const handleClick = function () {
    props.setCounter(props.counter + 1);
  };
  return (
    <button id="button" className="Button" onClick={handleClick}>
      Add one
    </button>
  );
}
