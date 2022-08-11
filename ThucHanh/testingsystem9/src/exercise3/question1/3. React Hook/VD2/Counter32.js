import { useStore } from "react-redux";
import selectCounter from "../VD1/redux/selectors/counterSelector";

function Counter32() {
  const store = useStore();

  const counter = selectCounter(store.getState());

  return (
    <div>
      <p>Value: {counter}</p>
    </div>
  );
}

export default Counter32;
