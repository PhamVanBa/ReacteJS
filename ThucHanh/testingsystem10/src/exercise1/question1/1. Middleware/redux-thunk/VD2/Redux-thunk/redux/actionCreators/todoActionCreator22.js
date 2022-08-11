import todoApi22 from "../../api/TodoApi22";
import { GET_LIST_TODO } from "../actionTypes";

const listTodoAction22 = (todos) => {
  return {
    type: GET_LIST_TODO,
    payload: todos,
  };
};

export const getListTodoAsyncAction22 = () => {
  return async (dispatch) => {
    try {
      const todos = await todoApi22.getAll();
      dispatch(listTodoAction22(todos));
    } catch (error) {
      console.log(error);
    }
  };
};
