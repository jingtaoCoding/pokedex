import axios from "axios";

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
  abilities: any[];
}

export type IFetchPokemonResponse = Pokemon | {}
export const fetchPokemonService = async (searchText: string): Promise<any> => {
  const url = `/pokemon/${searchText}`;
  try {
    if (searchText) {
      const response = await pokemonApi.get(url);
      return response.data;
    }
  } catch (e) {
    console.log("api call err: ", e);
    return null;
  }
};