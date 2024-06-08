import React from "react";
import { Link } from "react-router-dom";

// components
import StarRating from "./StarRating";

// images
import shoppingCart from "../assets/images/svg/shopping-cart.svg";
import { formatNumber } from "../helpers/helpers";

const Product = ({ product }) => {
  return (
    <li className="flex flex-col w-full rounded-3xl shadow-md">
      {/* image  */}
      <img
        width={292}
        height={292}
        alt="product image"
        className="w-full h-auto aspect-square object-cover bg-primary-gray-500 rounded-20 mb-4"
        src={product.images[0].src}
      />

      {/* body */}
      <div className="flex flex-col gap-4 h-full p-5 pt-0">
        {/* main content */}
        <div className="flex flex-col gap-3 grow">
          {/* title */}
          <h3>{product.name}</h3>

          {/* rating */}
          <StarRating value={3.4} showText />

          {/* price wrapper */}
          <div className="flex flex-wrap gap-2">
            <p>{formatNumber(260000)} so'm</p>
            <del className="text-primary-gray-500">
              {formatNumber(300000)} so'm
            </del>
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
