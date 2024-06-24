import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  userData: null,
  appealsData: [],
  offerLinksData: [],
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState: initialStateValues,
  reducers: {
    // main data
    setUserData: (state, actions) => {
      state.userData = actions.payload;
    },

    // offer link
    setUserOfferLinksData: (state, actions) => {
      state.offerLinksData = actions.payload;
    },

    addUserOfferLinkData: (state, actions) => {
      state.offerLinksData.push(actions.payload);
    },

    deleteUserOfferLinkData: (state, actions) => {
      state.offerLinksData = state.offerLinksData.filter(
        (offerLink) => offerLink.offerLinkId !== actions.payload
      );
    },

    // appeals data
    setUserAppealsData: (state, actions) => {
      state.appealsData = actions.payload;
    },

    addUserAppealData: (state, actions) => {
      state.appealsData.push(actions.payload);
    },
  },
});

export const {
  setUserData,
  addUserAppealData,
  setUserAppealsData,
  addUserOfferLinkData,
  setUserOfferLinksData,
  deleteUserOfferLinkData,
} = userDataSlice.actions;

export default userDataSlice.reducer;
