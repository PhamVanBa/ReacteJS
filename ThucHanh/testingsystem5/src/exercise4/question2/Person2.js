import "./Person.css";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function Person2(props) {
  let match = useRouteMatch();
  console.log(match);

  return (
    <div className="person">
      <Link to={`${match.url + "/" + props.id}`}>
        Full Name: {props.firstName + " " + props.lastName}
      </Link>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Person2;
