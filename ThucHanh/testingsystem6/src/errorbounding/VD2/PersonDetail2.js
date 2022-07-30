import React from "react";
import { useParams } from "react-router-dom";

function PersonDetail2() {
  let { id } = useParams();

  return (
    <div>
      <h1>ID person: {id}</h1>
    </div>
  );
}

export default PersonDetail2;
