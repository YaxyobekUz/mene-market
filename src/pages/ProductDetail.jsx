import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productsData } from '../assets/data';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// swiper modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// images
import stars from '../assets/images/svg/stars.svg';
import likeIcon from '../assets/images/svg/like-icon.svg';
import minusIcon from '../assets/images/svg/minus-square-icon.svg';
import plusIcon from '../assets/images/svg/plus-square-icon.svg';
import cartIcon from '../assets/images/svg/cart-icon.svg';

const ProductDetail = () => {
    // product data
    const { productName } = useParams();
    const productData = productsData.find(product => product.name.toLowerCase().replace(/\s+/g, '-') === productName);




    // scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const numberOfProductsAvailable = productData ? productData.amount : 0;
    const [productCount, setProductCount] = useState((numberOfProductsAvailable > 0) ? 1 : 0);
    const [showReviews, setShowreviews] = useState(false);






    // tab
    const tabsButtonsRef = useRef(null);
    if (productData) {
        useEffect(() => {
            const elInfoTabBtn = tabsButtonsRef.current.querySelector('.js-button__product-info-tab');
            const elReviewTabBtn = tabsButtonsRef.current.querySelector('.js-button__product-reviews-tab');
            const elLine = tabsButtonsRef.current.querySelector('.js-line');
            const updateLinePosition = () => {
                if (showReviews) {
                    const rect = elReviewTabBtn.getBoundingClientRect();
                    elLine.style.width = `${elReviewTabBtn.clientWidth}px`;
                    elLine.style.transform = `translateX(${rect.left - tabsButtonsRef.current.getBoundingClientRect().left}px)`;
                } else {
                    const rect = elInfoTabBtn.getBoundingClientRect();
                    elLine.style.width = `${elInfoTabBtn.clientWidth}px`;
                    elLine.style.transform = `translateX(${rect.left - tabsButtonsRef.current.getBoundingClientRect().left}px)`;
                };
            };
            updateLinePosition();
            window.addEventListener('resize', updateLinePosition);
            return () => {
                window.removeEventListener('resize', updateLinePosition);
            };
        }, [showReviews]);
    };



    // swiper
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='pb-32' >
            {
                productData ?
                    <div className="container">
                        <div className="grid grid-cols-2 gap-6 mb-12 max-768:grid-cols-1">
                            {/* product image (swiper container) */}
                            <div className="flex sticky gap-2.5 w-full h-644 top-28 max-1024:h-520 max-860:h-440 max-768:static max-768:h-644 max-640:h-520 max-490:h-440 max-375:h-[380px]">
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    direction={'vertical'}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="vertical-product-swiper"
                                >
                                    {
                                        productData.images.map((img) => {
                                            return (
                                                <SwiperSlide key={img.id}>
                                                    <img src={img.src} alt='' className='vertical-product-swiper_img' />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>

                                {/* img large */}
                                <Swiper
                                    spaceBetween={10}
                                    navigation={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="product-swiper"
                                >
                                    {
                                        productData.images.map((img) => {
                                            return (
                                                <SwiperSlide key={img.id}>
                                                    <img src={img.src} alt='' className='product-swiper_img' />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>

                            {/* product content */}
                            <div className="space-y-6">
                                {/* product title wrapper */}
                                <div>
                                    <div className="flex-start-between mb-2">
                                        <span className="text-regular-14">204 ta buyurtma</span>
                                        <img src={stars} alt="stars" className="" />
                                        <img width={24} height={24} src={likeIcon} alt="like icon" className="w-6 h-6" />
                                    </div>
                                    <h1 className='text-[29px] font-semibold leading-8 max-490:text-semibold-23'>{productData.name}</h1>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-regular-16">Kiyim o'lchamlarini tanlang:</p>
                                    <div className="flex flex-wrap gap-2.5">
                                        <button className="product-type_button-active">
                                            <span className="product-type_button_text">XS</span>
                                        </button>
                                        <button className="product-type_button">
                                            <span className="product-type_button_text">S</span>
                                        </button>
                                        <button className="product-type_button">
                                            <span className="product-type_button_text">M</span>
                                        </button>
                                        <button className="product-type_button">
                                            <span className="product-type_button_text">L</span>
                                        </button>
                                        <button className="product-type_button">
                                            <span className="product-type_button_text">XL</span>
                                        </button>
                                        <button disabled className="product-type_button">
                                            <span className="product-type_button_text">XXL</span>
                                        </button>
                                        <button disabled className="product-type_button">
                                            <span className="product-type_button_text">XXL</span>
                                        </button>
                                    </div>
                                </div>

                                {/* product quantity */}
                                <div className="space-y-2">
                                    <p className="text-regular-16">Miqdori:</p>
                                    <div className="flex-center gap-2.5">
                                        <div className="main-btn relative p-2 w-24 max-w-full border-primary-black-800">
                                            <button
                                                className="disabled:opacity-50"
                                                disabled={productCount === 0}
                                                onClick={() => {
                                                    if (productCount !== 0) {
                                                        setProductCount(productCount - 1)
                                                    }
                                                }}
                                            >
                                                <img width={20} height={20} src={minusIcon} alt="minus icon" className="w-5 h-5" />
                                            </button>
                                            <span className='flex-center w-2 left-[calc(50%-4px)] absolute'>{productCount}</span>
                                            <button
                                                className="ml-auto disabled:opacity-50"
                                                disabled={productCount === numberOfProductsAvailable}
                                                onClick={() => {
                                                    if (productCount !== numberOfProductsAvailable) {
                                                        setProductCount(productCount + 1)
                                                    }
                                                }}
                                            >
                                                <img width={20} height={20} src={plusIcon} alt="plus icon" className="w-5 h-5" />
                                            </button>
                                        </div>
                                        {
                                            numberOfProductsAvailable !== 0 ?
                                                <span className='text-regular-13 text-secondary-green-500'>Sotuvda {numberOfProductsAvailable}ta bor</span>
                                                :
                                                <span className='text-regular-13 text-primary-red-500'>Hozircha ushbu mahsulotdan qolmadi</span>
                                        }
                                    </div>
                                </div>

                                {/* price */}
                                <div className="space-y-2">
                                    <p className="text-regular-16">Narxi:</p>
                                    <div className="flex-center flex-wrap gap-2.5 text-semibold-20">
                                        <p>336 000 so’m</p>
                                        <del className='text-primary-gray-500'>420 000 so’m</del>
                                    </div>
                                </div>


                                {/* information */}
                                <div title='information' className="flex-start gap-2 p-4 bg-primary-blue-50 rounded-lg border border-primary-skyblue-500">
                                    {/* icon */}
                                    <svg
                                        className='w-4 h-4 min-w-max'
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="17"
                                        height="16"
                                        viewBox="0 0 17 16"
                                        fill="none"
                                    >
                                        <path d="M8.70085 1.33333C5.02751 1.33333 2.03418 4.32667 2.03418 8C2.03418 11.6733 5.02751 14.6667 8.70085 14.6667C12.3742 14.6667 15.3675 11.6733 15.3675 8C15.3675 4.32667 12.3742 1.33333 8.70085 1.33333ZM8.20085 5.33333C8.20085 5.06 8.42751 4.83333 8.70085 4.83333C8.97418 4.83333 9.20085 5.06 9.20085 5.33333V8.66667C9.20085 8.94 8.97418 9.16667 8.70085 9.16667C8.42751 9.16667 8.20085 8.94 8.20085 8.66667V5.33333ZM9.31418 10.92C9.28085 11.0067 9.23418 11.0733 9.17418 11.14C9.10751 11.2 9.03418 11.2467 8.95418 11.28C8.87418 11.3133 8.78751 11.3333 8.70085 11.3333C8.61418 11.3333 8.52751 11.3133 8.44751 11.28C8.36751 11.2467 8.29418 11.2 8.22751 11.14C8.16751 11.0733 8.12085 11.0067 8.08751 10.92C8.05418 10.84 8.03418 10.7533 8.03418 10.6667C8.03418 10.58 8.05418 10.4933 8.08751 10.4133C8.12085 10.3333 8.16751 10.26 8.22751 10.1933C8.29418 10.1333 8.36751 10.0867 8.44751 10.0533C8.60751 9.98667 8.79418 9.98667 8.95418 10.0533C9.03418 10.0867 9.10751 10.1333 9.17418 10.1933C9.23418 10.26 9.28085 10.3333 9.31418 10.4133C9.34751 10.4933 9.36751 10.58 9.36751 10.6667C9.36751 10.7533 9.34751 10.84 9.31418 10.92Z" fill="url(#paint0_linear_514_5204)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_514_5204" x1="2.03418" y1="1.33333" x2="17.7847" y2="5.47547" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#08C8F9" />
                                                <stop offset="1" stopColor="#1A3EDD" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    {/* body */}
                                    <p className="text-regular-13 text-primary-black-800">Yetkazib berish summasi manzilingizga ko'ra 20,000 so'mdan boshlanadi. Agar 2 ta mahsulot xarid qilsangiz yetkazib berish bepul. (Bonusli mahsulotlar bundan mustasno)</p>
                                </div>

                                {/* clearance */}
                                <form>
                                    <p className="mb-6">Buyurtmani rasmiylashtirish</p>
                                    <div className="space-y-4">
                                        <label className='input-wrapper'>
                                            <input
                                                title="your name"
                                                type="text"
                                                placeholder=''
                                                className='input'
                                                name='user name'
                                                required
                                            />
                                            <span className='placeholder'>Ismingiz</span>
                                        </label>

                                        <label className='input-wrapper'>
                                            <input
                                                title="your telephone number"
                                                type="tel"
                                                placeholder=''
                                                className='input'
                                                name='user telephone number'
                                                required
                                            />
                                            <span className='placeholder'>Telefon raqamingiz</span>
                                        </label>

                                        <label className='input-wrapper'>
                                            <input
                                                title="your addres"
                                                type="text"
                                                placeholder=''
                                                className='input'
                                                name='user address'
                                                required
                                            />
                                            <span className='placeholder'>Manzilingiz</span>
                                        </label>

                                        {/* buy btn */}
                                        <button
                                            className="btn-primary_linear-blue rounded-full px-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                            disabled={productCount === 0}
                                        >
                                            <span className="text-regular-16">Xarid qilish</span>
                                            <img width={16} height={16} src={cartIcon} alt="cart icon" className="w-4 h-4" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* product description and reviews */}
                        <div>
                            {/* tabs buttons */}
                            <div ref={tabsButtonsRef} className="flex relative gap-6 pb-1 mb-6">
                                <button
                                    onClick={() => setShowreviews(false)}
                                    className='js-button__product-info-tab'
                                >Mahsulot tavsifi</button>
                                <button
                                    onClick={() => setShowreviews(true)}
                                    className='js-button__product-reviews-tab'
                                >Sharhlar</button>

                                {/* active line */}
                                <div className={`js-line w-[136px] absolute h-0.5 bg-linear-gradient_blue-500 bottom-0 transition-all duration-300`}></div>
                            </div>

                            {/* dat container */}
                            <div className={`${showReviews ? 'hidden' : 'block'}`}>
                                <p className="text-regular-16">{productData.description}</p>
                            </div>

                            {/* reviews wrapper */}
                            <div className={`${showReviews ? 'block' : 'hidden'} space-y-6`}>
                                {/* header */}
                                <div className="flex-center-between gap-3 flex-wrap">
                                    <div className='flex-center space-x-2'>
                                        <p className='text-semibold-23 max-450:text-semibold-20'>Barcha sharhlar</p>
                                        <span className="text-regular-16 text-primary-gray-500">(451)</span>
                                    </div>
                                    <button className="btn-primary_skyblue bg-primary-black-800 px-5">Fikr qoldirish</button>
                                </div>
                                {/* reviews */}
                                <ul className="reviews-list">
                                    {
                                        ['I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt.',

                                            'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable..',

                                            'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt.',

                                            'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt.I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt.I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt.',

                                            'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt.',

                                            'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt.'].map((reviewText, index) => {
                                                return (
                                                    <li key={index} className="reviews-list_item">
                                                        {/* rating stars */}
                                                        <img width={127} height={22} src={stars} alt="stars image" className="reviews-list_item_img" />
                                                        {/* title */}
                                                        <h3 className="reviews-list_item_title">Samantha D.</h3>
                                                        {/* description */}
                                                        <p className="reviews-list_item_description">{reviewText}</p>
                                                        {/* date */}
                                                        <span className="reviews-list_item_date">August 14, 2023</span>
                                                    </li>
                                                )
                                            })
                                    }
                                </ul>

                                <button className="main-btn text-regular-16">Ko'proq ko'rsatish</button>
                            </div>
                        </div>
                    </div>
                    :
                    // error message
                    <div className="container space-y-6">
                        <h1>Nimadir xato ketdi...</h1>
                        <p className='text-semibold-20'>Bu nimadan bo'lishi mumkin?</p>
                        <ul className='list-[initial] pl-5 space-y-4'>
                            <li>Sahifa havolasi notog'ri kiritilgan bo'lishi mumkin</li>
                            <li>Mahsulot ma'lumotlari xato yuklangan bo'lishi mumkin</li>
                        </ul>
                        <Link to={-1} className='main-btn'>Oldingi sahifaga qaytish</Link>
                    </div>
            }
        </div >
    )
};

export default ProductDetail;