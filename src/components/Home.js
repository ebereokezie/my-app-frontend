import React, {useEffect, useState} from "react";
import GameList from "./GameList";
import NewGame from "./NewGame";
import SearchBar from "./Searchbar";
import "../App.css";

function Home(){

    
  const [games, setGames] = useState([])
  const [filterByPlatform, setFilterByPlatform] = useState("All")

  useEffect(() => {
    fetch("http://localhost:9292/games")
      .then(data => data.json())
      .then(data => setGames(data));
  }, []);

  function handleAddGame(newGame){
    setGames([...games, newGame]);
  }

  function handleDeleteGame(id){
    const updatedGames = games.filter((game) => game.id !== id);
    setGames(updatedGames);
  }

  function handleUpdateGame(updatedGameObj){
    const updatedGames = games.map((game) => {
      if(game.id === updatedGameObj.id) {
        return updatedGameObj
      } else {
        return game
      }
    });
    setGames(updatedGames)
  }

  const filteredGames = games.filter((game)=> {
    if (filterByPlatform === "All"){
      return true
    }
    else {
      return game.platform === filterByPlatform
  }})
    return (
        <div className="Home">
            <header className="Home-header">
                My Weekly To-Do List
            </header>
        <SearchBar games = {filteredGames} setGames = {setGames} setFilterByPlatform = {setFilterByPlatform} />
          <GameList  
        games={filteredGames}
        onDeleteGame={handleDeleteGame}
        onUpdateGame={handleUpdateGame}
        />
        <NewGame onAddGame ={handleAddGame} />
        </div>
    )

}

export default Home;