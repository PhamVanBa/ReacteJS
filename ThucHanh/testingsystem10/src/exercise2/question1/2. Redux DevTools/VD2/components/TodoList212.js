import React from "react";
import Todo from "./Todo";

function TodoList212(props) {
  const todoList = props.todos.map((item, index) => (
    <Todo key={index} todo={item.todo} />
  ));

  return <ul>{todoList}</ul>;
}

export default TodoList212;
