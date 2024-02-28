import React from "react";
import { Link } from "react-router-dom";

// images
import arrowLeft from "../assets/images/svg/arrow-left.svg";
import search from "../assets/images/svg/search-icon-white.svg";
import plus from "../assets/images/svg/plus-icon.svg";
const Appeals = () => {
  return (
    <div className="w-full">
      {/* header */}
      <div className="admin_page-header">
        <Link to="/admin">
          <img
            width={24}
            height={24}
            src={arrowLeft}
            alt="arrow left icon image"
            className="w-6 h-6"
          />
        </Link>
        <h1>Murojaatlar</h1>
      </div>

      {/* body */}
      <div className="w-full admin_page-body">
        {/* body header */}
        <div className="flex-center-between gap-5 mb-6">
          <div className="flex gap-6 w-full">
            <button className="flex-center gap-2.5 text-regular-16 text-[#C4C5C4] py-2 px-4 border border-white rounded-lg">
              <span>Murojaat qilish</span>
              <img
                width={24}
                height={24}
                src={plus}
                alt="plus icon"
                className="w-6 h-6"
              />
            </button>

            <div className="admin_page-body_input-wrapper">
              <input
                placeholder="Qidirish"
                type="text"
                className="admin_page-body_input"
              />
              <img
                width={24}
                height={24}
                src={search}
                alt="search icon"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>

        {/* list */}
        <ul className="space-y-4">
          <li className="flex-center-between gap-5">
            <div className="flex-center gap-6">
              <p className="text-regular-16">#2126</p>
              <div>
                <h3 className="text-regular-16">Ilova ishlashiga oid</h3>
                <p className="text-regular-14 text-[#C4C5C4]">
                  26-03-2024, 13 : 45
                </p>
              </div>
            </div>
            <div className="btn-danger">Yopiq</div>
          </li>
          <li className="flex-center-between gap-5">
            <div className="flex-center gap-6">
              <p className="text-regular-16">#2126</p>
              <div>
                <h3 className="text-regular-16">Ilova ishlashiga oid</h3>
                <p className="text-regular-14 text-[#C4C5C4]">
                  26-03-2024, 13 : 45
                </p>
              </div>
            </div>
            <div className="btn-success ">Ochiq</div>
          </li>
          <li className="flex-center-between gap-5">
            <div className="flex-center gap-6">
              <p className="text-regular-16">#2126</p>
              <div>
                <h3 className="text-regular-16">Ilova ishlashiga oid</h3>
                <p className="text-regular-14 text-[#C4C5C4]">
                  26-03-2024, 13 : 45
                </p>
              </div>
            </div>
            <div className="btn-success ">Ochiq</div>
          </li>
          <li className="flex-center-between gap-5">
            <div className="flex-center gap-6">
              <p className="text-regular-16">#2126</p>
              <div>
                <h3 className="text-regular-16">Ilova ishlashiga oid</h3>
                <p className="text-regular-14 text-[#C4C5C4]">
                  26-03-2024, 13 : 45
                </p>
              </div>
            </div>
            <div className="btn-danger">Yopiq</div>
          </li>
          <li className="flex-center-between gap-5">
            <div className="flex-center gap-6">
              <p className="text-regular-16">#2126</p>
              <div>
                <h3 className="text-regular-16">Ilova ishlashiga oid</h3>
                <p className="text-regular-14 text-[#C4C5C4]">
                  26-03-2024, 13 : 45
                </p>
              </div>
            </div>
            <div className="btn-success ">Ochiq</div>
          </li>
          <li className="flex-center-between gap-5">
            <div className="flex-center gap-6">
              <p className="text-regular-16">#2126</p>
              <div>
                <h3 className="text-regular-16">Ilova ishlashiga oid</h3>
                <p className="text-regular-14 text-[#C4C5C4]">
                  26-03-2024, 13 : 45
                </p>
              </div>
            </div>
            <div className="btn-danger">Yopiq</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Appeals;
