import { configureStore } from "@reduxjs/toolkit";
import todoSlide36 from "./reducers/todoSlide36";

const store = configureStore({
  reducer: {
    todo: todoSlide36.reducer,
  },
});
export default store;
