import './App.css';
import React from 'react';
import NumberList from './NumberList';

function App() {

  const characters = ['a', 'b', 'c', 'd'];

  return (
    <div>
      <h1>Characters List: </h1>
      <NumberList characters={characters} />
    </div>
  );
}

export default App;
