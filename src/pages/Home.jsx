import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import NewProducts from "../components/NewProducts";
import PopularProducts from "../components/PopularProducts";
import Faq from "../components/Faq";

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
