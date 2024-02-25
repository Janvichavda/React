import React, { useRef, useState } from 'react';

const UseRefEffectHooksInFunctionalCompo = () => {
    const [data, anything] = useState(null)
    const focusPoint = useRef(null)
    const onClickHandler = (event) => {

        // console.log(focusPoint);
        console.log(event);
        console.log(event.target);
        // console.log(focusPoint.current);
        // console.log(focusPoint.current.value);
        focusPoint.current.value = "The quick brown fox jumps over the lazy dog";
        focusPoint.current.focus();
    }
    return (
        <>

            <div>
                <button onClick={onClickHandler}>
                    ACTION
                </button>
            </div>
            <label>
                Click on the action button to
                focus and populate the text.
            </label><br />
            <textarea ref={focusPoint} />
            <textarea onChange={(event) => {
                console.log(event);
                console.log(event.target);
                console.log(event.target.value);
                // anything("test")
                anything(event.target.value)
            }} />
            {data}
        </>
    );
};

export default UseRefEffectHooksInFunctionalCompo;