import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IinitialState {
    currentGame: []
}

const initialState:IinitialState = {currentGame:[]}

const gemeItem = createSlice({
    name: 'gameItem',
    initialState,
    reducers: {
        setCurrentGame: (state, action) => {
            state.currentGame = action.payload
        }
    },
})