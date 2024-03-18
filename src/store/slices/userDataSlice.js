import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  userData: null,
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState: initialStateValues,
  reducers: {
    setUserData: (state, actions) => {
      state.userData = actions.payload;
    },
  },
});

export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
