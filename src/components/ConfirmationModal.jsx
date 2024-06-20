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
      <div className="flex flex-col h-full z-10 overflow-y-auto max-w-md w-full mx-3 scroll_hidden">
        <div
          className={`z-10 w-full bg-white p-5 my-auto rounded-xl max-375:p-4 ${
            className ? className : ""
          }`}
        >
          {/* modal header */}
          <div className="flex-center-between gap-3 mb-5">
            <h2 className="text-2xl text-primary-black-800">
              {title ? title : "Tasdiqlash"}
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
            <div className="flex justify-end gap-3 w-full max-375:flex-col max-375:justify-normal">
              <button
                type="button"
                disabled={loader}
                onClick={closeModal}
                className="main-btn justify-center py-2.5 px-4 !text-primary-black-800 !text-base rounded-lg max-375:!min-w-full"
              >
                Bekor qilish
              </button>

              {/* submit btn */}
              <button
                disabled={loader}
                className="main-btn bg-linear-gradient_blue-500 !py-2 px-4 rounded-lg border-primary-skyblue-500 text-white !text-base  justify-center max-375:!min-w-full"
              >
                {!loader ? (
                  submitBtnText ? (
                    submitBtnText
                  ) : (
                    "Yuborish"
                  )
                ) : (
                  <DotsLoader className="px-[33px] !h-6" />
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
