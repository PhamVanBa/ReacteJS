import { useState } from "react";
import { incremented, decremented } from "../../redux/reducers/counterSlide";
import store from "../../redux/store";
import selectCounter from "../../redux/selectors/counterSelector";

function Counter() {

    const [counter, setCounter] = useState(selectCounter());

    const increase = () => {
        store.dispatch(incremented());
    }

    const decrease = () => {
        store.dispatch(decremented());
    }

    const updateData = () => {
        store.subscribe(() => setCounter(selectCounter()));
    };

    updateData();

    return (
        <div>
            <p>Value: {counter}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Counter;

