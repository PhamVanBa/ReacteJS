import React from 'react';
import Counter from "./Counter";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong</p>;
    }

    return <Counter />;
  }
}

export default App;

