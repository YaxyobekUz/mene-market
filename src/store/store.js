import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/productBasketSlice";

export const store = configureStore({
  reducer: {
    isLoggedIn: authSlice,
  },
});
