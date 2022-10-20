import React, {useState, useEffect} from "react";

import {Route, Switch} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import HomePage from "./HomePage";
import CreateAGame from "./CreateAGame";

function App() {

  
    
  const [games, setGames] = useState([])


  useEffect(() => {
    fetch("http://localhost:9292/games")
      .then(data => data.json())
      .then(data => setGames(data));
  }, []);



  function onAddGame(newGame){
    setGames((games) => [...games, newGame]);
  }


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
