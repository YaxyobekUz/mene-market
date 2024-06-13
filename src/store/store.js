import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./slices/userDataSlice";
import authDataSlice from "./slices/authDataSlice";
import productsDataSlice from "./slices/productsDataSlice";

export const store = configureStore({
  reducer: {
    authData: authDataSlice,
    userData: userDataSlice,
    productsData: productsDataSlice,
  },
});
