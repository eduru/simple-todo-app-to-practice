import React from "react";
import Paper from "@material-ui/core/Paper";
import Textfield from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <Textfield value={value} onChange={handleChange} />
      </form>
    </Paper>
  );
}

export default TodoForm;
