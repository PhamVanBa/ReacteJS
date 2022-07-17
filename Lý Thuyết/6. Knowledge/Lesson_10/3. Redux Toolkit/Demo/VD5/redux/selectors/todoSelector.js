import store from "../store";
import { createSelector } from "@reduxjs/toolkit";

/** Selector **/
const todoSelector = (state) => state.todo;
const selectListTodoSelector = createSelector(
    todoSelector,
    state => state.todos);

/** function */
const selectListTodos = () => {
    return selectListTodoSelector(store.getState());
}

export default selectListTodos;

