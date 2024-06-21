import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

// helpers
import {
  getElement,
  errorNotification,
  successNotification,
  checkInputValueByLength,
} from "../helpers/helpers";

// react input mask
import InputMask from "react-input-mask";

// axios
import axiosConfig from "../api/axios/axios";

// data
import { imageBaseUrl, productTypesData } from "../data/data";

// components
import EmptyData from "../components/EmptyData";
import ProductLoader from "../components/ProductLoader";
import ImageViewerModal from "../components/ImageViewerModal";
import MarketPageProduct from "../components/MarketPageProduct";
import ConfirmationModal from "../components/ConfirmationModal";

// redux
import { useDispatch, useSelector } from "react-redux";
import { addUserOfferLinkData } from "../store/slices/userDataSlice";

// images
import doneIcon from "../assets/images/svg/done.svg";

const Market = () => {
  const dispatch = useDispatch();
  const { productType } = useParams();
  const [loader, setLoader] = useState(false);
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState("");
  const [imageIndex, setImageIndex] = useState(0);
  const [productsImage, setProductsImage] = useState([]);
  const userData = useSelector((store) => store.userData);
  const productsData = useSelector((store) => store.productsData);
  const closeImageViewerModal = () => setOpenImageViewerModal(false);
  const [openImageViewerModal, setOpenImageViewerModal] = useState(false);
  const [openCreateStreamModal, setOpenCreateStreamModal] = useState(false);
  const pathArr = location.pathname.split("/").filter((item) => item !== "");
  const [virtualCheckboxIsChecked, setVirtualCheckboxIsChecked] =
    useState(false);
  const closeCreateStreamModal = () => {
    if (!loader) {
      setVirtualCheckboxIsChecked(false);
      setOpenCreateStreamModal(false);
    }
  };

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

  // create stream
  const createStream = (e) => {
    if (userData.offerLinksData.length < 50) {
      const elStreamNameInput = getElement(e, ".js-stream-name-input");
      const elDonatePriceInput = getElement(e, ".js-donate-price-input");

      // check input values
      const checkDonatePriceInputValue = () => {
        if (virtualCheckboxIsChecked) {
          const price = Number(elDonatePriceInput.value.replace(/[^\d]/g, ""));
          const checkValue = price >= 100 && price <= 5000;

          if (checkValue) {
            elDonatePriceInput.classList.remove("is-invalid");
          } else {
            elDonatePriceInput.focus();
            elDonatePriceInput.classList.add("is-invalid");
          }
          return checkValue;
        } else {
          return true;
        }
      };
      const price = checkDonatePriceInputValue();
      const name = checkInputValueByLength(
        elStreamNameInput,
        elStreamNameInput.value
      );

      // send a request
      if (name && price && !loader) {
        setLoader(true);

        const price = () => {
          if (virtualCheckboxIsChecked) {
            return Number(elDonatePriceInput.value.replace(/[^\d]/g, ""));
          } else {
            return 0;
          }
        };

        // form data
        const formData = {
          link: "",
          clients: [],
          productId: productId,
          donationPrice: price(),
          userId: userData.userData.userId,
          name: elStreamNameInput.value.trim(),
          allowDonation: virtualCheckboxIsChecked,
        };

        axiosConfig
          .post("/OfferLink", formData)
          .then((res) => {
            if (res.status === 200) {
              setOpenCreateStreamModal(false);
              dispatch(addUserOfferLinkData(res.data));
              successNotification("Oqim muvaffaqiyatli yaratildi");
            } else errorNotification();
          })
          .catch(() => errorNotification.offline())
          .finally(() => setLoader(false));
      }
    } else {
      errorNotification("Oqimlar soni maksimal miqdoriga yetib bo'ldi");
    }
  };

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
              buttonOnClick={() => {
                setOpenCreateStreamModal(true);
                setProductId(product.productId);
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
        <EmptyData
          title="Mahsulotlar mavjud emas!"
          description="Ushbu sahifada hech qanday mahsulot mavjud emas."
        />
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

      {/* create stream modal */}
      {openCreateStreamModal && (
        <ConfirmationModal
          loader={loader}
          title="Oqim yaratish"
          onSubmit={createStream}
          submitBtnText="Yaratish"
          closeModal={closeCreateStreamModal}
          info="Hayriya ishlari uchun rozilik bildirsangiz. Ushbu oqim daromadining bir qismi hayriya ishlariga sarflanadi!"
        >
          {/* stream name */}
          <label>
            <span>Oqim nomi</span>
            <input
              autoFocus
              name="name"
              type="text"
              autoComplete="off"
              placeholder="Oqim nomi"
              className="js-stream-name-input"
            />
          </label>

          {/* donate price */}
          {virtualCheckboxIsChecked && (
            <label>
              <span>Hayriya uchun ajratilinadigan narx</span>

              {/* input */}
              <InputMask mask="9999">
                {(inputProps) => (
                  <input
                    type="text"
                    {...inputProps}
                    autoComplete="off"
                    name="donate price"
                    className="js-donate-price-input"
                    placeholder="Hayriya uchun ajratilinadigan narx"
                  />
                )}
              </InputMask>

              {/* info */}
              <span className="flex-center gap-2 mb-2">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    r="10"
                    cx="12"
                    cy="12"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                  ></circle>
                  <path
                    d="M12 17V11"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <circle
                    r="1"
                    cx="1"
                    cy="1"
                    fill="#1C274C"
                    transform="matrix(1 0 0 -1 11 9)"
                  ></circle>
                </svg>

                <span className="text-regular-14">
                  Minimal 100 so'm - maksimal 5000 so'm
                </span>
              </span>
            </label>
          )}

          {/* toggle agree donate btn */}
          <label className="flex-center gap-3 !space-y-0">
            <button
              type="button"
              className={`${
                virtualCheckboxIsChecked
                  ? "bg-linear-gradient_blue-500 border-primary-skyblue-500"
                  : ""
              } flex-center justify-center w-5 h-5 shrink-0 border-primary-black-800 border rounded-full`}
              onClick={() =>
                setVirtualCheckboxIsChecked(!virtualCheckboxIsChecked)
              }
            >
              {/* btn done icon */}
              <img
                width={16}
                height={16}
                src={doneIcon}
                alt="done icon"
                className={`${
                  virtualCheckboxIsChecked ? "inline-block" : "hidden"
                } w-4 h-4`}
              />
            </button>

            <span className="text-regular-16">
              Daromadning bir qismini hayriyaga yo'naltirish
            </span>
          </label>
        </ConfirmationModal>
      )}
    </div>
  );
};

export default Market;
