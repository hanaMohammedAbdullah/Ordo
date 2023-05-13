import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [] || JSON.parse(localStorage.getItem("cartItems")),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //write a function to add to cart that increment if already exists or add new item
    addToCart: (state, payload) => {
      console.log("payload  ", payload);
      const itemExists = state.cartItems.find(
        (item) => item.id === payload.payload.id
      );
      console.log("itemExists ", itemExists);
      if (itemExists !== undefined) {
        itemExists.quantity++;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else {
        state.cartItems.push(payload.payload);
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    //write a function to remove from cart that decrement if already exists or remove item
    removeFromCart: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item.quantity === 1) {
        const index = state.cartItems.findIndex(
          (item) => item.id === action.payload.id
        );
        state.cartItems.splice(index, 1);
      } else {
        item.quantity--;
      }
    },

    //write a function to clear cart
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
