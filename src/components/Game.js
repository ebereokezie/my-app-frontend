import React, {useState} from "react"
import EditGame from "./EditGame";

function Game({game, onDeleteGame, onUpdateGame}) {
    const [editGame, setEditGame] = useState(false)

    function handleDeleteClick() {
        fetch(`http://localhost:9292/games/${game.id}`, {
          method: "DELETE",
        });
    
        onDeleteGame(game.id);
      }

    function handleUpdateGame(updateGame) {
      setEditGame(false);
      onUpdateGame(updateGame)
    }

    return (
        <li>
            {editGame ? (
            <EditGame
                id={game.id}
                title={game.title}
                platform = {game.platform}
                price = {game.price}
                onUpdateGame={handleUpdateGame}
                />
        ) : (
          <li>
            <p>Title: {game.title}</p>
            <p>Platform: {game.platform}</p>
            <p>Price:  ${game.price}</p>
            </li>
              
        )}
            {
                <div className="actions">
                <button onClick={() => setEditGame((editGame) => !editGame)}>
                  Edit Game
                </button>
                <button onClick={handleDeleteClick}>
                 Delete Game
                </button>
              </div>
            }
            
        </li>
    )
}

export default Game