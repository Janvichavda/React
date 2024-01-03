import { createBrowserRouter } from "react-router-dom";
// import ClassCompo from "../Component/Pages/ClassCompo";
import FunCompo from "../Component/Pages/FunCompo";
// import HeaderCompo from "../Component/Pages/HeaderCompo"
import Home from "../Component/Pages/Home";
import About from "../Component/Pages/AboutCompo"
import Example from "../Component/Pages/ExampleCompo"
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
        path: "/about",
        element: (<><HeaderCompo /><About /></>)
    }, {
        path: "/contact",
        element: (<><HeaderCompo /><Contact /></>)
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