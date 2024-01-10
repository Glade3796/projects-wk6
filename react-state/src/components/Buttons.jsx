export default function Buttons(props) {
  const handleAddClick = function () {
    props.setCounter(props.counter + 1);
  };
  const handleRemClick = function () {
    props.setCounter(props.counter - 1);
  };
  const handleClearClick = function () {
    props.setCounter(0);
  };
  return (
    <div className="button-box">
      <button onClick={handleAddClick}>Add one</button>
      <button onClick={handleRemClick}>Remove one</button>
      <button onClick={handleClearClick}>Clear</button>
    </div>
  );
}
