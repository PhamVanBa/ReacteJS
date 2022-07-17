import './App.css';
import React, { useMemo, useState } from 'react';

function App() {

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const [counter, setCounter] = useState(0);

  const sum = (a, b) => {

    // Calculate
    console.log("Caculating...");

    return a + b;
  }

  const sumResult = useMemo(() => sum(a, b), [a, b]);

  return (
    <div>
      <form>
        <label style={{ display: "block" }}>
          a:
          <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
        </label>
        <label style={{ display: "block" }}>
          b:
          <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
        </label>
        <label>sum: {sumResult}</label>
      </form>

      {/* counter */}
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>
        increse counter
      </button>
    </div >
  );
}

export default App;


