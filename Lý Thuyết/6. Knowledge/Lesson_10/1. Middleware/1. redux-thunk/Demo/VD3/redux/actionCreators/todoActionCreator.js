import todoApi from "../../api/TodoApi";
import { GET_LIST_TODO, SHOW_LOADING, HIDE_LOADING } from "../actionTypes";

const listTodoAction = (todos) => {
    return {
        type: GET_LIST_TODO,
        payload: todos
    };
}

const showLoadingAction = () => {
    return {
        type: SHOW_LOADING
    };
}

const hideLoadingAction = () => {
    return {
        type: HIDE_LOADING
    };
}

export const getListTodoAsyncAction = () => {
    return async dispatch => {
        try {
            // show loading
            dispatch(showLoadingAction());
            const todos = await todoApi.getAll();
            // hide loading
            dispatch(hideLoadingAction());
            // update data
            dispatch(listTodoAction(todos));
        } catch (error) {
            console.log(error);
        }
    };
};


