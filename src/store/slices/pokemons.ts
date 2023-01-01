import { createSlice } from "@reduxjs/toolkit";
import type { Action, Pokemon } from "../types"

const initialState: Pokemon[] = []

export const pokemonsSlice = createSlice(
  {
    name: "pokemons",
    initialState,
    reducers: {
      // add the new pokemon to the list
      addPokemon: (state, { payload }: Action) => {
        const filtered = state.filter(pokemon => pokemon.id !== payload.id)
        return [payload, ...filtered]
      },
    },
  }
);

export const { addPokemon } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;