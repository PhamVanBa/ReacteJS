import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import { getListTodoAsyncAction } from "./redux/actionCreators/todoActionCreator";
import WithLoading from "./hoc/withLoading";
import { selectListTodos, selectLoading } from "./redux/selectors/todoSelector";
import store from "./redux/store";
import TodoList3 from "./components/TodoList3";
import { getListTodoAsyncAction3 } from "./redux/actionCreators/todoActionCreator3";

function App() {
  const [todos, setTodos] = useState(selectListTodos());
  const [isLoading, setLoading] = useState(selectLoading());

  const updateListAndLoading = () =>
    store.subscribe(() => {
      setTodos(selectListTodos());
      setLoading(selectLoading());
    });

  updateListAndLoading();

  const getListEmployee = () => {
    store.dispatch(getListTodoAsyncAction3());
  };

  useEffect(() => {
    getListEmployee();
  }, []);

  const TodoListWithLoading = WithLoading(TodoList3);

  return (
    <div>
      <TodoListWithLoading todos={todos} isLoading={isLoading} />
    </div>
  );
}

export default App;
