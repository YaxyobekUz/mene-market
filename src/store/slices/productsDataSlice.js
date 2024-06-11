import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  data: {
    allProducts: [],
    newProducts: [],
    popularProducts: [],
  },
  loader: true,
};

export const productsDataSlice = createSlice({
  name: "products",
  initialState: initialStateValues,
  reducers: {
    setProductsData: (state, action) => {
      state.data = action.payload;
    },

    setProductsLoader: (state, action) => {
      state.loader = action.payload;
    },
  },
});

export const { setProductsData, setProductsLoader } = productsDataSlice.actions;

export default productsDataSlice.reducer;
