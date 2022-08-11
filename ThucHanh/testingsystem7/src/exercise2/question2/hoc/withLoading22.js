import React from "react";

function WithLoading22(WrappedComponent) {
  class HOC extends React.Component {
    render() {
      if (this.props.isLoading) {
        return <p>loading...</p>;
      }

      return <WrappedComponent {...this.props} />;
    }
  }

  return HOC;
}

export default WithLoading22;
