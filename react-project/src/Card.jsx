import React, { useState } from "react";

export default function Card() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState('');

  // const [formData,setFormData]=useState({
  //   name:"",
  //   phone:""
  // })

  // function updateName(e){
  //   setName(e.target.value)
  // }

  // function clearName(){
  //   setName("")
  // }
  // console.log(name);

  function handleSubmit(e){
    e.preventDefault()
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    
  }

  return (
    <div>
      {/* <button
        onClick={() => {
          console.log("Hello Vijay");
        }}
      >
        Click me
      </button> */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          type="number"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />

        <input type="submit" />
      </form>
    </div>
  );
}
