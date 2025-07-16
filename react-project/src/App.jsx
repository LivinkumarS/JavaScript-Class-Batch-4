import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Name from "./component/Name";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Moblie from "./component/Moblie";
import Sans from "./component/Sans";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} >
            <Route path="name" element={<Name/>} />
            <Route path="mobile" element={<Moblie/>}>
                <Route path="sans" element={<Sans/>}/>
            </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
