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
      state.gameInCart.push(action.payload);
    },
  },
});

export const { addGame } = addGameToCart.actions;
export default addGameToCart.reducer;
