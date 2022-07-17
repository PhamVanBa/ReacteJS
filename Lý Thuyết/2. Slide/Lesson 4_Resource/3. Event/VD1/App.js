import './App.css';
import React from 'react';
import Person from './Person';

function App() {
  return (
    <>
      <Person fullName="Nguyễn Văn A" age="25" class="Rocket" />
      <Person fullName="Nguyễn Văn B" age="26">Làm để tiêu</Person>
      <Person fullName="Nguyễn Văn C" age="27">Sống để ăn</Person>
    </>
  );
}

export default App;
