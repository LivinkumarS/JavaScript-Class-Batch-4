import React, { useContext } from "react";
import { NumberContext } from "../App";

export default function GrandChild() {
  const number = useContext(NumberContext);

  return (
    <div>
      <h3>GrandChild: {number}</h3>
    </div>
  );
}
