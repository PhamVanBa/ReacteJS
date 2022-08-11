import React, { useEffect, useState } from "react";
import store from "./redux/store";
import {
  selectListTodos36,
  selectLoading36,
} from "./redux/selectors/todoSelector36";
import { getListTodoAsyncAction36 } from "./redux/reducers/todoSlide36";
import WithLoading36 from "./hoc/withLoading36";
import TodoList36 from "./components/TodoList36";

function App() {
  const [todos, setTodos] = useState(selectListTodos36());
  const [isLoading, setLoading] = useState(selectLoading36());

  const updateListAndLoading = () =>
    store.subscribe(() => {
      setTodos(selectListTodos36());
      setLoading(selectLoading36());
    });

  updateListAndLoading();

  const getListEmployee = () => {
    store.dispatch(getListTodoAsyncAction36());
  };

  useEffect(() => {
    getListEmployee();
  }, []);

  const TodoListWithLoading = WithLoading36(TodoList36);

  return (
    <div>
      <div>
        <TodoListWithLoading todos={todos} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
