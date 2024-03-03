import React from "react";
import BalanceHistory from "../components/BalanceHistory";

// images
import mastercardLogo1 from "../assets/images/svg/mastercard-logo.svg";
import creditCard from "../assets/images/svg/credit-card.svg";
import edit from "../assets/images/svg/edit.svg";
const Payment = () => {
  return (
    <div className="space-y-6">
      {/* top */}
      <div className="flex gap-6">
        {/* plastic card image */}
        <div className="flex flex-col w-full max-w-[462px] bg-[url('../src/assets/images/other/credit-card-bg.jpg')] bg-blue-950 bg-no-repeat bg-cover backdrop-filter backdrop-blur-120 p-6 rounded-20">
          <div className="flex-center-between mb-auto">
            <p>ID:15612</p>
            <img
              width={49}
              height={32}
              src={mastercardLogo1}
              alt="mastercard logo"
              className="w-[49px] h-8"
            />
          </div>

          <p className="text-semibold-23 mb-4">XXXX XXXX XXXX XXXX</p>

          <div className="flex gap-6">
            <div>
              <p className="text-regular-13 text-[#C4C5C4] uppercase">
                Muddati
              </p>
              <p className="text-regular-16">05/24</p>
            </div>
            <div>
              <p className="text-regular-13 text-[#C4C5C4] uppercase">CVV</p>
              <p className="text-regular-16">999</p>
            </div>
          </div>
        </div>

        {/* balance */}
        <div className="w-full bg-linear-gradient_black-800 backdrop-filter backdrop-blur-120 rounded-20 p-6">
          <div className="flex justify-center flex-col relative overflow-hidden w-full bg-linear-gradient_black-800 backdrop-filter backdrop-blur-120 rounded-[14px] p-6 mb-12">
            <p className="text-regular-13 text-[#E9EDF7] mb-2">
              Hozirgi balans
            </p>
            <b className="text-semibold-23">15 560 000 so’m</b>

            {/* shadow */}
            <svg
              className="absolute right-0"
              width="156"
              height="97"
              viewBox="0 0 156 97"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M0 135.65L102.244 -64H158.281L163 135.65H0Z"
                fill="url(#paint0_linear_189_8653)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_189_8653"
                  x1="106.668"
                  y1="-92.9866"
                  x2="78.7753"
                  y2="119.509"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="0.0001" stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* graph */}
            <svg
              className="absolute right-8"
              width="43"
              height="19"
              viewBox="0 0 43 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8.26515C1.4881 11.6502 3.4322 17.9501 7.94915 17.4799C12.4661 17.0098 13.0071 1.49512 20.9143 1.49512C28.8214 1.49512 28.8214 19.3873 42 3.91299"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="flex-center-between">
            <div className="flex-center gap-2">
              {/* img */}
              <div className="bg-white/10 p-3 rounded-full">
                <img
                  width={24}
                  height={24}
                  src={creditCard}
                  alt="credit card icon"
                  className="w-6 h-6"
                />
              </div>
              <div>
                <p className="text-regular-14">To’lab berildi</p>
                <p className="text-regular-14 text-[#A0AEC0]">
                  Bugun 16:30 holatiga ko’ra
                </p>
              </div>
            </div>

            <p className="text-regular-14">-800 000 so’m</p>
          </div>
        </div>
      </div>

      {/* mid */}
      <div className="admin_page-body">
        <div className="flex-center-between mb-2.5">
          <p>To’lovga sorov berish formasi</p>

          <button className="btn-primary_linear-blue rounded-xl px-4 gap-0.5">
            <svg
              className="w-4 h-4"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.61914 10.5861L10.5858 2.61938"
                stroke="white"
                strokeWidth="0.75"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.40039 12.186L8.20039 11.386"
                stroke="white"
                strokeWidth="0.75"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.19531 10.3924L10.7886 8.79907"
                stroke="white"
                strokeWidth="0.75"
                strokeMiterlimit="10"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.40052 6.82592L6.82719 2.39925C8.24052 0.985919 8.94719 0.979252 10.3472 2.37925L13.6205 5.65259C15.0205 7.05259 15.0139 7.75925 13.6005 9.17259L9.17386 13.5993C7.76052 15.0126 7.05385 15.0193 5.65385 13.6193L2.38052 10.3459C0.980521 8.94592 0.980521 8.24592 2.40052 6.82592Z"
                stroke="white"
                strokeWidth="0.75"
                strokeMinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.33301 14.6655H14.6663"
                stroke="white"
                strokeWidth="0.75"
                strokeMinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-regular-14">Tasdiqlash</span>
          </button>
        </div>

        <div className="flex gap-2.5">
          <label className="w-full space-y-2.5">
            <span className="text-regular-14">Karta raqamingizni kiriting</span>
            <div className="flex-center relative w-full">
              <svg
                className="absolute left-4 w-6 h-4"
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.57878" cy="7.99992" r="7.57878" fill="#EB001B" />
                <circle cx="16.4216" cy="7.99992" r="7.57878" fill="#F79E1B" />
              </svg>

              <input
                type="text"
                placeholder="0000 0000 0000 0000"
                maxLength={19}
                className="admin_linear-border !bg-white/5 !border-white/50 !font-medium !text-lg !leading-5 !border-2 !rounded-20 !py-[18px] !px-12 placeholder:!text-lg placeholder:!leading-5 placeholder:!font-semibold focus:!outline-none focus:!border-white"
              />

              <button aria-label="edit" title="edit" className="absolute right-4">
                <img
                  width={24}
                  height={24}
                  src={edit}
                  alt="edit"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </label>

          <label className="w-full space-y-2.5">
            <span className="text-regular-14">Summani kiriting</span>
            <div className="flex-center relative w-full">
              <input
                type="number"
                placeholder="1.000.000"
                className="admin_linear-border !bg-white/5 !border-white/50 !font-medium !text-lg !leading-5 !border-2 !rounded-20 !py-[18px] !px-4 placeholder:!text-lg placeholder:!leading-5 placeholder:!font-semibold focus:!outline-none focus:!border-white"
              />
            </div>
          </label>
        </div>
      </div>

      <BalanceHistory />
    </div>
  );
};

export default Payment;
