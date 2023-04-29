import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lunch from "./pages/Lunch";
import About from "./pages/About";
import Error from "./pages/Error";
import FoodDetail from "./pages/FoodDeatil";
function App() {
  return (
    <div cl>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
        <Route path="/foodDetail" element={<FoodDetail />} />
      </Routes>
    </div>
  );
}

export default App;
