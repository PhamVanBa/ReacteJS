import React, { useMemo, useState } from 'react';

function ChildComponent(props) {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    console.log("Rendering Child Component");
    
    const sumResult = useMemo(() => props.sum(a, b), [a, b]);

    return (
        <div>
            <form>
                <label style={{ display: "block" }}>
                    a:
                     <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
                </label>
                <label style={{ display: "block" }}>
                    b:
                    <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
                </label>
                <label>sum: {sumResult}</label>
            </form>
        </div>
    );
}

export default React.memo(ChildComponent);


