import React from "react";
import TodoList from "./components/TodoList";
import TodoList22 from "./components/TodoList22";
import { getListTodoAsyncAction } from "./redux/actionCreators/todoActionCreator";
import { getListTodoAsyncAction22 } from "./redux/actionCreators/todoActionCreator22";
import store from "./redux/store";

class App extends React.Component {
  getListEmployee = () => {
    store.dispatch(getListTodoAsyncAction22());
  };

  componentDidMount() {
    this.getListEmployee();
  }

  render() {
    return (
      <div>
        <TodoList22 />
      </div>
    );
  }
}

export default App;
