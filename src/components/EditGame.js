import React, {useState} from "react"

function EditGame({id, title, platform, price, onUpdateGame}){
    const [gameTitle, setTitle] = useState(title)
    const [gamePlatform, setPlatform] = useState(platform)
    const [gamePrice, setPrice] = useState(price)



    function handleFormSubmit(e) {
        e.preventDefault();
        const updatedGame = {gameTitle, gamePlatform, gamePrice}
    
        fetch(`http://localhost:9292/games/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            body: updatedGame,
          }),
        })
          .then(data => data.json())
          .then((data) => onUpdateGame(data));
      }
    return (
        <form className="edit-message" onSubmit={handleFormSubmit}>
          <input type="text" name="title" value={gameTitle} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" name="platform" value={gamePlatform} onChange={(e) => setPlatform(e.target.value)} />
          <input type="text" name="price" value={gamePrice} onChange={(e) => setPrice(e.target.value)} />
          <input type="submit" value="Save" />
        </form>
    )
}

export default EditGame;