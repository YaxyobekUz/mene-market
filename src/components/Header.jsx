import React from 'react';
import { Link } from 'react-router-dom';

// images
import logoImg from '../assets/images/other/logo.png';
import searchIcon from '../assets/images/svg/search-icon.svg';
import webIcon from '../assets/images/svg/web-icon.svg';
import arrowDownIcon from '../assets/images/svg/arrow-down-icon.svg';
import userIcon from '../assets/images/svg/user-icon.svg';


const Header = () => { 
    return (
        <header className='py-6 header-shadow mb-12'>
            <div className="container">
                {/* parent (content) */}
                <div className="flex-center-between">
                    {/* logo */}
                    <Link to="/">
                        <img src={logoImg} width={96} height={48} alt="logo image" className="w-24 h-12" />
                    </Link>

                    {/* search form */}
                    <form
                        className="flex-center relative max-w-[360px] w-full"
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <input
                            type="search"
                            className="rounded-3xl py-3 border border-primary-black-800 px-6 text-medium-18"
                            placeholder='Qidirish'
                        />
                        <button className="absolute right-6">
                            <img width={24} height={24} src={searchIcon} alt="search icon" className="w-6 h-6 bg-white" />
                        </button>
                    </form>

                    {/* login, register wrapper */}
                    <div className="flex-center space-x-6">
                        <Link to='/contact' className=''>Aloqa</Link>

                        <div className="flex-center space-x-1">
                            <img width={24} height={24} src={webIcon} alt="web" className="w-6 h-6" />
                            <span className='uppercase'>UZ</span>
                            <img width={16} height={16} src={arrowDownIcon} alt="user icon" className="w-4 h-4" />
                        </div>

                        <Link className="flex-center space-x-1">
                            <img width={24} height={24} src={userIcon} alt="web" className="w-6 h-6" />
                            <span>Kirish</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;