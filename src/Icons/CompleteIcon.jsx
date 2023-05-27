import React from "react";
import { TodoIcon } from "./TodoIcon";

function CompleteIcon({ completed, onCheck }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? "green" : "gray"}
      onClick={onCheck}
    />
  );
}

export { CompleteIcon };
