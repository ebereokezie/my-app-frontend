import React, {useState} from "react"

function EditGame({id, title, platform, price, onUpdateGame}){
    const [gameTitle, setTitle] = useState(title)
    const [gamePlatform, setPlatform] = useState(platform)
    const [gamePrice, setPrice] = useState(price)


    function handleFormSubmit(e) {
        e.preventDefault();

    
        fetch(`http://localhost:9292/games/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: gameTitle,
            platform: gamePlatform,
            price: gamePrice
          }),
        })
          .then(data => data.json())
          .then((data) => onUpdateGame(data));
      }
    return (
        <form className="edit-game" onSubmit={handleFormSubmit}>
          <input type="text" name="title" value={gameTitle} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" name="platform" value={gamePlatform} onChange={(e) => setPlatform(e.target.value)} />
          <input type="number" name="price" value={gamePrice} onChange={(e) => setPrice(e.target.value)} />
          <input type="submit" value="Save" />
        </form>
    )
}

export default EditGame;