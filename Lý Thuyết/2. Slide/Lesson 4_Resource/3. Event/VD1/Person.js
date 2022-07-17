import React from 'react';
import Clock from './Clock';
import './Person.css';

class Person extends React.Component {

    static defaultProps = {
        class: 'Railway'
    };

    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    updateTime = () => {
        this.setState({
            time: new Date()
        });
    }

    render() {
        return (
            <div className="person">
                <h1>FullName: {this.props.fullName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Year of Birth: {2020 - this.props.age}</p>
                <p>Class: {this.props.class}</p>
                <p>Slogan: {this.props.children}</p>
                <Clock time={this.state.time} />
                <button onClick={this.updateTime}>
                    Update Time
                </button>
            </div>
        );
    }
}

export default Person;

