import React, { useContext } from 'react';
import MesssageContext from './MessageContext';

function ChildComponent(props) {
    const message = useContext(MesssageContext);

    return (
        <div>
            <h1> Message from Grandparents: {message}</h1>
        </div>
    )
}

export default ChildComponent;


