import React from "react";

// router dom
import { Link, Outlet } from "react-router-dom";

// images
import logo from "../assets/images/other/logo.png";

const AuthRoot = () => {
  return (
    <div className="flex-center justify-center grow container !px-0 max-w-[1480px] h-full">
      <div className="grid grid-cols-2 h-screen w-full max-768:grid-cols-1">
        {/* image */}
        <div className="flex justify-center items-start w-full h-full bg-[url('./assets/images/other/chair.png')] bg-center bg-cover bg-no-repeat max-768:hidden">
          <Link to="/" className="mt-16">
            <img
              width={96}
              height={48}
              src={logo}
              alt="mene market logo"
              className="w-24 h-12"
            />
          </Link>
        </div>

        {/* pages */}
        <Outlet />
      </div>
    </div>
  );
};

export default AuthRoot;
