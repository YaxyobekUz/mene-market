import React, { useEffect, useState } from "react";

// components
import Overlay from "./Overlay";

// swiper
import "swiper/css";
import "../css/swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// images
import expand from "../assets/images/svg/expand.svg";
import shrink from "../assets/images/svg/shrink.svg";
import cross from "../assets/images/svg/cross-icon.svg";
import arowLeft from "../assets/images/svg/arrow-left.svg";
import roundLine from "../assets/images/svg/line-round.svg";

const ImageViewerModal = ({ alt, images, initialSlide, closeModal }) => {
  const [imageLarge, setImageLarge] = useState(true);
  const [VW, setVW] = useState(document.documentElement.clientWidth);
  const [VH, setVH] = useState(document.documentElement.clientHeight);

  // close modal with escape keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      e.key === "Escape" && closeModal();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  // set VW & VH
  useEffect(() => {
    const handleResize = () => {
      setVW(document.documentElement.clientWidth);
      setVH(document.documentElement.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex items-center justify-center fixed inset-0 z-50 w-full h-full">
      {/* modal header */}
      <div className="flex justify-end absolute top-0 inset-x-0 z-10 w-full">
        <button
          onClick={() => setImageLarge(!imageLarge)}
          className="bg-primary-blue-50/10 px-5 py-1 transition-colors hover:bg-primary-blue-50/20 max-640:py-0.5 max-640:px-4"
        >
          {imageLarge ? (
            <img
              width={32}
              height={32}
              src={shrink}
              alt="shrink icon"
              className="w-8 h-8"
            />
          ) : (
            <img
              width={32}
              height={32}
              src={expand}
              alt="expand icon"
              className="w-8 h-8"
            />
          )}
        </button>

        {/* close modal btn */}
        <button
          onClick={closeModal}
          className="bg-primary-blue-50/10 px-5 py-1 transition-colors hover:bg-primary-red-500/50 max-640:py-0.5 max-640:px-4"
        >
          <img
            width={32}
            height={32}
            src={cross}
            alt="cross icon"
            className="w-8 h-8"
          />
        </button>
      </div>

      {/* modal body */}
      <div
        style={{
          width: VW > VH ? `${VH - 120}px` : `${VW - 20}px`,
          height: VW > VH ? `${VH - 120}px` : `${VW - 20}px`,
        }}
        className={`flex items-center justify-center z-10`}
        onClick={(e) => {
          const swiperWrapper = e.currentTarget.querySelector(
            ".image-viewer-modal-swiper-wrapper"
          );

          if (!swiperWrapper.contains(e.target)) closeModal();
        }}
      >
        {/* swiper wrapper */}
        <div
          className={`${
            imageLarge ? "!w-full !h-full " : "!w-3/4 !h-3/4"
          } image-viewer-modal-swiper-wrapper transition-all`}
        >
          {/* swiper */}
          <Swiper
            spaceBetween={24}
            modules={[Navigation, Pagination]}
            initialSlide={initialSlide ? initialSlide : 0}
            navigation={{
              prevEl: ".image-viewer-modal-swiper-btn-prev",
              nextEl: ".image-viewer-modal-swiper-btn-next",
            }}
            className="image-viewer-modal-swiper"
          >
            {images.map((image, index) => {
              const [loader, setLoader] = useState(true);

              return (
                <SwiperSlide
                  key={index}
                  className="!flex items-center justify-center"
                >
                  {loader && (
                    <div className="flex items-center justify-center w-full h-full bg-linear-gradient_black-800">
                      <img
                        width={80}
                        height={80}
                        src={roundLine}
                        alt="loader icon"
                        className="w-20 h-20 animate-spin opacity-70 max-640:w-16 max-640:h-16 max-375:w-14 max-375:h-14"
                      />
                    </div>
                  )}

                  {/* swiper image */}
                  <img
                    alt={alt}
                    src={image}
                    width={791}
                    height={791}
                    onLoad={() => {
                      setTimeout(() => {
                        setLoader(false);
                      }, 300);
                    }}
                    style={{ display: loader ? "none" : "block" }}
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* swiper btns */}
          <div className="image-viewer-modal-swiper-btns-wrapper">
            {/* swiper button prev */}
            <button
              title="prev"
              aria-label="prev"
              className="image-viewer-modal-swiper-btn-prev"
            >
              <img
                width={24}
                height={24}
                src={arowLeft}
                alt="arrow left icon"
                className="w-6 h-6"
              />
            </button>

            {/* swiper button next */}
            <button
              title="next"
              aria-label="next"
              className="image-viewer-modal-swiper-btn-next"
            >
              <img
                width={24}
                height={24}
                src={arowLeft}
                alt="arrow left icon"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* overlay */}
      <Overlay onClick={closeModal} />
    </div>
  );
};

export default ImageViewerModal;
