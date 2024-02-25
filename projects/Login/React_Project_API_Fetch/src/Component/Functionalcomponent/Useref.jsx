import { useRef } from "react"

export default function MyComponent() {
    const inputRef = useRef(null);
    const carRef = useRef(null);

    return (
        <>
            <p>Hello this is P tag</p>
            <input ref={inputRef} />
            <button onClick={() => { inputRef.current.value = "Test"; }}>Click me</button>

            <p ref={carRef}>Car</p >
            <button onClick={() => { carRef.current.style.backgroundColor = "red"; }}>Click me</button>

        </>
    )
}