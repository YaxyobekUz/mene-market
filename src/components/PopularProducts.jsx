import React from "react";
import { Link } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

// components
import Product from "./Product";
import ProductLoader from "./ProductLoader";

const PopularProducts = () => {
  const productsData = useSelector((store) => store.productsData);

  return (
    <section className="py-11">
      <div className="container">
        <h2 className="mb-6">Yangi mahsulotlar</h2>

        {/* products */}
        {!productsData.loader ? (
          productsData.data && (
            <ul className="grid-4 products mb-9">
              {productsData.data.allProducts.map((product) => (
                <Product key={product.productId} product={product} />
              ))}
            </ul>
          )
        ) : (
          <ul className="grid-4 products mb-9">
            {Array.from({ length: 12 }).map((_, index) => (
              <ProductLoader key={index} />
            ))}
          </ul>
        )}

        {/* products link */}
        <Link to="/products/all" className="main-btn border-primary-black-800">
          <span>Barcha mahsulotlar</span>
          {/* icon */}
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M14.43 6.90979L20.5 12.9798L14.43 19.0498"
              stroke="#13181F"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.5 12.9797H20.33"
              stroke="#13181F"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default PopularProducts;
