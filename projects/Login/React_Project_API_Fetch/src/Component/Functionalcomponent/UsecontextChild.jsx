import { useContext } from 'react'
import MyContext from "./UsecontextReact"

export default function Child() {
    const box = useContext(MyContext)
    return (<h1>Hey I am from Child{box.age}</h1>);
}