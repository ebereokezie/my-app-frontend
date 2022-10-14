import React, {useState} from "react"
import EditGame from "./EditGame";
import NewReview from "./NewReview";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';


function Game({game, onDeleteGame, onUpdateGame, onAddReviews}) {
    const [editGame, setEditGame] = useState(false)


    function handleDeleteClick() {
        fetch(`http://localhost:9292/games/${game.id}`, {
          method: "DELETE",
        });
    
        onDeleteGame(game.id);
      }

      const reviewScore =  game.reviews.map((review) => (
        <li key = {game.id}>Score: {review.score}</li>))

    function handleUpdateGame(updateGame) {
      setEditGame(false);
      onUpdateGame(updateGame)
    }
    console.log(game.reviews)
    return (
        <div className = "cards">
            {editGame ? (<EditGame key = {game.id} id={game.id} title={game.title} platform = {game.platform} price = {game.price} onUpdateGame={handleUpdateGame} />
        ) : (
        <>
        <li>
            <h3>Title: {game.title}</h3>
            <p>Platform: {game.platform}</p>
            <p>Price:  ${game.price}</p>
            <h4>Review:</h4>
            <div className ="reviews">
            {game.reviews.length !== 0 ? reviewScore : "No Reviews Yet"}
            </div>
            </li>
            
            <NewReview key = {game.id} game = {game} onAddReviews ={onAddReviews} />
            </>  
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