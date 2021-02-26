import React from "react";
import Paper from "@material-ui/core/Paper";
import Textfield from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

function TodoForm(props) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper>
      {value}
      <Textfield value={value} onChange={handleChange} />
    </Paper>
  );
}

export default TodoForm;
