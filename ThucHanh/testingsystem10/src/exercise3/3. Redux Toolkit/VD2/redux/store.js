import { configureStore } from "@reduxjs/toolkit";
import counterSlide from "./reducers/counterSlide";

const store = configureStore({
    reducer: {
        counter: counterSlide.reducer
    }
});

export default store;

