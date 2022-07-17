import React from 'react';
import { Prompt } from 'react-router-dom';

class CreatePerson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isBlocking: false
        };
    }

    submit = (event) => {
        event.preventDefault();
        event.target.reset();
        this.setState({
            isBlocking: false
        });
    }

    changeName = (event) => {
        this.setState({
            isBlocking: event.target.value.length > 0
        });
    }

    render() {
        return (
            <form onSubmit={(e) => this.submit(e)}>
                <Prompt
                    when={this.state.isBlocking}
                    message={location => `Are you sure you want to go to ${location.pathname}`} />
                <label>
                    Name:
                    <input
                        type="text"
                        onChange={(e) => this.changeName(e)} />
                </label>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default CreatePerson;
