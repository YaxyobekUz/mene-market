import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  userData: null,
  offerLinksData: [],
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState: initialStateValues,
  reducers: {
    setUserData: (state, actions) => {
      state.userData = actions.payload;
    },

    setUserOfferLinksData: (state, actions) => {
      state.offerLinksData = actions.payload;
    },

    addUserOfferLinkData: (state, actions) => {
      state.offerLinksData.push(actions.payload);
    },
  },
});

export const { setUserData, setUserOfferLinksData, addUserOfferLinkData } =
  userDataSlice.actions;

export default userDataSlice.reducer;
