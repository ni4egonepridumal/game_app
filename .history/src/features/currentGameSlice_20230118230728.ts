import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const currentGame = createSlice({
  name: "choiseGame",
  initialState: { currentGame: {} },
  reducers: {
    choiseCurrentGame: (state, action) => {
        console.log(action.payload);
        
      state.currentGame = action.payload;
    },
  },
});

export const { choiseCurrentGame } = currentGame.actions;
export default currentGame.reducer;
