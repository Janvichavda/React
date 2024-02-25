import { useState, useCallback } from "react";
const size = 1;
let mySet = new Set()

export default function MyComp() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const myFunction1 = useCallback((setter) => {
        setter(a + 1)
    }, [size])

    const myFunction2 = useCallback((setter) => {
        setter(b + 1)
    }, [size])
    mySet.add(myFunction1)
    mySet.add(myFunction2)
    console.log(mySet.size)
    return (<div>
        <h2>Hello World</h2>
        <button onClick={myFunction1(setA)}>Add in a</button>
        <button onClick={myFunction2(setB)}>Add in b</button>
    </div>)
}
