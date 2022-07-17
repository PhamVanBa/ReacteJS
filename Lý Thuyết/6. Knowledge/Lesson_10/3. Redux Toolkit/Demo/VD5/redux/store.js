import { configureStore } from "@reduxjs/toolkit";
import todoSlide from "./reducers/todoSlide";

const store = configureStore({
    reducer: {
        todo: todoSlide.reducer
    }
});
export default store;