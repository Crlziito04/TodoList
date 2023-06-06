import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../../context/TodoContext";
function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <input
      value={searchValue}
      placeholder="Escribe una tarea"
      className="TodoSearch"
      onChange={(event) => {
        console.log("Escribiste en el TodoSearch");
        console.log(event);
        console.log(event.target);
        setSearchValue(event.target.value);
      }}
    />
  );
}
export { TodoSearch };
