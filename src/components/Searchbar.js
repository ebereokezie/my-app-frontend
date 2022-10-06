import React, {useState} from "react";

function SearchBar({games, setGames, setFilterByPlatform}) {

 
  
  return (
  <div>
      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => setFilterByPlatform(e.target.value)}>
          <option value="Xbox 360">Xbox 360</option>
          <option value="Wii U">Wii U</option>
          <option value="PlayStation 4">PlayStation 4</option>
          <option value="Game Boy Advance">Game Boy Advance</option>
          <option value="Nintendo 3DS">Nintendo 3DS</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
