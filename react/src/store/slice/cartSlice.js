import { createSlice } from "@reduxjs/toolkit";
import { setCart } from "../../service/apiServer";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
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
        itemExists.foodQuantity++;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        const update = JSON.parse(localStorage.getItem("cartItems")).find(
          (data) => data.id === payload.payload.id
        );
        setCart(update.deskNumber, update.id, update.foodQuantity);
        // let data = itemExists;

        // console.log("thi is cart data in cart ", data);

        // const res=  setCart(data.desk_id, data.id, data.foodQuantity);
        // console.log("this is res in cart", res);
      } else {
        const data = { ...payload.payload, foodQuantity: 1 };
        console.log("this is data", data);
        state.cartItems.push(data);
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        setCart(data.deskNumber, data.id, data.foodQuantity);
        // let cart = JSON.stringify(state.cartItems);
        // console.log("thi is cart data in cart ", state.cartItems);
        // setCart(cart.desk_id, cart.id, cart.foodQuantity);
      }
    },

    //write a function to remove from cart that decrement if already exists or remove item
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item.foodQuantity > 1) {
        item.foodQuantity--;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        const update = JSON.parse(localStorage.getItem("cartItems")).find(
          (data) => data.id === action.payload.id
        );
        setCart(update.deskNumber, update.id, update.foodQuantity);

        // setCart(data.deskNumber, data.id, data.foodQuantity);
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        const update = JSON.parse(localStorage.getItem("cartItems")).find(
          (data) => data.id === action.payload.id
        );
        setCart(update.deskNumber, update.id, update.foodQuantity);
      }
    },

    increaseQuantity: (state, action) => {
      //removeFromCart
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      item.foodQuantity++;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      const update = JSON.parse(localStorage.getItem("cartItems")).find(
        (data) => data.id === action.payload.id
      );
      setCart(update.deskNumber, update.id, update.foodQuantity);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      // setCart(
      //   action.payload.deskNumber,
      //   action.id,
      //   action.payload.foodQuantity
      // );
    },

    //write a function to clear cart
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems", JSON.stringify(state.cartItems));
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
