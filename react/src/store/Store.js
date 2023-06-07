import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slice/UsersSlice"; // relative path to the slice
import OrderItemSlice from "./slice/admin/OrderItemSlice";
import orderAdminSlice from "./slice/admin/orderAdminSlice";
import cartSlice from "./slice/cartSlice";
import categorySlice from "./slice/categorySlice";
import checkoutSlice from "./slice/checkoutSlice";
import deskSlice from "./slice/deskSlice";
import foodsReducer from "./slice/foodsSlice"; // relative path to the slice
import orderSlice from "./slice/orderSlice";
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
    singleOrder: OrderItemSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
