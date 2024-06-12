import React from "react";

// components & sections
import Hero from "../components/Hero";
import Advantage from "../components/Advantage";
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

      <section className="pt-11 pb-36 max-640:pb-24 max-540:pb-14">
        <div className="container">
          <h2 className="mb-6">Mene Market qulayliklari</h2>

          {/* main content */}
          <Advantage />
        </div>
      </section>
    </>
  );
};

export default Home;
