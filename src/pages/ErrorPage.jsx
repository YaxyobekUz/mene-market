import React from "react";

// images
import Image from "../assets/images/svg/404.svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center gap-8 justify-center min-w-full min-h-screen py-10 max-860:flex-col overflow-y-auto max-860:pt-5">
      <img
        width={440}
        height={441}
        src={Image}
        title="404 SAHIFA TOPILMADI"
        alt="404 not found page"
        className="w-[440px] aspect-square max-540:w-4/5 max-375:w-11/12"
      />
      <div className="max-w-sm space-y-5 max-860:px-5 max-860:text-center max-860:max-w-md">
        <h1>Sahifa topilmadi!</h1>
        <p className="max-375:text-medium-16">
          Siz noto'g'ri sahifaga kirib qoldingiz. <br className="max-375:hidden" /> Iltimos sayt havolasini
          to'g'ri ekanligiga ishonch hosil qiling yoki qayta urinib ko'ring
        </p>
        <Link
          className="btn-primary_linear-blue py-3.5 px-5 max-860:mx-auto"
          to="/"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
