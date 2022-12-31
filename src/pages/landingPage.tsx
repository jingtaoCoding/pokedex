import React from 'react';
import SearchBar from "../components/pokemon/SearchBar";
import { CurrentPokemon} from "../components/pokemon/CurrentPokemon";
const landingPage = () => {
  return (
    <div>
      Welcome to PokeDex
      <SearchBar />
      <CurrentPokemon />
    </div>
  );
};

export default landingPage;