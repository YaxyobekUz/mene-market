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
      <div className="flex gap-6 max-768:flex-col max-768:gap-8">
        {/* sticky content */}
        <div className="flex flex-col w-72 shrink-0 border border-[#EDEDED] rounded-lg py-10 px-4 max-768:w-full max-768:p-5">
          <div className="grow space-y-10 max-768:space-y-4">
            {/* profile */}
            <div className="flex-center flex-col gap-3 max-768:flex-row max-768:gap-6">
              {/* user image */}
              <div className="relative shrink-0">
                <img
                  width={80}
                  height={80}
                  src={user}
                  alt="profile image"
                  className="w-20 h-20 aspect-square bg-linear-gradient_blue-500 rounded-full max-640:w-16 max-640:h-16"
                />
                {(pathname === "/admin/profile/" ||
                  pathname === "/admin/profile") && (
                  <button
                    className="absolute -bottom-0.5 -right-0.5 bg-linear-gradient_blue-500 rounded-full border-2 border-[#a4d9ff] p-1.5 max-640:p-1"
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

              {/* user name wrapper */}
              <div className="space-y-3">
                <p className="text-semibold-20 text-center line-clamp-1 max-768:text-start max-768:text-medium-18">
                  {userData && userData.firstName + " " + userData.lastName}
                  Yaxyobek Xabibullayev
                </p>

                <p className="text-regular-13 text-center text-primary-gray-500 line-clamp-1 max-768:text-start">
                  #{userData && userData.userId}
                  564674-5646546367-645343463464-54343535323
                </p>
              </div>
            </div>

            {/* nav */}
            <nav className="max-768:grow max-768:overflow-x-auto scroll_hidden">
              <ul className="admin_page_profile-list space-y-3 max-768:space-y-0 max-768:grid max-768:grid-cols-3 max-768:gap-1 max-768:min-w-max">
                <li>
                  <Link
                    to="/admin/profile"
                    className={`
                  ${
                    (pathname === "/admin/profile/" ||
                      pathname === "/admin/profile") &&
                    "active"
                  } 
                  block text-regular-16 py-2 text-primary-gray-500 max-768:text-center max-450:text-regular-14`}
                  >
                    Profil
                  </Link>
                </li>
                <li>
                  <NavLink
                    to="/admin/profile/account"
                    className="block text-regular-16 py-2 text-primary-gray-500 max-768:text-center max-450:text-regular-14"
                  >
                    Login & parol
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/profile/connect-with-telegram"
                    className="block text-regular-16 py-2 text-primary-gray-500 max-768:text-center max-450:text-regular-14"
                  >
                    Telegram bilan bog’lash
                  </NavLink>
                </li>
              </ul>
            </nav>
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
