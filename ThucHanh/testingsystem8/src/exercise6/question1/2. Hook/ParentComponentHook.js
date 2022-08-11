import React, { useCallback, useState } from "react";
import ChildComponentHook from "./ChildComponentHook";

function ParentComponentHook() {
  const [counter, setCounter] = useState(0);

  const sum = (a, b) => {
    console.log("Caculating...");
    return a + b;
  };

  const sumCallback = useCallback(() => {
    sum();
  }, []);

  return (
    <div>
      <ChildComponentHook sum={sumCallback} />

      {/* counter */}
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increse counter</button>
    </div>
  );
}

export default ParentComponentHook;
