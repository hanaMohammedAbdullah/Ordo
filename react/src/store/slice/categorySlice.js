import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
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
    },
  },
  setSigngleCategory: (state, action) => {
    state.singleCategory = action.payload;
  },
});

export const { setCategory, setSigngleCategory } = categorySlice.actions;
export default categorySlice.reducer;
