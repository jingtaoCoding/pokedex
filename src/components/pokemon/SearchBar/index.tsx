import React, { useState } from "react";
import { fetchPokemonService } from "../../../api/index";
import { useDispatch, useSelector } from "react-redux";
import type { IFetchPokemonResponse } from "../../../api/index";
import { addPokemon } from "../../../store/slices/pokemons";
import { addSearchHistory } from "../../../store/slices/searchHistory";
import { selectPokemon } from "../../../store/slices/currentPokemon";

import type { RootState } from "../../../store/types";

import "../../styles.css";

export default function SearchBar() {
  const [searchText, setSearchText] = useState<string>("");
  const searchHistory: string[] = useSelector((state: RootState) => state.searchHistory);
  const dispatch = useDispatch();

  const onSearch = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const response: IFetchPokemonResponse = await fetchPokemonService(searchText);
    if (response) {
      console.log(response)
      dispatch(addPokemon(response));
      dispatch(addSearchHistory(searchText));
      dispatch(selectPokemon(response));
    }
    else {
      alert("No pokemon found!");
    }

    setSearchText("");
  };

  return (
      <div className="pokemon-search-bar">
        <input
          id="search-pokemon"
          list="history"
          type="input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search pokemon by id or name "
          className="pokemon-search-bar__input-box"
        ></input>
        <datalist id="history">
          {searchHistory.map((x, i) => (
            <option value={x} key={i}></option>
          ))}
        </datalist>
        <button
          onClick={(e) => onSearch(e)}
          className="pokemon-search-bar__search-button"
        >
          Search
        </button>
    </div>
  );
}