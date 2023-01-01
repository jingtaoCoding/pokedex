import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { Pokemon, RootState } from "../../../store/types";

import "../../styles.css";
interface Props {
  id?: string
}
const PokemonDetails: React.FC<Props> = ({ id }) => {
  const pokemons: Pokemon[] = useSelector((state: RootState) => state.pokemons);
  const [pokemon] = pokemons.filter((p: Pokemon) => Number(id) === p.id);
  console.log(pokemon)
  const abilities = pokemon ? (pokemon.abilities.map((a) => a.ability.name)).join(", ") : [];
  const types = pokemon ? (pokemon.types.map((t) => t.type.name)).join(", ") : [];
  return (
    <div className="container pokemon-details">
      <div className="pokemon-details__title">
        <span className="pokemon-details__title--name">{pokemon ? pokemon.name.toUpperCase() : null}</span>
        <span className="pokemon-details__title--id"> #{pokemon.id.toString().padStart(3, "0")}</span>
      </div>
      <hr />
      <section className="pokemon-details__profile">
        <div className="column-6 push-1">
          {pokemon === undefined ? null : (
            <div className="pokemon-details__profile--image">
              <img
                width="100%"
                height="200px"
                src={pokemon.sprites.other.dream_world.front_default}
                alt="na"
              />
            </div>
          )}
        </div>
        <div className="column-6 push-7">
          <div className="pokemon-details__profile--attribute">
            <div className="badge">
              <span className="attribute-title">Height:</span>
              <span className="attribute-value">{pokemon.height}</span>
            </div>
            <div className="badge">
              <span className="attribute-title">Weight:</span>
              <span className="attribute-value">{pokemon.weight}</span>
            </div>
            <div className="badge">
              <span className="attribute-title">Ability:</span>
              <span className="attribute-value">{abilities}</span>
            </div>
            <div className="badge">
              <span className="attribute-title">Types:</span>
              <span className="attribute-value">{types}</span>
            </div>
          </div>
        </div>
      </section>
      <hr />

      <section className="pokemon-details__evolution">
        <div>
          Todo: evolution details
        </div>
      </section>

      <section className="pokemon-details__link">
        <div className="column-12 push-1">
          <Link to={"/"} className="link-link"> Back </Link>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default PokemonDetails;
