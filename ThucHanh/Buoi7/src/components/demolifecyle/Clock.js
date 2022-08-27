import React from "react";
import props from "prop-types";

class Clock extends React.Component {
  constructor() {
    super(props);
    this.state = {
      dateTime: new Date(),
    };
  }
  timeInterval = null;
  componentDidMount() {
    this.timeInterval = setInterval(() => {
      this.tick();
      console.log("clock timing");
    }, 1000);
  }

  timer() {
    this.setState({
      dateTime: new Date(),
    });
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  render() {
    return (
      <div className="clock">
        <h2>This is a timer</h2>
        <h3>It is {this.state.dateTime.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default Clock;
