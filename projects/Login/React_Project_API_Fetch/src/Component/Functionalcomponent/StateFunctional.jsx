import React, { useState } from 'react';
const StateFunctionalComponentInReact = () => {
    // const data = "color"
    let data = "color"
    const [statedata, color] = useState("black");
    const [state, setState] = useState(true);
    return (
        <><h2>State in Functional Component</h2>
            <p>The state of a component in React is a plain JavaScript object that controls the behavior of a component. The change in a state triggers component re-renders. Two main React hooks are used to declare and manipulate the state in a function component.
                <ul>
                    <li>useState</li>
                    <li>useReducer</li>
                </ul>

            </p>
            <p>The useState hook has the following syntax. <br />
                <b>  const [state, setState] = useState(intialState) </b>
            </p>
            <p>Following is the syntax of the useReducer hook. <br />

                <b> const [state, dispatch] = useReducer(reducer, initialState)</b> </p>
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