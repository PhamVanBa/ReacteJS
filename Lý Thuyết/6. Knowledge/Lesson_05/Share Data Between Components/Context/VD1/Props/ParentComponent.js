import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent(props) {

    return (
        <ChildComponent {...props} />
    )
}

export default ParentComponent;


