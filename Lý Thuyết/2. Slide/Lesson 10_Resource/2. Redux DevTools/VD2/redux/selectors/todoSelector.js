import store from "../store";

export const selectListTodos = () => {
    return store.getState().todo.todos;
}

export const selectLoading = () => {
    return store.getState().todo.isLoading;
}

