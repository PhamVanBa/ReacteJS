import React from 'react';
import './Person.css';

Person.defaultProps = {
    class: 'Railway'
};

function Person(props) {
    return (
        <div className="person">
            <h1>FullName: {props.fullName}</h1>
            <p>Age: {props.age}</p>
            <p>Year of Birth: {new Date().getFullYear() - props.age}</p>
            <p>Class: {props.class}</p>
            <p>Slogan: {props.children}</p>
        </div>
    );
}

export default Person;

