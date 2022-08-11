import React from "react";
import Mouse33 from "../renderProps/Mouse33";

function WithMouse33(WrappedComponent) {
  class HOC extends React.Component {
    render() {
      return (
        <Mouse33
          render={(coordinate) => (
            <div>
              <WrappedComponent coordinate={coordinate} {...this.props} />
            </div>
          )}
        />
      );
    }
  }

  return HOC;
}

export default WithMouse33;
