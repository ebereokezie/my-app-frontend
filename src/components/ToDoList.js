import React from "react";
import ToDo from "./ToDo"

function ToDoList({
    toDos,
    onDeleteToDo,
    onUpdateToDo
}) {
    return (
        <div className ="toDoList">
            <li>
                {toDos.map((toDo) => (
                    <ToDo
                        key={toDo.id}
                        toDo={toDo}
                        onDeleteToDo={onDeleteToDo}
                        onUpdateToDo={onUpdateToDo}
                    />
                ))}
            </li>
        </div>
    )
}

export default ToDoList