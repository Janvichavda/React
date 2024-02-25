// AdminRouter.jsx
import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AdminMenu from './AdminMenu.jsx';
import ProductList from './ProductList.jsx';
import AdminDashboard from './AdminDashboard.jsx';
import NotFound from '../Pages/NotFound.jsx';

const AdminRoute = ({ element }) => {
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        const checkAuthorization = async () => {
            try {
                const userInfo = localStorage.getItem('userInfo');
                if (!userInfo) {
                    console.log("User not logged in");
                    setIsAuthorized(false);
                    return;
                }

                const user = JSON.parse(userInfo);
                if (user.role === 'admin') {
                    console.log("User is authorized as admin");
                    setIsAuthorized(true);
                } else {
                    console.log("User is not authorized as admin");
                    setIsAuthorized(false);
                }
            } catch (error) {
                console.error("Error checking authorization:", error);
                setIsAuthorized(false);
            }
        };

        checkAuthorization();
    }, []);

    // Redirect to login if the user is not authorized as an admin
    if (isAuthorized === null) {
        // Loading state, you might want to handle this differently
        return null;
    } else if (!isAuthorized) {
        return <NotFound />;
    }

    // Render the component for authorized admin users
    return element;
};

const AdminRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminRoute element={<AdminDashboard />} />} />
            <Route path="/Product" element={<AdminRoute element={<ProductList />} />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AdminRouter;
