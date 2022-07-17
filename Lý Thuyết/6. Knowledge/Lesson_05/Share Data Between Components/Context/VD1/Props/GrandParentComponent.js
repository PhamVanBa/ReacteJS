import React from 'react';
import ParentComponent from './ParentComponent';

function GrandParentComponent(props) {

    const message = "Cố học đi cháu";
    return (
        <ParentComponent message={message} />
    )
}

export default GrandParentComponent;


