import React, { useEffect, useState } from "react";
import {
  Route,
  Outlet,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// components
import Loader from "./components/Loader";

// axios
import axiosConfig from "./api/axios/axios";

// redux
import {
  setUserData,
  setUserAppealsData,
  setUserOfferLinksData,
} from "./store/slices/userDataSlice";
import {
  setProductsData,
  setProductsLoader,
} from "./store/slices/productsDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { setAuthData, setLoggedIn } from "./store/slices/authDataSlice";

// layouts
import MainRoot from "./layouts/MainRoot";
import AuthRoot from "./layouts/AuthRoot";
import AdminLayout from "./layouts/AdminLayout";
import ProfileLayout from "./layouts/ProfileLayout";

// pages
import Home from "./pages/Home";
import Flow from "./pages/Flow";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Market from "./pages/Market";
import Appeal from "./pages/Appeal";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import Appeals from "./pages/Appeals";
import Product from "./pages/Product";
import Success from "./pages/Success";
import Requests from "./pages/Requests";
import Products from "./pages/Products";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";
import PublicOffer from "./pages/PublicOffer";
import DonationBox from "./pages/DonationBox";
import Competitions from "./pages/Competitions";
import FlowStatistics from "./pages/FlowStatistics";
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
              dispatch(setUserData(res.data));
              dispatch(setAuthData(authData));
              dispatch(setUserAppealsData(res.data.userChats));
              dispatch(setUserOfferLinksData(res.data.offerLinks));
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
          <Route path="success" element={<Success />} />
          <Route path="public-offer" element={<PublicOffer />} />
          <Route path="search/:searchQuery" element={<Search />} />

          {/* product */}
          <Route path="products" element={<Outlet />}>
            <Route index path=":productType?" element={<Products />} />
            <Route path="product/:productId" element={<Product />} />
          </Route>

          {/* auth */}
          <Route
            path="auth"
            element={!authData.loggedIn ? <AuthRoot /> : <Navigate to="/" />}
          >
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Register />} />
          </Route>
      
          {/* admin */}
          <Route
            path="admin"
            element={
              authData.loggedIn ? (
                <AdminLayout />
              ) : (
                <Navigate to="/auth/login" />
              )
            }
          >
            <Route path="flow" element={<Flow />} />
            <Route path="payment" element={<Payment />} />
            <Route path="market/:productType?" element={<Market />} />

            {/* dashboard */}
            <Route path="dashboard" element={<Outlet />}>
              <Route index element={<Dashboard />} />
              <Route path="regular-customers" element={<RegularCustomers />} />
              <Route path="requests" element={<Requests />} />
              <Route path="competitions" element={<Competitions />} />
              <Route path="balance-history" element={<BalanceHistory />} />
              <Route path="donation-box" element={<DonationBox />} />

              {/* appeal */}
              <Route path="appeals" element={<Outlet />}>
                <Route index element={<Appeals />} />
                <Route path="appeal/:appealId" element={<Appeal />} />
              </Route>

              {/* profile */}
              <Route path="profile" element={<ProfileLayout />}>
                <Route index element={<Profile />} />
                <Route path="account" element={<Account />} />
                <Route
                  path="connect-with-telegram"
                  element={<ConnectWithTelegram />}
                />
              </Route>
            </Route>

            {/* statistcs */}
            <Route path="statistics" element={<Outlet />}>
              <Route index element={<Statistics />} />
              <Route path="flow/:flowId" element={<FlowStatistics />} />
            </Route>
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
