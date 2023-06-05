import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage";
// const defaultTodos = [
//   { text: "Tarea 1", completed: true },
//   { text: "Tarea 2", completed: false },
//   { text: "Tarea 3", completed: false },
//   { text: "Tarea 4", completed: false },
// ];

// localStorage.setItem("TODOLIST_V1", JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOLIST_V1');

//Practicar con context

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  //Obtener el value del todoSearch
  const [searchValue, setSearchValue] = React.useState("");
  //Contar totales y completados del TodoCounter
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  //Buscar tarea en Todo Search
  const searchTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  //Aplicar Check a tarea
  const checkTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  //Eliminar Tarea
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <AppUI
      loading={loading}
      error={error}
      searchTodos={searchTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      deleteTodo={deleteTodo}
      checkTodo={checkTodo}
    />
  );
}

export default App;
