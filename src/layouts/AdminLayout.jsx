import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

// axios
import axiosConfig from "../api/axios/axios";

// components
import DotsLoader from "../components/DotsLoader";

// redux
import {
  setUserData,
  setUserOfferLinksData,
} from "../store/slices/userDataSlice";
import { useDispatch, useSelector } from "react-redux";

// imags
import home from "../assets/images/svg/home.svg";
import link from "../assets/images/svg/link.svg";
import logo from "../assets/images/other/logo.png";
import user from "../assets/images/other/user.jpg";
import market from "../assets/images/svg/market.svg";
import wallet from "../assets/images/svg/wallet.svg";
import profile from "../assets/images/svg/profile.svg";
import statistics from "../assets/images/svg/statistics.svg";

const AdminLayout = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const { userData } = useSelector((store) => store.userData);

  // get user data
  const getUserData = () => {
    axiosConfig
      .get("/User/Profile")
      .then((res) => {
        if (res.status === 200) {
          dispatch(setUserData(res.data));
          dispatch(setUserOfferLinksData(res.data.offerLinks));
        }
      })
      .finally(() => setLoader(false));
  };

  useEffect(() => {
    if (!userData) {
      setLoader(true);
      getUserData();
    }
  }, []);

  return (
    <div className="admin flex items-start grow bg-radial-gradient_blue-500 max-1024:flex-col">
      {/* sidebar  */}
      <div className="sticky left-0 inset-y-0 px-6 py-8 h-screen bg-sidebar backdrop-filter backdrop-blur-[120px] max-1024:hidden">
        <div className="flex flex-col gap-4 w-52 h-full">
          {/* logo wrapper */}
          <div className="space-y-4">
            <Link to="/" className="flex-center flex-col">
              <img
                src={logo}
                width={96}
                height={48}
                alt="logo image"
                className="w-24 h-12"
              />
            </Link>

            {/* divider */}
            <div className="sidebar-hr w-full h-0.5"></div>
          </div>

          {/* navigation */}
          <nav className="overflow-y-auto scroll_blue grow pb-5">
            <ul className="space-y-2">
              {/* 0 */}
              <li className="w-full">
                <NavLink
                  to="/admin/dashboard"
                  className="admin-sidebar-link flex-center py-3 px-4 rounded-xl gap-3 transition-colors"
                >
                  <span className="admin-sidebar-link-icon-wrapper inline-block p-1.5 rounded-xl transition-colors">
                    <img
                      src={home}
                      width={20}
                      height={20}
                      alt="homepage icon"
                      className="w-5 h-5"
                    />
                  </span>

                  {/* text */}
                  <span className="text-medium-14">Dashboard</span>
                </NavLink>
              </li>

              {/* 1 */}
              <li className="w-full">
                <NavLink
                  to="/admin/market"
                  className="admin-sidebar-link flex-center py-3 px-4 rounded-xl gap-3 transition-colors"
                >
                  <span className="admin-sidebar-link-icon-wrapper inline-block p-1.5 rounded-xl transition-colors">
                    <img
                      width={20}
                      height={20}
                      src={market}
                      alt="market icon"
                      className="w-5 h-5"
                    />
                  </span>

                  {/* text */}
                  <span className="text-medium-14">Market</span>
                </NavLink>
              </li>

              {/* 2 */}
              <li className="w-full">
                <NavLink
                  to="/admin/flow"
                  className="admin-sidebar-link flex-center py-3 px-4 rounded-xl gap-3 transition-colors"
                >
                  <span className="admin-sidebar-link-icon-wrapper inline-block p-1.5 rounded-xl transition-colors">
                    <img
                      src={link}
                      width={20}
                      height={20}
                      alt="link icon"
                      className="w-5 h-5"
                    />
                  </span>

                  {/* text */}
                  <span className="text-medium-14">Oqim</span>
                </NavLink>
              </li>

              {/* 3 */}
              <li className="w-full">
                <NavLink
                  to="/admin/statistics"
                  className="admin-sidebar-link flex-center py-3 px-4 rounded-xl gap-3 transition-colors"
                >
                  <span className="admin-sidebar-link-icon-wrapper inline-block p-1.5 rounded-xl transition-colors">
                    <img
                      width={20}
                      height={20}
                      src={statistics}
                      className="w-5 h-5"
                      alt="statistics icon"
                    />
                  </span>

                  {/* text */}
                  <span className="text-medium-14">Statistika</span>
                </NavLink>
              </li>

              {/* 4 */}
              <li className="w-full">
                <NavLink
                  to="/admin/payment"
                  className="admin-sidebar-link flex-center py-3 px-4 rounded-xl gap-3 transition-colors"
                >
                  <span className="admin-sidebar-link-icon-wrapper inline-block p-1.5 rounded-xl transition-colors">
                    <img
                      width={20}
                      height={20}
                      src={wallet}
                      alt="wallet icon"
                      className="w-5 h-5"
                    />
                  </span>

                  {/* text */}
                  <span className="text-medium-14">To'lov</span>
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* profile link */}
          <div className="w-full">
            <Link
              to="/admin/dashboard/profile"
              className="flex-center py-3 px-4 rounded-xl gap-3 bg-linear-gradient_black-800"
            >
              <span className="inline-block p-1.5 rounded-xl bg-white">
                <img
                  src={profile}
                  width={20}
                  height={20}
                  alt="profile icon"
                  className="w-5 h-5"
                />
              </span>

              {/* text */}
              <span className="text-medium-14">Profil</span>
            </Link>
          </div>
        </div>
      </div>

      {/* responsive header */}
      <div className="hidden sticky top-0 inset-x-0 z-10 w-full bg-linear-gradient_black-800 backdrop-blur-120 py-4 transition-transform duration-300 max-1024:block max-450:py-3">
        <div className="container">
          <div className="flex-center-between">
            {/* logo */}
            <Link title="mene market logo" to="/">
              <img
                width={96}
                height={48}
                src={logo}
                alt="mene market logo"
                className="w-24 h-12 max-640:w-[78px] max-640:h-10 max-375:w-[70px] max-375:h-9"
              />
            </Link>

            {/* profile link  */}
            <Link to="/admin/dashboard/profile">
              <img
                width={48}
                height={48}
                alt="user profile icon"
                src={userData && userData.image ? userData.image : user}
                className="w-12 h-12 bg-primary-gray-500 rounded-full max-640:w-10 max-640:h-10 max-375:w-9 max-375:h-9"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* main contenbt */}
      {!loader ? (
        userData ? (
          <div className="w-[calc(100%-256px)] pt-6 pb-12 max-1024:w-full">
            <div className="container">
              <Outlet />
            </div>
          </div>
        ) : (
          <>Ma'lumotlar mavjud emas!</>
        )
      ) : (
        <div className="flex-center justify-center w-full h-screen">
          <DotsLoader />
        </div>
      )}

      {/* responsive mobile navbar */}
      <div className="hidden fixed inset-x-0 bottom-0 z-10 w-full bg-linear-gradient_black-800 backdrop-blur-120 py-4 transition-transform duration-300 max-1024:block max-450:py-3">
        <div className="container">
          <nav className="w-full">
            <ul className="flex-center-between gap-1">
              {/* 0 */}
              <li className="w-full max-768:w-auto">
                <NavLink
                  to="/admin/dashboard"
                  className="admin-sidebar-link flex-center p-2 rounded-xl gap-3 transition-colors max-640:p-1 max-375:p-0"
                >
                  <span className="admin-sidebar-link-icon-wrapper inline-block p-1.5 rounded-xl transition-colors">
                    <img
                      src={home}
                      width={20}
                      height={20}
                      alt="home icon"
                      className="w-5 h-5 max-375:w-6 max-375:h-6"
                    />
                  </span>

                  {/* text */}
                  <span className="text-medium-14 max-768:hidden">
                    Dashboard
                  </span>
                </NavLink>
              </li>

              {/* 1 */}
              <li className="w-full max-768:w-auto">
                <NavLink
                  to="/admin/market"
                  className="admin-sidebar-link flex-center p-2 rounded-xl gap-3 transition-colors max-640:p-1 max-375:p-0"
                >
                  <span className="admin-sidebar-link-icon-wrapper inline-block p-1.5 rounded-xl transition-colors">
                    <img
                      src={market}
                      width={20}
                      height={20}
                      alt="market icon"
                      className="w-5 h-5 max-375:w-6 max-375:h-6"
                    />
                  </span>

                  {/* text */}
                  <span className="text-medium-14 max-768:hidden">Market</span>
                </NavLink>
              </li>

              {/* 2 */}
              <li className="w-full max-768:w-auto">
                <NavLink
                  to="/admin/flow"
                  className="admin-sidebar-link flex-center p-2 rounded-xl gap-3 transition-colors max-640:p-1 max-375:p-0"
                >
                  <span className="admin-sidebar-link-icon-wrapper inline-block p-1.5 rounded-xl transition-colors">
                    <img
                      src={link}
                      width={20}
                      height={20}
                      alt="link icon"
                      className="w-5 h-5 max-375:w-6 max-375:h-6"
                    />
                  </span>

                  {/* text */}
                  <span className="text-medium-14 max-768:hidden">Oqim</span>
                </NavLink>
              </li>

              {/* 3 */}
              <li className="w-full max-768:w-auto">
                <NavLink
                  to="/admin/statistics"
                  className="admin-sidebar-link flex-center p-2 rounded-xl gap-3 transition-colors max-640:p-1 max-375:p-0"
                >
                  <span className="admin-sidebar-link-icon-wrapper inline-block p-1.5 rounded-xl transition-colors">
                    <img
                      src={statistics}
                      width={20}
                      height={20}
                      alt="statistics icon"
                      className="w-5 h-5 max-375:w-6 max-375:h-6"
                    />
                  </span>

                  {/* text */}
                  <span className="text-medium-14 max-768:hidden">
                    Statistika
                  </span>
                </NavLink>
              </li>

              <li className="w-full max-768:w-auto">
                <NavLink
                  to="/admin/payment"
                  className="admin-sidebar-link flex-center p-2 rounded-xl gap-3 transition-colors max-640:p-1 max-375:p-0"
                >
                  <span className="admin-sidebar-link-icon-wrapper inline-block p-1.5 rounded-xl transition-colors">
                    <img
                      src={wallet}
                      width={20}
                      height={20}
                      alt="wallet icon"
                      className="w-5 h-5 max-375:w-6 max-375:h-6"
                    />
                  </span>

                  {/* text */}
                  <span className="text-medium-14 max-768:hidden">To'lov</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
