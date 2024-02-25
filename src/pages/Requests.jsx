import React from 'react';
import { Link } from 'react-router-dom';

// images
import arrowLeft from '../assets/images/svg/arrow-left.svg';
import search from '../assets/images/svg/search-icon-white.svg';
const Requests = () => {
    return (
        <div className='w-full'>
            <div className="admin_page-header">
                <Link className='admin_page-header_link' to='/admin'>
                    <img width={24} height={24} src={arrowLeft} alt="arrow left icon image" className="admin_page-header_link_icon" />
                </Link>
                <h1 className='admin_page-header_title'>Doimiy mijozlar</h1>
            </div>
            
            <div className="admin_page-content_header">
                <div className="admin_page-content_search-input-wrapper justify-normal">
                    <div className="admin_page-content">
                        <input placeholder='Qidirish' type="text" className="admin_page-content_search-input-wrapper_input" />
                        <img width={24} height={24} src={search} alt="search icon" className="admin_page-content_search-input-wrapper_icon" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Requests;