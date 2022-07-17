import './App.css';
import React from 'react';

function App() {

  const characters = ['a', 'b', 'c', 'd'];

  return (
    <div>
      <ul>
        {
          characters.map((number) => <li>{number}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
