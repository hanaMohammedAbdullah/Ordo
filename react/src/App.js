import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import { Cart } from "./pages/Cart";
import { Dashboard } from "./pages/Dashboard";
import Error from "./pages/Error";
import FoodCategore from "./pages/FoodCategore";
import FoodDetail from "./pages/FoodDeatil";
import { FoodFix } from "./pages/FoodFix";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { store } from "./store/Store";
import { ModalDatabases } from "./pages/ModalDatabases";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<FoodCategore />} />
          <Route path="/about" element={<About />} />
          <Route path="/foodDetail/:id" element={<FoodDetail />} />
          <Route path="/menu" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/food/:id" element={<FoodFix />} />
          <Route path="/add" element={<ModalDatabases />} />
          <Route path="/*" element={<Error />} />
          {/* {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />} */}
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
