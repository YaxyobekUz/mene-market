import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// for auth
import { loggedIn } from "./store/slices/productBasketSlice";
import { setUserData } from "./store/slices/userDataSlice";
import { autoLogIn } from "./api/auth/autoLogin";
import { useDispatch, useSelector } from "react-redux";
import { decodeToken } from "react-jwt";

// images
import logo from "./assets/images/other/logo.png";

// layouts
import MainRoot from "./layouts/MainRoot";
import AdminRoot from "./layouts/AdminRoot";
import DashboardRoot from "./layouts/DashboardRoot";
import ProfileRoot from "./layouts/ProfileRoot";
import AuthRoot from "./layouts/AuthRoot";

// pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import PublicOffer from "./pages/PublicOffer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Category from "./pages/Category";
import Dashboard from "./pages/Dashboard";
import RegularCustomers from "./pages/RegularCustomers";
import Appeals from "./pages/Appeals";
import Requests from "./pages/Requests";
import Competitions from "./pages/Competitions";
import BalanceHistory from "./pages/BalanceHistoryPage";
import DonationBox from "./pages/DonationBox";
import Market from "./pages/Market";
import Flow from "./pages/Flow";
import Statistics from "./pages/Statistics";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import ConnectWithTelegram from "./pages/ConnectWithTelegram";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((store) => store.isLoggedIn);
  const [loader, setLoader] = useState(true);

  // auto login
  useEffect(() => {
    const getUserData = localStorage.getItem("user");
    if (getUserData) {
      const userData = JSON.parse(getUserData);
      const decodedToken = decodeToken(userData.token);
      if (decodedToken) {
        setLoader(true);
        autoLogIn({ token: userData.token, id: decodedToken.UserId })
          .then((response) => {
            const data = response.data;

            const confirmLogin =
              data.email === userData.email &&
              data.password === userData.password;

            if (confirmLogin) {
              dispatch(loggedIn());
              dispatch(setUserData(data));
            }
          })
          .catch((error) => {
            console.log("Tizimga kirish amalga oshmadi", error);
          })
          .finally(() => setLoader(false));
      } else {
        setTimeout(() => {
          setLoader(false);
        }, 1000);
      }
    } else {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }
  }, []);

  // loader
  const [loaderStyles, setLoaderStyles] = useState({
    display: "flex",
    opacity: 1,
    transform: "translateY(0px)",
  });

  useEffect(() => {
    if (!loader) {
      setLoaderStyles({
        display: "flex",
        opacity: 0,
        transform: "translateY(100px)",
      });

      const timeout = setTimeout(() => {
        setLoaderStyles({
          display: "none",
          opacity: 1,
          transform: "translateY(0px)",
        });
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [loader]);
  return (
    <>
      {/* loader */}
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

      {/* router */}
      <Router>
        <Routes>
          <Route path="/" element={<MainRoot />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:productName" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/public-offer" element={<PublicOffer />} />
            <Route path="/auth" element={<AuthRoot />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Register />} />
            </Route>
            <Route path="/category/:categoryName" element={<Category />} />

            {/* admin */}
            {isLoggedIn && (
              <Route path="/admin" element={<AdminRoot />}>
                <Route path="dashboard" element={<DashboardRoot />}>
                  <Route index element={<Dashboard />} />
                  <Route
                    path="regular-customers"
                    element={<RegularCustomers />}
                  />
                  <Route path="appeals" element={<Appeals />} />
                  <Route path="requests" element={<Requests />} />
                  <Route path="competitions" element={<Competitions />} />
                  <Route path="balance-history" element={<BalanceHistory />} />
                  <Route path="donation-box" element={<DonationBox />} />
                </Route>
                <Route path="market" element={<Market />} />
                <Route path="flow" element={<Flow />} />
                <Route path="statistics" element={<Statistics />} />
                <Route path="payment" element={<Payment />} />
                <Route path="profile" element={<ProfileRoot />}>
                  <Route index element={<Profile />} />
                  <Route index path="account" element={<Profile />} />
                  <Route
                    path="connect-with-telegram"
                    element={<ConnectWithTelegram />}
                  />
                </Route>
              </Route>
            )}
          </Route>

          {/* error page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
