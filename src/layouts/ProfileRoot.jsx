import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// images
import edit from "../assets/images/svg/edit.svg";
import user from "../assets/images/other/user.jpg";
const ProfileRoot = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { userData } = useSelector((store) => store.userData);
  return (
    <div className="admin_page-body">
      <div className="flex gap-6">
        {/* sticky content */}
        <div className="flex flex-col w-72 shrink-0 border border-[#EDEDED] rounded-lg py-10 px-4">
          <div className="grow sticky top-6 space-y-10">
            <div className="flex-center flex-col gap-3">
              {/* img */}
              <div className="relative">
                <img
                  width={80}
                  height={80}
                  src={user}
                  alt="profile image"
                  className="w-20 h-20 aspect-square bg-linear-gradient_blue-500 rounded-full"
                />
                {(pathname === "/admin/profile/" ||
                  pathname === "/admin/profile") && (
                  <button
                    className="absolute -bottom-0.5 -right-0.5 bg-linear-gradient_blue-500 rounded-full border-2 border-[#a4d9ff] p-1.5"
                    aria-label="edit"
                    title="edit"
                  >
                    <img
                      width={16}
                      height={16}
                      src={edit}
                      alt="profile edit"
                      className="w-4 h-4 aspect-square"
                    />
                  </button>
                )}
              </div>
              {/* user name */}
              {userData &&
              userData.firstName.length + userData.lastName < 24 ? (
                <p className="text-semibold-20">
                  {userData && userData.firstName + " " + userData.lastName}
                </p>
              ) : (
                <marquee className="text-semibold-20 text-center line-clamp-3">
                  {userData && userData.firstName + " " + userData.lastName}
                </marquee>
              )}
              <p className="text-regular-13 text-center text-primary-gray-500">
                #{userData && userData.userId}
              </p>
            </div>

            <ul className="admin_page_profile-list space-y-3">
              <li>
                <Link
                  to="/admin/profile" 
                  className={`
                  ${
                    (pathname === "/admin/profile/" ||
                      pathname === "/admin/profile") &&
                    "active"
                  } 
                  block text-regular-16 py-2 text-primary-gray-500`}
                >
                  Profil
                </Link>
              </li>
              <li>
                <NavLink
                  to="/admin/profile/account"
                  className="block text-regular-16 py-2 text-primary-gray-500"
                >
                  Login & parol
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/profile/connect-with-telegram"
                  className="block text-regular-16 py-2 text-primary-gray-500"
                >
                  Telegram bilan bog’lash
                </NavLink>
              </li>
              <li>
                <p className="block text-regular-16 py-2 text-primary-gray-500">
                  Target uchun API
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* pages */}
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileRoot;
