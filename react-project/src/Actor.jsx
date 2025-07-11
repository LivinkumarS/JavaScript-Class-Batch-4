import React from "react";

export default function Actor(prop) {
  return (
    <div className="box">
      <h2>
        <span>Name: </span>
        {prop.name}
      </h2>
      <h2>
        <span>Age: </span>
        {prop.age}
      </h2>

      <button>Delete</button>
    </div>
  );
}
