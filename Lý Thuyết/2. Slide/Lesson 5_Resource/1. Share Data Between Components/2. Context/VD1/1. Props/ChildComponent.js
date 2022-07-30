import React from 'react';

function ChildComponent(props) {

    return (
        <h1>
            Message from Grandparents: {props.message}
        </h1>
    )
}

export default ChildComponent;


