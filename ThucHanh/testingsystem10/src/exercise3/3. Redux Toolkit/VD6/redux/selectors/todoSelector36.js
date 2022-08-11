import store from "../store";
import { createSelector } from "@reduxjs/toolkit";

/** Selector **/
const todoSelector36 = (state) => state.todo;

const selectListTodoSelector = createSelector(
  todoSelector36,
  (state) => state.todos
);

const selectLoadingSelector = createSelector(
  todoSelector36,
  (state) => state.isLoading
);

/** function */
export const selectListTodos36 = () => {
  return selectListTodoSelector(store.getState());
};

export const selectLoading36 = () => {
  return selectLoadingSelector(store.getState());
};
