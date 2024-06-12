import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

// components
import Product from "../components/Product";
import ProductLoader from "../components/ProductLoader";

// images
import packageBox from "../assets/images/svg/package-box.svg";

const Search = () => {
  const { searchQuery } = useParams();
  const [products, setProducts] = useState([]);
  const productsData = useSelector((store) => store.productsData);

  useEffect(() => {
    if (
      productsData.data.allProducts &&
      productsData.data.allProducts.length > 0
    ) {
      const filteredProducts = productsData.data.allProducts.filter(
        (product) => {
          return product.name.toLowerCase().includes(searchQuery.toLowerCase());
        }
      );
      setProducts(filteredProducts);
    }
  }, [searchQuery, productsData]);

  return (
    <div className="container">
      {/* products */}
      {!productsData.loader ? (
        <ul className="grid-4 products mb-9">
          {products.map((product) => (
            <Product key={product.productId} product={product} />
          ))}
        </ul>
      ) : (
        <ul className="grid-4 products mb-9">
          {Array.from({ length: 8 }).map((_, index) => (
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
            className="w-[72px] h-[72px] max-640:w-14 max-640:h-14"
          />
          <div className="space-y-1">
            <h1 className="text-2xl max-640:text-xl">Mahsulotlar topilmadi!</h1>

            <p className="text-primary-gray-500 max-640:text-base max-640:leading-[18px]">
              <span>Ushbu </span>
              <span className="text-primary-black-800">"{searchQuery}" </span>
              <span>
                qidiruv natijasiga ko'ra hech qanday mahsulot topilmadi.
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
