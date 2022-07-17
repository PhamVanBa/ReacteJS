import React, { useEffect } from 'react';
import TodoList from './components/todo/TodoList';
import { getListTodoAsyncAction } from './redux/reducers/todoSlide';
import { selectListTodos, selectLoading } from "./redux/selectors/todoSelector";
import WithLoading from './hoc/withLoading';
import { connect } from 'react-redux';
import Counter from './components/counter/Counter';

function App(props) {

  const getListEmployee = props.getListTodoAsyncAction;

  useEffect(() => {
    getListEmployee();
  }, [getListEmployee]);

  const TodoListWithLoading = WithLoading(TodoList);

  return (
    <div>
      <div>
        <Counter />
        <TodoListWithLoading
          todos={props.todos}
          isLoading={props.isLoading} />
      </div>
    </div>
  );
}

const mapGlobalStateToProps = state => {
  return {
    todos: selectListTodos(state),
    isLoading: selectLoading(state)
  };
};

export default connect(mapGlobalStateToProps, { getListTodoAsyncAction })(App);