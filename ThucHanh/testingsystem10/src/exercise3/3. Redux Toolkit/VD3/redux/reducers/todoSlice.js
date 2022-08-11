import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (todo) => {
                return {
                    payload: todo
                };
            }
        }
    }
});

export const { actions, reducer } = todoSlice;
export const { addTodo } = actions;

export default todoSlice;

