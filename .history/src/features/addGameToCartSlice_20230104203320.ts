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
    plusCount(state, action) {
     const gameCount = state.gameInCart.find(game => game.id === action.payload);
     //state.gameInCart
     if (gameCount) {
      gameCount.count++ 
     } else {console.log("ytn")}
    },
  },
});

export const { addGame, removeGame, deleteAllFromCart, plusCount } =
  addGameToCart.actions;
export default addGameToCart.reducer;
