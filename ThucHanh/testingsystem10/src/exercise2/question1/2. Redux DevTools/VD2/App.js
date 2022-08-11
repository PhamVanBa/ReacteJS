import React, { useEffect, useState } from "react";
import { selectListTodos, selectLoading } from "./redux/selectors/todoSelector";
import store from "./redux/store";
import { getListTodoAsyncAction22 } from "./redux/actionCreators/todoActionCreator212";
import TodoList22 from "./components/TodoList212";
import WithLoading22 from "./hoc/withLoading212";

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
    store.dispatch(getListTodoAsyncAction22());
  };

  useEffect(() => {
    getListEmployee();
  }, []);

  const TodoListWithLoading = WithLoading22(TodoList22);

  return (
    <div>
      <TodoListWithLoading todos={todos} isLoading={isLoading} />
    </div>
  );
}

export default App;
