import './Person.css';
import React from 'react';

function Person(props) {

    let match = props.match;
    console.log(match);

    return (
        <div className="person">
            <a>
                Full Name: {props.firstName + " " + props.lastName}
            </a>
            <p>Age: {props.age}</p>
        </div>
    );
}

export default Person;


