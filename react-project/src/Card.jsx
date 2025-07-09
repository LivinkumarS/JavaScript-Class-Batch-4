import { useState } from "react";

export default function Card() {
  const [number, setNumber] = useState(1);

  // prev+1---->new

  function add() {
    setNumber((prev) => {
      return prev + 1;
    });
  }
  function reduce() {
    setNumber((prev) => {
      if (prev == 1) {
        return prev;
      }
      return prev - 1;
    });
  }

  return (
    <div className="card">
      <h1>Number: {number}</h1>
      <button onClick={add}>Add Button</button> <br />
      <button onClick={reduce}>Reduce Button</button>
      <h2>{number % 2 == 0 ? "Even number" : "Odd number"}</h2>
    </div>
  );
}
