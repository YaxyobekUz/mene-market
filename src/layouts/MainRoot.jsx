import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageViewerModal from "../components/ImageViewerModal";

// toast
import "../css/toast.css";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";

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
        theme={"dark"}
        autoClose={3500}
        draggable={false}
        transition={Bounce}
        closeOnClick={true}
        pauseOnHover={true}
        hideProgressBar={true}
        position="top-center"
      />

      {/* image viewer modal */}
      {imageViewerModal.isOpen && <ImageViewerModal />}
    </div>
  );
};

export default MainRoot;
