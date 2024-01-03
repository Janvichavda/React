import React, { useState } from 'react';

const ControlledComponentInReact = () => {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const inpChangeEvent1 = (event) => { setFname(event.target.value) }
    const inpChangeEvent2 = (event) => { setLname(event.target.value) }
    const inpChangeEvent3 = (event) => { setEmail(event.target.value) }
    return (
        <>
            <input type="text" onChange={inpChangeEvent1} name="fname" id="fname" /> <br />
            <input type="text" onChange={inpChangeEvent2} name="lname" id="lname" /> <br />
            <input type="text" onChange={inpChangeEvent3} name="email" id="email" /> <br />
           
           
            <p>OR</p>
           
            <input type="text" onChange={(event)=>setFname(event.target.value)} name="fname" id="fname" />  <br />
            <input type="text" onChange={(event)=>setLname(event.target.value)} name="lname" id="lname" />  <br />
            <input type="text" onChange={(event)=>setEmail(event.target.value)} name="email" id="email" />  <br />
            
            
          {/* <input type="text" onChange={(event)=>setFormData({...formData,[event.target.name]:event.target.value})} name="lname" id="lname" />   */}
            <p>{JSON.stringify(formData)}</p>
        </>
    );
};

export default ControlledComponentInReact;