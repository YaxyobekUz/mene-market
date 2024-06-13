import React, { useEffect, useState } from "react";
import {
  Route,
  Outlet,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// axios
import axiosConfig from "./api/axios/axios";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "./store/slices/userDataSlice";
import { setAuthData, setLoggedIn } from "./store/slices/authDataSlice";

// components
import Loader from "./components/Loader";

// redux
import {
  setProductsData,
  setProductsLoader,
} from "./store/slices/productsDataSlice";

// layouts
import MainRoot from "./layouts/MainRoot";
import AuthRoot from "./layouts/AuthRoot";
import AdminRoot from "./layouts/AdminRoot";
import ProfileRoot from "./layouts/ProfileRoot";
import DashboardRoot from "./layouts/DashboardRoot";

// pages
import Home from "./pages/Home";
import Flow from "./pages/Flow";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Market from "./pages/Market";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import Appeals from "./pages/Appeals";
import Product from "./pages/Product";
import Requests from "./pages/Requests";
import Products from "./pages/Products";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";
import PublicOffer from "./pages/PublicOffer";
import DonationBox from "./pages/DonationBox";
import Competitions from "./pages/Competitions";
import RegularCustomers from "./pages/RegularCustomers";
import BalanceHistory from "./pages/BalanceHistoryPage";
import ConnectWithTelegram from "./pages/ConnectWithTelegram";

const App = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  const authData = useSelector((store) => store.authData);

  // auto login
  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("auth"));

    // check user login and password
    if (authData) {
      axiosConfig
        .get("/User/Profile")
        .then((res) => {
          if (res.status === 200) {
            const confirmLogin =
              res.data.email === authData.email &&
              res.data.password === authData.password;

            if (confirmLogin) {
              dispatch(setLoggedIn(true));
              dispatch(setUserData(data));
              dispatch(setAuthData(authData));
            }
          }
        })
        .finally(() => setLoader(false));
    } else setLoader(false);
  }, []);

  // get products data
  useEffect(() => {
    axiosConfig
      .get("/Product?userRoleString=0", {
        headers: {
          timeout: Infinity,
        },
      })
      .then((res) => {
        dispatch(setProductsData(res.data));
      })
      .finally(() => {
        dispatch(setProductsLoader(false));
      });
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={!loader ? <MainRoot /> : <Loader />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="public-offer" element={<PublicOffer />} />
          <Route path="search/:searchQuery" element={<Search />} />

          {/* product */}
          <Route path="products" element={<Outlet />}>
            <Route index path=":productType?" element={<Products />} />
            <Route path="product/:productId" element={<Product />} />
          </Route>

          {/* auth */}
          <Route path="auth" element={<AuthRoot />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Register />} />
          </Route>

          {/* admin */}
          <Route
            path="admin"
            element={
              authData.loggedIn ? <AdminRoot /> : <Navigate to="/auth/login" />
            }
          >
            <Route path="dashboard" element={<DashboardRoot />}>
              <Route index element={<Dashboard />} />
              <Route path="regular-customers" element={<RegularCustomers />} />
              <Route path="appeals" element={<Appeals />} />
              <Route path="requests" element={<Requests />} />
              <Route path="competitions" element={<Competitions />} />
              <Route path="balance-history" element={<BalanceHistory />} />
              <Route path="donation-box" element={<DonationBox />} />
              <Route path="profile" element={<ProfileRoot />}>
                <Route index element={<Profile />} />
                <Route path="account" element={<Account />} />
                <Route
                  path="connect-with-telegram"
                  element={<ConnectWithTelegram />}
                />
              </Route>
            </Route>
            <Route path="flow" element={<Flow />} />
            <Route path="market" element={<Market />} />
            <Route path="payment" element={<Payment />} />
            <Route path="statistics" element={<Statistics />} />
          </Route>
        </Route>

        {/* error page */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
