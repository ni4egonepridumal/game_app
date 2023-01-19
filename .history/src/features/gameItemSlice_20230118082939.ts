import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GameItem {
  game: {};
}

const initialState: GameItem = { game: {} };

const gemeItem = createSlice({
  name: "gameItem",
  initialState,
  reducers: {
    setCurrentGame: (state, action: PayloadAction<GameItem>) => {
      state.game = action.payload;
    },
  },
});

export const { setCurrentGame } = gemeItem.actions;
export default gemeItem.reducer;
