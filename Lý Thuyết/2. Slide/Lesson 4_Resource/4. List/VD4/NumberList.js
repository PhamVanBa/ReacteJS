import './App.css';
import React from 'react';

function NumberList(props) {

  const characters = props.characters;

  const listCharacters = characters.map((character, index) => <li key={index}>{character}</li>);

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

export default NumberList;
