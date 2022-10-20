import React from "react";
import NewGame from "./NewGame";

function CreateAGame({onAddGame, games }){
    return(
        <div className = "Home-header">
        <header>Add A Game</header>
          <p className = "Home-body">Got a New Game you want to add? Add it here!</p>
          <br></br>
          <img className = "size" src= "https://img.freepik.com/free-vector/girl-chess-club-playing-board-game-woman-play-alone-with-herself-prepare_107791-4828.jpg?w=2000" />
          <br></br>
          <NewGame onAddGame ={onAddGame} games={games} />
        </div>
    )
}

export default CreateAGame