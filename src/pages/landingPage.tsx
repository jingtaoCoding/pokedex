import React from 'react';
import SearchBar from "../components/pokemon/SearchBar";
import CurrentPokemon from "../components/pokemon/CurrentPokemon";
import PokemonGrid from "../components/pokemon/PokemonGrid";
import "./styles.css";

const LandingPage: React.FC = () => {
  return (
    <div className="pokemon-search-container">
      <div className="search-title">
        <h1>Pokedex</h1>
      </div>
      <SearchBar />
      <div className="search-result">
        <CurrentPokemon />
      </div>
      <hr className="solid"></hr>
      <PokemonGrid title="Past Search Results"/>
    </div>
  );
};
export default LandingPage;