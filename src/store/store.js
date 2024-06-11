import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./slices/userDataSlice";
import authDataSlice from "./slices/authDataSlice";
import authSlice from "./slices/productBasketSlice";
import productsDataSlice from "./slices/productsDataSlice";

export const store = configureStore({
  reducer: {
    isLoggedIn: authSlice,
    authData: authDataSlice,
    userData: userDataSlice,
    productsData: productsDataSlice,
  },
});
