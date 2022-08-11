import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import todoApi from "../../api/TodoApi";
import { GET_LIST_TODO } from "../actionTypes";

export const getListTodoAsyncAction = createAsyncThunk(
    GET_LIST_TODO,
    async () => {
        const todos = await todoApi.getAll();
        return todos;
    }
);

const todoSlide = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        isLoading: false
    },
    reducers: {
        // other reducers
    },
    extraReducers: {
        [getListTodoAsyncAction.fulfilled]: (state, action) => {
            state.todos = action.payload;
            state.isLoading = false;
        },
        [getListTodoAsyncAction.pending]: (state) => {
            state.isLoading = true;
        }
    }
});

export const { actions, reducer } = todoSlide;
export const { incremented, decremented } = actions;

export default todoSlide;

