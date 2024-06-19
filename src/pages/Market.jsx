import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

// data
import { imageBaseUrl, productTypesData } from "../data/data";

// components
import ProductLoader from "../components/ProductLoader";
import ImageViewerModal from "../components/ImageViewerModal";
import MarketPageProduct from "../components/MarketPageProduct";

// images
import packageBox from "../assets/images/svg/package-box.svg";

const Market = () => {
  const { productType } = useParams();
  const [products, setProducts] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [productsImage, setProductsImage] = useState([]);
  const productsData = useSelector((store) => store.productsData);
  const closeImageViewerModal = () => setOpenImageViewerModal(false);
  const [openImageViewerModal, setOpenImageViewerModal] = useState(false);
  const pathArr = location.pathname.split("/").filter((item) => item !== "");

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
  }, [productTypesData, productType, productsData]);

  // set products image
  useEffect(() => {
    if (products && products.length > 0) {
      setProductsImage(
        products.map(
          (product) =>
            imageBaseUrl + product.imageMetadatas[0].hightImageFilePath
        )
      );
    }
  }, [products]);

  return (
    <div>
      {/* tab buttons */}
      <div className="flex gap-2.5 overflow-x-auto scroll_gray pb-4 p-0.5 mb-6">
        <NavLink
          to="/admin/market/all"
          className={`${
            pathArr.length === 2 ? "active" : ""
          } main-btn min-w-max bg-transparent`}
        >
          Barchasi
        </NavLink>

        {productTypesData.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={"/admin/market/" + item.value}
              className="main-btn min-w-max bg-transparent"
            >
              {item.label}
            </NavLink>
          );
        })}
      </div>

      {/* products */}
      {!productsData.loader ? (
        <ul className="grid  grid-cols-4 gap-5 mb-9 max-1320:grid-cols-3 max-860:grid-cols-2 max-540:grid-cols-1">
          {products.map((product, index) => (
            <MarketPageProduct
              product={product}
              key={product.productId}
              imageOnClick={() => {
                setImageIndex(index);
                setOpenImageViewerModal(true);
              }}
            />
          ))}
        </ul>
      ) : (
        <ul className="grid-4 products mb-9">
          {Array.from({ length: 12 }).map((_, index) => (
            <ProductLoader key={index} />
          ))}
        </ul>
      )}

      {/* empty data */}
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

      {/* open image viewer modal */}
      {openImageViewerModal && (
        <ImageViewerModal
          alt="product image"
          images={productsImage}
          initialSlide={imageIndex}
          closeModal={closeImageViewerModal}
        />
      )}
    </div>
  );
};

export default Market;
