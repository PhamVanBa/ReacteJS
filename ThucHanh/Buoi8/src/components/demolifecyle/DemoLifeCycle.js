import React from "react";
import Clock from "./Clock";

class DemoLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flagShowing: true,
      message: "",
    };
  }
  /* Mounting */

  componentWillMount() {
    console.log("component willmount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  /*Updating*/

  componentWillReceiveProps() {
    console.log("Component will receive props");
    // this.setState({
    //   flagShowing: false,
    // });
  }

  shouldComponentUpdate(newProps, newState) {
    // important
    console.log("shouldComponentUpdate");
    console.log(newProps);
    console.log(newState);

    // cho phép function con update nếu mesage khác ko thì ko cho update
    if (newProps.message !== this.setState.message) {
      this.setState({
        message: newProps.message,
      });
      return true;
    } else return false;

    // logic here ddiều kện đúng hoặc sai để return về true hay fa
    return true;
  }

  //important
  componentWillUpdate(newProps) {
    // Set new state here after received new props
    console.log("componentWillUpdate");
    console.log(newProps);
    this.setState({
      message: newProps.message,
    });
  }

  componentDidUpdate(newProps) {
    console.log("componentDidUpdate");
    console.log(newProps);
  }

  render() {
    return (
      <div className="dem-lifecycle">
        <h1> Demo Life Cycle</h1>
        <h3>Message form parent: {this.state.message.toUpperCase}</h3>
        <Clock />
      </div>
    );
  }
}

export default DemoLifeCycle;
