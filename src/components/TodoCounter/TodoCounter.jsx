import "./TodoCounter.css";
import React from "react";
import { TodoContext } from "../../context/TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return totalTodos === completedTodos ? (
    <h1 className="TodoCounter">Felicidades has terminado tus tareas</h1>
  ) : (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
      TODOs
    </h1>
  );
}

export { TodoCounter };
