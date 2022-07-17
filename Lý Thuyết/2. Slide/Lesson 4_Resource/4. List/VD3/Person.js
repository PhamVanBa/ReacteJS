import React from 'react';
import './Person.css';

class Person extends React.Component {

    renderFullName = () => {
        return `${this.props.firstName} ${this.props.lastName}`;
    }

    render() {
        return (
            <div className="person">
                <h1>FullName: {this.renderFullName()}</h1>
            </div>
        );
    }
}

export default Person;

