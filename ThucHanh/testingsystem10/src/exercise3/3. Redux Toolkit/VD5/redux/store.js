import { configureStore } from "@reduxjs/toolkit";
import todoSlide35 from "./reducers/todoSlide35";

const store = configureStore({
  reducer: {
    todo: todoSlide35.reducer,
  },
});
export default store;
