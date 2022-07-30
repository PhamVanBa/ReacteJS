import React from 'react';
import PersonList from './PersonList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          "id": 1,
          "firstName": "Nguyen Van",
          "lastName": "A",
          "age": 20
        },
        {
          "id": 2,
          "firstName": "Nguyen Van",
          "lastName": "B",
          "age": 30
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <PersonList persons={this.state.persons} />
      </div>
    );
  }
}

export default App;

