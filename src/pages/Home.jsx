import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import NewProducts from '../components/NewProducts';
import PopularProducts from '../components/PopularProducts';
import Faq from '../components/Faq';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Hero />
            <Categories />
            <NewProducts />
            <PopularProducts />
            <Faq />
        </>
    )
};

export default Home;