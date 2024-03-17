import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialStateValues,
  reducers: {
    loggedIn: (state) => {
      state.isLoggedIn = true;
    },
    notLoggedIn: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { loggedIn, notLoggedIn } = authSlice.actions;

export default authSlice.reducer;