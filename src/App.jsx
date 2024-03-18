import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// for auth
import { useJwt } from "react-jwt";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loggedIn } from "./store/slices/productBasketSlice";

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

const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((store) => store.isLoggedIn);
  const [loader, setLoader] = useState(true);
  const getUserData = localStorage.getItem("user");
  const userData = JSON.parse(getUserData);

  if (getUserData) {
    const { decodedToken } = useJwt(userData.token);

    if (decodedToken) {
      axios
        .get(
          `https://menemarcket.azurewebsites.net/api/User/ById?id=${decodedToken.UserId}`,
          {
            headers: {
              Authorization: `Bearer ${userData.token}`,
            },
          }
        )
        .then((response) => {
          const user = response.data;
          const password = user.password;
          const email = user.email;

          if (userData.password === password && userData.email === email) {
            dispatch(loggedIn());
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoader(false));
    }
  } else {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }

  if (loader) {
    return (
      <div className="flex-center justify-center w-full h-screen bg-white">
        <img
          width={96}
          height={48}
          src={logo}
          alt="mene market logo"
          className="w-24 h-12"
        />
      </div>
    );
  }

  // Agar loader false bo'lsa, Router va Routes larni chiqaramiz
  return (
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
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/admin" element={<AdminRoot />}>
            <Route path="dashboard" element={<DashboardRoot />}>
              <Route index element={<Dashboard />} />
              <Route path="regular-customers" element={<RegularCustomers />} />
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
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
