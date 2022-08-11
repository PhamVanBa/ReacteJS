import React from "react";
import { addTodo } from "../../redux/reducers/todoSlice";
import store from "../../redux/store";

class AddTodoButton34 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  updateInput = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  handleAddTodo = () => {
    store.dispatch(addTodo(this.state.input));
    this.setState({
      input: "",
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.updateInput} value={this.state.input} />

        <button onClick={this.handleAddTodo}>Add Todo</button>
      </div>
    );
  }
}

export default AddTodoButton34;
