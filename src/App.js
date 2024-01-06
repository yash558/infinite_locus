import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./screens/Home";
import Meditation from "./components/Meditation";
import Popup from "./components/Popup";
import Depression from "./components/Depression";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meditation" element = {<Meditation/>}/>
      <Route path="/popup" element = {<Popup/>}/>
      <Route path="/depression" element = {<Depression/>}/>
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
     </Routes>
    </div>
  );
}

export default App;
