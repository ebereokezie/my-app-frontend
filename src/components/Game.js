import React, {useState} from "react"
import EditGame from "./EditGame";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';

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
            {editGame ? (<EditGame key = {game.id} id={game.id} title={game.title} platform = {game.platform} price = {game.price}  onUpdateGame={handleUpdateGame} />
        ) : (
          <li>
            <h3>Title: {game.title}</h3>
            <p>Platform: {game.platform}</p>
            <p>Price:  ${game.price}</p>
            <h4>Review:</h4>
            {game.reviews.map((review) => (
              <p>Score: {review.score}</p>
               ))}
            </li>
              
        )}
            {
                <div className="update_games">
                <Button onClick={() => setEditGame((editGame) => !editGame)}>
                <EditIcon>edit_game</EditIcon>
                </Button>
                <Button onClick={handleDeleteClick}>
                 <DeleteIcon>delete_game</DeleteIcon>
                </Button>
              </div>
            }
            
        </div>
    )
}

export default Game