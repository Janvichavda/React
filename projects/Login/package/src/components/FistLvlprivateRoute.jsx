import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
const FistLvlprivateRoute = ({ children }) => {
    return (
        <>
            <div>
                <Navbar />
                {children}
                <Footer />
            </div>
        </>

    )
}

export default FistLvlprivateRoute;
