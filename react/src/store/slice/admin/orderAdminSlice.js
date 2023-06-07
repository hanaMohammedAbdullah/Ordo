import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  OrderItems: JSON.parse(localStorage.getItem("OrderAdminItems")) || [],
  OrderFoodItems: JSON.parse(localStorage.getItem("OrderFoodItems")) || {},
};

const adminOrderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    addToOrder: (state, payload) => {
      const itemExists = state.OrderItems.find(
        (item) => item.id === payload.payload.id
      );
      if (itemExists !== undefined) {
        itemExists.foodQuantity++;
        localStorage.setItem(
          "OrderAdminItems",
          JSON.stringify(state.OrderItems)
        );
        const update = JSON.parse(localStorage.getItem("OrderAdminItems")).find(
          (data) => data.id === payload.payload.id
        );
      } else {
        // const data = { ...payload.payload, foodQuantity: 1 };
        // console.log("this is data", data);
        state.OrderItems = payload.payload;
        localStorage.setItem(
          "OrderAdminItems",
          JSON.stringify(state.OrderItems)
        );
      }
    },
    // add a n food order list that save the food order object that have a list food in it
    addFoodOrders: (state, payload) => {
      // const itemExists = state.OrderFoodItems.find(
      //   (item) => item.id === payload.payload.id
      // );
      // if (itemExists !== undefined) {
      //   itemExists.foodQuantity++;
      //   localStorage.setItem(
      //     "OrderFoodItems",
      //     JSON.stringify(state.OrderFoodItems)
      //   );
      //   const update = JSON.parse(localStorage.getItem("OrderFoodItems")).find(
      //     (data) => data.id === payload.payload.id
      //   );
      // } else {
      // const data = { ...payload.payload, foodQuantity: 1 };
      // console.log("this is data", data);
      console.log("this is payload", payload.payload);
      state.OrderFoodItems = payload.payload;
      localStorage.setItem(
        "OrderFoodItems",
        JSON.stringify(state.OrderFoodItems)
      );
      // }
    },

    decreaseQuantity: (state, action) => {
      const item = state.OrderItems.find(
        (item) => item.id === action.payload.id
      );
      if (item.foodQuantity > 1) {
        item.foodQuantity--;
        localStorage.setItem(
          "OrderAdminItems",
          JSON.stringify(state.OrderItems)
        );
        const update = JSON.parse(localStorage.getItem("OrderAdminItems")).find(
          (data) => data.id === action.payload.id
        );
      } else {
        state.OrderItems = state.OrderItems.filter(
          (item) => item.id !== action.payload.id
        );
        localStorage.setItem(
          "OrderAdminItems",
          JSON.stringify(state.OrderItems)
        );
        const update = JSON.parse(localStorage.getItem("OrderAdminItems")).find(
          (data) => data.id === action.payload.id
        );
      }
    },

    increaseQuantity: (state, action) => {
      //removeFromOrder
      const item = state.OrderItems.find(
        (item) => item.id === action.payload.id
      );
      item.foodQuantity++;
      localStorage.setItem("OrderAdminItems", JSON.stringify(state.OrderItems));
      const update = JSON.parse(localStorage.getItem("OrderAdminItems")).find(
        (data) => data.id === action.payload.id
      );
    },

    removeFromOrder: (state, action) => {
      state.OrderItems = state.OrderItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("OrderAdminItems", JSON.stringify(state.OrderItems));
    },

    clearOrder: (state) => {
      state.OrderItems = [];
      localStorage.removeItem("OrderItems", JSON.stringify(state.OrderItems));
    },
  },
});

export const {
  addToOrder,
  removeFromOrder,
  clearOrder,
  increaseQuantity,
  addFoodOrders,
  decreaseQuantity,
} = adminOrderSlice.actions;
export default adminOrderSlice.reducer;
