import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import todoApi from "../../api/TodoApi";
import { GET_LIST_TODO } from "../actionTypes";

export const getListTodoAsyncAction36 = createAsyncThunk(
  GET_LIST_TODO,
  async () => {
    const todos = await todoApi.getAll();
    return todos;
  }
);

const todoSlide36 = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [getListTodoAsyncAction36.fulfilled]: (state, action) => {
      state.todos = action.payload;
      state.isLoading = false;
    },
    [getListTodoAsyncAction36.pending]: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const { actions, reducer } = todoSlide36;
export const { incremented, decremented } = actions;

export default todoSlide36;
