import React from "react";
import TodoList35 from "./components/TodoList35";
import { getListTodoAsyncAction35 } from "./redux/reducers/todoSlide35";
import store from "./redux/store";

class App extends React.Component {
  getListEmployee = () => {
    store.dispatch(getListTodoAsyncAction35());
  };

  componentDidMount() {
    this.getListEmployee();
  }

  render() {
    return (
      <div>
        <TodoList35 />
      </div>
    );
  }
}

export default App;
