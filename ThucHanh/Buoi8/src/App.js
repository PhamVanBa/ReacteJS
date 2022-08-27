import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
import Home from "./pages/home/Home";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import DemoLifeCycle from "./components/demolifecyle/DemoLifeCycle";
import { useState } from "react";
import DemoStyle from "./components/styte/DemoStyle";
import CustomInput from "./components/sharecomponents/custominput/Custominput";

function App() {
  const [flagShowing, setSetFlagShowing] = useState(true);
  const [message, setMessage] = useState("Hello child component");

  const _onClick = () => {
    setSetFlagShowing(!flagShowing);
  };

  const _changeMessage = () => {
    setMessage("Hello Child component. How are you?");
  };

  return (
    <div className="App">
      {/* Buoi7 */}
      {/* <Router>
        <Switch>
          <Router path="/signin" component={Signin} />

          <Router path="/forgot-password" component={ForgotPassword} />

          <Redirect from="/signup" to="/signin" />
          <Router path="/signup" component={Signup} />
          <Router path="/" component={Home} />
        </Switch>
      </Router> */}

      {flagShowing && <DemoLifeCycle message={message} />}

      <button onClick={_changeMessage}>Change Message</button>
      <button onClick={_onClick}>Click Me</button>
      <DemoStyle />

      <hr></hr>
      <div style={{ paddingLeft: `100px`, paddingTop: `50px` }}>
        <CustomInput label="Username" name="username" />
        <CustomInput label="Password" name="password" />
      </div>
    </div>
  );
}

export default App;
