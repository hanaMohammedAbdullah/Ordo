import { configureStore } from "@reduxjs/toolkit";

import foodsReducer from "./slice/foodsSlice"; // relative path to the slice
import userReducer from "./slice/UsersSlice"; // relative path to the slice
import cartSlice from "./slice/cartSlice";
import categorySlice from "./slice/categorySlice";
import deskSlice from "./slice/deskSlice";
import orderSlice from "./slice/orderSlice";
import checkoutSlice from "./slice/checkoutSlice";
import orderAdminSlice from "./slice/admin/orderAdminSlice";
export const store = configureStore({
  reducer: {
    foods: foodsReducer,
    user: userReducer,
    cart: cartSlice,
    category: categorySlice,
    desk: deskSlice,
    order: orderSlice,
    checkout: checkoutSlice,
    adminOrder: orderAdminSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
