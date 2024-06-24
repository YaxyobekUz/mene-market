import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./slices/userDataSlice";
import authDataSlice from "./slices/authDataSlice";
import newsDataSlice from "./slices/newsDataSlice";
import productsDataSlice from "./slices/productsDataSlice";
import imageViewerModalSlice from "./slices/imageViewerModalSlice";
import productRequestsDataSlice from "./slices/productRequestsDataSlice";

export const store = configureStore({
  reducer: {
    authData: authDataSlice,
    userData: userDataSlice,
    newsData: newsDataSlice,
    productsData: productsDataSlice,
    imageViewerModal: imageViewerModalSlice,
    productRequestsData: productRequestsDataSlice,
  },
});
