import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { productsData } from '../assets/data';

// images
import logoImg from '../assets/images/other/logo.png';
import searchIcon from '../assets/images/svg/search-icon.svg';
import webIcon from '../assets/images/svg/web-icon.svg';
import arrowDownIcon from '../assets/images/svg/arrow-down-icon.svg';
import userIcon from '../assets/images/svg/user-icon.svg';
import supportIcon from '../assets/images/svg/support-icon.svg';


const Header = () => {

    // search
    const [searchedProducts, setSearchedProducts] = useState([]);
    const filteredProducts = (e) => {
        const searchInput = e.target.querySelector('.js-search-input');
        const filterProducts = productsData.filter((product) => product.name.toLowerCase().includes(searchInput.value.toLowerCase()));
        setSearchedProducts(filterProducts);
    }
    return (
        <header className='sticky top-0 py-6 header-shadow mb-12 max-540:mb-10 bg-white z-10 bg-opacity-70 backdrop-filter_blur-md max-768:py-5 max-640:py-4 max-490:py-3'>
            <div className="container">
                {/* parent (content) */}
                <div className="flex-center-between gap-5">
                    {/* logo */}
                    <Link to="/">
                        <img src={logoImg} width={96} height={48} alt="logo image" className="w-24 h-12" />
                    </Link>

                    {/* search form wrapper */}
                    <div className="search-form-wrapper">
                        <form
                            className="search-form"
                            title='search'
                            onSubmit={(e) => {
                                e.preventDefault();
                                filteredProducts(e);
                            }}
                        >

                            <input
                                type="search"
                                className="js-search-input rounded-3xl py-3 pr-14 border border-primary-black-800 px-6 text-medium-18 bg-transparent"
                                placeholder='Qidirish'
                                onFocus={(e) => {
                                    if (e.target.value === '') {
                                        setSearchedProducts([]);
                                    }
                                }}
                            />

                            <button className="absolute right-6 top-[11px]">
                                <img width={24} height={24} src={searchIcon} alt="search icon" className="w-6 h-6" />
                            </button>

                            <ul className="search-results_list">
                                {
                                    searchedProducts.map((product, index) => {
                                        return (
                                            <li key={index}>
                                                <Link to={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`} className="search-results_list_item">
                                                    <img src={product.images[0].src} alt="" className="search-results_list_item_img" />
                                                    <h3 className="search-results_list_item_title">{product.name}</h3>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </form>
                    </div>

                    {/* login, register wrapper, search form modal button */}
                    <div className="flex-center space-x-6 max-540:space-x-5 max-375:space-x-4">
                        {/* contact page link */}
                        <Link to='/contact' className="flex-center space-x-1">
                            <img width={24} height={24} src={supportIcon} alt="support icon" className="w-6 h-6 max-768:block" />
                            <span className='max-860:hidden max-768:block max-640:hidden'>Aloqa</span>
                        </Link>

                        {/*  responsive search form modal button */}
                        <button className="hidden max-768:flex-center space-x-1">
                            <img width={24} height={24} src={searchIcon} alt="search icon" className="w-6 h-6" />
                            <span className='max-640:hidden'>Qidirish</span>
                        </button>

                        {/* lang wrapper */}
                        <div className="flex-center space-x-1">
                            <img width={24} height={24} src={webIcon} alt="web" className="w-6 h-6" />
                            <span className='uppercase'>UZ</span>
                            <img width={16} height={16} src={arrowDownIcon} alt="user icon" className="w-4 h-4 max-450:hidden" />
                        </div>

                        {/* log in wrapper */}
                        <Link to='/login' className="flex-center space-x-1">
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