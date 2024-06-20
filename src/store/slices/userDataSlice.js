import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  userData: null,
  userOfferLinksData: [],
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState: initialStateValues,
  reducers: {
    setUserData: (state, actions) => {
      state.userData = actions.payload;
    },

    setUserOfferLinksData: (state, actions) => {
      state.userOfferLinksData = actions.payload;
    },

    addUserOfferLinkData: (state, actions) => {
      state.userOfferLinksData.push(actions.payload);
    },
  },
});

export const { setUserData, setUserOfferLinksData, addUserOfferLinkData } =
  userDataSlice.actions;

export default userDataSlice.reducer;
