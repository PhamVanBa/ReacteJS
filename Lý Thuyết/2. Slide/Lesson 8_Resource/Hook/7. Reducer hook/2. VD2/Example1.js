import React, { useReducer } from 'react';

function Example1() {
    const [count, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            default:
                throw new Error();
        }
    }, 0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>
                Increase
             </button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>
                Decrease
             </button>
        </div>
    );
}

export default Example1;


