import React, { useEffect, useState } from 'react';

const UseEffectHooksInFunctionalCompo = () => {
    // useEffect(() => {
    //     console.log("called");
    //     fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => { 
    //         console.log(result);
    //      })
    // })
    // useEffect(()=>{ })
    // empty dependancy START as constructor
    // useEffect(() => {
    //     console.log("called");
    //     fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => { 
    //         console.log(result);
    //     })
    // },[])
    // empty dependancy END as constructor
    const [counter, setCnt] = useState(0)
    const [secondState, anything] = useState(0)
    const [refreshStatus, setRefreshStatus] = useState(true)
    // useEffect(() => {
    //     console.log("called");
    //     fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => { 
    //         console.log(result);
    //     })
    // },[refreshStatus])
    // useEffect(() => {
    //     console.log("called useEffect");
    //     fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => { 
    //         console.log(result);
    //     })
    //     return ()=> {
    //         console.log("called return");
    //     }
    // },[refreshStatus])
    useEffect(() => {
        console.log("called useEffect");
        fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => { 
            console.log(result);
            
        })
        return ()=> {
            console.log("called return");
        }
    },[])
    return (
        <>
            UseEffectHooksInFunctionalCompo
            <button onClick={() => { setCnt(counter + 1) }}>Increment {counter}</button>
            {/* <button onClick={() => { anything(secondState + 1) }}>Increment Other State Data {secondState}</button> */}
            <button onClick={() => { setRefreshStatus(!refreshStatus) }}>Refresh {JSON.stringify(refreshStatus)}</button>
            
        </>
    );
};

export default UseEffectHooksInFunctionalCompo;