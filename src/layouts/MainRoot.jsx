import React from "react";
import { Outlet, useLocation } from "react-router-dom";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

// toast
import { ToastContainer, Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MainRoot = () => {
  const location = useLocation();
  const firstLocation = location.pathname
    .split("/")
    .filter((item) => item !== "")[0];

  const authPage = firstLocation !== "auth";
  const adminPage = firstLocation !== "admin";
  return (
    <div className="flex flex-col min-h-screen">
      {authPage && adminPage && <Header />}
      <main className="flex w-full flex-col grow">
        <Outlet />
      </main>
      {authPage && <Footer />}
      <ToastContainer
        position="bottom-right"
        autoClose={3500}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={false}
        theme={"light "}
        transition={Zoom}
      />
    </div>
  );
};

export default MainRoot;
