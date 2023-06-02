// creating a slice to set and get the number of table
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deskNumber: JSON.parse(localStorage.getItem("deskNumber")) || 0,
};

// create a category slice food
export const deskSlicer = createSlice({
  name: "desk",
  initialState,
  reducers: {
    // set category
    setDesk: (state, action) => {
      state.deskNumber = action.payload;
      localStorage.setItem("deskNumber", JSON.stringify(state.deskNumber));
    },
  },
});

export const { setDesk } = deskSlicer.actions;
export default deskSlicer.reducer;
