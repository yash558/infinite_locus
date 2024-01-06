import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./screens/Home";
import "./App.css"

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
     </Routes>
    </div>
  );
}

export default App;
