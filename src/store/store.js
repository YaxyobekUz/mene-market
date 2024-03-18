import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/productBasketSlice";
import userDataSlice from "./slices/userDataSlice";

export const store = configureStore({
  reducer: {
    isLoggedIn: authSlice,
    userData: userDataSlice,
  },
});
