import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

// imags
import home from "../assets/images/svg/home.svg";
import market from "../assets/images/svg/market.svg";
import link from "../assets/images/svg/link.svg";
import statistics from "../assets/images/svg/statistics.svg";
import wallet from "../assets/images/svg/wallet.svg";
const AdminRoot = () => {
  return (
    <div className="admin flex items-start grow bg-radial-gradient_blue-500 text-white max-1024:flex-col">
      <Sidebar />

      {/* main */}
      <div className="w-[calc(100%-256px)] pt-6 pb-12 max-1024:w-full">
        <div className="container">
          <Outlet />
        </div>
      </div>

      {/* admin navbar mobile content (admin bottom content ) */}
      <div className="hidden fixed inset-x-0 bottom-0 w-full bg-sidebar backdrop-filter backdrop-blur-[120px] py-4 px-5 max-1024:inline-block max-768:py-2">
        {/* navigation */}
        <nav className="w-full">
          <ul className="navigation">
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
              <NavLink className="navigation_item_link" to="/admin/statistics">
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
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AdminRoot;
