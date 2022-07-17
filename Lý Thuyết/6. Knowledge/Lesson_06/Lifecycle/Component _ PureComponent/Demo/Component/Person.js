import './Person.css';
import React from 'react';

class Person extends React.Component {

    renderFullName = () => {
        return `${this.props.firstName} ${this.props.lastName}`;
    }

    render() {
        console.log('Person ' + this.props.id + ' rendered');
        
        return (
            <div className="person">
                <h1>Full Name: {this.renderFullName()}</h1>
            </div>
        )
    };
}

export default Person;


