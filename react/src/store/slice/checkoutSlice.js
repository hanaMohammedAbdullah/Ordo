import { createSlice } from "@reduxjs/toolkit";
import { setCart } from "../../service/apiServer";

const initialState = {
  checkoutItems: JSON.parse(localStorage.getItem("checkoutItems")) || [],
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    //write a function to add to cart that increment if already exists or add new item
    addToCheckout: (state, payload) => {
      console.log(
        "this is cart checkout ",
        state.checkoutItems,
        payload.payload
      );

      const item = state.checkoutItems.find(
        (item) => item.id === payload.payload.id
      );
      console.log("this is cart checkout item before teh if", item);
      if (item === undefined) {
        const data = { ...payload.payload };
        // console.log("this is data", data);
        state.checkoutItems.push(data);
        localStorage.setItem(
          "checkoutItems",
          JSON.stringify(state.checkoutItems)
        );
      }
      console.log("this is cart checkout item after teh if", item);

      console.log(
        "this is cart checkout state.checkoutItems",
        state.checkoutItems
      );
      console.log("this is cart checkout payload.payload", payload.payload);
      // } else {
      //   const data = { ...payload.payload, desk_id: payload.payload.desk_id };
      // state.checkoutItems = state.checkoutItems.filter(
      //   (item) => item.id !== data.payload.id
      // );
      // }
    },

    removeFromOrder: (state, action) => {
      state.checkoutItems = state.checkoutItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem(
        "checkoutItems",
        JSON.stringify(state.checkoutItems)
      );
    },

    //write a function to clear cart
    clearOrder: (state) => {
      state.checkoutItems = [];
      localStorage.removeItem(
        "checkoutItems",
        JSON.stringify(state.checkoutItems)
      );
    },
  },
});

export const { addToCheckout, removeFromOrder, clearOrder } =
  checkoutSlice.actions;
export default checkoutSlice.reducer;
