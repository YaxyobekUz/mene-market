import React from "react";

// components
import Advantage from "../components/Advantage";

// images
import sms from "../assets/images/svg/sms.svg";
import shop from "../assets/images/svg/shop.svg";
import call from "../assets/images/svg/call.svg";

const Contact = () => {
  return (
    <>
      {/* main content */}
      <div className="container">
        <h1 className="mb-6 text-center">Aloqa</h1>

        {/* list */}
        <ul className="grid grid-cols-3 gap-6 max-768:grid-cols-2 max-540:grid-cols-1 mb-12 max-450:mb-8">
          {/* 1 */}
          <li className="flex-center flex-col p-6 space-y-4 rounded-lg bg-primary-gray-50 text-center">
            <img
              src={shop}
              alt="shop"
              width={32}
              height={32}
              className="w-8 h-8"
            />

            {/* content body */}
            <div className="space-y-2 max-w-[280px]">
              {/* title */}
              <h3 className="text-primary-gray-500">Manzil</h3>

              {/* description */}
              <address className="text-regular-16">
                O'zbekiston, Toshkent.sh
              </address>
            </div>
          </li>

          {/* 2 */}
          <li className="flex-center flex-col p-6 space-y-4 rounded-lg bg-primary-gray-50 text-center">
            <img
              width={32}
              height={32}
              src={call}
              alt="telephone"
              className="w-8 h-8"
            />

            {/* content body */}
            <div className="space-y-2 max-w-[280px]">
              {/* title */}
              <h3 className="text-primary-gray-500">Biz bilan bog'lanish</h3>

              {/* description */}
              <a href="tel:+998998745678" className="block text-regular-16">
                +998 (99)-874-5678
              </a>
            </div>
          </li>

          {/* 3 */}
          <li className="flex-center flex-col p-6 space-y-4 rounded-lg bg-primary-gray-50 text-center max-768:col-start-1 max-768:col-end-3 max-540:col-end-2">
            <img
              src={sms}
              width={32}
              height={32}
              alt="email icon"
              className="w-8 h-8"
            />

            {/* content body */}
            <div className="space-y-2 max-w-[280px]">
              {/* title */}
              <h3 className="text-primary-gray-500">E-pochta</h3>

              {/* description */}
              <a
                target="_blank"
                href="mailto:example@email.com"
                className="block text-regular-16"
              >
                example@email.com
              </a>
            </div>
          </li>
        </ul>

        {/* contact form wrapper */}
        <div className="grid grid-cols-2 gap-6 mb-16 max-1024:mb-14 max-640:grid-cols-1 max-640:flex max-640:flex-col-reverse max-450:mb-8">
          <form className="space-y-6">
            {/* name */}
            <label className="block w-full space-y-3">
              <span className="text-regular-16 text-primary-gray-500">
                Ism familiya
              </span>

              {/* input */}
              <input
                type="text"
                name="user full name"
                placeholder="Ism familiya"
                className="w-full rounded-md border border-primary-gray-500 px-4 py-1.5 text-regular-16 placeholder:text-primary-gray-500"
              />
            </label>

            {/* email */}
            <label className="block w-full space-y-3">
              <span className="text-regular-16 text-primary-gray-500">
                E-pochta
              </span>

              {/* input */}
              <input
                type="email"
                placeholder="E-pochta"
                name="user email address"
                className="w-full rounded-md border border-primary-gray-500 px-4 py-1.5 text-regular-16 placeholder:text-primary-gray-500"
              />
            </label>

            {/* message */}
            <label className="block w-full space-y-3">
              <span className="text-regular-16 text-primary-gray-500">
                Izoh
              </span>

              {/* input */}
              <textarea
                placeholder="Izoh"
                name="user message"
                className="w-full rounded-md border border-primary-gray-500 px-4 py-1.5 text-regular-16 placeholder:text-primary-gray-500 p-4 h-28 resize-none"
              ></textarea>
            </label>

            {/* submit btn */}
            <button className="btn-primary_linear-blue justify-center py-1.5 px-10 rounded-lg max-375:w-full max-640:max-w-full">
              <span className="text-regular-16">Yuborish</span>
            </button>
          </form>

          {/* map */}
          <iframe
            loading="lazy"
            className="w-full h-full bg-primary-gray-500 rounded-lg max-640:h-80"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d859.8233566377858!2d71.97749393807459!3d40.87637480506904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1705252709584!5m2!1sru!2s"
          ></iframe>
        </div>
      </div>

      {/* advantage section */}
      <div className="py-14">
        <div className="container">
          <Advantage />
        </div>
      </div>
    </>
  );
};

export default Contact;
