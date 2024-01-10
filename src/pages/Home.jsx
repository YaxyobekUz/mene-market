import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import NewProducts from '../components/NewProducts';
import PopularProducts from '../components/PopularProducts';
import Faq from '../components/Faq';
import Products from './Products';

const Home = () => {
    return (
        <>
            <Hero />
            <Categories />
            <NewProducts />
            <PopularProducts />
            <Faq />
            <Products />
        </>
    )
};

export default Home;