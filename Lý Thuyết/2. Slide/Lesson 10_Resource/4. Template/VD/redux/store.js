import { configureStore } from "@reduxjs/toolkit";
import todoSlide from "./reducers/todoSlide";
import counterSlide from "./reducers/counterSlide";

const store = configureStore({
    reducer: {
        todo: todoSlide.reducer,
        counter: counterSlide.reducer
    }
});
export default store;

