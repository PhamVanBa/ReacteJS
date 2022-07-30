import React from 'react';

class LifeCycleDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Hello"
        };
        console.log("Constructor");
    }

    render() {
        console.log("render");
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={this.changeState}>Change State</button>
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    changeState = () => {
        this.setState(
            {
                message: "Hello World"
            }
        );
        console.log("Change State");
    }

    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate: " + true);
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    componentDidCatch(error, info) {
        console.log('componentDidCatch')
    }
}
export default LifeCycleDemo; 