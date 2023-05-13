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
      const itemExists = state.cartItems.find(
        (item) => item.id === payload.payload.id
      );
      if (itemExists !== undefined) {
        itemExists.quantity++;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else {
        state.cartItems.push(payload.payload);
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    //write a function to remove from cart that decrement if already exists or remove item
    decreaseQuantity: (state, action) => {
      //removeFromCart
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },

    increaseQuantity: (state, action) => {
      //removeFromCart
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      item.quantity++;
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },

    //write a function to clear cart
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
