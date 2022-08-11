import React from "react";
import Login22 from "../components/Login22";
import AuthenticatedContext22 from "../context/AuthenticatedContext22";

function withAuth22(AuthenticatedComponent22) {
  class HOC extends React.Component {
    isAuthenticated = () => {
      return this.context;
    };

    render() {
      return !this.isAuthenticated() ? (
        <Login22 />
      ) : (
        <AuthenticatedComponent22 {...this.props} />
      );
    }
  }

  HOC.contextType = AuthenticatedContext22;

  return HOC;
}

export default withAuth22;
