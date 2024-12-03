import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  data: {
    token: null,
    email: null,
    password: null,
  },
  loggedIn: true,
};

export const authDataSlice = createSlice({
  name: "auth",
  initialState: initialStateValues,
  reducers: {
    setAuthData: (state, action) => {
      // state.data = action.payload;
    },

    setLoggedIn: (state, action) => {
      // state.loggedIn = action.payload;
    },
  },
});

export const { setAuthData, setLoggedIn } = authDataSlice.actions;

export default authDataSlice.reducer;
