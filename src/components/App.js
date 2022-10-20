import React, {useState, useEffect} from "react";

import {Route, Switch} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import HomePage from "./HomePage";
import CreateAGame from "./CreateAGame";

function App() {

  
    
  const [games, setGames] = useState([])
  // const [filterByPlatform, setFilterByPlatform] = useState("All")

 
  // const filteredGames = games.filter((game)=> {
  //   if (filterByPlatform === "All"){
  //     return true
  //   }
  //   else {
  //     return game.platform === filterByPlatform
  // }})

  useEffect(() => {
    fetch("http://localhost:9292/games")
      .then(data => data.json())
      .then(data => setGames(data));
  }, []);



  function onAddGame(newGame){
    setGames((games) => [...games, newGame]);
  }

  // function onAddReviews(newReview){
  //   const addGameReview = games.find((game) => {
  //     return game.id === newReview.game_id
  //   });
    
  //   addGameReview.reviews.push(newReview);

  //   setGames(
  //     games.map((game) => (game.id === addGameReview.id ? addGameReview : game))
  //   )
  // }

  // function handleDeleteGame(id){
  //   const updatedGames = games.filter((game) => game.id !== id);
  //   setGames(updatedGames);
  // }

  // function handleUpdateGame(updatedGameObj){
  //   const updatedGames = games.map((game) => {
  //     if(game.id === updatedGameObj.id) {
  //       return updatedGameObj
  //     } else {
  //       return game
  //     }
  //   });
  //   setGames(updatedGames)
 

  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route exact path = "/">
            <HomePage />
          </Route>
          <Route exact path = "/library">
            <Home games = {games} setGames = {setGames}/>
          </Route>
          <Route exact path = "/addGame">
            <CreateAGame games = {games} onAddGame ={onAddGame}/>
          </Route>
        </Switch>  
    </div>
  );
}

export default App;
