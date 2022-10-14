import React from "react";
import Game from "./Game"

import List from '@mui/material/List';


function GameList({
    games,
    onDeleteGame,
    onUpdateGame,
    onAddReviews
}) {

    
    return (
        <div className ="grid">
            <List 
                 sx={{ width: '100%', bgcolor: 'background.paper' }}
                 component="nav"
                 className ="grid"
            >
                {games.map((game) => (
                    <Game
                        key={game.id}
                        game={game}
                        onDeleteGame={onDeleteGame}
                        onUpdateGame={onUpdateGame}
                        onAddReviews={onAddReviews}
                    />
                ))}
            </List>
        </div>
    )
}

export default GameList


