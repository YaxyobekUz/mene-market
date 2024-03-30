import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  isLoggedIn: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialStateValues,
  reducers: {
    loggedIn: (state) => {
      state.isLoggedIn = true;
    },
    notLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { loggedIn, notLoggedIn } = authSlice.actions;

export default authSlice.reducer;
