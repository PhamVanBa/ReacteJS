import './App.css';
import React from 'react';
import Person from './Person';

function App() {
  return (
    <div>
      <Person fullName="Nguyễn Văn A" age="25"/>
      <Person fullName="Nguyễn Văn B" age="26"/>
      <Person fullName="Nguyễn Văn C" age="27"/>
    </div>
  );
}

export default App;
