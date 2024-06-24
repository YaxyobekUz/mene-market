import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// redux
import {
  setUserData,
  setUserOfferLinksData,
} from "../store/slices/userDataSlice";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../store/slices/authDataSlice";

// images
import loginIcon from "../assets/images/svg/login.svg";
import telegramIcon from "../assets/images/svg/telegram.svg";
import logoutIcon from "../assets/images/svg/logout-solid.svg";
import profileIcon from "../assets/images/svg/profile-solid.svg";
import arrowRightIcon from "../assets/images/svg/arrow-right.svg";

const ProfileLayout = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(setLoggedIn(false));
    dispatch(setUserData(null));
    dispatch(setUserOfferLinksData([]));
    localStorage.removeItem("auth");
  };

  return (
    <div className="admin-page-body">
      <div className="flex-start gap-5 max-860:flex-col">
        {/* navigation */}
        <nav className="bg-white/5 p-5 rounded-lg shrink-0 max-860:w-full max-450:p-4">
          <ul className="w-full space-y-5 max-860:flex max-860:gap-4 max-860:space-y-0 max-860:overflow-x-auto max-860:scroll_hidden">
            <li>
              <NavLink
                end
                to="/admin/dashboard/profile"
                className="profile-page-nav-link"
              >
                {/* nav link icon */}
                <img
                  width={24}
                  height={24}
                  src={profileIcon}
                  alt="profile icon"
                />

                {/* nav link text */}
                <span>Profil</span>

                {/* arrow right */}
                <img
                  width={24}
                  height={24}
                  src={arrowRightIcon}
                  alt="arrow right icon"
                  className="arrow-right-icon max-860:hidden"
                />
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/dashboard/profile/account"
                className="profile-page-nav-link"
              >
                {/* nav link icon */}
                <img
                  width={24}
                  height={24}
                  src={loginIcon}
                  alt="login and password icon"
                />

                {/* nav link text */}
                <span>Login & parol</span>

                {/* arrow right */}
                <img
                  width={24}
                  height={24}
                  src={arrowRightIcon}
                  alt="arrow right icon"
                  className="arrow-right-icon max-860:hidden"
                />
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/dashboard/profile/connect-with-telegram"
                className="profile-page-nav-link"
              >
                {/* nav link icon */}
                <img
                  width={24}
                  height={24}
                  src={telegramIcon}
                  alt="telegram icon"
                />

                {/* nav link text */}
                <span>Telegram bilan bog’lash</span>

                {/* arrow right */}
                <img
                  width={24}
                  height={24}
                  src={arrowRightIcon}
                  alt="arrow right icon"
                  className="arrow-right-icon max-860:hidden"
                />
              </NavLink>
            </li>

            {/* log out */}
            <li>
              <NavLink
                to="/"
                onClick={logOut}
                className="profile-page-nav-link"
              >
                {/* nav link icon */}
                <img
                  width={24}
                  height={24}
                  src={logoutIcon}
                  alt="log out icon"
                />

                {/* nav link text */}
                <span>Chiqish</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* pages */}
        <div className="w-full bg-white/5 p-5 rounded-lg max-450:p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
