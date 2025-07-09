import { useState } from "react";

export default function Card() {
  const [number, setNumber] = useState(1);
  const [condition, setCondition] = useState(false);

  console.log(`Condition: ${condition}`);

  // prev+1---->new

  return (
    <div className="card">
      <h1>Number: {number}</h1>
      <button
        onClick={() => {
          setNumber((prev) => {
            return prev + 1;
          });
        }}
      >
        click
      </button>
      <br />

      {condition ? <h1>Hidden Element1</h1> : <h1>Hidden Element2</h1>}

      <button
        onClick={() => {
          setCondition((prev) => {
            return !prev;
          });
        }}
      >
        click
      </button>
    </div>
  );
}
