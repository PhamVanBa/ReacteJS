import React from "react";
import Mouse from "./renderProps/Mouse";

class MyComponentRenderProps extends React.Component {
  render() {
    return (
      <Mouse
        render={(coordinate) => (
          <div>
            The mouse position is {coordinate.x}:{coordinate.y}
          </div>
        )}
      />
    );
  }
}

export default MyComponentRenderProps;
