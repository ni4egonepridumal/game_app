import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import IGameItemProps from "../types/GameItem";
import IGameItem from "../types/GameItem";


const initialState: IGameItemProps = {
  game: {
    image: "string",
    title: "string",
    genres: ["string", "string"],
    video: "string",
    price: 1,
    id: 123,
    count: 1,
    description: "string",
  },
};

export const currentGame = createSlice({
  name: "choiseGame",
  initialState,
  reducers: {
    choiseCurrentGame: (state, action:PayloadAction<any>) => {
      state.game = action.payload;
    },
  },
});

export const { choiseCurrentGame } = currentGame.actions;
export default currentGame.reducer;
