import React from 'react';
import todoApi from './api/TodoApi';
import TodoList from './components/TodoList';
import { getListTodoAction } from "./redux/actionCreators/todoActionCreator";
import store from './redux/store';

class App extends React.Component {

  getListEmployee = () => {
    store.dispatch(getListTodoAction());
  }

  componentDidMount() {
    this.getListEmployee();
  }

  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default App;

