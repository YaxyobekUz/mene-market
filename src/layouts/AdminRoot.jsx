import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const AdminRoot = () => {
    return (
        <div className='admin flex items-start bg-radial-gradient_blue-500 text-white'>
            <Sidebar />
            <div className="container !max-w-[1180px] pt-6 pb-12">
                <Outlet />
            </div>
        </div>
    )
};

export default AdminRoot;