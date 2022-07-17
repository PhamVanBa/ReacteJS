import './App.css';
import React from 'react';

function App() {

  const characters = ['a', 'b', 'c', 'd'];

  const listCharacters = characters.map((number) => <li>{number}</li>);

  return (
    <div>
      <ul>
        {
          listCharacters
        }
      </ul>
    </div>
  );
}

export default App;
