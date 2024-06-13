import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../store/slices/authDataSlice";

// imags
import home from "../assets/images/svg/home.svg";
import link from "../assets/images/svg/link.svg";
import logo from "../assets/images/other/logo.png";
import wallet from "../assets/images/svg/wallet.svg";
import market from "../assets/images/svg/market.svg";
import profile from "../assets/images/svg/profile.svg";
import logoutImg from "../assets/images/svg/logout.svg";
import statistics from "../assets/images/svg/statistics.svg";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
    localStorage.removeItem("auth");
    dispatch(setLoggedIn(false));
  };
  return (
    <div className="sticky left-0 inset-y-0 px-6 py-8 h-screen w-full max-w-max bg-sidebar backdrop-filter backdrop-blur-[120px] max-1024:static max-1024:max-w-full max-1024:h-auto max-1024:py-0">
      <div className="flex flex-col justify-between w-52 h-full max-1024:hidden">
        {/* main content */}
        {/* laptop + */}
        <div className="flex flex-col h-full">
          {/* logo */}
          <Link to="/" className="flex-center flex-col mb-4">
            <img
              src={logo}
              width={96}
              height={48}
              alt="logo image"
              className="w-24 h-12"
            />
          </Link>

          {/* line (border) */}
          <hr className="sidebar-hr w-full h-0.5 mb-3" />

          {/* navigation */}
          <nav className="grow overflow-y-auto scroll_blue pb-5">
            <ul className="navigation space-y-2">
              <li className="navigation_item">
                <NavLink className="navigation_item_link" to="/admin/dashboard">
                  <span className="navigation_item_link_icon-wrapper">
                    <img
                      src={home}
                      width={20}
                      height={20}
                      alt="home icon image"
                      className="navigation_item_link_icon"
                    />
                  </span>
                  <span className="navigation_item_link_body">Dashboard</span>
                </NavLink>
              </li>
              <li className="navigation_item">
                <NavLink className="navigation_item_link" to="/admin/market">
                  <span className="navigation_item_link_icon-wrapper">
                    <img
                      src={market}
                      width={20}
                      height={20}
                      alt="market icon image"
                      className="navigation_item_link_icon"
                    />
                  </span>
                  <span className="navigation_item_link_body">Market</span>
                </NavLink>
              </li>
              <li className="navigation_item">
                <NavLink className="navigation_item_link" to="/admin/flow">
                  <span className="navigation_item_link_icon-wrapper">
                    <img
                      src={link}
                      width={20}
                      height={20}
                      alt="link icon image"
                      className="navigation_item_link_icon"
                    />
                  </span>
                  <span className="navigation_item_link_body">Oqim</span>
                </NavLink>
              </li>
              <li className="navigation_item">
                <NavLink
                  className="navigation_item_link"
                  to="/admin/statistics"
                >
                  <span className="navigation_item_link_icon-wrapper">
                    <img
                      src={statistics}
                      width={20}
                      height={20}
                      alt="statistics icon image"
                      className="navigation_item_link_icon"
                    />
                  </span>
                  <span className="navigation_item_link_body">Statistika</span>
                </NavLink>
              </li>
              <li className="navigation_item">
                <NavLink className="navigation_item_link" to="/admin/payment">
                  <span className="navigation_item_link_icon-wrapper">
                    <img
                      src={wallet}
                      width={20}
                      height={20}
                      alt="wallet icon image"
                      className="navigation_item_link_icon"
                    />
                  </span>
                  <span className="navigation_item_link_body">To'lov</span>
                </NavLink>
              </li>
              <li className="navigation_item">
                <NavLink
                  className="navigation_item_link"
                  to="/admin/dashboard/profile"
                >
                  <span className="navigation_item_link_icon-wrapper">
                    <img
                      src={profile}
                      width={20}
                      height={20}
                      alt="profile icon image"
                      className="navigation_item_link_icon"
                    />
                  </span>
                  <span className="navigation_item_link_body">Profil</span>
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* log out */}
          <button onClick={logout} className="navigation_item_link">
            <span className="navigation_item_link_icon-wrapper">
              <img
                src={logoutImg}
                width={20}
                height={20}
                alt="logout icon image"
                className="navigation_item_link_icon"
              />
            </span>
            <span className="navigation_item_link_body">Chiqish</span>
          </button>
        </div>
      </div>

      {/* sidebar tablet & mobile content */}
      <div className="hidden py-3 max-1024:flex-center-between">
        {/* logo */}
        <Link to="/" className="flex-center flex-col">
          <img
            src={logo}
            width={96}
            height={48}
            alt="logo image"
            className="w-24 h-12"
          />
        </Link>

        {/* profile page link  */}
        <NavLink
          className="navigation_item_link  max-640:!p-0 max-640:!bg-transparent"
          to="/admin/dashboard/profile"
        >
          <span className="navigation_item_link_icon-wrapper  max-640:!p-0 max-640:!bg-transparent">
            <img
              src={profile}
              width={20}
              height={20}
              alt="profile icon image"
              className="navigation_item_link_icon  max-640:w-9 max-640:h-9"
            />
          </span>
          <span className="navigation_item_link_body">Profil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
