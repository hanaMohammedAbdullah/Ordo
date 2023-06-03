import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderItems: JSON.parse(localStorage.getItem("orderItems")) || [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    //write a function to add to cart that increment if already exists or add new item
    addToOrder: (state, payload) => {
      const itemExists = state.orderItems.find(
        (item) => item.id === payload.payload.id
      );
      if (itemExists !== undefined) {
        itemExists.foodQuantity++;
        localStorage.setItem("orderItems", JSON.stringify(state.orderItems));
      } else {
        const data = { ...payload.payload, foodQuantity: 1 };
        console.log("this is data", data);
        state.orderItems.push(data);
        localStorage.setItem("orderItems", JSON.stringify(state.orderItems));
      }
    },

    //write a function to remove from cart that decrement if already exists or remove item

    removeFromOrder: (state, action) => {
      const objectIdToRemove = action.payload.id;
      state.orderItems.foods = state.orderItems.foods.filter(
        (object) => object.id !== objectIdToRemove
      );
      // console.log("this is action", action.payload.id);
      // state.orderItems = state.orderItems.filter(
      //   (item) => item.id !== action.payload.id
      // );
      localStorage.removeItem("orderItems", JSON.stringify(state.orderItems));

      // setCart(
      //   action.payload.deskNumber,
      //   action.id,
      //   action.payload.foodQuantity
      // );
    },

    //write a function to clear cart
    clearOrder: (state) => {
      state.orderItems = [];
      localStorage.removeItem("orderItems", JSON.stringify(state.orderItems));
    },
  },
});

export const { addToOrder, removeFromOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
