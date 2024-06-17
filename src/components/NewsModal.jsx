import React, { useEffect, useState } from "react";

// data
import { imageBaseUrl } from "../data/data";

// components
import Overlay from "./Overlay";
import ImageViewerModal from "./ImageViewerModal";

// helpers
import { formatDate, formatTime } from "../helpers/helpers";

// images
import date from "../assets/images/svg/date-icon.svg";
import time from "../assets/images/svg/time-icon.svg";
import cross from "../assets/images/svg/cross-icon.svg";

const NewsModal = ({ newness, closeModal }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const closeImageViewerModal = () => setOpenModal(false);

  // close modal with escape keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (!openModal) {
          closeModal();
        } else {
          closeImageViewerModal();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal, openModal]);

  return (
    <>
      <div className="flex justify-end fixed inset-0 z-30 w-full h-full">
        {/* modal content */}
        <div className="flex flex-col gap-4 z-10 max-w-3xl w-full bg-linear-gradient_black-800 p-5 m-5 mb-0 rounded-t-xl max-450:m-0 max-450:rounded-none max-375:p-4">
          {/* modal header */}
          <div className="flex-center-between">
            {/* date */}
            <div className="flex-center gap-5 text-regular-16 max-375:text-regular-14 max-375:gap-4">
              <div className="flex-center gap-2 max-375:gap-1.5">
                <img
                  src={date}
                  width={20}
                  height={20}
                  alt="date icon"
                  className="w-5 h-5 max-375:w-4 max-375:h-4"
                />
                <p>{formatDate(newness.postedTime)}</p>
              </div>

              {/* time */}
              <div className="flex-center gap-2 max-375:gap-1.5">
                <img
                  src={time}
                  width={20}
                  height={20}
                  alt="time icon"
                  className="w-5 h-5 max-375:w-4 max-375:h-4"
                />

                <p>{formatTime(newness.postedTime)}</p>
              </div>
            </div>

            {/* close modal btn */}
            <button className="ml-auto" onClick={closeModal}>
              <img width={28} height={28} src={cross} alt="" className="" />
            </button>
          </div>

          {/* modal body */}
          <div className="flex items-start justify-start flex-col gap-5 h-full pb-12">
            <div className="w-full h-full overflow-y-auto scroll_gray rounded-lg space-y-4 pr-1">
              <img
                width={712}
                height={712}
                alt="newness image"
                src={imageBaseUrl + newness.imageFilePath}
                className="w-full h-auto aspect-square object-cover bg-primary-black-800 rounded-lg"
                onClick={() => {
                  setOpenModal(true);
                  setModalImage(imageBaseUrl + newness.imageFilePath);
                }}
              />

              {/* newness title */}
              <h2 className="text-2xl max-640:text-semibold-20 max-375:text-medium-18">
                {newness.name}
              </h2>

              {/* newness description */}
              <p className="text-primary-gray-500 max-375:text-regular-16 max-375:leading-5">
                {newness.description}
              </p>
            </div>
          </div>
        </div>

        {/* overlay */}
        <Overlay onClick={closeModal} />
      </div>

      {/* image viewer modal */}
      {openModal && (
        <ImageViewerModal
          alt="newness image"
          closeModal={closeImageViewerModal}
          images={[modalImage, modalImage, modalImage]}
        />
      )}
    </>
  );
};

export default NewsModal;
