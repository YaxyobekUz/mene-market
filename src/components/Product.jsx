import React from "react";
import { Link } from "react-router-dom";

// components
import StarRating from "./StarRating";

// data
import { imageBaseUrl } from "../data/data";

// helpers
import { formatNumber } from "../helpers/helpers";

// images
import shoppingCart from "../assets/images/svg/shopping-cart.svg";

const Product = ({ product }) => {
  return (
    <li className="flex flex-col w-full rounded-3xl shadow-md">
      {/* image  */}
      <img
        width={292}
        height={292}
        alt="product image"
        src={imageBaseUrl + product.imageMetadatas[0].mediumImageFilePath}
        className="w-full h-auto aspect-square object-cover bg-primary-gray-500 rounded-20 mb-4"
      />

      {/* body */}
      <div className="flex flex-col gap-4 h-full p-5 pt-0">
        {/* main content */}
        <div className="flex flex-col gap-3 grow">
          {/* title */}
          <h3 className="text-base font-semibold line-clamp-3">
            {product.name}
          </h3>

          {/* rating */}
          <StarRating value={3.8} showText />

          {/* price wrapper */}
          <div className="flex flex-wrap gap-3">
            <p className="text-base font-semibold">
              {formatNumber(product.price)} so'm
            </p>

            {product.scidPrice && product.scidPrice > 0 ? (
              <del className="text-primary-gray-500 text-base font-semibold">
                {formatNumber(product.scidPrice)} so'm
              </del>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* btn */}
        <Link
          to={`/products/product/${product.productId}`}
          className="btn-primary_linear-blue"
        >
          <img
            width={20}
            height={20}
            src={shoppingCart}
            alt="shopping cart"
            className="w-5 h-5"
          />
          <span className="text-regular-16">Xarid qilish</span>
        </Link>
      </div>
    </li>
  );
};

export default Product;
