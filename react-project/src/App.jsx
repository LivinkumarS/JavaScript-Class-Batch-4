import React, { useEffect, useRef, useState } from "react";

export default function App() {
  // const inputRef = useRef();

  const numberRef = useRef(0);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Rendered again!");
  });

  // const focusInp = () => {
  //   inputRef.current.focus();
  // };

  return (
    <div>
      <button
        onClick={() => {
          setNumber((pre) => ++pre);
        }}
      >
        Change State
      </button>
      <button
        onClick={() => {
          numberRef.current++;
        }}
      >
        Change Ref
      </button>

      <h1>{number}</h1>
      <h1>{numberRef.current}</h1>
    </div>
  );
}
