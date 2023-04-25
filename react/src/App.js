import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lunch from "./pages/Lunch";
import FoodDetails from "./pages/FoodDetails";
function App() {
  return (
    <div cl>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lunch" element={<Lunch/>} />
        <Route path="/lunch/food-details" element={<FoodDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
