import React from "react";
import RenderPropsComponent from "./RenderPropsComponent";

class UsingComponent extends React.Component {
    render() {
        return (
            <RenderPropsComponent callBackFunction={
                (data) => (
                    <div>Hello {data}</div>
                )
            } />
        );
    }
}

export default UsingComponent;

