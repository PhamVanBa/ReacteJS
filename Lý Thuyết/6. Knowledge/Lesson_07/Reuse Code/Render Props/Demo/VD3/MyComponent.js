import React from "react";
import Mouse from "./renderProps/Mouse";

class MyComponent extends React.Component {

    render() {
        return (
            <Mouse >
                {
                    coordinate =>
                        <div>
                            The mouse position is {coordinate.x}:{coordinate.y}
                        </div>
                }
            </Mouse>
        )

    }
}

export default MyComponent;

