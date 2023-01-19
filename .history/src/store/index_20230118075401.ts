import { configureStore } from "@reduxjs/toolkit";
import addGameToCart from "../features/addGameToCartSlice";
import gameItem from "../features/gameItemSlice";

export const store = configureStore({
  reducer: {
    addGameToCart,
    gameItem,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
