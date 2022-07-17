import './App.css';
import React from 'react';
import Person from './Person';

function App() {

  const personNames = [
    {
      firstName: "Nguyen Van",
      lastName: "A"
    },
    {
      firstName: "Nguyen Van",
      lastName: "B"
    },
    {
      firstName: "Nguyen Van",
      lastName: "C"
    }
  ]

  const personList = personNames.map(obj => <Person firstName={obj.firstName} lastName={obj.lastName}></Person>);

  return (
    <div>
      {
        personList
      }
    </div>
  );
}

export default App;
