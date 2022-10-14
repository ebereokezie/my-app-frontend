import React, {useEffect, useState} from "react";
import GameList from "./GameList";
import NewGame from "./NewGame";
import SearchBar from "./Searchbar";
import "../App.css";

function Home(){

    
  const [games, setGames] = useState([])
  const [filterByPlatform, setFilterByPlatform] = useState("All")

 
  const filteredGames = games.filter((game)=> {
    if (filterByPlatform === "All"){
      return true
    }
    else {
      return game.platform === filterByPlatform
  }})

  useEffect(() => {
    fetch("http://localhost:9292/games")
      .then(data => data.json())
      .then(data => setGames(data));
  }, []);



  function onAddGame(newGame){
    setGames((games) => [...games, newGame]);
  }

  function onAddReviews(newReview){
    const addGameReview = games.find((game) => {
      return game.id === newReview.game_id
    });
    
    addGameReview.reviews.push(newReview);

    setGames(
      games.map((game) => (game.id === addGameReview.id ? addGameReview : game))
    )
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


    return (
        <div className="Home">
            <header className="Home-header">
                Games and Review Score Library
            </header>
        <SearchBar games = {filteredGames} setGames = {setGames} setFilterByPlatform = {setFilterByPlatform} />
        
        <NewGame onAddGame ={onAddGame} games={filteredGames} />
     
        <GameList games={filteredGames} onDeleteGame={handleDeleteGame} onUpdateGame={handleUpdateGame} onAddReviews = {onAddReviews} />
        
        </div>
    )

}

export default Home;