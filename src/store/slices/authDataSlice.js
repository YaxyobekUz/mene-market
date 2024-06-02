import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  data: {
    token: null,
    email: null,
    password: null,
    isLoggedIn: false,
  },
};

export const authDataSlice = createSlice({
  name: "auth",
  initialState: initialStateValues,
  reducers: {
    setAuthData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setAuthData } = authDataSlice.actions;

export default authDataSlice.reducer;
