import Person from './Person';
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Person />
      </div >
    );
  }
}

export default App;


