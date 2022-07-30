import React from 'react';
import Counter from "./Counter";
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component {

  render() {
    return (
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
    );
  }
}

export default App;

