import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentsDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It Is {this.state.date.toLocaleDateString()}.</h2>
      </div>
    );
  }
}

export default LifeCycle;
