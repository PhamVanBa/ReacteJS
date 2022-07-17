import Person from './Person';
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          id: 1,
          firstName: "Nguyen Van",
          lastName: "A"
        },
        {
          id: 2,
          firstName: "Nguyen Van",
          lastName: "B"
        },
        {
          id: 3,
          firstName: "Nguyen Van",
          lastName: "C"
        }
      ]
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((oldState) => {
        return { persons: [...oldState.persons] }
      });
    }, 1000);
  }

  render() {
    console.log('App rendered!');

    const personList = this.state.persons.map(
      person =>
        <Person
          key={person.id}
          id={person.id}
          firstName={person.firstName}
          lastName={person.lastName}>
        </Person>
    );

    return (
      <div>
        {personList}
      </div >
    );
  }
}

export default App;


