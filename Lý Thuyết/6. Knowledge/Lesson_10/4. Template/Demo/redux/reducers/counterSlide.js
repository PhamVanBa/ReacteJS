import { createSlice } from "@reduxjs/toolkit";

const counterSlide = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    }
});

export const { actions, reducer } = counterSlide;
export const { incremented, decremented } = actions;

export default counterSlide;

