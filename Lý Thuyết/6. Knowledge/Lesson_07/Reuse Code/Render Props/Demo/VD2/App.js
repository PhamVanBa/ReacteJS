import './App.css'

import React from "react";
import MyComponent from './MyComponent';
import WithMouse from './hoc/withMouse';

class App extends React.Component {

  render() {
    const MyComponentWithMouse = WithMouse(MyComponent);

    return (
      <MyComponentWithMouse />
    );
  }
}

export default App;



