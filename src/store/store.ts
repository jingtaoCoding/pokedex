import { configureStore } from '@reduxjs/toolkit'
import pokemonsReducer from './slices/pokemons'
import searchHistoryReducer from './slices/searchHistory'
import currentPokemonReducer from './slices/currentPokemon'

const rootReducer = {
  pokemons: pokemonsReducer,
  searchHistory: searchHistoryReducer,
  currentPokemon: currentPokemonReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch