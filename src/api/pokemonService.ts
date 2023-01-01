import axios from "axios";
import { mock } from "./mockdata/pokemons";

export type IPokemonApiService = ReturnType<typeof pokemonApi>
export const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 1000,
});

export type Pokemon = {
  id: number;
  name: string;
  age: number;
  weight: number;
  height: number;
  sprites: { back_default: string, other: { dream_world: { front_default: string } } };
  abilities: {ability:{name: string}}[];
  types: {type: {name: string}}[];
}

export type IFetchPokemonResponse = Pokemon | {}
export const fetchPokemonService = async (searchText: string): Promise<any> => {
  const url = `/pokemon/${searchText}`;
  try {
    if (searchText) {
      const response = await pokemonApi.get(url);
      // const response = mock();
      return response.data;
    }
  } catch (e) {
    console.log("api call err: ", e);
    return null;
  }
};