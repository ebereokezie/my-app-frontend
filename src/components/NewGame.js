import React, { useState} from "react"


function NewGame({onAddGame, games}) {

  // const newGameTemplate = {
  //       title: '',
  //       platform: '',
  //       price: 0,
  //       review: {
  //         score: 0
  //       }
  //     }

   
      const [newReviewScore, setNewReviewScore] = useState(0)
      const [newGameTitle, setNewGameTitle] = useState("")
      const [newGamePlatform, setNewGamePlatform] = useState("")
      const [newGamePrice, setNewGamePrice] = useState(0)
   


      

    function handleNewGameSubmit(e) {
        e.preventDefault();
          fetch("http://localhost:9292/games", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          "title": newGameTitle,
          "platform": newGamePlatform,
          "price": newGamePrice,
          "score": newReviewScore,
          "game_id": (games.length + 1)
          }),
        })
          .then(data => data.json())
          .then(data => onAddGame(data))
          
          setNewGameTitle("")
          setNewGamePlatform("")
          setNewGamePrice(0)
          setNewReviewScore(0)
          
          ;
        }


return (
  <div>
    <form className = "new-game" onSubmit ={handleNewGameSubmit}>
        <input type="text" name="title" placeholder = "Game Title" value={newGameTitle} onChange={(e)=> setNewGameTitle(e.target.value) } />
        <input type="text" name="platform" placeholder = "Game Platform" value={newGamePlatform} onChange={(e)=> setNewGamePlatform(e.target.value)} />
        <input type="number" name="price" placeholder = "Game Price" value={newGamePrice} onChange={(e)=> setNewGamePrice(e.target.value)} />
        <input type="number" name="score" placeholder = "Review Score" value={newReviewScore} onChange={(e)=> setNewReviewScore(e.target.value)} />
        <button type="submit">Add A Game</button>
    </form>
 </div>
);

}


export default NewGame