import React from "react";

function TodoList(props) {
  return (
    <div>
      <h1>lkdjdlkdj</h1>
      <h1>Todos</h1>
      {props.todos.map((todo) => (
        <li>{todo.task}</li>
      ))}
    </div>
  );
}
export default TodoList;
