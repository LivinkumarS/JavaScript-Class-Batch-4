import React, { useState } from "react";
import "./App.css";
import Child from "./component/Child";

export default function App() {
  const [message, setMessage] = useState(1);

  return (
    <div>
      <button
        onClick={() => {
          setMessage((pre) => {
            return ++pre;
          });
        }}
      >
        Click
      </button>
      <h1>From App Component The message is: {message}</h1>
      <hr />
      <Child message={message} />
    </div>
  );
}
