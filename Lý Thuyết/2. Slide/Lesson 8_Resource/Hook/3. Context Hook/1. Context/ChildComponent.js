import React from 'react';
import MesssageContext from './MessageContext';

function ChildComponent(props) {
    return (
        <div>
            <MesssageContext.Consumer>
                {context => <h1> Message from Grandparents: {context}</h1>}
            </MesssageContext.Consumer>
        </div>
    )
}

export default ChildComponent;


