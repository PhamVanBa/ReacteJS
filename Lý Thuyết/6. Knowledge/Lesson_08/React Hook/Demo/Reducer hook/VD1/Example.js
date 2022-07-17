import React, { useReducer } from 'react';

function Example() {
    const [count, dispatch] = useReducer((state, action) => {
        return state + action;
    }, 0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => dispatch(1)}>
                Click me
             </button>
        </div>
    );
}

export default Example;


