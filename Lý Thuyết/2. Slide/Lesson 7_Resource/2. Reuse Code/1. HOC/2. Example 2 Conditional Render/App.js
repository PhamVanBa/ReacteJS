import './App.css'

import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./components/Home";
import EmployeeContainer from './containers/EmployeeContainer';
import UserContainer from './containers/UserContainer';
import AuthenticatedContext from './context/AuthenticatedContext';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    }
  }

  render() {

    return (
      <AuthenticatedContext.Provider value={this.state.isAuthenticated}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/employees">Employee List (Protected)</Link>
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
      </AuthenticatedContext.Provider>
    );
  }
}

export default App;



