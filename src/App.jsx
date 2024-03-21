import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// for auth
import { loggedIn, notLoggedIn } from "./store/slices/productBasketSlice";
import { setUserData } from "./store/slices/userDataSlice";
import { getUserById } from "./api/auth/getUserById";
import { useDispatch, useSelector } from "react-redux";
import { decodeToken } from "react-jwt";

// images
import Loader from "./components/Loader";

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
  const { isLoggedIn } = useSelector((store) => store.isLoggedIn);
  const [loader, setLoader] = useState(true);

  // auto login
  useEffect(() => {
    const getUserData = localStorage.getItem("user");
    // check stored user data
    if (getUserData) {
      const userData = JSON.parse(getUserData);
      const decodedToken = decodeToken(userData.token);

      // check decoded token
      if (decodedToken) {
        setLoader(true);

        // get user data by id
        getUserById({ token: userData.token, id: decodedToken.UserId })
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
          .catch(() => dispatch(notLoggedIn()))
          .finally(() => setLoader(false));
      } else {
        setTimeout(() => setLoader(false), 1000);
      }
    } else {
      setTimeout(() => setLoader(false), 1000);
    }
  }, []);

  // loader & loader styles
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
      <Loader loaderStyles={loaderStyles} />

      {/* router */}
      <Router>
        <Routes>
          <Route path="/" element={<MainRoot />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:productName" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/public-offer" element={<PublicOffer />} />
            <Route path="/category/:categoryName" element={<Category />} />

            {/* auth */}
            <Route path="/auth" element={<AuthRoot />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Register />} />
            </Route>

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
