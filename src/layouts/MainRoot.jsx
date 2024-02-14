import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainRoot = () => {
    const location = useLocation();
    const currentLocation = location.pathname;

    const loginPage = currentLocation !== '/login';
    const registerPage = currentLocation !== '/register';
    const adminPage = currentLocation !== '/admin';
    return (
        <div className='flex flex-col min-h-screen'>
            {
                (loginPage && registerPage && adminPage) &&
                <Header />
            }
            <main className='flex flex-col grow'>
                <Outlet />
            </main>
            {
                (loginPage && registerPage) &&
                <Footer />
            }
        </div>
    )
}

export default MainRoot;