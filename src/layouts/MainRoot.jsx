import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer, Zoom } from "react-toastify";

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
        autoClose={2500}
        limit={8}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
    </div>
  );
};

export default MainRoot;
