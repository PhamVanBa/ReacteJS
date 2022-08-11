import React, { useCallback, useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {

    const [counter, setCounter] = useState(0);

    const sum = (a, b) => {
        console.log("Caculating...");
        return a + b;
    }

    const sumCallback = useCallback(() => { sum() }, []);

    return (
        <div>
            <ChildComponent sum={sumCallback} />

            {/* counter */}
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>
                increse counter
            </button>
        </div >
    )
}

export default ParentComponent;


