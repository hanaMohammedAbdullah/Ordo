import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FoodCategore from "./pages/FoodCategore";
import About from "./pages/About";
import Error from "./pages/Error";
import FoodDetail from "./pages/FoodDeatil";
import { store } from "./store/Store";
import { Provider } from "react-redux";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Cart } from "./pages/Cart";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<FoodCategore />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error />} />
          <Route path="/foodDetail/:id" element={<FoodDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          {/* {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />} */}
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
