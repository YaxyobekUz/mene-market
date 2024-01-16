import React from 'react';
import { Link } from 'react-router-dom';

// images
import housholdAppliancesImg from '../assets/images/other/category_household-appliances.png';
import firstAidImg from '../assets/images/other/first-aid.png';
import parfumeryImg from '../assets/images/other/parfumery.png';
import smartphoneImg from '../assets/images/other/iphone-14pro.png';
import toysImg from '../assets/images/other/toys.png';
import laptopImg from '../assets/images/other/laptop.png';
import carImg from '../assets/images/other/bmw.png';
import electronicsImg from '../assets/images/other/electronics.png';

const Categories = () => {
    return (
        <section className='categories-section'>
            <div className="container">
                <h2 className="mb-6">Kategoriyalar</h2>
                <ul className="categories-section_list scroll_hidden">
                    <li className="categories-section_list-item">
                        <Link to='/category/electronics' className='item_content'>
                            <span className="item_circle bg-[#BED6EF]">
                                <span className="item_circle-child bg-[#8DB8E2]">
                                    <img width={92} height={65} src={electronicsImg} alt="" className="item_img" />
                                </span>
                            </span>
                            <span className="item_text">Elektronika</span>
                        </Link>
                    </li>

                    <li className="categories-section_list-item">
                        <Link to='/category/health' className='item_content'>
                            <span className="item_circle bg-[#FAAEAD]">
                                <span className="item_circle-child bg-[#F56666]">
                                    <img width={97} height={69} src={firstAidImg} alt="" className="item_img" />
                                </span>
                            </span>
                            <span className="item_text">Salomatlik</span>
                        </Link>
                    </li>

                    <li className="categories-section_list-item">
                        <Link to='/category/perfumery' className='item_content'>
                            <span className="item_circle bg-[#F4E094]">
                                <span className="item_circle-child bg-[#EFCC4E]">
                                    <img width={85} height={71} src={parfumeryImg} alt="" className="item_img" />
                                </span>
                            </span>
                            <span className="item_text">Parfyumeriya</span>
                        </Link>
                    </li>

                    <li className="categories-section_list-item">
                        <Link to='/category/houshold-applicances' className='item_content'>
                            <span className="item_circle bg-[#C1F4AF]">
                                <span className="item_circle-child bg-[#90EB70]">
                                    <img width={69} height={59} src={housholdAppliancesImg} alt="" className="item_img" />
                                </span>
                            </span>
                            <span className="item_text">Maishiy texnika</span>
                        </Link>
                    </li>

                    <li className="categories-section_list-item">
                        <Link to='/category/phone' className='item_content'>
                            <span className="item_circle bg-[#C5BEEE]">
                                <span className="item_circle-child bg-[#A095E4]">
                                    <img width={37} height={65} src={smartphoneImg} alt="" className="item_img" />
                                </span>
                            </span>
                            <span className="item_text">Telefonlar</span>
                        </Link>
                    </li>

                    <li className="categories-section_list-item">
                        <Link to='/category/computer' className='item_content'>
                            <span className="item_circle bg-[#8DB8E2]">
                                <span className="item_circle-child bg-[#BED6EF]">
                                    <img width={69} height={49} src={laptopImg} alt="" className="item_img" />
                                </span>
                            </span>
                            <span className="item_text">Kompyuterlar</span>
                        </Link>
                    </li>

                    <li className="categories-section_list-item">
                        <Link to='/category/car' className='item_content'>
                            <span className="item_circle bg-[#FAAEAD]">
                                <span className="item_circle-child bg-[#F56666]">
                                    <img width={63} height={57} src={carImg} alt="" className="item_img" />
                                </span>
                            </span>
                            <span className="item_text">Mashinalar</span>
                        </Link>
                    </li>

                    <li className="categories-section_list-item">
                        <Link to='/category/toy' className='item_content'>
                            <span className="item_circle bg-[#F4E094]">
                                <span className="item_circle-child bg-[#EFCC4E]">
                                    <img width={85} height={64} src={toysImg} alt="" className="item_img" />
                                </span>
                            </span>
                            <span className="item_text">Bolalar uchun</span>
                        </Link>
                    </li>

                </ul>
            </div>
        </section>
    )
};

export default Categories;