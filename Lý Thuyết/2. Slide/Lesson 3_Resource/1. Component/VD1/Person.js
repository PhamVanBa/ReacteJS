import React from 'react';
import './Person.css';

class Person extends React.Component {
    render() {
        return (
            <div className="person">
                <h1>FullName: Nguyễn Văn A</h1>
                <p>Age: 25</p>
            </div>
        );
    }
}

export default Person;