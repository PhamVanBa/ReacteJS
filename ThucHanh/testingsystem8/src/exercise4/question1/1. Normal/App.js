import './App.css';
import React from 'react';
import Clock1 from './Clock1';
import Clock2 from './Clock2';

class App extends React.Component {

  render() {

    return (
      <div>
        <Clock1 />
        <Clock2 />
      </div >
    );
  }
}

export default App;


