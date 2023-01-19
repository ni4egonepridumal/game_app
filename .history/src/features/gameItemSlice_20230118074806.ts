import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
  
  export interface GameItem {
    currentGame: {};
  }

const initialState:GameItem = {currentGame:{}}

const gemeItem = createSlice({
    name: 'gameItem',
    initialState,
    reducers: {
        setCurrentGame: (state, action:PayloadAction<GameItem>) => {
            state.currentGame = action.payload
        }
    },
})