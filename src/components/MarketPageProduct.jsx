import React from "react";
import { Link } from "react-router-dom";

// components
import StarRating from "./StarRating";

// data
import { imageBaseUrl } from "../data/data";

// helpers
import { formatNumber } from "../helpers/helpers";

// images
import flowIcon from "../assets/images/svg/flow.svg";

const MarketPageProduct = ({ product, imageOnClick, buttonOnClick }) => {
  return (
    <li className="flex flex-col w-full rounded-3xl shadow-md bg-linear-gradient_black-800">
      {/* image  */}
      <img
        width={292}
        height={292}
        alt="product image"
        onClick={imageOnClick}
        src={imageBaseUrl + product.imageMetadatas[0].mediumImageFilePath}
        className="w-full h-auto aspect-square object-cover bg-primary-gray-500 rounded-20 mb-4"
      />

      {/* body */}
      <div className="flex flex-col gap-4 h-full p-5 pt-0">
        {/* main content */}
        <div className="flex flex-col gap-3 grow">
          {/* title */}
          <h3 className="text-base font-semibold">{product.name}</h3>

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

          <ul className="space-y-3">
            {/* category */}
            <li className="flex-center-between flex-wrap gap-2.5">
              <h3 className="text-base font-semibold">Mavjud:</h3>

              <p className="text-regular-16 font-medium text-primary-gray-500">
                0 ta
              </p>
            </li>

            <li className="flex-center-between flex-wrap gap-2.5">
              <h3 className="text-base font-semibold">To'lov:</h3>

              <p className="text-regular-16 font-medium text-primary-gray-500">
                {formatNumber(product.advertisingPrice)} so'm
              </p>
            </li>
          </ul>
        </div>

        {/* btn */}
        <button
          onClick={buttonOnClick}
          className="btn-primary_linear-blue w-full"
        >
          <img
            width={20}
            height={20}
            src={flowIcon}
            alt="shopping cart"
            className="w-5 h-5"
          />
          <span className="text-regular-16">Oqim yaratish</span>
        </button>
      </div>
    </li>
  );
};

export default MarketPageProduct;
