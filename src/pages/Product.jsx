import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// helpers
import {
  formatDate,
  getElement,
  formatNumber,
  errorNotification,
  checkInputValueByRegex,
  checkInputValueByLength,
  calculateProductRatingByReviews,
  } from "../helpers/helpers";
  
  // antd
  import "../css/antd.css";
  import { Select } from "antd";
  
  // data
import { imageBaseUrl } from "../data/data";

// axios
import axiosConfig from "../api/axios/axios";

// components
import DotsLoader from "../components/DotsLoader";
import StarRating from "../components/StarRating";

// swiper
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// react input mask
import InputMask from "react-input-mask";

// redux
import { useDispatch, useSelector } from "react-redux";
import { addNewRequestData } from "../store/slices/productRequestsDataSlice";

// images
import cartIcon from "../assets/images/svg/cart-icon.svg";
import plusIcon from "../assets/images/svg/plus-square-icon.svg";
import minusIcon from "../assets/images/svg/minus-square-icon.svg";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const [loader, setLoader] = useState(false);
  const [address, setAddress] = useState(null);
  const [product, setProduct] = useState(null);
  const [loader2, setLoader2] = useState(false);
  const [productCount, setProductCount] = useState(1);
  const [showReviews, setShowReviews] = useState(false);
  const [productRating, setProductRating] = useState(5);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const productsData = useSelector((store) => store.productsData);
  const [selectedProductTypeIndex, setSelectedProductTypeIndex] = useState(0);

  const getProductData = () => {
    axiosConfig
      .get("/Product/ById?id=" + productId)
      .then((res) => {
        if (res.status === 200) {
          setProduct(res.data);
        }
      })
      .finally(() => setLoader(false));
  };

  // set product data
  useEffect(() => {
    setLoader(true);
    if (
      productsData.data.allProducts &&
      productsData.data.allProducts.length > 0
    ) {
      const findProduct = productsData.data.allProducts.find(
        (product) => product.productId === productId
      );
      setProduct(findProduct);
      setTimeout(() => setLoader(true), 200);
    } else {
      getProductData();
    }
  }, [productsData]);

  // set product rating
  useEffect(() => {
    if (product) {
      const rating = calculateProductRatingByReviews(product.comments);
      setProductRating(rating);
    }
  }, [product]);

  // send product request
  const sendRequest = (e) => {
    e.preventDefault();

    const elNameInput = getElement(e, ".js-name-input");
    const elAddressSelect = getElement(e, ".js-address-select");
    const elPhoneNumberInput = getElement(e, ".js-telephone-number-input");

    // check form elements value
    if (address) elAddressSelect.classList.remove("is-invalid");
    else elAddressSelect.classList.add("is-invalid");
    const formattedNumbers = elPhoneNumberInput.value.replace(/[^\d]/g, "");
    const phoneNumber = checkInputValueByLength(
      elPhoneNumberInput,
      formattedNumbers,
      12
    );
    const name = checkInputValueByRegex(elNameInput);

    // send a request
    if (!loader2 && phoneNumber && name && address) {
      setLoader2(true);

      const formData = {
        status: 0,
        userRegion: address,
        productId: product.productId,
        userName: elNameInput.value.trim(),
        userPhoneNumber: elPhoneNumberInput.value,
        productTypeId:
          product.productTypes[selectedProductTypeIndex].productTypeId,
      };

      axiosConfig
        .post("/ProductRequest", formData)
        .then((res) => {
          if (res.status === 200) {
            navigate("/success");
            dispatch(addNewRequestData(res.data));
          } else errorNotification();
        })
        .catch(() => errorNotification.offline())
        .finally(() => setLoader2(false));
    }
  };

  return (
    <div className="pb-32">
      <div className="container">
        {!productsData.loader
          ? product && (
              <div className="space-y-12">
                {/* product content */}
                <div className="grid grid-cols-2 gap-6 max-768:grid-cols-1">
                  {/* swiper wrapper */}
                  <div className="flex sticky gap-2.5 w-full h-644 top-28 max-1024:h-520 max-860:h-440 max-768:static max-768:h-644 max-640:h-520 max-490:h-440 max-375:h-[380px]">
                    <Swiper
                      freeMode={true}
                      spaceBetween={10}
                      slidesPerView={4}
                      direction={"vertical"}
                      watchSlidesProgress={true}
                      onSwiper={setThumbsSwiper}
                      className="vertical-product-swiper max-450:!hidden"
                      modules={[FreeMode, Navigation, Thumbs]}
                    >
                      {product.imageMetadatas.map((img) => {
                        return (
                          <SwiperSlide key={img.id}>
                            <img
                              width={115}
                              height={153}
                              alt="product image"
                              className="vertical-product-swiper_img"
                              src={imageBaseUrl + img.hightImageFilePath}
                            />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>

                    {/* img large */}
                    <Swiper
                      spaceBetween={10}
                      navigation={true}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="product-swiper"
                    >
                      {product.imageMetadatas.map((img) => {
                        return (
                          <SwiperSlide key={img.id}>
                            <img
                              width={483}
                              height={644}
                              alt="product image"
                              className="product-swiper_img"
                              src={imageBaseUrl + img.lowImageFilePath}
                            />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>

                  {/* product main content */}
                  <div className="space-y-6">
                    {/* product title wrapper */}
                    <div className="space-y-2">
                      <div className="flex-start-between mb-2">
                        <span className="text-regular-16">
                          {product.numberSold}ta buyurtma
                        </span>

                        {/* rating */}
                        <StarRating value={productRating} showText />
                      </div>

                      {/* product name */}
                      <h1 className="text-2xl font-semibold max-490:text-xl">
                        {product.name}
                      </h1>
                    </div>

                    {/* select product type */}
                    {product.productTypes.length > 1 && (
                      <div className="space-y-2">
                        <h3 className="text-regular-16">
                          Mahsulot turini tanlang:
                        </h3>

                        {/* products type buttons */}
                        <div className="flex flex-wrap gap-2.5">
                          {product.productTypes.map((productType, index) => (
                            <button
                              key={productType.productTypeId}
                              disabled={productType.count === 0}
                              onClick={() => {
                                productType.count !== 0 &&
                                  setSelectedProductTypeIndex(index);
                                setProductCount(1);
                              }}
                              className={`${
                                selectedProductTypeIndex === index
                                  ? "active"
                                  : ""
                              } product-type-btn`}
                            >
                              {productType.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* select product count */}
                    <div className="space-y-2">
                      <p className="text-regular-16">Miqdori:</p>

                      <div className="flex-center gap-2.5 flex-wrap">
                        <div className="flex items-center gap-2 relative p-2 rounded-full border border-primary-black-800">
                          {/* decrement */}
                          <button
                            disabled={productCount < 2}
                            className="disabled:opacity-50"
                            onClick={() =>
                              productCount > 1 &&
                              setProductCount(productCount - 1)
                            }
                          >
                            <img
                              width={24}
                              height={24}
                              src={minusIcon}
                              alt="minus icon"
                              className="w-6 h-6"
                            />
                          </button>

                          {/* product count number */}
                          <span className="flex-center justify-center min-w-[60px]">
                            {productCount}
                          </span>

                          {/* increment */}
                          <button
                            className="disabled:opacity-50"
                            onClick={() => {
                              product.productTypes[selectedProductTypeIndex]
                                .count > productCount &&
                                setProductCount(productCount + 1);
                            }}
                            disabled={
                              product.productTypes[selectedProductTypeIndex]
                                .count -
                                1 <
                              productCount
                            }
                          >
                            <img
                              width={24}
                              height={24}
                              src={plusIcon}
                              alt="plus icon"
                              className="w-6 h-6"
                            />
                          </button>
                        </div>

                        {/* available products number */}
                        <p className="text-regular-16 text-secondary-green-500">
                          <span>Sotuvda </span>
                          <span className="font-medium">
                            {formatNumber(
                              product.productTypes[selectedProductTypeIndex]
                                .count
                            )}
                          </span>
                          <span> dona mavjud</span>
                        </p>
                      </div>
                    </div>

                    {/* price */}
                    <div className="space-y-2">
                      <h3 className="text-regular-16">Narxi:</h3>

                      {/* price wrapper */}
                      <div className="flex-center flex-wrap gap-2.5 text-semibold-20">
                        <p>{formatNumber(product.price)} so'm</p>

                        {/* discount price */}
                        {product.scidPrice && product.scidPrice !== 0 ? (
                          <del className="text-primary-gray-500">
                            {formatNumber(product.scidPrice)} so'm
                          </del>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>

                    {/* information */}
                    <div
                      title="information"
                      className="flex-start gap-2 p-4 bg-primary-blue-50 rounded-lg border border-primary-skyblue-500"
                    >
                      {/* info icon */}
                      <svg
                        fill="none"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        className="w-4 h-4 min-w-max"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.70085 1.33333C5.02751 1.33333 2.03418 4.32667 2.03418 8C2.03418 11.6733 5.02751 14.6667 8.70085 14.6667C12.3742 14.6667 15.3675 11.6733 15.3675 8C15.3675 4.32667 12.3742 1.33333 8.70085 1.33333ZM8.20085 5.33333C8.20085 5.06 8.42751 4.83333 8.70085 4.83333C8.97418 4.83333 9.20085 5.06 9.20085 5.33333V8.66667C9.20085 8.94 8.97418 9.16667 8.70085 9.16667C8.42751 9.16667 8.20085 8.94 8.20085 8.66667V5.33333ZM9.31418 10.92C9.28085 11.0067 9.23418 11.0733 9.17418 11.14C9.10751 11.2 9.03418 11.2467 8.95418 11.28C8.87418 11.3133 8.78751 11.3333 8.70085 11.3333C8.61418 11.3333 8.52751 11.3133 8.44751 11.28C8.36751 11.2467 8.29418 11.2 8.22751 11.14C8.16751 11.0733 8.12085 11.0067 8.08751 10.92C8.05418 10.84 8.03418 10.7533 8.03418 10.6667C8.03418 10.58 8.05418 10.4933 8.08751 10.4133C8.12085 10.3333 8.16751 10.26 8.22751 10.1933C8.29418 10.1333 8.36751 10.0867 8.44751 10.0533C8.60751 9.98667 8.79418 9.98667 8.95418 10.0533C9.03418 10.0867 9.10751 10.1333 9.17418 10.1933C9.23418 10.26 9.28085 10.3333 9.31418 10.4133C9.34751 10.4933 9.36751 10.58 9.36751 10.6667C9.36751 10.7533 9.34751 10.84 9.31418 10.92Z"
                          fill="url(#paint0_linear_514_5204)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_514_5204"
                            x1="2.03418"
                            y1="1.33333"
                            x2="17.7847"
                            y2="5.47547"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#08C8F9" />
                            <stop offset="1" stopColor="#1A3EDD" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* description */}
                      <p className="text-regular-14 text-primary-black-800 max-375:text-regular-13">
                        Yetkazib berish summasi manzilingizga ko'ra 20,000
                        so'mdan boshlanadi. Agar 2 ta mahsulot xarid qilsangiz
                        yetkazib berish bepul. (Bonusli mahsulotlar bundan
                        mustasno)
                      </p>
                    </div>

                    {/* form */}
                    <form onSubmit={sendRequest}>
                      <h3 className="mb-6">Buyurtmani rasmiylashtirish</h3>

                      {/* form main content */}
                      <div className="space-y-4">
                        {/* full name */}
                        <label className="input-wrapper">
                          <input
                            type="text"
                            placeholder=""
                            name="user name"
                            title="your name"
                            className="js-name-input input"
                          />
                          <span className="placeholder">Ismingiz</span>
                        </label>

                        {/* telephone number */}
                        <label className="input-wrapper">
                          <InputMask mask="+\9\9\8 (99) 999-99-99">
                            {(inputProps) => (
                              <input
                                type="tel"
                                placeholder=""
                                {...inputProps}
                                className="js-telephone-number-input input"
                                name="user telephone number"
                                title="your telephone number"
                              />
                            )}
                          </InputMask>

                          <span className="placeholder">
                            Telefon raqamingiz
                          </span>
                        </label>

                        {/* address */}
                        <label className="input-wrapper">
                          <Select
                            showSearch
                            placeholder=""
                            optionFilterProp="children"
                            onChange={(e) => setAddress(e)}
                            className="js-address-select product-page-select"
                            filterOption={(input, option) =>
                              option.label
                                .toLowerCase()
                                .includes(input.toLowerCase())
                            }
                            filterSort={(optionA, optionB) =>
                              optionA.label
                                .toLowerCase()
                                .localeCompare(optionB.label.toLowerCase())
                            }
                            options={[
                              {
                                value: "Toshkent shahri",
                                label: "Toshkent shahri",
                              },
                              {
                                value: "Andijon",
                                label: "Andijon",
                              },
                              {
                                value: "Buxoro",
                                label: "Buxoro",
                              },
                              {
                                value: "Farg'ona",
                                label: "Farg'ona",
                              },
                              {
                                value: "Jizzax",
                                label: "Jizzax",
                              },
                              {
                                value: "Namangan",
                                label: "Namangan",
                              },
                              {
                                value: "Navoiy",
                                label: "Navoiy",
                              },
                              {
                                value: "Qashqadaryo",
                                label: "Qashqadaryo",
                              },
                              {
                                value: "Qoraqalpog'iston",
                                label: "Qoraqalpog'iston",
                              },
                              {
                                value: "Samarqand",
                                label: "Samarqand",
                              },
                              {
                                value: "Sirdaryo",
                                label: "Sirdaryo",
                              },
                              {
                                value: "Surxondaryo",
                                label: "Surxondaryo",
                              },
                              {
                                value: "Toshkent viloyati",
                                label: "Toshkent viloyati",
                              },
                              {
                                value: "Xorazm",
                                label: "Xorazm",
                              },
                            ]}
                          />

                          {/* placeholder */}
                          <span
                            className={`${address ? "active" : ""} placeholder`}
                          >
                            Manzilingiz
                          </span>
                        </label>

                        {/* submit btn */}
                        <button
                          disabled={loader2}
                          className="btn-primary_linear-blue rounded-full px-4 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {!loader2 ? (
                            <>
                              <span className="text-regular-16">
                                Xarid qilish
                              </span>

                              {/* icon */}
                              <img
                                width={16}
                                height={16}
                                src={cartIcon}
                                alt="cart icon"
                                className="w-4 h-4"
                              />
                            </>
                          ) : (
                            <DotsLoader className="px-[35px]" />
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* product description & product reviews */}
                <div className="space-y-6">
                  {/* tab buttons */}
                  <div className="flex gap-6">
                    <button
                      onClick={() => setShowReviews(false)}
                      className={`${
                        !showReviews ? "active" : ""
                      } product-page-tab-btn`}
                    >
                      Mahsulot tavsifi
                    </button>

                    <button
                      onClick={() => setShowReviews(true)}
                      className={`${
                        showReviews ? "active" : ""
                      } product-page-tab-btn`}
                    >
                      Izohlar
                    </button>
                  </div>

                  {/* product description */}
                  {!showReviews ? (
                    <p className="text-regular-16 font-medium text-primary-gray-500">
                      {product.description}
                    </p>
                  ) : (
                    // product reviews
                    <div className="space-y-6">
                      {/* content header */}
                      <div className="flex-center-between gap-3 flex-wrap">
                        <p className="text-semibold-20">
                          <span>Jami izohlar soni: </span>
                          <span className="text-medium-18 text-primary-gray-500">
                            {product.comments.length}ta
                          </span>
                        </p>

                        {/* open leave comment modal btn */}
                        <button className="btn-primary_skyblue bg-primary-black-800 px-5">
                          Izoh qoldirish
                        </button>
                      </div>

                      {/* reviews list */}
                      <ul className="grid grid-cols-2 gap-5 max-768:grid-cols-1">
                        {product.comments.map((comment) => {
                          return comment.isAproved ? (
                            <li
                              key={comment.id}
                              className="flex-start flex-col gap-5 h-auto p-8 rounded-20 border border-[#EDEDED] max-860:p-6 max-375:p-4"
                            >
                              {/* main content */}
                              <div className="space-y-3.5 grow">
                                {/* rating */}
                                <StarRating value={Number(comment.status)} />

                                {/* title */}
                                <h3 className="text-semibold-20 max-450:text-medium-18">
                                  {comment.userName}
                                </h3>

                                {/* description */}
                                <p className="text-regular-16 text-primary-gray-500">
                                  {comment.description}
                                </p>
                              </div>

                              {/* date */}
                              <p className="w-full text-end text-regular-16 text-primary-gray-500">
                                {formatDate(comment.modifiedDate)}
                              </p>
                            </li>
                          ) : null;
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )
          : "loading"}

        {/* <div className="space-y-6">
          <h1>Nimadir xato ketdi...</h1>
          <p className="text-semibold-20">Bu nimadan bo'lishi mumkin?</p>
          <ul className="list-[initial] pl-5 space-y-4">
            <li>Sahifa havolasi notog'ri kiritilgan bo'lishi mumkin</li>
            <li>Mahsulot ma'lumotlari xato yuklangan bo'lishi mumkin</li>
          </ul>
          <Link to={-1} className="main-btn">
            Oldingi sahifaga qaytish
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Product;
