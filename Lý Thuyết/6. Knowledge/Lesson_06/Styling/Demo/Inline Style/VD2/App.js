import './App.css';
import React from 'react';

class App extends React.Component {

  render() {

    const fullNameStyle = {
      color: "Green",
      backgroundColor: "lightBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div>
        <h1 style={fullNameStyle}>FullName: Nguyen Van A</h1>
      </div >
    );
  }
}

export default App;


