import React from "react";
import Mouse34 from "./renderProps/Mouse34";

class MyComponent34 extends React.Component {
  render() {
    return (
      <Mouse34>
        {(coordinate) => (
          <div>
            The mouse position is {coordinate.x}:{coordinate.y}
          </div>
        )}
      </Mouse34>
    );
  }
}

export default MyComponent34;
