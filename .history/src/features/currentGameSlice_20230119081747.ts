import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import IGameItemProps from "../types/GameItem";
// import {IGameItem} from "../types/GameItem";

interface IGameItem {
  image: string;
  title: string;
  genres: string[];
  video: string;
  price: number;
  id: number;
  count: number;
  description: string;
}

interface IGameItemProps {
  game: IGameItem | {};
}

const initialState: IGameItemProps = {
  game: {},
};

export const currentGame = createSlice({
  name: "choiseGame",
  initialState,
  reducers: {
    choiseCurrentGame: (state, action) => {
      // console.log(action.payload);
      state.game = action.payload;
    },
  },
});

export const { choiseCurrentGame } = currentGame.actions;
export default currentGame.reducer;
