import React, { useReducer } from 'react';

function Example2() {
    const [count, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return state + action.value;
            case 'DECREMENT':
                return state - action.value;
            default:
                throw new Error();
        }
    }, 0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => dispatch({ type: 'INCREMENT', value: 1 })}>
                Increase
             </button>
            <button onClick={() => dispatch({ type: 'DECREMENT', value: 1 })}>
                Decrease
             </button>
        </div>
    );
}

export default Example2;


