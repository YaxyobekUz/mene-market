import React, { useState } from 'react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// swiper modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const ProductDetails = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='pb-32'>
            <div className="container">
                {/* content */}
                <div className="grid grid-cols-2 gap-6">
                    {/* product image (swiper container) */}
                    <div className="flex gap-2.5 w-full h-[644px]">
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
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt='nature image' className='vertical-product-swiper_img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='nature image' className='vertical-product-swiper_img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='nature image' className='vertical-product-swiper_img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='nature image' className='vertical-product-swiper_img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt='nature image' className='vertical-product-swiper_img' />
                            </SwiperSlide>
                        </Swiper>

                        {/* img large */}
                        <Swiper
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="product-swiper"
                        >
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt='nature image' className='product-swiper_img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='nature image' className='product-swiper_img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='nature image' className='product-swiper_img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='nature image' className='product-swiper_img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt='nature image' className='product-swiper_img' />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductDetails;