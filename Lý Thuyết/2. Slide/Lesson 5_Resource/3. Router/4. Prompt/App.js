import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import CreatePerson from "./CreatePerson";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink exact activeStyle={{ color: 'red' }} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={{ color: 'red' }} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={{ color: 'red' }} to="/createPerson">Create Person</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/createPerson" component={CreatePerson} />
        <Route component={Error} />
      </Switch>

    </div>
  );
}

export default App;



