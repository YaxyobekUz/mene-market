import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainRoot = () => {
    const location = useLocation();
    const currentLocation = location.pathname;
    return (
        <div className='flex flex-col min-h-screen'>
            {
                (currentLocation !== '/login' && currentLocation !== '/register') &&
                <Header />
            }
            <main className='flex flex-col grow'>
                <Outlet />
            </main>
            {
                (currentLocation !== '/login' && currentLocation !== '/register') &&
                <Footer />
            }
        </div>
    )
}

export default MainRoot;