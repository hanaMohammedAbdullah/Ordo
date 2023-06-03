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
        const update = JSON.parse(localStorage.getItem("orderItems")).find(
          (data) => data.id === payload.payload.id
        );
        // setCart(update.deskNumber, update.id, update.foodQuantity);
        // let data = itemExists;

        // console.log("thi is cart data in cart ", data);

        // const res=  setCart(data.desk_id, data.id, data.foodQuantity);
        // console.log("this is res in cart", res);
      } else {
        const data = { ...payload.payload, foodQuantity: 1 };
        console.log("this is data", data);
        state.orderItems.push(data);
        localStorage.setItem("orderItems", JSON.stringify(state.orderItems));
        // setCart(data.deskNumber, data.id, data.foodQuantity);
        // let cart = JSON.stringify(state.orderItems);
        // console.log("thi is cart data in cart ", state.orderItems);
        // setCart(cart.desk_id, cart.id, cart.foodQuantity);
      }
    },

    //write a function to remove from cart that decrement if already exists or remove item

    removeFromOrder: (state, action) => {
      state.orderItems = state.orderItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("orderItems", JSON.stringify(state.orderItems));

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
