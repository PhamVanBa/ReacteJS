import { useState } from "react";
import { incremented, decremented } from "../redux/reducers/counterSlide";
import store from "../redux/store";

function Counter32() {
  const [counter, setCounter] = useState(store.getState().counter);

  const increase = () => {
    store.dispatch(incremented());
  };

  const decrease = () => {
    store.dispatch(decremented());
  };

  const updateData = () => {
    store.subscribe(() => setCounter(store.getState().counter));
  };

  updateData();

  return (
    <div>
      <p>Value: {counter}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default Counter32;
