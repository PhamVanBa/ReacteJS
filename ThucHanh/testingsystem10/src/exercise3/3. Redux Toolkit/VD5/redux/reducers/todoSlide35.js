import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import todoApi from "../../api/TodoApi";
import { GET_LIST_TODO } from "../actionTypes";

export const getListTodoAsyncAction35 = createAsyncThunk(
  GET_LIST_TODO,
  async () => {
    const todos = await todoApi.getAll();
    return todos;
  }
);

const todoSlide35 = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {},
  extraReducers: {
    [getListTodoAsyncAction35.fulfilled]: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { actions, reducer } = todoSlide35;
export const { incremented, decremented } = actions;

export default todoSlide35;
