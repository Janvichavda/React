import React, { useState } from 'react';
const StateFunctionalComponentInReact = () => {
    // const data = "color"
    let data = "color"
    const [statedata, color] = useState("black");
    const [state, setState] = useState(true);
    return (
        <>
            <button onClick={() => { data = "checking" }}>
                Click me
            </button>
            <p> {data}</p>
            <button onClick={() => { color("purple") }}>
                Click me arrow
            </button>
            <p>Fav:{statedata}</p>

            <button onClick={() => { setState(!state) }}>Toggle{JSON.stringify(state)}

            </button>
        </>
    );
};
export default StateFunctionalComponentInReact;