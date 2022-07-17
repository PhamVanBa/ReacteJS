import React from 'react';

function WithDefaultName(WrappedComponent) {

    class HOC extends React.Component {

        render() {
            return <WrappedComponent name="User" {...this.props} />
        }
    }

    return HOC;
}

export default WithDefaultName;

