import React from 'react';
import InputName from './InputName';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  receiveInputChanging = (newName) => {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <InputName name={this.state.name} changeInputName={this.receiveInputChanging} />
        <div>Hello {this.state.name}</div>

      </div>
    );
  }
}

export default App;