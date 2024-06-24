import React from "react";

// components
import BalanceHistory from "../components/BalanceHistory";

const Payment = () => {
  return (
    <div className="space-y-5">
      {/* user cards and user balance */}
      <div className="flex gap-5 max-860:flex-col">
        {/* user card */}
        <div className="flex flex-col justify-between w-[400px] h-60 bg-[url('../src/assets/images/other/credit-card-bg.jpg')] bg-blue-950 bg-no-repeat bg-cover backdrop-blur-120 p-6 rounded-20 max-860:w-full max-540:p-5 max-450:h-52">
          <p>Oxirgi kartangiz</p>

          {/* sub content */}
          <div className="space-y-5">
            <p className="text-semibold-23 max-450:text-semibold-20">
              9860 6067 7733 8763
            </p>

            {/* card owner */}
            <p className="capitalize text-semibold-20 line-clamp-1 max-450:text-medium-18">
              Falonchiyev Falonchi
            </p>
          </div>
        </div>

        {/* user balance */}
        <div className="flex flex-col justify-end grow h-60 bg-linear-gradient_black-800 backdrop-blur-120 rounded-20 p-6 max-540:p-5 max-450:h-52">
          <div className="w-full bg-linear-gradient_black-800 p-5 rounded-xl">
            <ul className="space-y-3">
              <li className="space-y-1 max-450:space-y-0">
                <h3 className="text-medium-18 max-450:text-base">Balans</h3>
                <p className="text-primary-gray-500 max-450:text-base">
                  0 so'm
                </p>
              </li>
              <li className="space-y-1 max-450:space-y-0">
                <h3 className="text-medium-18 max-450:text-base">
                  Taxminiy balans
                </h3>
                <p className="text-primary-gray-500 max-450:text-base">
                  0 so'm
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* request form */}
      <form className="bg-linear-gradient_black-800 p-6 space-y-6 rounded-20 max-540:p-5">
        {/* form header */}
        <div className="flex-center-between gap-5">
          <strong className="">To'lov uchun so'rov yuborish</strong>

          {/* submit btn */}
          <button className="btn-primary_linear-blue px-4 rounded-lg max-540:hidden">
            <span className="text-regular-16">Tasdiqlash</span>
          </button>
        </div>

        {/* form body */}
        <div className="grid grid-cols-2 gap-6 max-540:gap-5 max-768:grid-cols-1">
          {/* card number */}
          <label className="space-y-3">
            <span className="text-regular-16">Karta raqam</span>

            {/* input */}
            <input
              type="text"
              maxLength={19}
              name="card number"
              placeholder="XXXX XXXX XXXX XXXX"
              className="js-card-number-input w-full !bg-white/5 py-3 px-5 border-2 rounded-lg !text-lg placeholder:!text-lg max-540:!text-base max-540:placeholder:!text-base"
            />
          </label>

          {/* price */}
          <label className="space-y-3">
            <span className="text-regular-16">Pul miqdori</span>

            {/* payment */}
            <input
              type="text"
              name="price"
              placeholder="1.000.000 so'm"
              className="js-payment-price-input w-full !bg-white/5 py-3 px-5 border-2 rounded-lg !text-lg placeholder:!text-lg max-540:!text-base max-540:placeholder:!text-base"
            />
          </label>

          {/* responsive mobile submit btn */}
          <button className="hidden btn-primary_linear-blue justify-center max-w-full w-full py-[13px] rounded-lg max-540:flex">
            <span className="text-regular-16">Tasdiqlash</span>
          </button>
        </div>
      </form>

      <BalanceHistory />
    </div>
  );
};

export default Payment;
