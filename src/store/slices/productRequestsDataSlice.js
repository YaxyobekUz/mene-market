import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  requests: [],
};

export const productRequestsDataSlice = createSlice({
  name: "product-requests",
  initialState: initialStateValues,
  reducers: {
    addNewRequestData: (state, action) => {
      state.requests.push(action.payload);
    },
  },
});

export const { addNewRequestData } = productRequestsDataSlice.actions;

export default productRequestsDataSlice.reducer;
