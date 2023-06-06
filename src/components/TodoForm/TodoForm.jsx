import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../../context/TodoContext";

const TodoForm = () => {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe Nuevo ToDo</label>
      <textarea
        placeholder="Escribe la tarea nueva"
        value={newTodoValue}
        onChange={onChange}
        required
      />
      <div className="TodoForm-btnContainer">
        <button
          className="TodoForm-button TodoForm-btn--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-btn--add">
          Agregar
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
