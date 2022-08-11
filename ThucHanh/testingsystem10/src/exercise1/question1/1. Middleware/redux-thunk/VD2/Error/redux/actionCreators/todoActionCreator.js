import todoApi2 from "../../api/TodoApi2";
import { GET_LIST_TODO } from "../actionTypes";

export const getListTodoAction2 = async () => {
  try {
    const todos = await todoApi2.getAll();
    return {
      type: GET_LIST_TODO,
      payload: todos,
    };
  } catch (error) {
    console.log(error);
  }

  return null;
};
