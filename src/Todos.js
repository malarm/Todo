import React from "react";

function Todos({ todo, index, completetodo, removetodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : null }}
    >
      <span>
        <input type="checkbox" onClick={() => completetodo(index)} />
      </span>

      <span>{todo.text}</span>
      <span className="remove-item-cross" onClick={() => removetodo(index)}>
        x
      </span>
    </div>
  );
}
export default Todos;
