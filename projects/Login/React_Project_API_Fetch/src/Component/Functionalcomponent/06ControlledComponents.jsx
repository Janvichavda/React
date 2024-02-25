import React, { useState } from 'react';

const ControlledComponentInReact = () => {
    const [data, anything] = useState("default")
    const [state2, setState] = useState("default")
    let varaible_data = "default"
    // const inpChangeEvent = (kaipan)=>{
    // console.log("called",kaipan);
    const inpChangeEvent = (event) => {
        // console.log("called",event);
        // console.log("called",this);
        // console.log("called",event.target);
        // console.log("called",event.target.value);
        // varaible_data = event.target.value
        anything(event.target.value)
        // return
    }
    return (
        <>
            <h3> What are Uncontrolled components ?</h3>
            In React, an <input type="text" /> is always an uncontrolled component because its value can only be set by a user, and not programmatically.
            <br />
            <br />
            <h3>What are Controlled components ?</h3>
            In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior.
            <br />
            <br />
            {/* <input type="text" onChange={inpChangeEvent()} name="" id="" />   */}
            {/* <input type="text" onChange={inpChangeEvent(this)} name="" id="" />   */}
            me <input type="text" onChange={inpChangeEvent} name="" id="" /><br />
            <input type="text" onChange={(event) => setState(event.target.value)} name="" id="" />
            <p>{varaible_data}</p>
            <p>janvi{data}</p>
            <p>chavda{state2}</p>
        </>
    );
};

export default ControlledComponentInReact;