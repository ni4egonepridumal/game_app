import { configureStore } from "@reduxjs/toolkit";
import addGameToCart from "../features/addGameToCartSlice";
import currentGame from "../features/currentGameSlice";

export const store = configureStore({
  reducer: {
    addGameToCart,
    currentGame,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
