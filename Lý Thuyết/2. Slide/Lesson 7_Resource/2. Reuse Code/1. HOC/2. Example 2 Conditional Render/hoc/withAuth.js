import React from 'react';
import Login from '../components/Login';
import AuthenticatedContext from '../context/AuthenticatedContext';

function withAuth(AuthenticatedComponent) {

    class HOC extends React.Component {

        isAuthenticated = () => {
            return this.context;
        }

        render() {
            return !this.isAuthenticated() ? <Login /> : <AuthenticatedComponent {...this.props} />;
        }
    }

    HOC.contextType = AuthenticatedContext;

    return HOC;
}

export default withAuth;

