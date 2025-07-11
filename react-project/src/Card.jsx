import React, { useState } from "react";
import Actor from "./Actor";

export default function Card() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [listItems, setListItems] = useState([
  ]);

  function handleSubmit(e) {
    e.preventDefault()
    setListItems((prev) => {
      prev.push({ name: name, age: age });
      return prev;
    });

    setAge("");
    setName("");
  }

  return (
    <div>
      <h1>Actors</h1>

      {listItems.map((item, ind) => {
        return <Actor key={ind} name={item.name} age={item.age} />;
      })}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="name"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          placeholder="age"
        />
        <input type="submit" name="" id="" />
      </form>
    </div>
  );
}
