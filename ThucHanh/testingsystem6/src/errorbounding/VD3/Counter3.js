import React from "react";

class Counter3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increase = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };

  render() {
    if (this.state.counter === 3) {
      // Simulate a JS error
      throw new Error("I crashed!");
    }

    return <h1 onClick={this.increase}>{this.state.counter}</h1>;
  }
}

export default Counter3;
