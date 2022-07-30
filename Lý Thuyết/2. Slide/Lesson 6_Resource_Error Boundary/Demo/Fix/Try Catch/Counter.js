import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    increase = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            };
        });
    }

    render() {
        try {
            if (this.state.counter === 3) {
                // Simulate a JS error
                throw new Error('I crashed!');
            }
        } catch (e) {
            return <p>Something went wrong</p>
        }
        return <h1 onClick={this.increase}>{this.state.counter}</h1>;
    }
}

export default Counter;


