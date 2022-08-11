import './App.css'

import React from "react";
import Hello from "./Hello";
import WithDefaultName from './hoc/withDefaultName';

class App extends React.Component {

  render() {

    const HelloWithDefaultName = WithDefaultName(Hello);

    return (
      <HelloWithDefaultName name="Nguyen Van A" />
    );
  }
}

export default App;



