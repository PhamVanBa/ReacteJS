import store from "../store";

export const selectListTodos212 = () => {
  return store.getState().todo.todos;
};

export const selectLoading212 = () => {
  return store.getState().todo.isLoading;
};
