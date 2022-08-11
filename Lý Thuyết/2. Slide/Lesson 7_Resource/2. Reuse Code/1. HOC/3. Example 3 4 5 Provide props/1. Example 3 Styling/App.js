import './App.css'

import React from "react";
import Hello from "./Hello";
import WithStyling from './hoc/withStyling';

class App extends React.Component {

  render() {

    const HelloWithStylling = WithStyling(Hello);

    return (
      <HelloWithStylling name="Nguyen Van A"/>
    );
  }
}

export default App;



