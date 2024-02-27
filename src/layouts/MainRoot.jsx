import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainRoot = () => {
    const location = useLocation();
    const firstLocation = location.pathname.split('/').filter(item => item !== '')[0];

    const loginPage = firstLocation !== 'login';
    const registerPage = firstLocation !== 'register';
    const adminPage = firstLocation !== 'admin';
    return (
        <div className='flex flex-col min-h-screen'>
            {
                (loginPage && registerPage && adminPage) &&
                <Header />
            }
            <main className='flex w-full flex-col grow'>
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