import { configureStore } from "@reduxjs/toolkit";
import foodsReducer from "../features/foodsSlice"; // relative path to the slice
import userReducer from "../features/UsersSlice"; // relative path to the slice
export const store = configureStore({
  reducer: {
    foods: foodsReducer,
    user: userReducer,
  },
});
