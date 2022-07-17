import './App.css';
import React from 'react';
import Person from './Person';

function App() {
  return (
    <div>
      <Person fullName="Nguyễn Văn A" age="25"/>
      <Person fullName="Nguyễn Văn B" age="26">Làm để tiêu</Person>
      <Person fullName="Nguyễn Văn C" age="27">Sống để ăn</Person>
    </div>
  );
}

export default App;
