import React from 'react';
import './Person.css';

class Person extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: ""
        };
    }

    changeName = (event) => {
        this.setState({
            fullName: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>FullName: {this.state.fullName}</h1>
                <input type="text" value={this.state.fullName} onChange={this.changeName}></input>
            </div>
        );
    }
}

export default Person;

