import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

// for auth
import { useDispatch } from "react-redux";
import { notLoggedIn } from "../store/slices/productBasketSlice";

// imags
import logo from "../assets/images/other/logo.png";
import home from "../assets/images/svg/home.svg";
import market from "../assets/images/svg/market.svg";
import link from "../assets/images/svg/link.svg";
import statistics from "../assets/images/svg/statistics.svg";
import wallet from "../assets/images/svg/wallet.svg";
import profile from "../assets/images/svg/profile.svg";
import logoutImg from "../assets/images/svg/logout.svg";
const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
      localStorage.removeItem("user");
      navigate("/");
      dispatch(notLoggedIn());
      window.location.reload();
  };
  return (
    <div className="sticky left-0 top-0 bottom-0 px-6 py-8 h-screen max-w-max bg-sidebar backdrop-filter backdrop-blur-[120px]">
      <div className="flex flex-col justify-between w-52 h-full">
        {/* main content */}
        <div className="flex flex-col h-full">
          {/* logo */}
          <Link to="/" className="flex-center flex-col">
            <img
              src={logo}
              width={96}
              height={48}
              alt="logo image"
              className="w-24 h-12 mb-4"
            />
          </Link>

          {/* line */}
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
                <NavLink className="navigation_item_link" to="/admin/profile">
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
    </div>
  );
};

export default Sidebar;
