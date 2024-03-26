import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet} from "react-router-dom";

// images
import image from "../assets/images/svg/success.svg";

const AuthRoot = () => {
  const { isLoggedIn } = useSelector((store) => store.isLoggedIn);
  // content
  if (isLoggedIn) {
    return (
      <>
        {/* content */}
        <div className="flex items-center gap-8 justify-center min-w-full min-h-screen py-10 max-860:flex-col overflow-y-auto max-860:pt-5">
          <img
            width={440}
            height={440}
            src={image}
            title="TIZIMGA KIRGANSIZ"
            alt="your logged in"
            className="w-[440px] aspect-square max-540:w-4/5 max-375:w-11/12"
          />
          <div className="max-w-sm space-y-5 max-860:px-5 max-860:text-center max-860:max-w-md">
            <h1>Tizimga muvaffaqiyatli kirdingiz! </h1>
            <p className="max-375:text-medium-16">
              <b>Eslatma!</b> Agar siz tizimga kirgan bo'lsangiz tizimdan
              chiqmasdan qayta ro'yxatdan o'tolmaysiz yoki boshqa akkauntingizga
              kirolmaysiz.
            </p>
            <Link
              className="btn-primary_linear-blue py-3.5 px-5 max-860:mx-auto"
              to="/"
            >
              Bosh sahifaga qaytish
            </Link>
          </div>
        </div>
      </>
    );
  } else {
    return <Outlet />;
  }
};

export default AuthRoot;
