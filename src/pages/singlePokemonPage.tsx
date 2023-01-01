import React from "react";
import { useParams } from "react-router-dom";
import PokemonDetails from "../components/pokemon/PokemonDetails";
import "./styles.css";

const SinglePokemonPage: React.FC = () => {
  const { id } = useParams();
  return (
    <div className="single-pokemon">
      <PokemonDetails id={id}></PokemonDetails>
    </div>
  );
};

export default SinglePokemonPage;
