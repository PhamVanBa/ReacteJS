import './App.css'

import React from "react";
import withMouse from './hoc/withMouse';
import MyComponent from './MyComponent';

class App extends React.Component {

  render() {

    const MyComponentwithMouse = withMouse(MyComponent);

    return (
      <MyComponentwithMouse />
    );
  }
}

export default App;



