import React, {useState} from "react"

function EditToDo({id, body, onUpdateToDo}){
    const [toDoBody, setToDoBody] = useState(body)

    // function handleFormSubmit(e) {
    //     e.preventDefault();
    
    //     fetch(`http://localhost:4000/messages/${id}`, {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         body: toDoBody,
    //       }),
    //     })
    //       .then((r) => r.json())
    //       .then((updatedToDo) => onUpdateToDo(updatedToDo));
    //   }
    return (
        <form className="edit-message" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="body"
            value={toDoBody}
            onChange={(e) => setToDoBody(e.target.value)}
          />
          <input type="submit" value="Save" />
        </form>
    )
}

export default EditToDo;