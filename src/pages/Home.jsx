import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import NewProducts from '../components/NewProducts';

const Home = () => {
    return (
        <>
            <Hero />
            <Categories />
            <NewProducts />
        </>
    )
};

export default Home;