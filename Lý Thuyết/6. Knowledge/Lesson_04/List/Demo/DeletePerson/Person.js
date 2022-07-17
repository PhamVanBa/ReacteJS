import './Person.css';
import React from 'react';

class Person extends React.Component {

    renderFullName = () => {
        return `${this.props.firstName} ${this.props.lastName}`;
    }

    render() {
        return (
            <div className="person" onClick={this.props.click}>
                <h1>Full Name: {this.renderFullName()}</h1>
            </div>
        )
    };
}

export default Person;


