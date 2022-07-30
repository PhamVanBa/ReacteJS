import React, { Component } from "react";

class Number extends Component {
  render() {
    return (
      <div>
        <h1>Random Number: {Math.random()}</h1>
        <button onClick={() => this.forceUpdate()}>Refresh</button>
      </div>
    );
  }
}

export default Number;
