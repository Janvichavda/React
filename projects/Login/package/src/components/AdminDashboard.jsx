import React from 'react';
import Sidenavbar from '../components/Sidenavbar';
import AdminMenu from '../components/AdminMenu';


const AdminDashboard = () => {
    return (
        <>
            <div className="d-flex">
                <div className="">
                    <Sidenavbar />

                </div>
                <div className='col-10'>
                    <AdminMenu />
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;