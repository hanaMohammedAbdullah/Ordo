import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allFoods: [],
  status: "idle",
  error: null,
  singleFood: {
    feedbacks: [],
  },
};
export const adminFoodsSlice = createSlice({
  name: "AdminFoods",
  initialState,
  reducers: {
    setFood: (state, payload) => {
      state.allFoods = payload.payload;
    },
    setSingleFood: (state, payload) => {
      state.singleFood = payload.payload;
    },

    toggleToCart: (state, payload) => {
      if (!state.allFoods[payload.payload.id].isItInCart) {
        state.allFoods[payload.payload.id].isItInCart = true;
      } else {
        state.allFoods[payload.payload.id].isItInCart = false;
      }
      localStorage.setItem("allFoods", JSON.stringify(state.allFoods));
    },
    changeCartQuantity: (state, payload) => {
      state.allFoods[payload.payload.index].cartQuantity =
        payload.payload.quantity;
      localStorage.setItem("allFoods", JSON.stringify(state.allFoods));
    },
    addFood: (state, payload) => {
      state.allFoods.push(payload.payload);
      localStorage.setItem("allFoods", JSON.stringify(state.allFoods));
    },
    toggleDeleteFood: (state, payload) => {
      const index = state.allFoods.findIndex((food) => {
        return food.id === payload.payload.id;
      });
      state.allFoods[index].deleted = !state.allFoods[index].deleted;
      localStorage.setItem("allFoods", JSON.stringify(state.allFoods));
    },
    editFood: (state, payload) => {
      const index = state.allFoods.findIndex((food) => {
        return food.id === payload.payload.id;
      });
      state.allFoods[index] = payload.payload;
      localStorage.setItem("allFoods", JSON.stringify(state.allFoods));
    },
  },
});

export default adminFoodsSlice.reducer;

export const selectAllFoods = (state) => state.AdminFoods.allFoods;
export const selectSingleFood = (state) => state.AdminFoods.singleFood;
export const selectFoodStatus = (state) => state.AdminFoods.status;
export const selectFoodError = (state) => state.AdminFoods.error;
export const {
  toggleToCart,
  changeCartQuantity,
  addFood,
  toggleDeleteFood,
  editFood,
  getFood,
  setFood,
  setSingleFood,
} = adminFoodsSlice.actions;
