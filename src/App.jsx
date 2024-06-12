import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";

// for auth
import { decodeToken } from "react-jwt";
import { getUserById } from "./api/auth/getUserById";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "./store/slices/userDataSlice";
import { loggedIn, notLoggedIn } from "./store/slices/productBasketSlice";

// images
import Loader from "./components/Loader";

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
import Market from "./pages/Market";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import Appeals from "./pages/Appeals";
import Requests from "./pages/Requests";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Category from "./pages/Category";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";
import PublicOffer from "./pages/PublicOffer";
import DonationBox from "./pages/DonationBox";
import Competitions from "./pages/Competitions";
import ProductDetail from "./pages/ProductDetail";
import RegularCustomers from "./pages/RegularCustomers";
import BalanceHistory from "./pages/BalanceHistoryPage";
import ConnectWithTelegram from "./pages/ConnectWithTelegram";
import Search from "./pages/Search";
import axiosConfig from "./api/axios/axios";
import {
  setProductsData,
  setProductsLoader,
} from "./store/slices/productsDataSlice";

const App = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  const { isLoggedIn } = useSelector((store) => store.isLoggedIn);

  // auto login
  useEffect(() => {
    setLoader(true);
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
          .catch(() => {
            dispatch(notLoggedIn());
          })
          .finally(() => setLoader(false));
      } else {
        setTimeout(() => setLoader(false), 1000);
      }
    } else {
      setTimeout(() => setLoader(false), 1000);
    }
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
          <Route path="product/:productName" element={<ProductDetail />} />

          {/* products */}
          <Route path="products" element={<Outlet />}>
            <Route index path=":productType?" element={<Products />} />
          </Route>

          {/* auth */}
          <Route path="auth" element={<AuthRoot />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Register />} />
          </Route>

          {/* admin */}
          <Route
            path="admin"
            element={isLoggedIn ? <AdminRoot /> : <Navigate to="/" />}
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
