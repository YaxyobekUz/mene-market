import React from "react";

// components
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import NewProducts from "../components/NewProducts";
import PopularProducts from "../components/PopularProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <NewProducts />
      <PopularProducts />
      <Faq />
    </>
  );
};

export default Home;
