import React, { useState } from "react";
import Sib1 from "./component/Sib1";
import Sib2 from "./component/Sib2";

export default function App() {


    const [number, setNumber] = useState(10);

  return (
    <div>
      App
      <hr />
      <Sib1 number={number}/>
      <Sib2 number={number}/>
    </div>
  );
}
