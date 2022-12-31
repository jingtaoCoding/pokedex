import { createSlice } from "@reduxjs/toolkit";
import type { Action } from "../types"

const initialState: string[] = []

export const searchHistorySlice = createSlice(
  {
    name: "searchHistory",
    initialState,
    reducers: {
      addSearchHistory: (state, { payload }: Action) => {
        const filtered = state.filter(key => key !== payload)
        return [payload, ...filtered]
      },
    },
  }
);

export const { addSearchHistory } = searchHistorySlice.actions;
export default searchHistorySlice.reducer;