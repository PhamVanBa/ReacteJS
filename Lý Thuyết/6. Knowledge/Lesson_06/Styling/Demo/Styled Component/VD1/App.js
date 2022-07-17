import './App.css';
import React from 'react';
import styled from 'styled-components'

class App extends React.Component {

  render() {

    const H1 = styled.h1`
      color: Green;
      background-color: lightBlue;
      padding: 10px;
      font-family: Arial;
    `
    return (
      <div>
        <H1>FullName: Nguyen Van A</H1>
      </div >
    );
  }
}

export default App;


