import React from "react";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodoError } from "../components/TodoError/TodoError";
import { TodoLoading } from "../components/TodoLoading/TodoLoading";
import { EmptyTodo } from "../components/EmptyTodo/EmptyTodo";

const AppUI = ({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchTodos,
  checkTodo,
  deleteTodo,
}) => {
  return (
    <>
      {loading ? (
        <TodoLoading />
      ) : (
        <>
          <TodoCounter completed={completedTodos} total={totalTodos} />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoList>
            {error && <TodoError />}

            {!loading && searchTodos.length === 0 && <EmptyTodo />}
            {searchTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCheck={() => checkTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

          <CreateTodoButton />
        </>
      )}

      {/* {searchValue === "" ? (
        <h1>Nada</h1>
      ) : ( */}
    </>
  );
};

export { AppUI };
