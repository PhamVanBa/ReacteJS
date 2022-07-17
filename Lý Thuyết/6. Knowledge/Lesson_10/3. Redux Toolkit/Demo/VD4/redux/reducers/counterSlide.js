import { createSlice } from "@reduxjs/toolkit";

const counterSlide = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        incremented: state => state + 1,
        decremented: state => state - 1
    }
});

export const { actions, reducer } = counterSlide;
export const { incremented, decremented } = actions;

export default counterSlide;

