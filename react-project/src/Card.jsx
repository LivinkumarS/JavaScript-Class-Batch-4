import React, { useEffect, useState } from "react";

export default function Card() {
  const [number, setNumber] = useState(0);
  const [number2,setNumber2]=useState(0)

  // function func1() {
  //   console.log("From UseEffect!");
  // }

  useEffect(() => {
    console.log("From Empty UseEffect!");
  });

  useEffect(() => {
    console.log("From square bracket side Effect!");
  }, []);

  useEffect(() => {
    console.log("From square bracket side Effect with state!");
  }, [number2]);

  return (
    <div>
      <h1>Number: {number}</h1>
      <button
        onClick={() => {
          setNumber((prev) => {
            return prev + 1;
          });
        }}
      >
        Click
      </button>
      <h1>Number2: {number2}</h1>
      <button
        onClick={() => {
          setNumber2((prev) => {
            return prev + 1;
          });
        }}
      >
        Click
      </button>
    </div>
  );
}
