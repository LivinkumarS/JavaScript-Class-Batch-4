import suryaImg from "../assets/images/surya.jpg";
import Man from "./Man";

function Person() {
  return (
    <div className="cont">
      <img src={suryaImg} alt="" />
      <Man/>
      <ul>
        <li>Element 1</li>
        <li>Element 1</li>
        <li>Element 1</li>
        <li>Element 1</li>
        <li>Element 1</li>
        <li>Element 1</li>
      </ul>
    </div>
  );
}

export default Person;
