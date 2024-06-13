import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

// data
import { productTypesData } from "../data/data";

// components
import Product from "../components/Product";
import ProductLoader from "../components/ProductLoader";

// images
import packageBox from "../assets/images/svg/package-box.svg";

const Products = () => {
  const { productType } = useParams();
  const [products, setProducts] = useState([]);
  const productsData = useSelector((store) => store.productsData);

  // set products by type
  useEffect(() => {
    if (
      productsData.data.allProducts &&
      productsData.data.allProducts.length > 0
    ) {
      if (!productType || productType === "all") {
        setProducts(productsData.data.allProducts);
      } else {
        setProducts(
          productsData.data.allProducts.filter(
            (product) => product.productType === productType
          )
        );
      }
    }
  }, [productTypesData, productType]);

  return (
    <div className="pb-32">
      <div className="container">
        {/* tab buttons */}
        <div className="flex gap-2.5 overflow-x-auto scroll_gray pb-4 p-0.5 mb-6">
          <NavLink to="/products/all" className="main-btn min-w-max">
            Barchasi
          </NavLink>

          {productTypesData.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={"/products/" + item.value}
                className="main-btn min-w-max"
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>

        {/* products */}
        {!productsData.loader ? (
          <ul className="grid-4 products mb-9">
            {products.map((product) => (
              <Product key={product.productId} product={product} />
            ))}
          </ul>
        ) : (
          <ul className="grid-4 products mb-9">
            {Array.from({ length: 12 }).map((_, index) => (
              <ProductLoader key={index} />
            ))}
          </ul>
        )}

        {/* no data */}
        {products.length === 0 && !productsData.loader && (
          <div className="flex-center gap-4">
            <img
              width={72}
              height={72}
              src={packageBox}
              alt="package box"
              className="w-[72px] h-[72px]"
            />
            <div className="space-y-1">
              <h1 className="text-2xl">Mahsulotlar mavjud emas!</h1>
              <p className="opacity-80">
                Ushbu sahifada hech qanday mahsulot mavjud emas.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
