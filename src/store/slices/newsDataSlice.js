import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  data: [],
};

export const newsDataSlice = createSlice({
  name: "news",
  initialState: initialStateValues,
  reducers: {
    setNewsData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setNewsData } = newsDataSlice.actions;

export default newsDataSlice.reducer;
