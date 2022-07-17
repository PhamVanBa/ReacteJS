import { configureStore } from "@reduxjs/toolkit";
import counterSlide from "./reducers/counterSlide";
import todoSlice from "./reducers/todoSlice";

const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        counter: counterSlide.reducer
    }
});

export default store;

