import React, { Component } from "react";

class Wrapper extends Component {
  state = {
    count: 0,
  };

  // Increase count
  increment = () => {
    const { count } = this.state;
    return this.setState({ count: count + 1 });
  };

  // Decrease count
  decrement = () => {
    const { count } = this.state;
    return this.setState({ count: count - 1 });
  };
  render() {
    const { count } = this.state;

    return (
      <div>
        {this.props.render({
          increment: this.increment,
          decrement: this.decrement,
          count: count,
        })}
      </div>
    );
  }
}

export default Wrapper;
