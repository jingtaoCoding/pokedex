import React from "react";
import { Link } from "react-router-dom";
import type { Pokemon } from "../../../store/types";

import "../../styles.css";

interface Props {
  pokemon: Pokemon,
}
const PokemonPreview: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="pokemon-preview">
      <div className="pokemon-preview__image">
        <Link to={`/details/${pokemon.id}`}> <img
          width="220px"
          height="200px"
          src={pokemon.sprites.other.dream_world.front_default}
          alt="na"
        /></Link>
      </div>
      <div className="pokemon-preview__caption">
        <h3>
          {pokemon.name} [{pokemon.id}]
        </h3>
      </div>
    </div>
  );
};

export default PokemonPreview;
