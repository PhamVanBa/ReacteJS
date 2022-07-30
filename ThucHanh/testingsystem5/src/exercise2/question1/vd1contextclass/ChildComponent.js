import React from 'react';
import MesssageContext from './MessageContext';

class ChildComponent extends React.Component {

    render() {
        return (
            <div>
                <h1> Message from Grandparents: {this.context}</h1>
            </div >
        );
    }
}

ChildComponent.contextType = MesssageContext;

export default ChildComponent;

