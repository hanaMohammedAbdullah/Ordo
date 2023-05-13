import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import { Cart } from "./pages/Cart";
import { Dashboard } from "./pages/Admin/Dashboard";
import Error from "./pages/Error";
import FoodsPage from "./pages/FoodsPage";
import FoodDetail from "./pages/FoodDeatil";
import { FoodFix } from "./pages/Admin/FoodFix";
import Home from "./pages/Home";
import { Login } from "./pages/Admin/Login";
import { store } from "./store/Store";
import { ModalDatabases } from "./pages/Admin/ModalDatabases";
import { Welcome } from "./pages/Welcome";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/:desk" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category/:id" element={<FoodsPage />} />
          <Route path="/foodpage" element={<FoodsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/foodDetail/:id" element={<FoodDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
