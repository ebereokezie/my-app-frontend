import React, { useState} from "react"


function NewToDo({onAddToDo}) {
    const [toDoBody, setToDoBody] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
    
        fetch("http://localhost:9292/todos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            body: toDoBody,
          }),
        })
          .then((r) => r.json())
          .then((newToDo) => {
            onAddToDo(newToDo);
            setToDoBody("");
          });
        }

return (
    <form className = "new-todo" onSubmit ={handleSubmit}>
        <input
        type="text"
        name="body"
        value={toDoBody}
        onChange={(e) => setToDoBody(e.target.value)}
        />
        <button type="submit">Update List</button>
    </form>
);

}


export default NewToDo