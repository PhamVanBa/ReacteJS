import todoApi from "../../api/TodoApi";
import { GET_LIST_TODO } from "../actionTypes";

export const getListTodoAction = async () => {

    try {
        const todos = await todoApi.getAll();
        return {
            type: GET_LIST_TODO,
            payload: todos
        };
    } catch (error) {
        console.log(error);
    }

    return null;
};


