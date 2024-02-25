import React, { useState, useMemo } from 'react';

export default function Mycomp() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [z, setZ] = useState(0);

    const longcalculation = (num) => {
        console.log("Calculating...");
        for (let i = 0; i < 10000000; i++) {
            num += 1;
        }
        return num;
    };

    const calculation = useMemo(() => longcalculation(x), [x, y, z]);
    return (
        <>
            <button onClick={() => { (setX(x + 1)) }}>Click x</button>
            <h2>x: {x}</h2>
            <button onClick={() => { (setY(y + 1)) }}>Click y</button>
            <h2>y: {y}</h2>
            <button onClick={() => { (setZ(x + 1)) }}>Click z</button>
            <h2>z: {z}</h2>
        </>
    );
}

// import { useState, useMemo } from 'react'

// const MyC = () => {
//     const [x, setx] = useState(0)
//     const [y, sety] = useState(0)

//     const LongCalculation = (num) => {
//         console.log("calculating");
//         for (let i = 0; i < 1000000000; i++) {
//             num += 1;
//         }
//         return num;
//     }

//     const calculation = useMemo(() => LongCalculation(x), [x, y]);

//     return (<div>

//         <h1>x={x}</h1>
//         <h2>calculation={calculation}</h2>
//         <button onClick={() => { setx(x + 1) }}>Increment</button>
//         <h2>y={y}</h2>
//         <button onClick={() => { sety(y + 1) }}>Increment</button>


//     </div >)

// }

// export default MyC;