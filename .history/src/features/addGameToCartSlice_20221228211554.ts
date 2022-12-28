import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IAddGame {
  image: string;
  title: string;
  genres: string[];
  video: string;
  price: number;
  id: number;
  description: string;
}

interface IInitialState {
  gameInCart: IAddGame[];
}

const initialState: IInitialState = { gameInCart: [] };

export const addGameToCart = createSlice({
  name: "addGame",
  initialState,
  reducers: {
    addGame(state, action: PayloadAction<IAddGame>) {
      /* проверить то что есть в стейте, с тем что приходит, и не добавлять повторы в корзину 
      console.log("state =>>>",state.gameInCart.map(item=> item.id), "action =>>>>", action) */
      state.gameInCart.push(action.payload);
    },
    removeGame(state, action: PayloadAction<number>) {
      console.log(action.payload)
      state.gameInCart.filter((games) => games.id !== action.payload);
    },
  },
});

export const { addGame, removeGame } = addGameToCart.actions;
export default addGameToCart.reducer;
