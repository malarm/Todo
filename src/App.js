import React, { useState } from "react";
import Todos from "./Todos";
import Todoform from "./Todoform";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const addTodotext = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const completetodotext = index => {
    const newtodos = [...todos];
    //newtodos [index].isCompleted = true;
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    setTodos(newtodos);
    localStorage.setItem("todos", JSON.stringify(newtodos));
  };

  const removetodotext = index => {
    const newtodos = [...todos];
    newtodos.splice(index, 1);
    setTodos(newtodos);
    localStorage.setItem("todos", JSON.stringify(newtodos));
  };

  return (
    <div className="todo-container">
      <h1 className="main-heading">Todos</h1>

      <Todoform addTodo={addTodotext} />
      {todos.map((todo, index) => (
        <Todos
          key={index}
          index={index}
          todo={todo}
          completetodo={completetodotext}
          removetodo={removetodotext}
        />
      ))}
    </div>
  );
}

export default App;
