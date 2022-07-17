import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import { getListTodoAsyncAction } from "./redux/actionCreators/todoActionCreator";
import WithLoading from './hoc/withLoading';
import { selectListTodos, selectLoading } from './redux/selectors/todoSelector';
import store from './redux/store';

function App() {

  const [todos, setTodos] = useState(selectListTodos());
  const [isLoading, setLoading] = useState(selectLoading());

  const updateListAndLoading = () =>
    store.subscribe(() => {
      setTodos(selectListTodos())
      setLoading(selectLoading())
    });

  updateListAndLoading();

  const getListEmployee = () => {
    store.dispatch(getListTodoAsyncAction());
  }

  useEffect(() => {
    getListEmployee();
  }, []);

  const TodoListWithLoading = WithLoading(TodoList);

  return (
    <div>
      <TodoListWithLoading
        todos={todos}
        isLoading={isLoading} />
    </div>
  );
}

export default App;

