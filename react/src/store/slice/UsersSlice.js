import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  email: "",
  password: "",
  token: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setEmail, setPassword, setToken } = userSlice.actions;
export default userSlice.reducer;
