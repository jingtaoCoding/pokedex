import React, { useState } from "react";
import { fetchPokemonService } from "../../../api/index";
import type { IFetchPokemonResponse } from "../../../api/index";

import "../../styles.css";

export default function SearchBar() {
  const [searchText, setSearchText] = useState<string>("");
  let searchHistory = ["a", "b"]

  const onSearch = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const response: IFetchPokemonResponse = await fetchPokemonService(searchText);
    if (response) {
      console.log(response)
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