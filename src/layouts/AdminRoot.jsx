import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const AdminRoot = () => {
    return (
        <div className='flex items-start bg-primary-black-800'>
            <Sidebar />
            <div className="container !max-w-[1180px]">
                <Outlet />
            </div>
        </div>
    )
};

export default AdminRoot;