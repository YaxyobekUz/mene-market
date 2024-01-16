import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../assets/data';
import { useParams } from 'react-router-dom';

// images
import stars from '../assets/images/svg/stars.svg';
import shoppingCart from '../assets/images/svg/shopping-cart.svg';
const Category = () => {
    const { categoryName } = useParams();
    console.log(categoryName);
    const data = productsData.filter((product) => product.type.toLocaleLowerCase() === categoryName.toLowerCase());
    return (
        <div className='pb-16 max-768:pb-14 max-450:pb-10'>
            <div className="container">
                {/* products */}
                <ul className="grid-4 products mb-9">
                    {
                        data.map((product) => {
                            return (
                                <li key={product.id} className="product">
                                    <img width={296} height={296} src={product.images[0].src} alt="" className="product_img" />
                                    {/* content */}
                                    <div className="product_content">
                                        <h3 className="product_title">{product.name}</h3>
                                        {/* rating */}
                                        <div className="product_rating-wrapper">
                                            <img width={80} height={18} src={stars} alt="" />
                                            <span className='product_rating-number'>
                                                <span>3.5/</span>
                                                <span className="text-primary-gray-500">5</span>
                                            </span>
                                        </div>
                                        {/* price */}
                                        <p className="product_price">$240</p>
                                        {/* buttons wrapper */}
                                        <div className="product_btns-wrapper">
                                            <Link to={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`} className='product_buy-btn'>
                                                <img width={20} height={20} src={shoppingCart} alt="shopping cart" className="product_buy-btn_icon" />
                                                <span className='product_buy-btn_text'>Xarid qilish</span>
                                            </Link>

                                            <button className="product_toggle-like-btn">
                                                <svg className='product_toggle-like-btn_icon' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                    <path className='active:fill-red-500' fill="transparent" d="M12.62 21.2998C12.28 21.4198 11.72 21.4198 11.38 21.2998C8.48 20.3098 2 16.1798 2 9.17984C2 6.08984 4.49 3.58984 7.56 3.58984C9.38 3.58984 10.99 4.46984 12 5.82984C13.01 4.46984 14.63 3.58984 16.44 3.58984C19.51 3.58984 22 6.08984 22 9.17984C22 16.1798 15.52 20.3098 12.62 21.2998Z" stroke="#FE3A30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
};

export default Category;