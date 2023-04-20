import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lunch from "./pages/Lunch";
function App() {
  return (
    <div cl>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lunch" element={<Lunch/>} />
      </Routes>
    </div>
  );
}

export default App;
