import store from "../store";
import { createSelector } from "@reduxjs/toolkit";

/** Selector **/
const todoSelector = (state) => state.todo;

const selectListTodoSelector = createSelector(
    todoSelector,
    state => state.todos);

const selectLoadingSelector = createSelector(
    todoSelector,
    state => state.isLoading);

/** function */
export const selectListTodos = () => {
    return selectListTodoSelector(store.getState());
}

export const selectLoading = () => {
    return selectLoadingSelector(store.getState());
}
