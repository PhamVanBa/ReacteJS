import React from 'react';
import Mouse from '../renderProps/Mouse';

function WithMouse(WrappedComponent) {
    class HOC extends React.Component {

        render() {
            return (
                <Mouse render={
                    coordinate => (
                        <div>
                            <WrappedComponent coordinate={coordinate} {...this.props} />
                        </div>
                    )

                } />
            );
        }
    }

    return HOC;
}

export default WithMouse;

