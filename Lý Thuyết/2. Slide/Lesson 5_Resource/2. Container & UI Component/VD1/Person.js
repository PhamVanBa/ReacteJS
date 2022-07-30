import './Person.css';
import React from 'react';

function Person(props) {

    return (
        <div className="person">
            <h1>Full Name: {props.firstName + " " + props.lastName}</h1>
            <p>Age: {props.age}</p>
        </div>
    );
}

export default Person;


