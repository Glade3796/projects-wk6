import React, { useState } from "react"; // eslint-disable-line

export default function ClearButton({ clear }) {
  return <button onClick={clear}>RESET</button>;
}
