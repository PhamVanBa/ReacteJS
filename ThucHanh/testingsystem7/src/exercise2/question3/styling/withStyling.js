import React from 'react';

function WithStyling(WrappedComponent) {

    class HOC extends React.Component {

        render() {
            return <WrappedComponent style={{ fontWeight: 700, color: 'green' }} {...this.props} />
        }
    }

    return HOC;
}

export default WithStyling;

