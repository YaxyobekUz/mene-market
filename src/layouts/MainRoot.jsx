import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageViewerModal from "../components/ImageViewerModal";

// toast
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom } from "react-toastify";

const MainRoot = () => {
  const location = useLocation();
  const imageViewerModal = useSelector((store) => store.imageViewerModal);
  const pathArr = location.pathname.split("/").filter((item) => item !== "");
  const authPage = pathArr[0] === "auth";
  const adminPage = pathArr[0] === "admin";

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* header */}
      {!authPage && !adminPage && <Header />}

      {/* main */}
      <main className="flex w-full flex-col grow">
        <Outlet />
      </main>

      {/* footer */}
      {!authPage && <Footer />}

      {/* toast notification container */}
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

      {/* image viewer modal */}
      {imageViewerModal.isOpen && <ImageViewerModal />}
    </div>
  );
};

export default MainRoot;
