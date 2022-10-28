import React, { useState} from "react"


function NewGame({onAddGame, games}) {


   
     
      const [newGameTitle, setNewGameTitle] = useState("")
      const [newGamePlatform, setNewGamePlatform] = useState("")
      const [newGamePrice, setNewGamePrice] = useState("")
   


      

    function handleNewGameSubmit(e) {
        e.preventDefault();
          fetch("http://localhost:9292/addGame", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          "title": newGameTitle,
          "platform": newGamePlatform,
          "price": newGamePrice,
          }),
        })
          .then(data => data.json())
          .then(data => onAddGame(data))
          
          setNewGameTitle("")
          setNewGamePlatform("")
          setNewGamePrice("")
          
          ;
        }

     


return (
  <div>
    <h2 className= "new-game-header">Add a new game to the collection</h2>
    <form className = "submit-new-game" onSubmit ={handleNewGameSubmit}>
        <input type="text" name="title" placeholder = "Game Title" value={newGameTitle} onChange={(e)=> setNewGameTitle(e.target.value) } />
        <input type="text" name="platform" placeholder = "Game Platform" value={newGamePlatform} onChange={(e)=> setNewGamePlatform(e.target.value)} />
        <input type="number" name="price" placeholder = "Game Price" value={newGamePrice} onChange={(e)=> setNewGamePrice(e.target.value)} />
        <button type="submit">Add A Game</button>
    </form>
 </div>
);

}


export default NewGame