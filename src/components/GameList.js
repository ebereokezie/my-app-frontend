import React from "react";
import Game from "./Game"

function GameList({
    games,
    onDeleteGame,
    onUpdateGame
}) {
    return (
        <div className ="toDoList">
            <li>
                {games.map((game) => (
                    <Game
                        key={game.id}
                        game={game}
                        onDeleteGame={onDeleteGame}
                        onUpdateGame={onUpdateGame}
                    />
                ))}
            </li>
        </div>
    )
}

export default GameList