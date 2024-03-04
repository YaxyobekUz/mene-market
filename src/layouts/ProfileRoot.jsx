import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

// images
import edit from "../assets/images/svg/edit.svg";
const ProfileRoot = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="admin_page-body">
      <div className="flex-start gap-6">
        {/* profile */}
        <div className="flex flex-col sticky h-auto top-6 w-[262px] shrink-0 border border-[#EDEDED] rounded-lg py-10 px-4">
          <div className="grow sticky top-6 space-y-10">
            <div className="flex-center flex-col gap-1.5">
              {/* img */}
              <div className="relative">
                <img
                  width={80}
                  height={80}
                  src=""
                  alt="profile image"
                  className="w-20 h-20 rounded-full bg-primary-gray-500 aspect-square"
                />
                <button
                  className="absolute -bottom-0.5 -right-0.5 bg-linear-gradient_blue-500 rounded-full border-2 border-white p-1.5"
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
              </div>

              {/* user name */}
              <h1 className="text-semibold-20">Yaxyobek</h1>
              <p className="text-regular-13">#125679</p>
            </div>

            <ul className="admin_page_profile-list space-y-3">
              <li>
                <NavLink
                  to="/admin/profile/account"
                  className={`${
                    (pathname === "/admin/profile/" && "active") ||
                    (pathname === "/admin/profile" && "active")
                  } block text-regular-16 py-2 text-primary-gray-500`}
                >
                  Akkaunt
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
                <NavLink
                  to="/admin/profile/api-for-target"
                  className="block text-regular-16 py-2 text-primary-gray-500"
                >
                  Target uchun API
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* form */}
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileRoot;
