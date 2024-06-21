import React, { useEffect } from "react";

// antd
import { Tooltip } from "antd";

// components
import Overlay from "./Overlay";
import DotsLoader from "../components/DotsLoader";

const ConfirmationModal = ({
  info,
  title,
  loader,
  onSubmit,
  children,
  className,
  closeModal,
  submitBtnText,
}) => {
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

  return (
    <div className="flex justify-center fixed inset-0 z-50 w-full h-full">
      {/* modal content */}
      <div className="flex flex-col z-10 overflow-y-auto max-w-md w-full max-h-max h-full mx-3">
        <div
          className={`z-10 w-full bg-white p-5 my-auto rounded-xl max-375:p-4 ${
            className ? className : ""
          }`}
        >
          {/* modal header */}
          <div className="flex-center-between gap-3 mb-5">
            <h2 className="text-2xl text-primary-black-800">
              {title ? title : "Amalni tasdiqlash"}
            </h2>

            {/* info icon */}
            {info && (
              <Tooltip title={info}>
                <svg
                  width="20"
                  height="20"
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
                  />
                  <path
                    d="M12 17V11"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle
                    r="1"
                    cx="1"
                    cy="1"
                    fill="#1C274C"
                    transform="matrix(1 0 0 -1 11 9)"
                  />
                </svg>
              </Tooltip>
            )}
          </div>

          {/* modal body */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit(event);
            }}
            className="confirmation-modal-form"
          >
            {/* other content */}
            {children}

            {/* buttons */}
            <div className="flex-center justify-end gap-3 w-full max-375:flex-col-reverse">
              <button
                type="button"
                disabled={loader}
                onClick={closeModal}
                className="flex-center justify-center  w-36 h-11 border border-primary-gray-500 text-primary-black-800 text-base rounded-lg max-375:w-full"
              >
                Bekor qilish
              </button>

              {/* submit btn */}
              <button
                disabled={loader}
                className="flex-center justify-center w-36 h-11  bg-linear-gradient_blue-500 rounded-lg border-primary-skyblue-500 text-white text-base max-375:w-full"
              >
                {!loader ? (
                  submitBtnText ? (
                    submitBtnText
                  ) : (
                    "Tasdiqlash"
                  )
                ) : (
                  <DotsLoader />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* overlay */}
      <Overlay onClick={closeModal} />
    </div>
  );
};

export default ConfirmationModal;
