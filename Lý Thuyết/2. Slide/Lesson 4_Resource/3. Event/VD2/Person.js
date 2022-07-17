import React from 'react';
import './Person.css';

class Person extends React.Component {

    handleClick = () => {
        alert("Nguyen Van A");
    }

    render() {
        return (
            <div className="person">
                <h1 onClick={this.handleClick()}>FullName: Nguyen Van A</h1>
                <p>Age: 25</p>
            </div>
        );
    }
}


export default Person;

