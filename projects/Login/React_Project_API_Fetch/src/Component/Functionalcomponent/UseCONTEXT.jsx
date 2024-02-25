import { useState } from "react"
import Child from './UsecontextChild'
import MyContext from "./UsecontextReact"

export default function Parent() {
    const [age, setAge] = useState(30);

    return (
        <MyContext.Provider value={{ age }}>
            <h1>Hello I am Parent{age}</h1>
            <button onClick={() => { setAge(age + 1) }}>I am button from parent</button>
            <Child />
        </MyContext.Provider>
    )
}