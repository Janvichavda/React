import React, { useEffect, useLayoutEffect, useState } from 'react';

const UseEffectHooksInFunctionalCompo = () => {

    const [counter, setCnt] = useState(0)
    const [secondState, anything] = useState(0)
    const [refreshStatus, setRefreshStatus] = useState(true)
    useEffect(() => {
        console.log("called useEffect");
        getData()
    })
    const getData = async () => {
        await  fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => {
            console.log(result);
        })
    }
    useLayoutEffect(() => {
        console.log("called useLayoutEffect");
        fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => {
            console.log(result);

        })
        return () => {
            console.log("called return");
        }
    })
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