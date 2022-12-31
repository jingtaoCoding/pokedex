import React from 'react';
import SearchBar from "../components/pokemon/SearchBar";
import CurrentPokemon from "../components/pokemon/CurrentPokemon";
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
    </div>
  );
};
export default LandingPage;