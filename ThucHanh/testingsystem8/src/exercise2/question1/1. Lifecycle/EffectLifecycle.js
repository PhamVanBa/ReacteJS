import { useEffect } from "react";

function EffectLifecycle(props) {
    useEffect(() => {
        console.log('render!');
        return () => console.log('unmounting...');
    })

    return (
        <div>{props.number}</div>
    );
}

export default EffectLifecycle;

