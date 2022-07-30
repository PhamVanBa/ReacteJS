import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <p>Counter 1 & 2</p>
      <Counter />
      <Counter />
      <ErrorBoundary>
        <p>Counter 3</p>
        <Counter />
      </ErrorBoundary>
      <ErrorBoundary>
        <p>Counter 4</p>
        <Counter />
      </ErrorBoundary>
    </div>
  );
}

export default App;



