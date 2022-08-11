import './App.css'

import React, { useState } from "react";
import UserContainer from './containers/UserContainer';

function App() {
  const [isShow, setShow] = useState(true);

  const toggle = () => setShow(!isShow);

  return (
    <div>
      <button onClick={toggle}>Show/Hide Component</button>
      {isShow && <UserContainer />}
    </div>
  );
}

export default App;

