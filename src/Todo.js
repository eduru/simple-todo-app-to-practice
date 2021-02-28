import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Todo({ id, task, completed, removeTodo, toggleTodo }) {
  return (
    <ListItem>
      <Checkbox
        tabindex={-1}
        checked={completed}
        onClick={() => toggleTodo(id)}
      />
      <ListItemText
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Edit">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Todo;
