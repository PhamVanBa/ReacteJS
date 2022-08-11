import React from "react";
import todoApi2 from "./api/TodoApi2";
import TodoList2 from "./components/TodoList2";
import { getListTodoAction } from "./redux/actionCreators/todoActionCreator";
import store from "./redux/store";

class App extends React.Component {
  getListEmployee = () => {
    store.dispatch(getListTodoAction());
  };

  componentDidMount() {
    this.getListEmployee();
  }

  render() {
    return (
      <div>
        <TodoList2 />
      </div>
    );
  }
}

export default App;
