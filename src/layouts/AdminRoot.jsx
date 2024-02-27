import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const AdminRoot = () => {
    return (
        <div className='admin flex w-full items-start bg-radial-gradient_blue-500 text-white'>
            <Sidebar />
            <div className="container !max-w-[1180px] w-full pt-6 pb-12">
                <Outlet />
            </div>
        </div>
    )
};

export default AdminRoot;