import React, {useState} from "react"
import EditGame from "./EditGame";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';


function Game({game, onDeleteGame, onUpdateGame, onAddReviews}) {
    const [editGame, setEditGame] = useState(false)
    const [newReviewScore, setNewReviewScore] = useState("")



    function handleNewReviewSubmit(e) {
       e.preventDefault();
         fetch(`http://localhost:9292/review`, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
         "score": newReviewScore,
         "game_id": game.id
         }),
       })
         .then(data => data.json())
         .then(data => onAddReviews(data))
      
        setNewReviewScore("")
      }

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
        <div>
            {editGame ? (<EditGame key = {game.id} id={game.id} title={game.title} platform = {game.platform} price = {game.price} onUpdateGame={handleUpdateGame} />
        ) : (
          <li>
            <h3>Title: {game.title}</h3>
            <p>Platform: {game.platform}</p>
            <p>Price:  ${game.price}</p>
            <h4>Review:</h4>
            {game.reviews.length !== 0 ? reviewScore : "No Reviews Yet"}
            <form className="add-review" onSubmit={handleNewReviewSubmit}>
            <input type="number" name="score" placeholder = "Review Score" value={newReviewScore} onChange={(e)=> setNewReviewScore( e.target.value)} />
            <input type="submit" value="Save" />
        </form>
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