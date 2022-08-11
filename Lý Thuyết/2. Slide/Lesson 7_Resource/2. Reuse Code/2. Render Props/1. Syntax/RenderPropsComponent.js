import React from "react";

class RenderPropsComponent extends React.Component {
    render() {
        const data = "Nguyen Van a";

        return (
            <div>
                { this.props.callBackFunction(data)}
            </div>
        );
    }
}

export default RenderPropsComponent;

