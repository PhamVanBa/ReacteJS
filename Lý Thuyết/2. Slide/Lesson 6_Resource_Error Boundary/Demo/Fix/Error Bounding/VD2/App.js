import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import PersonList from "./PersonList";
import Error from "./Error";
import PersonDetail from "./PersonDetail";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/persons">Persons</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/persons/:id" component={PersonDetail} />
          <Route path="/persons" component={PersonList} />
          <Route component={Error} />
        </Switch>

      </div>
    </ErrorBoundary>
  );
}

export default App;



