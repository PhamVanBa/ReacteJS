import './App.css';
import React from 'react';
import Person from './Person';

function App() {

  const personNames = [
    {
      id:1,
      firstName: "Nguyen Van",
      lastName: "A"
    },
    {
      id:2,
      firstName: "Nguyen Van",
      lastName: "B"
    },
    {
      id:3,
      firstName: "Nguyen Van",
      lastName: "C"
    }
  ]

  const personList = personNames.map(obj => <Person key={obj.id} firstName={obj.firstName} lastName={obj.lastName}></Person>);

  return (
    <div>
      {
        personList
      }
    </div>
  );
}

export default App;
