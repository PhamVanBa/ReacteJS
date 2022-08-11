import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import { getListTodoAsyncAction } from './redux/reducers/todoSlide';
import store from './redux/store';
import { selectListTodos, selectLoading } from "./redux/selectors/todoSelector";
import WithLoading from './hoc/withLoading';

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
      <div>
        <TodoListWithLoading
          todos={todos}
          isLoading={isLoading} />
      </div>
    </div>
  );

}

export default App;