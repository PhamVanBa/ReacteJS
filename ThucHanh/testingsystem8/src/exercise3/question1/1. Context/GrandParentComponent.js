import React from 'react';
import ParentComponent from './ParentComponent';
import MessageContext from './MessageContext'

function GrandParentComponent(props) {

    const message = "Cố học đi cháu";
    return (
        <MessageContext.Provider value={message}>
            <ParentComponent />
        </MessageContext.Provider>
    )
}

export default GrandParentComponent;


