import React, {useState} from "react";


function NewReview({game, onUpdateGame }){

 const [newReviewScore, setNewReviewScore] = useState("")

function handleNewReviewSubmit(e) {
    e.preventDefault();
      fetch(`http://localhost:9292/reviews/${game.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      "score": newReviewScore
      }),
    })
      .then(data => data.json())
      .then(data => onUpdateGame(data))
   
     setNewReviewScore("")
   }

   return(
    <form className="add-review" onSubmit={handleNewReviewSubmit}>
    <input type="number" name="score" placeholder = "Add Review Score" value={newReviewScore} onChange={(e)=> setNewReviewScore( e.target.value)} />
    <input type="submit" value="Save" />
</form>

   )
}

export default NewReview