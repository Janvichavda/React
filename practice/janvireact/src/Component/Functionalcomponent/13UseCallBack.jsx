import React, { useCallback, useState } from 'react';


const funccount = new Set();
const UseCallbackHooksInFunctionalCompo = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);
    // const incrementCounter = () => {
    //     console.log("incrementCounter");
    //     setCount(count + 1);
    // };
    // const decrementCounter = () => {
    //     console.log("decrementCounter");
    //     setCount(count - 1);
    // };
    // const incrementNumber = () => {
    //     console.log("incrementNumber");
    //     setNumber(number + 1);
    // };
    // const incrementCounter = useCallback(() => {
    //     setCount(count + 1);
    // });
    // const decrementCounter = useCallback(() => {
    //     setCount(count - 1);
    // });
    // const incrementNumber = useCallback(() => {
    //     setNumber(number + 1);
    // });
    // const incrementCounter = useCallback(() => {
    //     setCount(count + 1);
    // }, []);
    // const decrementCounter = useCallback(() => {
    //     setCount(count - 1);
    // }, []);
    // const incrementNumber = useCallback(() => {
    //     setNumber(number + 1);
    // }, []);
    const incrementCounter = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    const decrementCounter = useCallback(() => {
        setCount(count - 1);
    }, [count]);
    const incrementNumber = useCallback(() => {
        setNumber(number + 1);
    }, [number]);
    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementNumber);
    console.log(funccount);
    return (
        <>
            <p>Improving performance In React applications includes preventing unnecessary renders and reducing the time a render takes to propagate. useCallback() can help us prevent some unnecessary renders and therefore gain a performance boost.</p>
            <p>Going back to React, when a component re-renders, every function inside of the component is recreated and therefore these functions’ references change between renders.</p>
            <p> useCallback(callback, dependencies) will return a memoized instance of the callback that only changes if one of the dependencies has changed. This means that instead of recreating the function object on every re-render, we can use the same function object between renders.</p>
            {/* <button onClick={handler}>Change State Of Parent Component</button> */}
            <button onClick={incrementCounter}>Increase counter</button>
            <button onClick={decrementCounter}>Decrease Counter</button>
            <button onClick={incrementNumber}>increase number</button>
            <p className='my-5' >Count : {count} , number {number}</p>
        </>
    );
};

export default UseCallbackHooksInFunctionalCompo;