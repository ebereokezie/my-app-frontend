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
        <div>
            {editGame ? (<EditGame key = {game.id} id={game.id} title={game.title} platform = {game.platform} price = {game.price} onUpdateGame={handleUpdateGame} />
        ) : (
          <li>
            <p>Title: {game.title}</p>
            <p>Platform: {game.platform}</p>
            <p>Price:  ${game.price}</p>
            <p>Review:</p>
            {game.reviews.score}
            </li>
              
        )}
            {
                <div className="update_games">
                <button onClick={() => setEditGame((editGame) => !editGame)}>
                  Edit Game
                </button>
                <button onClick={handleDeleteClick}>
                 Delete Game
                </button>
              </div>
            }
            
        </div>
    )
}

export default Game