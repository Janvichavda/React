import React from 'react';

const HooksInFunctionalCompo = () => {
    return (
        <>
            <h2>What is Hooks?</h2>
            <p>
                In React, hooks are functions that allow functional components to use state and other React features. They were introduced in React 16.8 to enable functional components to have local component state, lifecycle methods, and other features previously available only in class components. Hooks are functions that you can use at the top level of your functional components to add state or other React features.</p>
            <p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.</p>
            <p> This page describes the APIs for the built-in Hooks in React.</p>
            <p>If you’re new to Hooks, you might want to check out the overview first. You may also find useful information in the frequently asked questions section.</p>
            <ul>
                <li>
                    <p><a href="#basic-hooks">Basic Hooks</a></p>
                    <ul>
                        <li><a href="#usestate"><code className="gatsby-code-text">useState</code></a> <span>useState is a React Hook that lets you add a state variable to your component.</span> </li>
                        <li><a href="#useeffect"><code className="gatsby-code-text">useEffect</code></a><span>useEffect is a React Hook that lets you synchronize a component with an external system.</span></li>
                        <li><a href="#usecontext"><code className="gatsby-code-text">useContext</code></a></li>
                    </ul>
                </li>
                <li>
                    <p><a href="#additional-hooks">Additional Hooks</a></p>
                    <ul>
                        <li><a href="#usereducer"><code className="gatsby-code-text">useReducer</code></a></li>
                        <li><a href="#usecallback"><code className="gatsby-code-text">useCallback</code></a></li>
                        <li><a href="#usememo"><code className="gatsby-code-text">useMemo</code></a></li>
                        <li><a href="#useref"><code className="gatsby-code-text">useRef</code></a></li>
                        <li><a href="#useimperativehandle"><code className="gatsby-code-text">useImperativeHandle</code></a></li>
                        <li><a href="#uselayouteffect"><code className="gatsby-code-text">useLayoutEffect</code></a></li>
                        <li><a href="#usedebugvalue"><code className="gatsby-code-text">useDebugValue</code></a></li>
                        <li><a href="#usedeferredvalue"><code className="gatsby-code-text">useDeferredValue</code></a></li>
                        <li><a href="#usetransition"><code className="gatsby-code-text">useTransition</code></a></li>
                        <li><a href="#useid"><code className="gatsby-code-text">useId</code></a></li>
                    </ul>
                </li>
                <li>
                    <p><a href="#library-hooks">Library Hooks</a></p>
                    <ul>
                        <li><a href="#usesyncexternalstore"><code className="gatsby-code-text">useSyncExternalStore</code></a></li>
                        <li><a href="#useinsertioneffect"><code className="gatsby-code-text">useInsertionEffect</code></a></li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default HooksInFunctionalCompo;