import React from 'react';
import './Person.css';

class Person extends React.Component {
    render() {
        return (
            <div className="person">
                <h1>FullName: {this.props.fullName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Year of Birth: {new Date().getFullYear() - this.props.age}</p>
                <p>Slogan: {this.props.children}</p>
            </div>
        );
    }
}

export default Person;

