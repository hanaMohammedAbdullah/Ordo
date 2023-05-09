import { configureStore } from "@reduxjs/toolkit";
import foodsReducer from "./slice/foodsSlice"; // relative path to the slice
import userReducer from "./slice/UsersSlice"; // relative path to the slice
import cartSlice from "./slice/cartSlice";
export const store = configureStore({
  reducer: {
    foods: foodsReducer,
    user: userReducer,
    cart: cartSlice,
  },
});
