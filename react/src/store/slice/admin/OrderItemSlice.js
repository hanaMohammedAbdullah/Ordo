import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singleOrder: JSON.parse(localStorage.getItem("singleOrder")) || [],
};

const singleOrder = createSlice({
  name: "singleOrder",
  initialState,
  reducers: {
    addSingleOrder: (state, payload) => {
      const itemExists = state.OrderItems.find(
        (item) => item.id === payload.payload.id
      );
      if (itemExists !== undefined) {
        itemExists.foodQuantity++;
        localStorage.setItem("singleOrder", JSON.stringify(state.OrderItems));
        const update = JSON.parse(localStorage.getItem("singleOrder")).find(
          (data) => data.id === payload.payload.id
        );
      } else {
        // const data = { ...payload.payload, foodQuantity: 1 };
        // console.log("this is data", data);
        state.OrderItems.push(payload.payload);
        localStorage.setItem("singleOrder", JSON.stringify(state.OrderItems));
      }
    },
    // write a functon  about removing from cart
    removeFromOrderSingle: (state, action) => {
      state.OrderItems = [];
      localStorage.setItem("singleOrder", JSON.stringify(state.OrderItems));
    },

    // add a n food order list that save the food order object that have a list food in it
  },
});

export const { addSingleOrder, removeFromOrderSingle } = singleOrder.actions;
export default singleOrder.reducer;
