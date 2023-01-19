import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GameItem {
  currentGame: {};
}

const initialState: GameItem = { currentGame: {} };

const gemeItem = createSlice({
  name: "gameItem",
  initialState: {currentGame: {}},
  reducers: {
    setCurrentGame: (state, action: PayloadAction<GameItem>) => {
      state.currentGame = action.payload;
    },
  },
});

export const { setCurrentGame } = gemeItem.actions;
export default gemeItem.reducer;
