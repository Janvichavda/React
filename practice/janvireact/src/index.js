import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Header1 from "./Component/Header.jsx"
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import Mainroute from 'MainRouter';
import Routes from "./Routes/MainRouter.jsx"

import { RouterProvider, createBrowserRouter, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={Routes} />
  // <>
  //   <Header1 />
  //   <p>lorem </p>
  //   <h1>janvi</h1>
  // </>
);


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <Link to="/">Home
//         </Link>
//         <Link to="/about">About
//         </Link>
//         <h1> Home Page</h1>
//       </div>
//     ),
//   },
//   {
//     path: "/about",
//     element: (
//       <div>
//         <Link to="/"> Home
//         </Link>
//         <h2>About us page</h2>
//       </div>

//     ),
//   },
// ])
// root.render(<RouterProvider router={router} />);




