import React from 'react';

// for swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/styles.css';
// swiper required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

// images
import arrowRight from '../assets/images/svg/arrow-right.svg';
import householdAppliances from '../assets/images/other/household-appliances.png';
import iphones from '../assets/images/other/iphones.png';

const Hero = () => {
    return (
        <div className='pb-11'>
            <div className="container">
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}

                    autoplay={{
                        delay: 3000,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="hero-swiper black-pagination-bullets">
                    <SwiperSlide className='hero-swiper_item'>
                        <Link to="/" className='hero-swiper_item-child'>
                            <div className='hero-swiper_item-content'>
                                <h3 className="hero-swiper_item-title">Bayram oldi aksiyamizda ishtirok eting</h3>
                                <p className="hero-swiper_item-description">90% gacha chegirma </p>
                                <Link className="hero-swiper_item-button main-btn">
                                    <span>Harid qilish</span>
                                    <img width={24} height={24} src={arrowRight} alt="arrow right icon" className="btn-icon" />
                                </Link>
                            </div>
                            <img width={459} height={172} src={householdAppliances} alt="household appliances" className="hero-swiper_item-img" />
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='hero-swiper_item'>
                        <Link to="/" className='hero-swiper_item-child'>
                            <div className='hero-swiper_item-content'>
                                <h3 className="hero-swiper_item-title">Barcha rangdagi iPhonelar aksiyada</h3>
                                <p className="hero-swiper_item-description">25% gacha chegirma</p>
                                <Link className="hero-swiper_item-button main-btn">
                                    <span>Harid qilish</span>
                                    <img width={24} height={24} src={arrowRight} alt="arrow right icon" className="btn-icon" />
                                </Link>
                            </div>
                            <img width={426} height={142} src={iphones} alt="iphones picture" className="hero-swiper_item-img" />
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
};

export default Hero;