import React from 'react';

const FunctionalComponentInReact = () => {
    return (
        <>
            <h2>What is a component function?</h2>
            <p>
                Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.</p>
            <h2>What is a functional component?</h2>
            <p>React functional components are just normal JavaScript functions; we can create them using specific function keywords. Most developers create functional components using the Arrow function. The functional component's primary purpose is to render the view and the data to the browser.
            </p>
            <p>functional compo will created with <b>Syntax</b> </p>
            <div className="alert alert-info">
                function func_name ( ) &#123; <br />
                &nbsp;&nbsp;&nbsp;&nbsp; code.. <br />
                &#125; <br /> or <br />
                function_name =  ( ) =&gt;&#123; <br />
                &nbsp;&nbsp;&nbsp;&nbsp; code.. <br />
                &#125; <br />
            </div>
        </>
    );
};

export default FunctionalComponentInReact;