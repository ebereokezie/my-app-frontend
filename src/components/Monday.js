import React, {useEffect, useState} from "react";
import ToDoList from "./ToDoList";
import NewToDo from "./NewToDo";

function Monday(){
   
    const [toDos, setToDos] = useState([])

    useEffect(() => {
      fetch("http://localhost:9292/todos")
        .then((r) => r.json())
        .then((todos) => setToDos(todos));
    }, []);
  
    function handleAddToDo(newToDo){
      setToDos([...toDos, newToDo]);
    }
  
    function handleDeleteToDo(id){
      const updatedToDos = toDos.filter((toDo) => toDo.id !== id);
      setToDos(updatedToDos);
    }
  
    function handleUpdateToDo(updatedToDoObj){
      const updatedToDos = toDos.map((toDo) => {
        if(toDo.id === updatedToDoObj.id) {
          return updatedToDoObj
        } else {
          return toDo
        }
      });
      setToDos(updatedToDos)
    }
      return (
          <div className="Home">
              <header className="Home-header">
                  My Monday To-Do List
              </header>
  
            <ToDoList  
          toDos={toDos}
          onDeleteToDo={handleDeleteToDo}
          onUpdateToDo={handleUpdateToDo}
          />
          <NewToDo onAddToDo ={handleAddToDo} />
          </div>
      )
}

export default Monday;