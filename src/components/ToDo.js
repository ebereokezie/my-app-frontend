import React, {useState} from "react"
import EditToDo from "./EditToDo";

function ToDo({toDo, onDeleteToDo, onUpdateToDo}) {
    const [editToDo, setEditToDo] = useState(false)

    function handleDeleteClick() {
        fetch(`http://http://localhost:9292/todos/${toDo.id}`, {
          method: "DELETE",
        });
    
        onDeleteToDo(toDo.id);
      }

    function handleUpdateToDo(updateToDo) {
        setEditToDo(false);
        onUpdateToDo(updateToDo)
    }

    return (
        <li>
            {editToDo ? (
            <EditToDo
                id={toDo.id}
                body={toDo.body}
                onUpdateToDo={handleUpdateToDo}
                />
        ) : (
          <li>
            <p>Title: {toDo.title}</p>
            <p>Platform: {toDo.platform}</p>
            <p>Price:  ${toDo.price}</p>
            </li>
              
        )}
            {
                <div className="actions">
                <button onClick={() => setEditToDo((editToDo) => !editToDo)}>
                  Edit Game
                </button>
                <button onClick={handleDeleteClick}>
                 Delete Game
                </button>
              </div>
            }
            
        </li>
    )
}

export default ToDo