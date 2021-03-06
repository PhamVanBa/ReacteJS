import React from 'react';

class NameForm extends React.Component {

    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.input.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input defaultValue="Bob" type="text" ref={this.input} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;