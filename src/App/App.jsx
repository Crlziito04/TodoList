import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../context/TodoContext";

//Practicar con context

function App() {
  // const {
  //   item: todos,
  //   saveItem: saveTodos,
  //   loading,
  //   error,
  // } = useLocalStorage("TODOS_V1", []);
  // //Obtener el value del todoSearch
  // const [searchValue, setSearchValue] = React.useState("");
  // //Contar totales y completados del TodoCounter
  // const completedTodos = todos.filter((todo) => !!todo.completed).length;
  // const totalTodos = todos.length;
  // //Buscar tarea en Todo Search
  // const searchTodos = todos.filter((todo) => {
  //   const todoText = todo.text.toLocaleLowerCase();
  //   const searchText = searchValue.toLocaleLowerCase();
  //   return todoText.includes(searchText);
  // });

  // //Aplicar Check a tarea
  // const checkTodo = (text) => {
  //   const newTodos = [...todos];
  //   const todoIndex = newTodos.findIndex((todo) => todo.text === text);
  //   newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
  //   saveTodos(newTodos);
  // };
  // //Eliminar Tarea
  // const deleteTodo = (text) => {
  //   const newTodos = [...todos];
  //   const todoIndex = newTodos.findIndex((todo) => todo.text === text);
  //   newTodos.splice(todoIndex, 1);
  //   saveTodos(newTodos);
  // };
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
