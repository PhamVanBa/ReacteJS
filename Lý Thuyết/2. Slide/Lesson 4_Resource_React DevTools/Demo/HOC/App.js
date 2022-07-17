import './App.css'

import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./components/Home";
import EmployeeContainer from './containers/EmployeeContainer';
import UserContainer from './containers/UserContainer';

function App(props) {

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/employees">Employee List</Link>
          </li>
          <li>
            <Link to="/users">User List</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/employees" component={EmployeeContainer} exact />
        <Route path="/users" component={UserContainer} exact />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;



