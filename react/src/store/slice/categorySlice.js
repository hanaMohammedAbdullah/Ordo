import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [] || JSON.parse(localStorage.getItem("category")),
  singleCategory: {},
};

// create a category slice food
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    // set category
    setCategory: (state, action) => {
      state.category = action.payload;
      localStorage.setItem("category", JSON.stringify(state.category));
    },
  },
  setSigngleCategory: (state, action) => {
    state.singleCategory = action.payload;
    localStorage.setItem("category", JSON.stringify(state.category));
  },
});

export const { setCategory, setSigngleCategory } = categorySlice.actions;
export default categorySlice.reducer;
