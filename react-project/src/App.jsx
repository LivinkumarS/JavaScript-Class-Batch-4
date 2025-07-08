import "./App.css";
import Card from "./Card.jsx";
import vjimg from "./assets/actors-imgs/vijay.jpg";
import surImg from "./assets/actors-imgs/suyra.jpg";
import dImg from "./assets/actors-imgs/dhanush.jpg";

function App() {
  return (
    <div>
      <h1 className="title">Actors</h1>
      <Card img={vjimg} name="Vijay" age="50" movies="68" />
      <Card img={surImg} name="Surya" age="48" movies="50" />
      <Card img={dImg} name="Dhanush" age="45" movies="40" />
    </div>
  );
}

export default App;
