import React, { createContext, useState } from "react";
import Child from "./component/Child";

const NumberContext = createContext();

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setNumber((pre) => {
            return ++pre;
          });
        }}
      >Add</button>

      <h1>App</h1>
      <hr />

      <NumberContext.Provider value={number}>
        <Child />
      </NumberContext.Provider>
    </div>
  );
}

export { NumberContext };
