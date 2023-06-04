import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Adding from "./pages/Admin/Adding";
import { Dashboard } from "./pages/Admin/Dashboard";
import { FoodFix } from "./pages/Admin/FoodFix";
import { Login } from "./pages/Admin/Login";
import Menu from "./pages/Admin/Menu";
import AddNewCategory from "./pages/Admin/adding/AddNewCategory";
import AddNewFood from "./pages/Admin/adding/AddNewFood";
import AddNewSubCategory from "./pages/Admin/adding/AddNewSubCategory";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { DeskNum } from "./pages/DeskNum";
import Error from "./pages/Error";
import FoodDetail from "./pages/FoodDeatil";
import FoodsPage from "./pages/FoodsPage";
import Home from "./pages/Home";
import { Welcome } from "./pages/Welcome";
import { store } from "./store/Store";
import { OrderPage } from "./pages/OrederPage";
import CustomerOrders from "./pages/Admin/CustomerOrders";
import MoreDetails from "./pages/Admin/MoreDetails";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<DeskNum />} />
          <Route path="/:desk" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category/:id" element={<FoodsPage />} />
          <Route path="/foodpage" element={<FoodsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/foodDetail/:id" element={<FoodDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/food/:id" element={<FoodFix />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/orders" element={<CustomerOrders />} />
          <Route path="/more-details/:id" element={<MoreDetails />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/adding" element={<Adding />} />
          <Route path="/adding/addNewCategory" element={<AddNewCategory />} />
          <Route
            path="/adding/addNewSubCategory"
            element={<AddNewSubCategory />}
          />
          <Route path="/adding/addNewFood" element={<AddNewFood />} />
          <Route path="/*" element={<Error />} />
          {/* {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />} */}
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
