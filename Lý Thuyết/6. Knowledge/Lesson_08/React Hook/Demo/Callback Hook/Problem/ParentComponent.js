import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {

    const [counter, setCounter] = useState(0);

    const sum = (a, b) => {
        console.log("Caculating...");
        return a + b;
    }

    return (
        <div>
            <ChildComponent sum={sum} />

            {/* counter */}
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>
                increse counter
            </button>
        </div >
    )
}

export default ParentComponent;


