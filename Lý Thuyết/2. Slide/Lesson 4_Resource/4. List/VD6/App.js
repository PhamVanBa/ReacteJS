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

  deletePersonByID = (id) => {
    // get index
    const personIndex = this.state.persons.findIndex(p => { return p.id === id });
    // get person in state
    const localPersons = [...this.state.persons];
    // delete person
    localPersons.splice(personIndex, 1);
    // update person in state
    this.setState(
      {
        persons: localPersons
      }
    );
  }

  render() {
    const personList = this.state.persons.map(
      person =>
        <Person
          key={person.id}
          firstName={person.firstName}
          lastName={person.lastName}
          click={() => this.deletePersonByID(person.id)}>
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


