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
export const selectListTodos = (state) => {
    return selectListTodoSelector(state);
}

export const selectLoading = (state) => {
    return selectLoadingSelector(state);
}

