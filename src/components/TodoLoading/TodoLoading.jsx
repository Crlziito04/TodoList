import React from "react";
import "./TodoLoading.css";
function TodoLoading() {
  return (
    <>
      <div className="containerTodo">
        <div className="Container-todoCounter">
          <div className="TodoCounter-loading"></div>
          <div className="TodoSearch-loading"></div>
        </div>

        <div className="container">
          <div className="cargando">
            <div className="pelotas"></div>
            <div className="pelotas"></div>
            <div className="pelotas"></div>
            <span className="texto-cargando">Cargando...</span>
          </div>
        </div>
      </div>
    </>
  );
}
export { TodoLoading };
