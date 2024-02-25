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
        await fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => {
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
            <h2>For the useLayoutEffect hook, the series of events will be

                The user interacts with the app. </h2>
            <p>1.Let’s just say the user clicks a button on the UI. <br />
                2. The state of the components changes. <br />
                3. The DOM is then mutated. <br />
                4. The function is invoked to clean up effects from the previous render if useLayoutEffect dependencies have changed. <br />
                5. Following cleanup, the useLayoutEffect hook is invoked. <br />
                6. The browser screen updates to reflect changes.</p>
            UseEffectHooksInFunctionalCompo <br />
            <button onClick={() => { setCnt(counter + 1) }}>Increment {counter}</button>
            {/* <button onClick={() => { anything(secondState + 1) }}>Increment Other State Data {secondState}</button> */}
            <button onClick={() => { setRefreshStatus(!refreshStatus) }}>Refresh {JSON.stringify(refreshStatus)}</button>
        </>
    );
};

export default UseEffectHooksInFunctionalCompo;