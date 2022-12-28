import { configureStore } from "@reduxjs/toolkit";
import  addGameToCart  from "../features/addGamToCartSlice";

export const store = configureStore({
  reducer: {
    addGameToCart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
