import "./App.css";
import Home from "./components/Home";
import VideoRoom from "./components/VideoRoom";
import Translate from "./components/Translate";
import About from "./components/About";
import Contact from "./components/Contact";
import FirToText from "./components/FirToText";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/firtotext" element={<FirToText />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="/videoroom" element={<VideoRoom />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
