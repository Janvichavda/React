import { createBrowserRouter } from "react-router-dom";
// import ClassCompo from "../Component/Pages/ClassCompo";
import FunCompo from "../Component/Pages/FunCompo";
// import HeaderCompo from "../Component/Pages/HeaderCompo"
import Home from "../Component/Pages/Home";
import Login from "../Component/Pages/Login.jsx";
import About from "../Component/Pages/AboutCompo"
import Example from "../Component/Pages/ExampleCompo"
import ReactQA from "../Component/Pages/ReactQA.jsx"
import Listview from "../Component/ReactQA/List.jsx"
import Counter from "../Component/ReactQA/Counter.jsx"
import Contact from "../Component/Pages/Contact"
import LoaderCompo from '../Component/Common/Loader.jsx';
import HeaderCompo from '../Component/Common/Header0.jsx';
import React, { lazy, Suspense } from 'react';


const ClassCompoj = lazy(() => { return import('../Component/ClassComponent/ClassCompoRoute.jsx') })
const FunCompoj = lazy(() => { return import('../Component/Functionalcomponent/Functionalroute.jsx') })


const router = createBrowserRouter([
    {
        path: "/",
        element: (<Home />)
    }, {
        path: "/Login",
        element: (<><HeaderCompo /><Login /></>)
    },
    {
        path: "/about",
        element: (<><HeaderCompo /><About /></>)
    },
    {
        path: "/contact",
        element: (<><HeaderCompo /><Contact /></>)
    },
    {
        path: "/ReactQA",
        element: (<><HeaderCompo /><ReactQA /></>),
        children: [
            {
                path: "/ReactQA/listview",
                element: (<><Listview /></>)
            },
            {
                path: "/ReactQA/counter",
                element: (<><Counter /></>)
            },
        ]
    }
    , {
        path: "/examples",
        element: (<><HeaderCompo /><Example /></>),
        children: [
            {
                path: "/examples/classcomponent/*",
                element: (<Suspense janvi={<LoaderCompo />} ><ClassCompoj
                /></Suspense>),
            }
            , {
                path: "/examples/functionalcomponent/*",
                element: (<Suspense janvi={<LoaderCompo />} ><FunCompoj
                /></Suspense>),
            },
        ]
    },
]
);

export default router
