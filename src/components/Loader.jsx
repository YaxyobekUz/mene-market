import React from "react";

// images
import logo from "../assets/images/other/logo.png";
const Loader = ({ loaderStyles }) => {
  return (
    <div
      style={{
        ...loaderStyles,
        transition: "opacity 0.4s ease, transform 0.3s ease",
      }}
      className="z-50 fixed inset-0 min-w-full min-h-screen items-center justify-center bg-white"
    >
      <img
        width={96}
        height={48}
        src={logo}
        alt="mene market logo"
        className="w-24 h-12"
      />
    </div>
  );
};

export default Loader;
