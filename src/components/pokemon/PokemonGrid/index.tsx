import React from "react";
import { useSelector } from "react-redux";
import type { Pokemon, RootState } from "../../../store/types";
import PokemonPreview from "../PokemonPreview";
import "../../styles.css";

interface Props {
  title: string
}
const PokemonGrid: React.FC<Props> = ({title}) => {
  const pokemons: Pokemon[] = useSelector((state: RootState) => state.pokemons);
  title = title ? title : "Past Search Results"
  
  return (
    <div className="pokemon-grid">
      <div>
        <div className="pokemon-grid__title">
          {pokemons.length > 0 ? <h2>{title}</h2> : null}
        </div>
        <div className="pokemon-grid__pokemon-grid">
          {pokemons.map(p => (
            <div key={p.id} className="pokemon-grid__image">
              <PokemonPreview pokemon={p} />
            </div>))}
        </div>
      </div>
    </div>
  );
};

export default PokemonGrid;
