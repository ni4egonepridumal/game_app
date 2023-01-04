import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IAddGame {
  image: string;
  title: string;
  genres: string[];
  video: string;
  price: number;
  id: number;
  count: number;
  description: string;
}

export interface IInitialState {
  gameInCart: IAddGame[];
}

const initialState: IInitialState = { gameInCart: [] };

export const addGameToCart = createSlice({
  name: "addGame",
  initialState,
  reducers: {
    addGame(state, action: PayloadAction<IAddGame>) {
      state.gameInCart.push(action.payload);
    },
    removeGame(state, action: PayloadAction<number>) {
      state.gameInCart = state.gameInCart.filter(
        (games) => games.id !== action.payload
      );
    },
    deleteAllFromCart(state) {
      state.gameInCart = [];
    },
    // попытка сделать количество игр через редакс
    incrementCountGame(state, action: PayloadAction<number>) {
      state.gameInCart.map((game) => (game.count ++));
    },
  },
});

export const { addGame, removeGame, deleteAllFromCart, incrementCountGame } =
  addGameToCart.actions;
export default addGameToCart.reducer;
