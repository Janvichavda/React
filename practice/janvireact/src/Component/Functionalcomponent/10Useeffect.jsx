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
        return () => {
            console.log("called return");
        }
    }, [])
    return (
        <>
            <p> <b> In React, the useEffect hook is used to perform side effects in functional components. The second argument to useEffect is an array of dependencies. If this array is empty, the effect will only run once when the component mounts, similar to the behavior of componentDidMount in class components.</b></p>
            <p><b>Call useEffect at the top level of your component to declare an Effect:</b></p>
            <p> <b>The following situations in functional components allow for the use of the useEffect hook to carry out operations (or side effects):</b> <br />
                when a component is rendered (componentDidMount function in class-based components).
                when a component undergoes an update (componentDidUpdate function in class-based components).
                before a component is unmounted or removed (componentWillUnmount function in class-based components).</p>
            <p>How to write useEffect hooks in React <br />
                <b>useEffect(()=>{
                },[Dependency if any])</b>
            </p>
            <b> Assuming that the useEffect hook is active in our app, we can get this series of events to happen.</b>
            <p>1.The user engages with the React app. <br />2.Let’s just say the user clicks a button on the UI.
                <br />3.  The state of the components changes.
                <br />4.  The DOM is then mutated.
                <br />5.  Changes are then reflected on the browser screen.
                The function is invoked to clean up effects from the previous render if useEffect dependencies have changed.
                Following cleanup, the useEffect hook is invoked.</p>
            UseEffectHooksInFunctionalCompo
            <button onClick={() => { setCnt(counter + 1) }}>Increment {counter}</button>
            {/* <button onClick={() => { anything(secondState + 1) }}>Increment Other State Data {secondState}</button> */}
            <button onClick={() => { setRefreshStatus(!refreshStatus) }}>Refresh {JSON.stringify(refreshStatus)}</button>

        </>
    );
};

export default UseEffectHooksInFunctionalCompo;