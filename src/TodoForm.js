import React from "react";
import Paper from "@material-ui/core/Paper";
import Textfield from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <Textfield
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add new Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
