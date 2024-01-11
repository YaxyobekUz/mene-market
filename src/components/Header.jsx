import React from 'react';
import { Link } from 'react-router-dom';

// images
import logoImg from '../assets/images/other/logo.png';
import searchIcon from '../assets/images/svg/search-icon.svg';
import webIcon from '../assets/images/svg/web-icon.svg';
import arrowDownIcon from '../assets/images/svg/arrow-down-icon.svg';
import userIcon from '../assets/images/svg/user-icon.svg';
import supportIcon from '../assets/images/svg/support-icon.svg';


const Header = () => {
    return (
        <header className='py-6 header-shadow mb-12 max-540:mb-10'>
            <div className="container">
                {/* parent (content) */}
                <div className="flex-center-between gap-5">
                    {/* logo */}
                    <Link to="/">
                        <img src={logoImg} width={96} height={48} alt="logo image" className="w-24 h-12" />
                    </Link>

                    {/* search form */}
                    <form
                        className="flex-center relative grow max-w-[360px] max-768:hidden"
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

                    {/* login, register wrapper, search form modal button */}
                    <div className="flex-center space-x-6 max-540:space-x-5 max-375:space-x-4">
                        {/* contact page link */}
                        <Link to='/contact' className="flex-center space-x-1">
                            <img width={24} height={24} src={supportIcon} alt="support icon" className="w-6 h-6 max-768:block" />
                            <span className='max-640:hidden'>Aloqa</span>
                        </Link>

                        {/*  responsive search form modal button */}
                        <button className="hidden max-768:flex-center space-x-1">
                            <img width={24} height={24} src={searchIcon} alt="search icon" className="w-6 h-6 bg-white" />
                            <span className='max-640:hidden'>Qidirish</span>
                        </button>

                        {/* lang wrapper */}
                        <div className="flex-center space-x-1">
                            <img width={24} height={24} src={webIcon} alt="web" className="w-6 h-6" />
                            <span className='uppercase'>UZ</span>
                            <img width={16} height={16} src={arrowDownIcon} alt="user icon" className="w-4 h-4 max-450:hidden" />
                        </div>

                        {/* register wrapper */}
                        <Link className="flex-center space-x-1">
                            <img width={24} height={24} src={userIcon} alt="web" className="w-6 h-6" />
                            <span className='max-450:hidden'>Kirish</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;