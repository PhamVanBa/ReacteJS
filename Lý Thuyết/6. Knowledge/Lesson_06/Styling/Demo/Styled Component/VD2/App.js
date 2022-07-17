import './App.css';
import React from 'react';
import styled from 'styled-components'

class App extends React.Component {

  render() {

    const H1 = styled.h1`
      color: ${props => props.textColor};
      background-color: lightBlue;
      padding: 10px;
      font-family: Arial;
    `
    return (
      <div>
        <H1 textColor="green">FullName: Nguyen Van A</H1>
      </div >
    );
  }
}

export default App;


