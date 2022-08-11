import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

/** Selector **/
const todoSelector = (state) => state.todo;
const selectListTodoSelector = createSelector(
    todoSelector,
    state => state);

/** function */
const selectListTodos = () => {
    return selectListTodoSelector(store.getState());
}

export default selectListTodos;

